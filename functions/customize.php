<?php
function set_language_based_on_ip() {
    global $sitepress;
    // Get user's IP address
    $user_ip = $_SERVER['REMOTE_ADDR'];

    // API details
    $api_key = 'C0629816B2FC850A239B857049550074';
    $api_url = "https://api.ip2location.io/?key=$api_key&ip=$user_ip";

    // Make API request
    $response = wp_remote_get($api_url);

    if (!is_wp_error($response)) {
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);

        // Extract country code
        $country_code = isset($data['country_code']) ? $data['country_code'] : '';

        // Determine language code based on country code
        switch ($country_code) {
            case 'AM':
                $language_code = "hy"; // Armenian language code in WPML
                break;
            case 'RU':
                $language_code = "ru"; // Russian language code in WPML
                break;
            default:
                $language_code = "en"; // Default language code if country not matched
                break;
        }

  if (!isset($_COOKIE['wp-wpml_user_language'])) {
            $sitepress->switch_lang($language_code, true);
        }
	   setcookie('wp-wpml_user_language', $language_code, time() + 86400, '/'); 
 }
       
    }


add_action('init', 'set_language_based_on_ip'); 
add_action('wp_loaded', 'set_language_based_on_ip');

/** change tinymce's paste-as-text functionality */
function paste_as_text($mceInit, $editor_id)
{
	//turn on paste_as_text by default
	//NB this has no effect on the browser's right-click context menu's paste!
	$mceInit["paste_as_text"] = true;
	return $mceInit;
}
add_filter("tiny_mce_before_init", "paste_as_text", 1, 2);
add_filter('acf/admin/prevent_escaped_html_notice', '__return_true');
/** Set the Attachment Display Settings, This function is attached to the 'after_setup_theme' action hook. */
function default_attachment_display_setting()
{
	update_option("image_default_align", "left");
	update_option("image_default_link_type", "none");
	update_option("image_default_size", "large");
}
add_action("after_setup_theme", "default_attachment_display_setting");
function custom_theme_setup()
{
	load_theme_textdomain('pixel', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'custom_theme_setup');
// CUSTOM MENUS
function custom_menus()
{
	register_nav_menus(
		[
			"primary-menu" => __("Primary Menu"),
			"secondary-menu" => __("Secondary Menu"),
			"footer-menu" => __("Footer Menu"),
			"footer-menu-services" => __("Footer Menu Services", "pixel"),
			"footer-menu-about"    => __("Footer Menu About", "pixel"),
			"footer-menu-social"   => __("Footer Menu Social", "pixel"),
		]
	);
}
add_action("init", "custom_menus");

function custom_theme_widgets_init()
{
	register_sidebar(array(
		'name'          => __('Footer Column 1', 'custom-theme'),
		'id'            => 'footer-sidebar-1',
		'description'   => __('Widgets in this area will be shown in the first column of the footer.', 'custom-theme'),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	));
	register_sidebar(array(
		'name'          => __('Footer Column 2', 'custom-theme'),
		'id'            => 'footer-sidebar-2',
		'description'   => __('Widgets in this area will be shown in the first column of the footer.', 'custom-theme'),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	));

	register_sidebar(array(
		'name'          => __('Footer Column 3', 'custom-theme'),
		'id'            => 'footer-sidebar-3',
		'description'   => __('Widgets in this area will be shown in the first column of the footer.', 'custom-theme'),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	));

	// Register more sidebars if needed (for column 2 and 3)
}
add_action('widgets_init', 'custom_theme_widgets_init');
// Add the custom columns to the Services post type:
// add_filter( 'manage_cpt_services_posts_columns', 'set_custom_edit_cpt_services_columns' );
// function set_custom_edit_cpt_services_columns($columns) {
//     $columns['featured'] = __( 'Featured', 'your_text_domain' );
//     return $columns;
// }

// Add the data to the custom columns for the book post type:
// add_action( 'manage_cpt_services_posts_custom_column' , 'custom_cpt_services_column', 10, 2 );
// function custom_cpt_services_column( $column, $post_id ) {
// 	$column_field = 'make_this_service_featured';
//     switch ( $column ) {
// 		case 'featured' : 
// 			$post_meta = get_field($column_field,$post_id);
// 			if ($post_meta) {
// 				echo "Yes";
// 			}else {
// 				echo "No";
// 			}
// 		break;

//     }
// }


// Get Formidable Forms in a ACF filed
// function acf_load_color_field_choices( $field ) {
// 	global $wpdb;
// 	$forms = $wpdb->get_results('SELECT * FROM wp_frm_forms WHERE status="published"');
// 	$ids = array();
// 	$values = array();
// 	$i=0;
// 	if ( $forms != NULL ) {
// 		foreach($forms as $form){
// 			$ids[$i] = $form->id;
// 			$values[$i] = $form->name;
// 			$i++;
// 		}
// 		$form_assoc = array_combine($ids, $values);
// 		if( is_array($form_assoc) ){
// 			foreach( $form_assoc as $key=>$match ){
// 					$field["choices"][ $key ] = $match;
// 			}
// 		}
// 		// return the field
// 		return $field;
// 	} else {
// 		return false;
// 	}

// }

// Enter the fild key below
// add_filter("acf/load_field/key=field_5ce6e312e7c38", "acf_load_color_field_choices");



// create an ID from a user entered string and removing any unwanted symbols
function create_id($string)
{
	$new_id = preg_replace('/[^a-zA-Z]/', '', $string);
	$new_id = strtolower(str_replace(" ", "", $new_id));
	return $new_id;
}

function post_back_link()
{
	if (wp_get_referer()) {
		$prev_url = $_SERVER['HTTP_REFERER'];
		return "<a href='" . $prev_url . "' class='back-link'><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' focusable='false' style='-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);' preserveAspectRatio='xMidYMid meet' viewBox='0 0 512 512'><path d='M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z'></path><rect x='0' y='0' width='512' height='512' fill='rgba(0, 0, 0, 0)'></rect></svg></a>";
	}
}
class Custom_Menu_Walker extends Walker_Nav_Menu
{
	// Start Level
	function start_lvl(&$output, $depth = 0, $args = null)
	{
		// Add your custom class here
		$class = ($depth === 0) ? 'dropdown-menu-inner' : 'dropdown-menu-inner';
		$output .= '<ul class="' . esc_attr($class) . '">';
	}

	// Start Element
	function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
	{
		// Add your custom class here

		if ($depth === 0 && $args->walker->has_children) {
			$class = 'menu-list dropdown';
		} elseif ($depth === 0) {
			$class = 	'menu-list';
		} else {
			$class = 	'dropdown-menu-item';
		}
		$output .= '<li class="' . esc_attr($class) . '">';



		// Add dropdown toggle if item has children
		if ($depth === 0 && $args->walker->has_children) {
			$output .= '<a class="menu-link dropdown-toggle" href="' . esc_url($item->url) . '" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">';
			$output .= esc_html($item->title);
		} elseif ($depth === 0) {
			$output .= '<a class="menu-link" href="' . esc_url($item->url) . '">';
			$output .= esc_html($item->title);
		} else {
			$icon_url = get_field('icon', $item);
			$desc = get_field('description', $item);
			$output .= '<a class="submenu-card-link" href="' . esc_url($item->url) . '">';
			$output .= '<img class="dropdown-menu-item-img" src="' . $icon_url . '" alt="">';
			$output .= '<div class="dropdown-menu-item-text-inner">
				<p class="dropdown-menu-item-title">';
			$output .= esc_html($item->title);
			$output .= '</p>';
			$output .= $desc;
			$output .= '</div>';
		}
		$output .= '</a>';
		if ($depth === 0 && $args->walker->has_children) {
			$output .= '<span class="dropdown-icon">
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
			<path class="dropdown-icon-fill" fill-rule="evenodd" clip-rule="evenodd" d="M7.39819 7.66341C7.17851 7.88308 6.82241 7.88308 6.60274 7.66341L0.867876 1.92853C0.648208 1.70886 0.648208 1.35276 0.867876 1.13308L1.13305 0.867881C1.35271 0.648206 1.70887 0.648206 1.92854 0.867881L7.00046 5.93983L12.0724 0.867881C12.2921 0.648206 12.6482 0.648206 12.8679 0.867881L13.1331 1.13308C13.3527 1.35276 13.3527 1.70886 13.1331 1.92853L7.39819 7.66341Z" fill="white" />
		</svg>
	</span>';
			$output .= '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">';
		}
	}

	// End Element
	function end_el(&$output, $item, $depth = 0, $args = null)
	{
		if ($depth === 0 && $args->walker->has_children) {

			$output .= '</div>';
		}
		$output .= '</li>';
	}

	// End Level
	function end_lvl(&$output, $depth = 0, $args = null)
	{
		$output .= '</ul>';
	}
}


class Custom_FMenu_Walker extends Walker_Nav_Menu
{
	// Start Level
	function start_lvl(&$output, $depth = 0, $args = null)
	{
		$output .= '<ul class="terms-privacy-cookies">';
	}

	// Start Element
	function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
	{
		$output .= '<li class="terms-privacy-cookies-list">';

		$item_output = sprintf(
			'<a class="terms-privacy-cookies-link" href="%s">%s</a>',
			esc_url($item->url),
			esc_html($item->title)
		);

		$output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
	}

	// End Element
	function end_el(&$output, $item, $depth = 0, $args = null)
	{
		$output .= '</li>';
	}

	// End Level
	function end_lvl(&$output, $depth = 0, $args = null)
	{
		$output .= '</ul>';
	}
}

function send_email_ajax_handler()
{
	// Check if the request came via AJAX
	if (isset($_POST['action']) && $_POST['action'] == 'send_email') {
		// Retrieve form data
		$service = sanitize_text_field($_POST['service']);
		$fullName = sanitize_text_field($_POST['fullName']);
		$email = sanitize_email($_POST['email']);
		$phoneNumber = sanitize_text_field($_POST['phoneNumber']);
		$message = sanitize_textarea_field($_POST['message']);
		$checkedServices = array_map('sanitize_text_field', $_POST['checkedServices']);

		// Compose email message
		$to = get_option('admin_email');
		$subject = 'New Quote Request';
		$body = "Full Name: $fullName\n";
		$body .= "Email: $email\n";
		$body .= "Phone Number: $phoneNumber\n";
		$body .= "Message: $message\n";
		$body .= "Services:\n";
		foreach ($checkedServices as $checkedService) {
			$body .= "- $checkedService\n";
		}

		// Send email
		$sent = wp_mail($to, $subject, $body);

		// Check if email was sent successfully
		if ($sent) {
			echo 'success';
		} else {
			echo 'error';
		}

		// Always exit to avoid further execution
		wp_die();
	}
}
add_action('wp_ajax_send_email', 'send_email_ajax_handler');
add_action('wp_ajax_nopriv_send_email', 'send_email_ajax_handler');
