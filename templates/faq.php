<section class="faq">
    <div class="faq-text-inner">
        <h3 class="faq-title" data-aos="fade-up"><?= the_field('faq_title', 'option') ?></h3>
        <p class="faq-subtitle"><?= the_field('faq_description', 'option') ?></p>
    </div>
    <div class="faq-info-inner">
        <?php

        // Check rows exists.
        if (have_rows('questions', 'option')):

            // Loop through rows.
            while (have_rows('questions', 'option')):
                the_row();

                // Load sub field value.
                $question = get_sub_field('question');
                $answer = get_sub_field('answer');
                // Do something, but make sure you escape the value if outputting directly...
                ?>
                <div class="faq-container">
                    <p class="faq-text"><?php echo $question; ?></p>
                    <div class="answercont">
                        <p class="faq-text-hiiden"><?php echo $answer; ?></p>
                    </div>
                </div>

                <?Php
            endwhile;
            wp_reset_postdata();
        endif; ?>


    </div>
</section>