<section class="contact-us" <?php if (is_page_template('page-contact.php')) {
								echo 'id="contact"';
							} ?>>
	<img class="contact-us-image" src="<?= the_field('contact_image', 'option'); ?>" alt="">
	<div class="contact-us-inner">
		<div class="container">
			<h3 class="contact-us-title split"><?= the_field('contact_title', 'option'); ?></h3>
		</div>
		<p class="contact-us-subtitle"><?= the_field('contact_description', 'option'); ?></p>
		<div class="socal-media-form">
			<ul class="socal-media">
				<li class="socal-media-list">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
						<path d="M1.06049 0.833252H22.9395V18.3365H1.06049V0.833252Z" stroke="white" stroke-width="1.5" />
						<path d="M1.06049 4.11499L12 10.6787L22.9395 4.11499" stroke="white" stroke-width="1.5" />
					</svg>
					<div class="socal-media-title-inner">
						<p class="socal-media-title">Email</p>
						<p class="socal-media-subtitle">Send us an email</p>
						<a class="socal-media-link" href="mailto:<?= the_field('email', 'option'); ?>"><?= the_field('email', 'option'); ?></a>
					</div>
				</li>
				<li class="socal-media-list">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
						<path d="M18.5498 13.0528C18.5498 9.15099 15.3866 5.98799 11.4848 5.98779" stroke="white" stroke-width="1.5" />
						<path d="M22.8975 13.0528C22.8975 6.74974 17.7879 1.64014 11.4848 1.64014" stroke="white" stroke-width="1.5" />
						<path d="M3.19258 15.292C1.95488 13.1073 1.23948 10.6657 1.10248 8.15854L5.46868 7.63574L7.00558 13.016L3.19258 15.2909V15.292ZM3.19258 15.292C3.91858 16.5691 4.81358 17.7423 5.85338 18.7799C6.91858 19.8451 8.09248 20.731 9.34248 21.4397M9.34248 21.4397C11.5265 22.6771 13.9673 23.3925 16.4738 23.5298L16.9977 19.1636L11.6174 17.6267L9.34138 21.4397H9.34248Z" stroke="white" stroke-width="1.5" />
					</svg>
					<div class="socal-media-title-inner">
						<p class="socal-media-title">Phone</p>
						<p class="socal-media-subtitle">Give us a call</p>
						<a class="socal-media-link" href="tel:<?= the_field('phone', 'option'); ?>"><?= the_field('phone', 'option'); ?></a>
					</div>
				</li>
				<li class="socal-media-list">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
						<path d="M18.1724 17.6488H20.2154L22.6807 23.535H1.31927L3.78457 17.6477H5.82757" stroke="white" stroke-width="1.5" />
						<path d="M12.2322 20.1378C12.2322 20.1378 20.0221 14.2948 20.0221 9.08457C20.0232 5.04277 17.1012 1.63477 12.2322 1.63477C7.3621 1.63477 4.4411 5.04277 4.4411 9.08457C4.4411 14.2948 12.2322 20.1378 12.2322 20.1378Z" stroke="white" stroke-width="1.5" />
						<path d="M10.3423 6.49414H14.1218V10.2735H10.3423V6.49414Z" stroke="white" stroke-width="1.5" />
					</svg>
					<div class="socal-media-title-inner">
						<p class="socal-media-title">Office</p>
						<p class="socal-media-subtitle"><?= the_field('office_location', 'option'); ?></p>
						<a class="socal-media-link" href="https://www.google.com/maps/search/<?= the_field('office_location', 'option'); ?>">
							Get Directions
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
								<path d="M9.95672 17.9705L15.8105 12.1167L9.95672 6.26294L8.50635 7.71331L12.9098 12.1167L8.50635 16.5202L9.95672 17.9705Z" fill="white" />
							</svg>
						</a>
					</div>
				</li>
			</ul>
			<?php echo do_shortcode('[contact-form-7 id="a94ab7c" title="Contact form 1"]'); ?>

		</div>
	</div>
</section>