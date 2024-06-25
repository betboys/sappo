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


<script>
	function handleResize() {
		const windowWidth = window.innerWidth;
		const dropdownMenu = document.querySelector(".dropdown-menu");
		const header = document.querySelector(".header");
		const servicesMenu = document.querySelector(".services-menu");
		const dropdownToggle = document.querySelector(".dropdown-toggle");
		const burgerMenuOpen = document.querySelector(".burger-menu-open");

		function enableHover() {
			servicesMenu.classList.add("hover-enabled");
		}

		function disableHover() {
			servicesMenu.classList.remove("hover-enabled");
		}

		if (windowWidth < 1321) {
			disableHover();

			// Add event listeners for click on smaller screens
			dropdownToggle.addEventListener("click", function () {
				if (dropdownMenu.style.height !== "max-content") {
					dropdownMenu.classList.add("dropdown-expanded");
					dropdownMenu.classList.remove("dropdown-collapsed");
				} else {
					dropdownMenu.classList.add("dropdown-collapsed");
					dropdownMenu.classList.remove("dropdown-expanded");
				}
			});

			burgerMenuOpen.addEventListener("click", function () {
				if (header.style.height !== "100vh") {
					document.body.classList.add("no-scroll");
					header.classList.add("expanded-header");
					header.classList.remove("collapsed-header");
				} else {
					document.body.classList.remove("no-scroll");
					header.classList.add("collapsed-header");
					header.classList.remove("expanded-header");
				}
			});

		} else {
			enableHover();
		}
	}

	window.addEventListener("resize", handleResize);
	document.addEventListener("DOMContentLoaded", handleResize);
</script>

</body>

</html>