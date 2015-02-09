$(document).ready(function() {
    
    //your-industry
    var nextInd = $("#next-industry");
    var nextIndTwo = $("#next-industry-2");
    var otherInd = $("#other");

    //your-occupation
    var nextOc = $("#next-occupation");

    //occupation-other
    var otherOc = $("#other-occupation");
    
    //summary
    var endButton = $("#end");

    $('input:radio').change(function(){
        var current = $(this);
        nextOc.attr("href", "/summary.html");
        otherOc.attr("href", "/summary-other.html");
        endButton.attr("href", "/end.html");
        
        $('input:radio').parent().removeClass('selected');
        if($(this).is(":checked")) {
            $(current).parent().addClass('selected');
        }
        if( $(otherInd).is(":checked")) {
            nextInd.attr("href", "/occupation-other.html");
            nextIndTwo.attr("href", "/occupation-other.html");
        } else {
            nextInd.attr("href", "/your-occupation.html");
            nextIndTwo.attr("href", "/your-occupation.html");
        }
    });
});