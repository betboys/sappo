<?php get_header(); ?>

<section class="career-single-hero" id="career-single">
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
    <div class="interested-form">
        <?php echo do_shortcode('[contact-form-7 id="a7a071b" title="Career form"]'); ?>
    </div>
    <!-- <form class="interested-form" action="">
        <div class="form-intro incidents-form-intro">
            <p class="form-name">Full name</p>
            <div class="form-input">
                <input class="input" type="text" name="" id="" placeholder="Name Surname">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M12 16.4986C8.19459 16.4927 4.44799 17.4377 1.10049 19.2476V23.3825H22.8995V19.2476C19.552 17.4377 15.8054 16.4928 12 16.4986Z" stroke="#666" stroke-width="1.5"></path>
                    <path d="M6.2634 7.3201V1.5835H17.7366V7.3201C17.7308 11.7361 12.9466 14.4898 9.1251 12.2767C7.3563 11.2524 6.2661 9.3642 6.2634 7.3201Z" stroke="#666" stroke-width="1.5"></path>
                </svg>
            </div>
            <span class="valid">Error text written here</span>
        </div>
        <div class="form-intro incidents-form-intro">
            <p class="form-name">position</p>
            <div class="form-input">
                <input class="input" type="text" name="" id="" placeholder="E.g. Senior Java Developer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                    <path d="M1 4.89294H23V20.8929H1V4.89294Z" stroke="#666666" stroke-width="1.5" />
                    <path d="M4 0.892944H20V4.89294H4V0.892944Z" stroke="#666666" stroke-width="1.5" />
                </svg>
            </div>
            <span class="valid">Error text written here</span>
        </div>
        <div class="form-intro incidents-form-intro">
            <p class="form-name">Email</p>
            <div class="form-input">
                <input class="input" type="email" name="" id="" placeholder="Email Address">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path d="M1.0605 1.12402H22.9395V18.6272H1.0605V1.12402Z" stroke="#666" stroke-width="1.5">
                    </path>
                    <path d="M1.0605 4.40576L12 10.9695L22.9395 4.40576" stroke="#666" stroke-width="1.5">
                    </path>
                </svg>
            </div>
            <span class="valid">Error text written here</span>
        </div>
        <div class="form-intro incidents-form-intro">
            <p class="form-name">Phone Number</p>
            <div class="form-input">
                <input class="input" type="number" name="" id="" placeholder="+374">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M18.5494 12.7535C18.5494 8.85168 15.3862 5.68868 11.4844 5.68848" stroke="#666666" stroke-width="1.5" />
                    <path d="M22.8971 12.7535C22.8971 6.45042 17.7875 1.34082 11.4844 1.34082" stroke="#666666" stroke-width="1.5" />
                    <path d="M3.19166 14.9926C1.95396 12.8079 1.23856 10.3663 1.10156 7.8591L5.46776 7.3363L7.00466 12.7166L3.19166 14.9915V14.9926ZM3.19166 14.9926C3.91766 16.2697 4.81266 17.4429 5.85246 18.4805C6.91766 19.5457 8.09156 20.4316 9.34156 21.1403M9.34156 21.1403C11.5256 22.3777 13.9664 23.0931 16.4729 23.2304L16.9968 18.8642L11.6165 17.3273L9.34046 21.1403H9.34156Z" stroke="#666666" stroke-width="1.5" />
                </svg>
            </div>
            <span class="valid">Error text written here</span>
        </div>
        <div class="chosse-file">
            <input type="file" id="file-input">
            <label class="label-file" for="file-input">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="29" viewBox="0 0 18 29" fill="none">
                    <path d="M17 22.7856V1.45227H1V28.1189H11.6667V8.11894H6.33333V22.7856" stroke="white" stroke-width="1.5" />
                </svg>
                <span class="file-text">Attach your CV</span>
            </label>
            <svg class="remove" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="X" width="20" height="20">
                <path fill="#ffffff" d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm7.914 21.086-2.828 2.828L16 18.828l-5.086 5.086-2.828-2.828L13.172 16l-5.086-5.086 2.828-2.828L16 13.172l5.086-5.086 2.828 2.828L18.828 16l5.086 5.086z" class="color 4e4e50 svgShape"></path>
            </svg>
        </div>
        <div class="form-intro incidents-form-intro-textarea">
            <p class="form-name">Tell Us about yourself . . .</p>
            <textarea class="input textarea" placeholder="Message"></textarea>
            <span class="valid">Error text written here</span>
        </div>
        <div class="checkbox-inner incidents-checkbox-inner">
            <input class="checkbox-input" type="checkbox" name="" id="checked">
            <label class="label" for="checked">I agree to <a class="text-color-style" href="https://pixeldesign.am/sappo/privacy-policy/">Privacy
                    Policy</a> and <a class="text-color-style" href="https://pixeldesign.am/sappo/terms-of-service/">Terms of Use</a></label>
            <span class="valid">Error text written here</span>
        </div>
        <div class="send-button-inner incidents-send-btn">
            <button class="incidents-form-button" id="send-btn">Apply now</button>
        </div>
    </form> -->
</section>

<?php get_footer(); ?>