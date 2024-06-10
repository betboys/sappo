<?php get_header();
/* Template Name: About us Template */ ?>



<section class="page-hero" id="about">
    <div class="about-hero-img">
        <?php
        $featured_image_url = get_the_post_thumbnail_url(get_the_ID(), 'full'); // 'full' for full size, change as needed
        ?>
        <img class="about-hero-photo" src="<?php echo $featured_image_url; ?>" alt="">
    </div>
    <div class="about-hero-heading-text-inner">
        <div class="container">
            <h1 class="heading about-heading split"><?= the_field('title'); ?></h1>
        </div>
        <h2 class="subtitle hero-subtitle-about"><?= the_field('subtitle'); ?></h2>
    </div>
</section>

<section class="strength-reliability">
    <img class="strength-reliability-img" src="<?= the_field('left_image'); ?>" alt="">
    <div class="strength-reliability-text-inner">
        <div class="content across-title">
            <h3 class="headingN2 split"><?= the_field('right_title'); ?></h3>
        </div>
        <p class="subtitle strength-reliability-subtitle">
            <?= the_field('right_sdescription'); ?>
        </p>
    </div>
</section>

<section class="about-our-serives">
    <div class="container">
        <h3 class="our-serives-title split"><?= the_field('services_title'); ?></h3>
    </div>
    <div class="about-our-serives-cards">
        <?php
        $featured_posts = get_field('services');
        if ($featured_posts) : ?>

            <?php foreach ($featured_posts as $post) :

                // Setup this post for WP functions (variable must be named $post).
                setup_postdata($post);
                $url = wp_get_attachment_url(get_post_thumbnail_id($post->ID), 'medium_large');
            ?>

                <div class="about-our-serives-card-item">
                    <img class="about-our-serives-card-image" src="<?php echo  $url; ?>" alt="">
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
        <div class="container">
            <h3 class="our-team-title split"><?= the_field('team_title'); ?></h3>
        </div>
        <p class="our-team-subtitle"><?= the_field('team_subtitle'); ?></p>
    </div>
    <div class="our-team-men">
        <?php

        // Check rows exists.
        if (have_rows('team_members')) :

            // Loop through rows.
            while (have_rows('team_members')) : the_row();

                // Load sub field value.
                $member_image = get_sub_field('member_image');
                $member_name = get_sub_field('member_name');
                $job_title = get_sub_field('job_title');
        ?>
                <article class="men-inner">
                    <img class="men-img" src="<?php echo  $member_image; ?>" alt="">
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
    <div class="content">
        <h3 class="descover-title split"><?= the_field('cta_text'); ?></h3>
    </div>
</section>

<section class="testimonials swiper-container">
    <div class="ttile-and-slide-buttons">
        <div class="container">
            <h3 class="testimonials-title split"><?= the_field('testimonials_title'); ?></h3>
        </div>
        <div class="next-prev-buttons testimonials-slide-buttons">
            <button class="swiper-buttons swiper-button-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path d="M25.055 15.1666H10.1616L16.6683 8.65996C17.1883 8.13996 17.1883 7.28662 16.6683 6.76662C16.1483 6.24663 15.3083 6.24663 14.7883 6.76662L6.00164 15.5533C5.48164 16.0733 5.48164 16.9133 6.00164 17.4333L14.775 26.2333C15.295 26.7533 16.135 26.7533 16.655 26.2333C17.175 25.7133 17.175 24.8733 16.655 24.3533L10.1616 17.8333H25.055C25.7883 17.8333 26.3883 17.2333 26.3883 16.5C26.3883 15.7666 25.7883 15.1666 25.055 15.1666Z" fill="white" />
                </svg>
            </button>
            <button class="swiper-buttons swiper-button-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path d="M6.94503 17.8334H21.8384L15.3317 24.34C14.8117 24.86 14.8117 25.7134 15.3317 26.2334C15.8517 26.7534 16.6917 26.7534 17.2117 26.2334L25.9984 17.4467C26.5184 16.9267 26.5184 16.0867 25.9984 15.5667L17.225 6.76671C16.705 6.24671 15.865 6.24671 15.345 6.76671C14.825 7.28671 14.825 8.12671 15.345 8.64671L21.8384 15.1667H6.94503C6.21169 15.1667 5.61169 15.7667 5.61169 16.5C5.61169 17.2334 6.21169 17.8334 6.94503 17.8334Z" fill="white" />
                </svg>
            </button>
        </div>
    </div>
    <div class="swiper testimonials-swiper">
        <div class="swiper-wrapper">
            <?php

            // Check rows exists.
            if (have_rows('testimonials')) :

                // Loop through rows.
                while (have_rows('testimonials')) : the_row();

                    // Load sub field value.
                    $name = get_sub_field('name');
                    $position = get_sub_field('position');
                    $review = get_sub_field('review');
            ?>

                    <div class="swiper-slide testimonials-slide-inner">
                        <h4 class="testimonials-name-surname"><?= $name ?></h4>
                        <h5 class="company-owner"><?= $position ?></h5>
                        <p class="testimonials-content"><?= $review ?> </p>
                    </div>
            <?Php
                endwhile;
                wp_reset_postdata();
            endif; ?>
        </div>
    </div>
</section>

<?php get_template_part('templates/partners'); ?>
<?php get_template_part('templates/contact'); ?>


<?php get_footer(); ?>