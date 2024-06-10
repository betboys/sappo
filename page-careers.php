<?php get_header();
/* Template Name: Careers Template */
?>
<section class="page-hero" id="carrer">
    <div class="carrer-hero-img">
        <?php
        $featured_image_url = get_the_post_thumbnail_url(get_the_ID(), 'full'); // 'full' for full size, change as needed
        ?>
        <img class="carrer-hero-photo" src="<?php echo $featured_image_url; ?>" alt="">
    </div>
    <div class="carrer-hero-heading-text-inner">
        <div class="container">
            <h1 class="heading carrer-heading split"><?= the_field('title'); ?></h1>
        </div>
        <h2 class="subtitle"><?= the_field('subtitle'); ?></h2>
    </div>
</section>

<section class="current-openings">
    <div class="container">
        <h3 class="headingN2 split"><?= the_field('job_openings_title'); ?></h3>
    </div>
    <ul class="list-group">
        <li class="list-group-item active" aria-current="true">All</li>

        <?php
        // Get the terms for the custom taxonomy 'career_category'
        $terms = get_terms(array(
            'taxonomy' => 'career_category',
            'hide_empty' => false, // Set to true if you want to hide empty categories
        ));

        // Check if any terms were found
        if (!empty($terms) && !is_wp_error($terms)) {

            foreach ($terms as $term) {
                echo '<li data-id="' . $term->term_id . '" data-name="' . $term->name . '" class="list-group-item">' . $term->name . '</li>';
            }
        }
        ?>
    </ul>
    <div class="current-openings-content">
        <?php $current_post_id = get_the_ID();
        $args = array(
            'post_type' => 'career',
            'posts_per_page' => -1, // Change as needed


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
                $terms = get_the_terms(get_the_ID(), 'career_category');
        ?>
                <article class="category-item" data-cat="<?php if ($terms && !is_wp_error($terms)) {
                                                                foreach ($terms as $term) {
                                                                    echo $term->name . ' ';
                                                                }
                                                            } ?>">
                    <?php
                    if ($terms && !is_wp_error($terms)) {
                        echo '<p class="category-hashtag">';
                        foreach ($terms as $term) {
                            echo '#' . $term->name . ' ';
                        }
                        echo '</p>';
                    }

                    ?>

                    <h5 class="category-title"><?php the_title(); ?></h5>
                    <ul class="location-time">
                        <li class="location-time-list">
                            <img class="location-time-img" src="<?php echo get_template_directory_uri(); ?>/images/location.svg" alt="">
                            <?= the_field('location'); ?>
                        </li>
                        <li class="location-time-list">
                            <img class="location-time-img" src="<?php echo get_template_directory_uri(); ?>/images/watch.svg" alt="">
                            <?= the_field('job_type'); ?>
                        </li>
                    </ul>
                    <a class="category-item-link" href="<?php echo get_permalink(); ?>">Apply now</a>
                </article>
        <?Php }
            wp_reset_postdata();
        } ?>
    </div>
</section>
<section class="carrer-se">
    <div class="se-left">
        <div class="container">
            <h3 class="headingN2 carrer-headingN2 split"><?php echo  the_field('left_title'); ?></h3>
        </div>
        <p class="se-suttitle"><?php echo  the_field('left_description'); ?></p>
    </div>
    <img class="se-right-img" src="<?php echo the_field('right_image'); ?>" alt="">
</section>
<?php get_template_part('templates/contact'); ?>
<?Php get_footer(); ?>