<?php get_header(); ?>
<section class="secureity-hero" id="secureity">
	<div class="title-text-inner">
		<?php
		if (have_posts()) :
			while (have_posts()) :
				the_post(); ?>
				<div class="container">
					<h1><?php the_title(); ?></h1>
				</div>
				<?php if (get_field('subtitle')) : ?>
					<h2><?= the_field('subtitle'); ?></h2>
				<?php endif; ?>
				<div class="title-subtitle-intro">
					<?php the_content(); ?>
				</div>
		<?php
			endwhile;
		endif; ?>
	</div>
	<div class="secureity-hero-img">
		<?php
		$featured_image_url = get_the_post_thumbnail_url(get_the_ID(), 'full'); // 'full' for full size, change as needed
		?>
		<img class="secureity-hero-photo" src="<?php echo esc_url($featured_image_url); ?>" alt="">
	</div>
</section>
<?php get_footer(); ?>