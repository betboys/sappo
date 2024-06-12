<?php get_header(); ?>
<section class="page-hero" id="home">

		<img class="hero-video" src="<?= the_field('video_poster'); ?>" alt="">
	<div class="hero-heading-text-inner">
		<h1 class="heading" data-aos="fade-up"><?= the_field('title'); ?></h1>
		<h2 class="subtitle hero-subtitle"><?= the_field('description'); ?> </h2>
		<?php if (get_field('button')): ?>
			<a class="link-style" href="<?= get_field('button')['url']; ?>"><?= get_field('button')['title']; ?></a>
		<?php endif; ?>

	</div>
</section>

<section class="redefining-security">
	<article class="left-intro">
		<h3 class="headingN2 headingN2-home" data-aos="fade-up"><?= the_field('left_text'); ?></h3>
	</article>
	<article class="rigth-intro">
		<p class="subtitle rigth-intro-subtitle"><?= the_field('right_text'); ?></p>
		<?php if (get_field('right_link')): ?>

			<a class="rigth-intro-link" href="<?= get_field('right_link')['url']; ?>">
				<?= get_field('right_link')['title']; ?>
				<span class="line-icon">
					<svg class="line-icon-svg" xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 14 8"
						fill="none">
						<path class="line-icon-svg-path" fill-rule="evenodd" clip-rule="evenodd"
							d="M7.39819 7.66341C7.17851 7.88308 6.82241 7.88308 6.60274 7.66341L0.867876 1.92853C0.648208 1.70886 0.648208 1.35276 0.867876 1.13308L1.13305 0.867881C1.35271 0.648206 1.70887 0.648206 1.92854 0.867881L7.00046 5.93983L12.0724 0.867881C12.2921 0.648206 12.6482 0.648206 12.8679 0.867881L13.1331 1.13308C13.3527 1.35276 13.3527 1.70886 13.1331 1.92853L7.39819 7.66341Z"
							fill="white" />
					</svg>
				</span>
			</a>
		<?php endif; ?>

	</article>
</section>

<section class="our-service-cards">
	<div class="cards-wrapper home-cards-wrapper">
		<?php

		$featured_posts = get_field('services');
		if ($featured_posts): ?>

			<?php foreach ($featured_posts as $post):
				setup_postdata($post);
				// Load sub field value.
				$card_title = get_field('card_title', get_the_ID());
				$card_image = get_field('card_image', get_the_ID());
				$card_description = get_field('card_description', get_the_ID());
				// Do something, but make sure you escape the value if outputting directly... 
				?>
				<div class="card">
					<a class="card-link-mobile" href="<?php the_permalink(); ?>"></a>
					<img class="card-image" src="<?= $card_image['url']; ?>" alt="">
					<p class="card-title"><?= $card_title ?></p>
					<div class="card-hover-visitble">
						<p class="card-title-hover"></p>
						<div class="card-info-inner">
							<?= $card_description ?>

							<a class="card-link" href="<?php the_permalink(); ?>">
								<svg xmlns="http://www.w3.org/2000/svg" width="77" height="75" viewBox="0 0 77 75" fill="none">
									<path class="card-link-icon" d="M8 7.71094L37.5 36.2109L67 64.7109" stroke="white"
										stroke-width="10" stroke-linecap="square" stroke-linejoin="round" />
									<path class="card-link-icon" d="M71.5 7.71094V69.2109H8" stroke="white" stroke-width="10" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			<?php endforeach; ?>

			<?php
			// Reset the global post object so that the rest of the page works correctly.
			wp_reset_postdata(); ?>

		<?php endif; ?>
	</div>
</section>

<section class="gallery">
	<ul class="text-wrapper-ul">
		<li class="text-wrapper-list text-wrapper-list-first"><?= the_field('animation_text') ?></li>
		<li class="text-wrapper-list text-wrapper-list-last"><?= the_field('animation_text_2') ?></li>
	</ul>
	<div class="gallery-container">
		<div class="gallery-text-and-buttons">
			<h3 class="gallery-text" data-aos="fade-up"><?= the_field('gallery_title') ?></h3>
			<div class="pagination-container">
				<button class="pagination-button" id="prev-button" aria-label="Previous page" title="Previous page">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
						<path class="prev-button-path"
							d="M25.055 17.3334H10.1616L16.6683 23.84C17.1883 24.36 17.1883 25.2134 16.6683 25.7334C16.1483 26.2534 15.3083 26.2534 14.7883 25.7334L6.00164 16.9467C5.48164 16.4267 5.48164 15.5867 6.00164 15.0667L14.775 6.26671C15.295 5.74671 16.135 5.74671 16.655 6.26671C17.175 6.78671 17.175 7.62671 16.655 8.14671L10.1616 14.6667H25.055C25.7883 14.6667 26.3883 15.2667 26.3883 16C26.3883 16.7334 25.7883 17.3334 25.055 17.3334Z"
							fill="#101011" />
					</svg>
				</button>
				<p id="pagination-numbers">
					<span class="one" data-page=""></span> /
					<span class="two" data-page=""></span>
				</p>
				<button class="pagination-button" id="next-button" aria-label="Next page" title="Next page" data-num="">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
						<path class="next-button-path"
							d="M6.94503 17.3334H21.8384L15.3317 23.84C14.8117 24.36 14.8117 25.2134 15.3317 25.7334C15.8517 26.2534 16.6917 26.2534 17.2117 25.7334L25.9984 16.9467C26.5184 16.4267 26.5184 15.5867 25.9984 15.0667L17.225 6.26671C16.705 5.74671 15.865 5.74671 15.345 6.26671C14.825 6.78671 14.825 7.62671 15.345 8.14671L21.8384 14.6667H6.94503C6.21169 14.6667 5.61169 15.2667 5.61169 16C5.61169 16.7334 6.21169 17.3334 6.94503 17.3334Z"
							fill="#101011" />
					</svg>
				</button>
			</div>
		</div>
		<div id="paginated-list" data-current-page="1" aria-live="polite">
			<div class="gallery-flex-inner">
				<?php
				$images = get_field('gallery');
				$size = 'full'; // (thumbnail, medium, large, full or custom size)
				if ($images): ?>
					<?php foreach ($images as $image_id): ?>
						<div class="gallery-photo-intro">
							<img class="gallery-photo" src="<?php echo wp_get_attachment_image_url($image_id, $size); ?>"
								alt="">
						</div>
					<?php endforeach;

					wp_reset_postdata(); ?>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>

<section class="sappo-security-service">
	<img class="sappo-security-service-image" src="<?= the_field('back_image') ?>" alt="">
		<h3 class="sappo-security-service-text" data-aos="fade-up"><?= the_field('banner_text') ?></h3>
</section>



<?php get_template_part('templates/partners'); ?>
<?php get_template_part('templates/faq'); ?>

<?php get_template_part('templates/contact'); ?>

<?php get_footer(); ?>