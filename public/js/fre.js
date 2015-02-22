$(document).ready(function() {
    
    $('select').selectToAutocomplete();
    $('form').submit(function(){
        var x = ( $(this).serialize() );
        if (x.length == 9 || x.length === 0) {
            buttonClick();
        } else {
	        window.open('/oc/food.html', '_self')
        }
        return false;
    });
    
    var titleCheck = function(currentTitle) {
        nextInd.attr("href", "/oc/" + currentTitle + ".html");
        nextIndTwo.attr("href", "/oc/" + currentTitle + ".html");
    } 
        
    //your-industry
    var nextInd = $("#next-industry");
    var alertButton = $('.alertButton');
    var nextIndTwo = $("#next-industry-2");
    var otherInd = $("#other");
    var flag = false;
    var errorBlock = $('.error-block');
        //your-occupation
    var nextOc = $("#next-occupation");

    //occupation-other
    var otherOc = $("#other-occupation");
    
    //summary
    var endBtn = $('#end');
        
    var buttonClick = function() {
        if (flag !== true) {
            errorBlock.addClass('displayBlock');
        } else {
            errorBlock.removeClass('displayBlock');
        }
    }
    
    alertButton.click(buttonClick);

    $('input:radio').change(function(){
        flag = true;
        errorBlock.removeClass('displayBlock');
        var current = $(this);
        nextOc.attr("href", "/summary.html");
        otherOc.attr("href", "/summary-other.html");
        endBtn.attr("href", "/end.html");
        
        $('input:radio').parent().removeClass('selected');
        if($(this).is(":checked")) {
            $(current).parent().addClass('selected');
        }
        var title = $(this).attr('id');
        titleCheck(title);
    });
});