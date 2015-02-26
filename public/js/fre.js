$(document).ready(function() {
    
    var nextWindow = function(z) {
        window.open('/oc/' + z + '.html', '_self');    
    };
    
    var titleCheck = function(currentTitle) {
    var nextURL = ("/oc/" + currentTitle + ".html");
        nextInd.attr("href", nextURL);
        nextIndTwo.attr("href", nextURL);
    };
    
    var buttonClick = function() {
        if (flag !== true) {
            errorBlock.addClass('displayBlock');
        } else {
            errorBlock.removeClass('displayBlock');
        }
    };
   
    $('select').selectToAutocomplete();
    $('form').submit(function() {
        var x = ( $(this).serialize() );
        var y = $('form').find(":selected").attr('id'); 
        if (x.length == 9 || x.length === 0) {
            buttonClick();
        } else {
	        nextWindow(y);
        }
        return false;
    });
    
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
        
    alertButton.click(buttonClick);

    $('input:radio').change(function() {
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
    
    //med bens
    var ended = $('#ended'),
    endedChange = $('#changed'),
    removeBen = $('#remove'),
    choiceNext = $('#choice-next');
    
    $('#mb-choice input:radio').change(function() {
        if ( ended.prop( "checked" ) ) {
            choiceNext.attr("href", "/mb/mb-question2.html");
        } else if (endedChange.prop( "checked" )) {
            choiceNext.attr("href", "/mb/update-benefit.html");
        } else if (removeBen.prop( "checked" )) {
            choiceNext.attr("href", "/mb/nr-remove.html");
        }
    });
    
});