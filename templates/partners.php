<section class="our-trusted-partners swiper-container">
    <div class="ttile-and-slide-buttons">
        <h3 class="our-trusted-partners-title" data-aos="fade-up"><?= the_field('trusted_title', 'option') ?></h3>
        <div class="next-prev-buttons">
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
            <?php
            // Check rows exists.
            if (have_rows('logos', 'option')):
                // Loop through rows.
                while (have_rows('logos', 'option')):
                    the_row();
                    // Load sub field value.
                    $logo_back_text = get_sub_field('logo_back_text', 'option');
                    $p_logo = get_sub_field('p_logo', 'option');

                    // Do something, but make sure you escape the value if outputting directly... 
                    ?>
                    <div class="swiper-slide master-master-inner">
                        <div class="master-inner">
                            <div class="card-intro">
                                <div class="side-1">
                                    <img class="chief" src="<?= $p_logo ?>" alt="">
                                </div>
                                <div class="side-2">
                                    <p class="partners-card-text"><?= $logo_back_text ?></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php
                    // End loop.
                endwhile;
                wp_reset_postdata();
            endif; ?>
        </div>
    </div>
    <!-- <div class="next-prev-buttons next-prev-buttons-mobile">
        <button class="swiper-buttons swiper-button-prev ">
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
    </div> -->
</section>