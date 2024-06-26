<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
	<title><?php echo wp_get_document_title(); ?></title>
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<link rel="icon" type="image/png" sizes="32x32" href="https://sappo.am/oockyghi/2024/06/fav-icon-1.svg">
	<link rel="icon" type="image/png" sizes="96x96" href="https://sappo.am/oockyghi/2024/06/fav-icon-1.svg">
	<link rel="icon" type="image/png" sizes="16x16" href="https://sappo.am/oockyghi/2024/06/fav-icon-1.svg">
	<!-- Generate favicon here http://www.favicon-generator.org/ -->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<main class="main">
		<div class="close-header-after"></div>
		<header class="header">
			<a class="logo" href="<?php echo get_bloginfo('url'); ?>">
				<img class="logo-icon" src="<?= the_field('logo', 'option'); ?>" alt="Sappo Logo">
			</a>
			<button class="burger-menu-open">
				<div class="lineN1"></div>
				<div class="lineN3"></div>
				<div class="lineN2"></div>
			</button>
			<nav class="navigation">



				<?php
				wp_nav_menu([
					'theme_location' => 'primary-menu',
					'menu_class' => 'menu-inner',
					'container' => 'ul',
					'container_class' => 'menu-inner',
					'walker' => new Custom_Menu_Walker(),

				]);

				do_action('wpml_add_language_selector');
				?>


			</nav>
		</header>