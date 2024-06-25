<footer itemscope itemtype="http://schema.org/WPFooter" class="footer">
	<div class="footer-menu-container">
		<div class="footer-left">
			<a class="logo" href="<?php echo get_bloginfo('url'); ?>">
				<img class="logo-icon" src="<?= the_field('logo', 'option'); ?>" alt="Footer Logo">
			</a>
			<p class="footer-text"><?= the_field('website_info', 'option'); ?></p>
		</div>
		<nav class="footer-rigth">

			<ul class="footer-menu-inner">
				<?php dynamic_sidebar('footer-sidebar-1'); ?>

			</ul>
			<ul class="footer-menu-inner">
				<?php dynamic_sidebar('footer-sidebar-2'); ?>


			</ul>
			<ul class="footer-menu-inner">
				<?php dynamic_sidebar('footer-sidebar-3'); ?>

			</ul>
		</nav>
	</div>
	<div class="footer-end-inner">
		<ul class="footer-end-intro">
			<p class="site-info"><span class="site-info-symbol">©</span> <?php echo date('Y'); ?>
				<?php echo bloginfo('name'); ?>. All rights reserved.
			</p>
			<?php
			$flinks = get_field('links', 'option');
			if ($flinks): ?>

				<?php foreach ($flinks as $flink):
					$permalink = get_permalink($flink->ID);
					$title = get_the_title($flink->ID);

					?>
					<li class="footer-end-intro-list">
						<a class="footer-end-intro-link"
							href="<?php echo esc_url($permalink); ?>"><?php echo esc_html($title); ?></a>
					</li>

				<?php endforeach;
				wp_reset_postdata();
				?>
			<?php endif; ?>
		</ul>
	</div>
</footer>

<div class="preloader">
	<!-- <video class="preloader-video" src="<?php echo get_template_directory_uri(); ?>/video/Preloader\ animation.gif"
		type="video/mp4" autoplay="" loop="" playsinline="" webkit-playsinline="" muted=""></video> -->
		<img src="https://sappo.am/oockyghi/2024/06/Preloader-animation.gif" alt="">
</div>

<div class="popup-mail">
	<div class="popup-inner">
		<div class="popup-intro">
			<p class="popup-title"></p>
			<p class="popup-subtitle"></p>
			<button class="go-back"></button>
		</div>
	</div>
</div>

</main>
<?php wp_footer(); ?>
</body>

</html>