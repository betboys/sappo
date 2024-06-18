<?php get_header();
/* Template Name: Careers Template */
?>
<section class="page-hero page-id-290" id="carrer">
    <div class="carrer-hero-img">
        <?php
        $featured_image_url = get_the_post_thumbnail_url(get_the_ID(), 'full'); // 'full' for full size, change as needed
        ?>
        <img class="carrer-hero-photo" src="<?php echo $featured_image_url; ?>" alt="">
    </div>
    <div class="carrer-hero-heading-text-inner">
        <h1 class="heading carrer-heading" data-aos="fade-up"><?= the_field('title'); ?></h1>
        <h2 class="subtitle hero-subtitle-single"><?= the_field('subtitle'); ?></h2>
    </div>
</section>

<section class="current-openings">
    <h3 class="headingN2" data-aos="fade-up"><?= the_field('job_openings_title'); ?></h3>
    <ul class="list-group">
        <li class="list-group-item active" aria-current="true">All</li>

        <?php
        // Get the terms for the custom taxonomy 'career_category'
        $terms = get_terms(
            array(
                'taxonomy' => 'career_category',
                'hide_empty' => false, // Set to true if you want to hide empty categories
            )
        );

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
                $cats = get_the_terms(get_the_ID(), 'career_category');
                ?>
                <article class="category-item" data-cat="<?php if ($cats && !is_wp_error($cats)) {
                    foreach ($cats as $cat) {
                        echo $cat->name . ' ';
                    }
                } ?>">
                    <?php
                    if ($cats && !is_wp_error($cats)) {
                        echo '<p class="category-hashtag">';
                        foreach ($cats as $cat) {
                            echo '#' . $cat->name . ' ';
                        }
                        echo '</p>';
                    }

                    ?>

                    <h5 class="category-title"><?php the_title(); ?></h5>
                    <ul class="location-time">
                        <li class="location-time-list">
                            <img class="location-time-img" src="<?php echo get_template_directory_uri(); ?>/images/location.svg"
                                alt="">
                            <?= the_field('location'); ?>
                        </li>
                        <li class="location-time-list">
                            <img class="location-time-img" src="<?php echo get_template_directory_uri(); ?>/images/watch.svg"
                                alt="">
                            <?= the_field('job_type'); ?>
                        </li>
                    </ul>
                    <a class="category-item-link" href="<?php echo get_permalink(); ?>">Apply now</a>
                </article>
            <?php }
            wp_reset_postdata();
        } ?>
    </div>
</section>
<section class="carrer-se">
    <div class="se-left">
        <h3 class="headingN2 carrer-headingN2" data-aos="fade-up"><?php echo the_field('left_title'); ?></h3>
        <p class="se-suttitle"><?php echo the_field('left_description'); ?></p>
    </div>
    <img class="se-right-img" src="<?php echo the_field('right_image'); ?>" alt="">
</section>
<?php get_template_part('templates/contact'); ?>
<?Php get_footer(); ?>
