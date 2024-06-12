<?php
function enqueue_assets()
{


	// wp_enqueue_style("bootstrap-style", "//cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css", [], "", "all"); 
	// wp_style_add_data( 'bootstrap-style', array( 'integrity', 'crossorigin' ) , array( 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC', 'anonymous' ) );
	// wp_enqueue_style("intel-input", "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/css/intlTelInput.css", [], "", "all");
	// wp_style_add_data( 'font-awesome-5', array( 'integrity', 'crossorigin' ) , array( 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU', 'anonymous' ) );



	wp_enqueue_style("stylecss", get_stylesheet_uri());

	wp_enqueue_script("jquery");

	// wp_enqueue_style('owl-carousel-css', '//cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css','','',false);
	// wp_enqueue_script('owl-carousel-js', '//cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', '', '', true);

	//wp_enqueue_style('aos-animation-css', '//unpkg.com/aos@2.3.1/dist/aos.css','','',false);
	//wp_enqueue_script('aos-animation-cjs', '//unpkg.com/aos@2.3.1/dist/aos.js', '', '', true);

	//wp_enqueue_script("jquery-js", "//code.jquery.com/jquery-3.3.1.slim.min.js", "", "", true);
	//wp_script_add_data( 'jquery-js', array( 'integrity', 'crossorigin' ) , array( 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo', 'anonymous' ) );
	// wp_enqueue_script("bootstrap-5", "//cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", "", "", true);
	// wp_script_add_data( 'bootstrap-5', array( 'integrity', 'crossorigin' ) , array( 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM', 'anonymous' ) );

	wp_enqueue_script("jquery", get_template_directory_uri() . "/js/jQuery.js", "", "", true);
	wp_enqueue_script("dataAos", get_template_directory_uri() . "/js/data-aos.js", "", "", true);
	wp_enqueue_script("gsap", get_template_directory_uri() . "/js/GSAP.js", "", "", true);
	wp_enqueue_script("scrolltrigger", get_template_directory_uri() . "/js/ScrollTrigger.js", "", "", true);
	// wp_enqueue_script("splittext", get_template_directory_uri() . "/js/SplitText.js", "", "", true);
	wp_enqueue_script("swiper", get_template_directory_uri() . "/js/Swiper.js", "", "", true);
	wp_enqueue_script("script-js", get_template_directory_uri() . "/js/script.js", "", "", true);
	// if (is_front_page()) {
	// 	wp_enqueue_script("home-js", get_template_directory_uri() . "/js/page/home.js", "", "", true);
	// }
	// if (is_page()) {
	// 	$page_template = get_page_template_slug(get_the_ID());
	// 	if ($page_template == 'page-certificates.php') {
	// 		wp_enqueue_script("cert-js", get_template_directory_uri() . "/js/page/certificate.js", "", "", true);
	// 	}
	// 	if ($page_template == 'page-about.php') {
	// 		wp_enqueue_script("about-js", get_template_directory_uri() . "/js/page/about.js", "", "", true);
	// 	}
	// 	if ($page_template == 'page-services.php') {
	// 		wp_enqueue_script("service-js", get_template_directory_uri() . "/js/page/service.js", "", "", true);
	// 	}
	// 	if ($page_template == 'page-line.php') {
	// 		wp_enqueue_script("line-js", get_template_directory_uri() . "/js/page/single-service-aircraft.js", "", "", true);
	// 	}
	// 	if ($page_template == 'page-aog.php') {
	// 		wp_enqueue_script("aog-js", get_template_directory_uri() . "/js/page/single-service-aog-maintenance.js", "", "", true);
	// 	}
	// 	if ($page_template == 'page-battery.php') {
	// 		wp_enqueue_script("battery-js", get_template_directory_uri() . "/js/page/single-service-aircraft-battery.js", "", "", true);
	// 	}
	// 	if ($page_template == 'page-wheel.php') {
	// 		wp_enqueue_script("wheel-js", get_template_directory_uri() . "/js/page/single-service-aircraft-wheel.js", "", "", true);
	// 	}
	// 	if ($page_template == 'page-detailing.php') {
	// 		wp_enqueue_script("detailing-js", get_template_directory_uri() . "/js/page/single-service-aircraft-detailing.js", "", "", true);
	// 	}
	// 	if ($page_template == 'page-borescope.php') {
	// 		wp_enqueue_script("borescope-js", get_template_directory_uri() . "/js/page/single-service-borescope.js", "", "", true);
	// 	}
	// 	if ($page_template == 'page-ndt.php') {
	// 		wp_enqueue_script("ndt-js", get_template_directory_uri() . "/js/page/single-service-aircraft-ndt.js", "", "", true);
	// 	}
	// }
	wp_localize_script('jquery', 'wp_var', array(
		'ajax_url' => admin_url('admin-ajax.php')
	));

	wp_enqueue_script("functions-js", get_template_directory_uri() . "/js/functions.js", "", "", true);
}
add_action("wp_enqueue_scripts", "enqueue_assets");
