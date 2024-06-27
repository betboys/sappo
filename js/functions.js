var $ = jQuery;
// $(document).ready(function () {
//    $.get(
//     "https://ipinfo.io",
//     function (response) {
//       var ip_country = response.country;
//       localStorage.setItem("ipcountry", ip_country);
//       ip_country = localStorage.getItem("ipcountry");
//     console.log(ip_country);
// 		 if (ip_country == "AM" ) {
// 			 if (!sessionStorage.getItem('redirected_to_AM')) {
//         // Mark that we have redirected
//         sessionStorage.setItem('redirected_to_AM', 'true');
        
//         // Construct the new URL
//         var newUrl = 'https://sappo.am/hy/';
        
//         // Redirect to the new URL
//         window.location.href = newUrl;
//     }
// 				   } else if (ip_country == "RU") {
// 					   	 if (!sessionStorage.getItem('redirected_to_ru')) {
//         // Mark that we have redirected
//         sessionStorage.setItem('redirected_to_ru', 'true');
        
//         // Construct the new URL
//         var newUrl = 'https://sappo.am/ru/';
        
//         // Redirect to the new URL
//         window.location.href = newUrl;
//     }
// 				   } else {
					   
// 				   }
		
//     },
//     "jsonp"
//   );  
//  });
// $(document).ready(function () {
// $(".send-btn-form-cust").click(function (e) {
//   e.preventDefault();
//   var checkedServices = [];
//   $('input[type="checkbox"]:checked').each(function () {
//     checkedServices.push($(this).next(".label").text());
//   });
//   var formData = {
//     action: "send_email",
//     checkedServices: checkedServices,
//     service: $(".select-text").text(),
//     fullName: $('input[name="fullName"]').val(),
//     email: $('input[type="email"]').val(),
//     phoneNumber:
//       $(".iti__selected-dial-code").text() + $('input[type="number"]').val(),
//     message: $("textarea").val(),
//   };

//   $.ajax({
//     url: wp_var.ajax_url,
//     type: "post",
//     data: formData,
//     success: function (response) {
//       // Handle success response
//       $(".contact-us-container .form-inner").html(
//         "<p class='form-title'>Email sent successfully</p>"
//       );
//     },
//     error: function (error) {
//       $(".contact-us-container .form-inner").html(
//         '<p class="form-title">Error:' + error + "</p>"
//       );
//     },
//   });
// });
//   $(".send-btn-form-cust").click(function (e) {
//     e.preventDefault();

//     // Basic client-side validation
//     var fullName = $('input[name="fullName"]').val();
//     var email = $('input[type="email"]').val();
//     var phoneNumber = $('input[type="number"]').val();
//     var message = $("textarea").val();
//     if (!fullName || !email || !phoneNumber || !message) {
//       alert("Please fill out all required fields.");
//       return;
//     }

//     // Extract dial code from phone input field
//     var dialCode = $(".iti__selected-dial-code").text().trim();
//     var phoneNumberWithoutDialCode = phoneNumber.substring(dialCode.length);

//     // Gather form data
//     var checkedServices = [];
//     $('input[type="checkbox"]:checked').each(function () {
//       checkedServices.push($(this).next(".label").text());
//     });
//     var formData = {
//       action: "send_email",
//       checkedServices: checkedServices,
//       service: $(".select-text").text(),
//       fullName: fullName,
//       email: email,
//       phoneNumber: dialCode + phoneNumberWithoutDialCode,
//       message: message,
//     };

//     // Send form data via AJAX
//     $.ajax({
//       url: wp_var.ajax_url,
//       type: "post",
//       data: formData,
//       success: function (response) {
//         if (response === "success") {
//           // Handle success response
//           $(".contact-us-container .form-inner").html(
//             "<p class='form-title'>Email sent successfully</p>"
//           );
//         } else {
//           // Handle error response
//           $(".contact-us-container .form-inner").html(
//             '<p class="form-title">Error: Failed to send email</p>'
//           );
//         }
//       },
//       error: function (xhr, status, error) {
//         // Handle AJAX error
//         $(".contact-us-container .form-inner").html(
//           '<p class="form-title">Error: ' + error + "</p>"
//         );
//       },
//     });
//   });
// });
