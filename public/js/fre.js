$(document).ready(function() {
    
    var next = $("#next-choice");
    var otherInd = $("#other");
    var nextNhs = $("#next-nhs");
    var otherNhs = $("#other-nhs");

    $('input:radio').change(function(){
        var current = $(this);
        $('input:radio').parent().removeClass('selected');
        if($(this).is(":checked")) {
            $(current).parent().addClass('selected');
        }
        if( $(otherInd).is(":checked")) {
            $(next).attr("href", "summary-other.html");
        }
        if( $(otherNhs).is(":checked")) {
            $(nextNhs).attr("href", "summary-other.html");
        }
    });
});