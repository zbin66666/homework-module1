$(document).ready(function(){
    $("table tbody tr td").click(function(){
        if ($(this).text() !=='Not Available' && !$(this).parent().hasClass('heading') ){
            $(this).toggleClass('selected');
        }
    })
});