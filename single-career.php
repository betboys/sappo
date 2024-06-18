<?php get_header(); ?>

<section class="career-single-hero postid-584" id="career-single">
    <div class="title-text-inner">
        <h1 class="career-single-heading" data-aos="fade-up"><?php the_title(); ?></h1>
        <ul class="location-time-single">
            <li class="location-time-list-single">
                <img class="location-time-img" src="<?php echo get_template_directory_uri(); ?>/images/location.svg"
                    alt="">
                <?= the_field('location'); ?>
            </li>
            <li class="location-time-list-single">
                <img class="location-time-img" src="<?php echo get_template_directory_uri(); ?>/images/watch.svg"
                    alt="">
                <?= the_field('job_type'); ?>
            </li>
        </ul>
        <div class="title-subtitle-intro">

            <?php the_content(); ?>
        </div>
    </div>
    <div class="career-single-hero-img-inner">
        <img class="career-single-hero-img"
            src="<?php echo get_template_directory_uri(); ?>/images/career-single-hero-img.webp" alt="">
    </div>
</section>

<section class="interested">
    <div class="interested-title-subtitle">
        <h3 class="interested-title" data-aos="fade-up"><?= the_field('career_form_title', 'option'); ?></h3>
        <div class="interested-subtitle"><?= the_field('career_form_description', 'option'); ?></div>
    </div>
    <button class="interested-form" disabled="true">
        <?php echo do_shortcode('[contact-form-7 id="a7a071b" title="Career form"]'); ?>
    </button>
</section>

<?php get_footer(); ?>