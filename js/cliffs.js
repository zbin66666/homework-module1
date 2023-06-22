$(document).ready(function(){

    /* Open lightbox on button click */
    $('.fourcliffs img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        };

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        if ($altvalue=="west-sea") {
            var img = $('#cliffs :first-child img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="north-mountain") {
            var img = $('#cliffs :nth-child(2) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="east-river") {
            var img = $('#cliffs :nth-child(3) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }else if ($altvalue=="south-canyon") {
            var img = $('#cliffs :last-child img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        };
    });

    

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});