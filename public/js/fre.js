$(document).ready(function() {
    
       
    
         
    
    var FREForm = $('.long-list');
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
    FREForm.submit(function() {
        var x = ( $(this).serialize() );
        var y = FREForm.find(":selected").attr('id'); 
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
            choiceNext.attr("href", "/mb/mb-question5.html"); //was 4 for date
        } else if (removeBen.prop( "checked" )) {
            choiceNext.attr("href", "/mb/nr-remove.html?medBen=0");
        }
    });
    
    var sbTable = $('#sb-table'),
        sbAmount = $('#sb-amount'),
        sbAmountValue = sbAmount.text();
    var ccTable = $('#cc-table'),
        ccAmount = $('#cc-amount'),
        noBens = $('#no-bens'),
        myBens = $('#my-bens'),
        starFlag = 'true', 
        costFlag = 'true',
        ccAmountValue = ccAmount.text();
    var addTable = $('#add-table'),
        addAmount = $('#add-amount'),
        addAmountValue = addAmount.text(),
        addFlag = 'false';
        
    
    if (sbAmountValue == 0) {
        sbTable.hide();
        starFlag = 'false';
    };
    
    if (ccAmountValue == 0) {
        ccTable.hide();
        costFlag = 'false';
    };
    
    if (addAmountValue == 0) {
        addTable.hide();
        addFlag = 'false';
    }
    
    if (costFlag == 'false' && starFlag == 'false' && addFlag == 'false') {
        noBens.show();
        myBens.hide();
    };
        
    
    
  
    
    
    
    var noboxHtml = $("#checknobox");
    $("#help1 input[type=radio]").change(function() {
        var checkbox = $(this);
        if (checkbox.val() === "yes") {
            noboxHtml.hide();
        } else if (checkbox.val() === "no") {
            noboxHtml.show();
        }
    });
    
    if ($("#radio-indent9-2").is(":checked")) {
        noboxHtml.show();
    } else {
        noboxHtml.hide();
    }
    
  
    
    
    
    
      var yesboxHtml = $("#checkyesbox");
    $("#help2 input[type=radio]").change(function() {
        var checkbox = $(this);
        if (checkbox.val() === "no") {
            yesboxHtml.hide();
        } else if (checkbox.val() === "yes") {
            yesboxHtml.show();
        }
    });
    
    if ($("#radio-indent10-2").is(":checked")) {
        yesboxHtml.show();
    } else {
        yesboxHtml.hide();
    }
    
  
    
  $('.button1[target="boxone"]').click(function(){
   
    $('#boxone').toggle();
});
$('.summary[target="boxone"]').click(function(){
    $('#boxone').hide();
 
});



    
    
});

        
        
        




    