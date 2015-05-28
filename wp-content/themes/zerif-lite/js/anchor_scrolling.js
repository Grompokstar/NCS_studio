/**
 * Created by roman on 28.05.15.
 */
jQuery(document).ready(function() {
    jQuery('li.menu-item-type-custom a[href*="#"]').click(function () {
        var elementClickSelector = jQuery(this).attr("href").substring(15),
            destination = jQuery(elementClickSelector).offset().top;

        if(jQuery.browser.safari){
            jQuery('body').animate( { scrollTop: destination }, 1200 );
        }else{
            jQuery('html').animate( { scrollTop: destination }, 1200 );
        }
        //return false;
    });
});