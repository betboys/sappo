<?php get_header(); ?>
<section class="page-hero single-page-hero" id="single">
    <div class="single-hero-img">
        <?php
        $featured_image_url = get_the_post_thumbnail_url(get_the_ID(), 'full'); // 'full' for full size, change as needed
        ?>
        <img class="single-hero-photo" src="<?php echo $featured_image_url; ?>" alt="">
    </div>
    <div class="single-hero-heading-text-inner">
        <h1 class="heading single-heading" data-aos="fade-up"><?= the_field('title'); ?></h1>
        <h2 class="subtitle hero-subtitle-single"><?= the_field('description'); ?></h2>
        <?php if (get_field('button')): ?>
            <a class="link-style" href="<?= get_field('button')['url']; ?>"><?= get_field('button')['title']; ?></a>
        <?php endif; ?>
    </div>
</section>

<section class="single-security-services">
    <div class="single-content-left">
        <h3 class="headingN2" data-aos="fade-up"><?= the_field('left_text'); ?></h3>
    </div>
    <div class="single-content-right">
        <div class="single-content-right-title"><?= the_field('right_text'); ?></div>

    </div>
</section>



<?php

// Check rows exists.
if (have_rows('text_image_blocks')):

    // Loop through rows.
    while (have_rows('text_image_blocks')):
        the_row();

        // Load sub field value.
        $text_image = get_sub_field('text_image_');
        $text_description = get_sub_field('text_description');
        $text_title = get_sub_field('text_title');
        // Do something, but make sure you escape the value if outputting directly... 
        ?>
        <section class="left-and-right">
            <img class="left-and-right-img" src="<?php echo $text_image['url']; ?>" alt="">
            <div class="left-and-right-text-inner">
                <h3 class="left-and-right-title" data-aos="fade-up"><?= $text_title ?></h3>
                <div class="left-and-right-subtitle"> <?= $text_description ?></div>
            </div>
        </section>
        <?php

        // End loop.
    endwhile;

    // No value.
else:
    // Do something...
endif; ?>
<?Php
$feture_sec = get_field('features_section');
if ($feture_sec == 'yes'): ?>
    <section class="wcsss">
        <div class="wcsss-text-inner">
            <div class="wcsss-left">
                <h3 class="headingN2" data-aos="fade-up"><?= the_field('feature_title'); ?>
                </h3>
            </div>
            <p class="wcsss-right"><?= the_field('feature_description'); ?></p>
        </div>
        <div class="wcsss-items-inner">
            <?php

            // Check rows exists.
            if (have_rows('fearue_boxes')):

                // Loop through rows.
                while (have_rows('fearue_boxes')):
                    the_row();

                    // Load sub field value.
                    $text_image = get_sub_field('box_icon');
                    $text_description = get_sub_field('box_description');
                    $text_title = get_sub_field('box_title');
                    // Do something, but make sure you escape the value if outputting directly... 
                    ?>

                    <article class="wcsss-item">
                        <div class="item-icon-text">
                            <img class="item-icon" src="<?php echo $text_image; ?>" alt="">
                            <p class="item-title"><?= $text_title ?></p>
                        </div>
                        <p class="item-content"> <?= $text_description ?></p>
                    </article>
                    <?php

                    // End loop.
                endwhile;

                // No value.
            else:
                // Do something...
            endif; ?>

        </div>
    </section>
<?php endif; ?>
<section class="other-services-wraper">
    <h3 class="other-services" data-aos="fade-up">Other <span style="color: #fac917;">services</span></h3>
    <div class="our-service-cards">
        <div class="cards-wrapper">
            <?php $current_post_id = get_the_ID();
            $args = array(
                'post_type' => 'service',
                'posts_per_page' => 4, // Change as needed
                'post__not_in' => array($current_post_id),

            );
            $related_services = new WP_Query($args);

            // Output related services
            if ($related_services->have_posts()) {
                while ($related_services->have_posts()) {
                    $related_services->the_post();
                    // Display related service information here
                    $card_title = get_field('card_title');
                    $card_image = get_field('card_image', get_the_ID());
                    $card_description = get_field('card_description');
                    ?>
                    <div class="card">
                        <a class="card-link-mobile" href="<?php the_permalink(); ?>"></a>
                        <img class="card-image" src="<?php echo $card_image['url']; ?>" alt="">
                        <p class="card-title"><?= $card_title ?></p>
                        <div class="card-hover-visitble">
                        <a class="card-title-hover" href="<?php the_permalink(); ?>"></a>
                            <div class="card-info-inner">
                                <?= $card_description ?>

                                <a class="card-link" href="<?php the_permalink(); ?>">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="77" height="75" viewBox="0 0 77 75"
                                        fill="none">
                                        <path class="card-link-icon" d="M8 7.71094L37.5 36.2109L67 64.7109" stroke="white"
                                            stroke-width="10" stroke-linecap="square" stroke-linejoin="round" />
                                        <path class="card-link-icon" d="M71.5 7.71094V69.2109H8" stroke="white"
                                            stroke-width="10" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <?php
                }
                wp_reset_postdata();
            }
            ?>
        </div>
    </div>
</section>

<!-- <section class="our-trusted-partners swiper-container">
    <div class="ttile-and-slide-buttons">
        <h3 class="our-trusted-partners-title" data-aos="fade-up">trusted by</h3>
        <div class="next-prev-buttons partners-slide-buttons">
            <button class="swiper-buttons swiper-button-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path
                        d="M25.055 15.1666H10.1616L16.6683 8.65996C17.1883 8.13996 17.1883 7.28662 16.6683 6.76662C16.1483 6.24663 15.3083 6.24663 14.7883 6.76662L6.00164 15.5533C5.48164 16.0733 5.48164 16.9133 6.00164 17.4333L14.775 26.2333C15.295 26.7533 16.135 26.7533 16.655 26.2333C17.175 25.7133 17.175 24.8733 16.655 24.3533L10.1616 17.8333H25.055C25.7883 17.8333 26.3883 17.2333 26.3883 16.5C26.3883 15.7666 25.7883 15.1666 25.055 15.1666Z"
                        fill="white" />
                </svg>
            </button>
            <button class="swiper-buttons swiper-button-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path
                        d="M6.94503 17.8334H21.8384L15.3317 24.34C14.8117 24.86 14.8117 25.7134 15.3317 26.2334C15.8517 26.7534 16.6917 26.7534 17.2117 26.2334L25.9984 17.4467C26.5184 16.9267 26.5184 16.0867 25.9984 15.5667L17.225 6.76671C16.705 6.24671 15.865 6.24671 15.345 6.76671C14.825 7.28671 14.825 8.12671 15.345 8.64671L21.8384 15.1667H6.94503C6.21169 15.1667 5.61169 15.7667 5.61169 16.5C5.61169 17.2334 6.21169 17.8334 6.94503 17.8334Z"
                        fill="white" />
                </svg>
            </button>
        </div>
    </div>
    <div class="swiper our-trusted-partners-swiper">
        <div class="swiper-wrapper partners-card-inner">
            <div class="swiper-slide master-master-inner">
                <div class="master-inner">
                    <div class="card-intro">
                        <div class="side-1">
                            <img class="chief"
                                src="<?php echo get_template_directory_uri(); ?>/images/partners-image.webp" alt="">
                        </div>
                        <div class="side-2">
                            <p class="partners-card-text">Contrary to popular belief, Lorem Ipsum is not simply
                                random text.
                                It
                                has roots in a piece of classical. Richard McClintock, a Latin professor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide master-master-inner">
                <div class="master-inner">
                    <div class="card-intro">
                        <div class="side-1">
                            <img class="chief"
                                src="<?php echo get_template_directory_uri(); ?>/images/partners-image.webp" alt="">
                        </div>
                        <div class="side-2">
                            <p class="partners-card-text">Contrary to popular belief, Lorem Ipsum is not simply
                                random text.
                                It
                                has roots in a piece of classical. Richard McClintock, a Latin professor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide master-master-inner">
                <div class="master-inner">
                    <div class="card-intro">
                        <div class="side-1">
                            <img class="chief"
                                src="<?php echo get_template_directory_uri(); ?>/images/partners-image.webp" alt="">
                        </div>
                        <div class="side-2">
                            <p class="partners-card-text">Contrary to popular belief, Lorem Ipsum is not simply
                                random text.
                                It
                                has roots in a piece of classical. Richard McClintock, a Latin professor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide master-master-inner">
                <div class="master-inner">
                    <div class="card-intro">
                        <div class="side-1">
                            <img class="chief"
                                src="<?php echo get_template_directory_uri(); ?>/images/partners-image.webp" alt="">
                        </div>
                        <div class="side-2">
                            <p class="partners-card-text">Contrary to popular belief, Lorem Ipsum is not simply
                                random text.
                                It
                                has roots in a piece of classical. Richard McClintock, a Latin professor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide master-master-inner">
                <div class="master-inner">
                    <div class="card-intro">
                        <div class="side-1">
                            <img class="chief"
                                src="<?php echo get_template_directory_uri(); ?>/images/partners-image.webp" alt="">
                        </div>
                        <div class="side-2">
                            <p class="partners-card-text">Contrary to popular belief, Lorem Ipsum is not simply
                                random text.
                                It
                                has roots in a piece of classical. Richard McClintock, a Latin professor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide master-master-inner">
                <div class="master-inner">
                    <div class="card-intro">
                        <div class="side-1">
                            <img class="chief"
                                src="<?php echo get_template_directory_uri(); ?>/images/partners-image.webp" alt="">
                        </div>
                        <div class="side-2">
                            <p class="partners-card-text">Contrary to popular belief, Lorem Ipsum is not simply
                                random text.
                                It
                                has roots in a piece of classical. Richard McClintock, a Latin professor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide master-master-inner">
                <div class="master-inner">
                    <div class="card-intro">
                        <div class="side-1">
                            <img class="chief"
                                src="<?php echo get_template_directory_uri(); ?>/images/partners-image.webp" alt="">
                        </div>
                        <div class="side-2">
                            <p class="partners-card-text">Contrary to popular belief, Lorem Ipsum is not simply
                                random text.
                                It
                                has roots in a piece of classical. Richard McClintock, a Latin professor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> -->
<?php get_template_part('templates/partners'); ?>
<?php get_template_part('templates/contact'); ?>
<?Php get_footer(); ?>