<?php get_header();
/* Template Name: About us Template */ ?>



<section class="page-hero page-id-286" id="about">
    <div class="about-hero-img">
        <?php
        $featured_image_url = get_the_post_thumbnail_url(get_the_ID(), 'full'); // 'full' for full size, change as needed
        ?>
        <img class="about-hero-photo" src="<?php echo $featured_image_url; ?>" alt="">
    </div>
    <div class="about-hero-heading-text-inner">
        <h1 class="heading about-heading" data-aos="fade-up"><?= the_field('title'); ?></h1>
        <h2 class="subtitle hero-subtitle-about"><?= the_field('subtitle'); ?></h2>
    </div>
</section>

<section class="strength-reliability">
    <img class="strength-reliability-img" src="<?= the_field('left_image'); ?>" alt="">
    <div class="strength-reliability-text-inner">
        <h3 class="headingN2" data-aos="fade-up"><?= the_field('right_title'); ?></h3>
        <p class="subtitle strength-reliability-subtitle">
            <?= the_field('right_sdescription'); ?>
        </p>
    </div>
</section>

<section class="about-our-serives">
    <h3 class="our-serives-title" data-aos="fade-up"><?= the_field('services_title'); ?></h3>
    <div class="about-our-serives-cards">
        <?php
        $featured_posts = get_field('services');
        if ($featured_posts): ?>

            <?php foreach ($featured_posts as $post):

                // Setup this post for WP functions (variable must be named $post).
                setup_postdata($post);
                $url = wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'medium_large');
                ?>

                <div class="about-our-serives-card-item">
                    <img class="about-our-serives-card-image" src="<?php echo $url; ?>" alt="">
                    <div class="card-item-info">
                        <h3 class="about-our-serives-card-title"><?php the_title(); ?></h3>
                        <p class="about-our-serives-card-subtitle"><?php
                        echo wp_trim_words(get_field('description'), 30, '...');
                        ?></p>
                        <a class="about-card-link" href="<?php the_permalink(); ?>">Learn More</a>
                    </div>
                </div>
            <?php endforeach; ?>

            <?php
            // Reset the global post object so that the rest of the page works correctly.
            wp_reset_postdata(); ?>
        <?php endif; ?>



    </div>
</section>

<section class="our-team">
    <div class="our-team-title-subtitle">
        <h3 class="our-team-title" data-aos="fade-up"><?= the_field('team_title'); ?></h3>
        <p class="our-team-subtitle"><?= the_field('team_subtitle'); ?></p>
    </div>
    <div class="our-team-men">
        <?php

        // Check rows exists.
        if (have_rows('team_members')):

            // Loop through rows.
            while (have_rows('team_members')):
                the_row();

                // Load sub field value.
                $member_image = get_sub_field('member_image');
                $member_name = get_sub_field('member_name');
                $job_title = get_sub_field('job_title');
                ?>
                <article class="men-inner">
                    <img class="men-img" src="<?php echo $member_image; ?>" alt="">
                    <p class="name-surname"><?= $member_name ?></p>
                    <p class="position"><?= $job_title ?></p>
                </article>
                <?Php
            endwhile;
            wp_reset_postdata();
        endif; ?>


    </div>
</section>

<section class="descover">
    <img class="descover-image" src="<?= the_field('cta_image'); ?>" alt="">
    <h3 class="descover-title" data-aos="fade-up"><?= the_field('cta_text'); ?></h3>
</section>

<?php get_template_part('templates/partners'); ?>
<?php get_template_part('templates/contact'); ?>


<?php get_footer(); ?>