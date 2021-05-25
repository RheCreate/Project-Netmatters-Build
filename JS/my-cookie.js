$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 2000);
    $(".cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 