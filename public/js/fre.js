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
     var nfTable = $('#nf-table'),
        nfAmount = $('#nf-amount'),
        nfAmountValue = nfAmount.text();
    var ccTable = $('#cc-table'),
        ccAmount = $('#cc-amount'),
        noBens = $('#no-bens'),
        sbEndBens = $('#sb-end-bens'),
        ccEndBens = $('#cc-end-bens'),
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
         ccEndBens.hide();
        costFlag = 'false';
    };
    
  
    
    
    
    
    
    if (costFlag == 'false' && starFlag == 'false' && addFlag == 'false') {
        noBens.show();
        myBens.hide();
       
    };
        
    
    
 // if (sbAmountValue != 400 && sbAmountValue != 0) {
     //   sbEndBens.show();
     //  sbTable.hide();
       
   // };
    
    
 //   if (ccAmountValue != 600 && ccAmountValue != 0) {
    //    ccEndBens.show();
     //  ccTable.hide();
       
  //  };
    
    
    
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
    
  
    
    
     var noboxHtml = $("#paidnobox");
    $("#paid1 input[type=radio]").change(function() {
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
    
    
    
          var yesboxHtml = $("#checkyesbox");
    $("#help2 input[type=radio]").change(function() {
        var checkbox = $(this);
        if (checkbox.val() === "Don't know") {
            yesboxHtml.hide();
        } else if (checkbox.val() === "yes") {
            yesboxHtml.show();
        }
    });
    
    if ($("#radio-indent10-3").is(":checked")) {
        yesboxHtml.show();
    } else {
        yesboxHtml.hide();
    }
    
    
    
    
     var yesbox1Html = $("#checkyesbox1");
    $("#help22 input[type=radio]").change(function() {
        var checkbox = $(this);
        if (checkbox.val() === "yes") {
            yesbox1Html.hide();
        } else if (checkbox.val() === "no") {
            yesbox1Html.show();
        }
    });
    
    if ($("#radio-indent9-2").is(":checked")) {
        yesbox1Html.show();
    } else {
        yesbox1Html.hide();
    }
    
  
    
  $('.button1[target="boxone"]').click(function(){
   
    $('#boxone').toggle();
});
$('.summary[target="boxone"]').click(function(){
    $('#boxone').hide();
 
});
    
    
      $('.button1[target="boxtwo"]').click(function(){
   
    $('#boxtwo').toggle();
});
$('.summary[target="boxtwo"]').click(function(){
    $('#boxtwo').hide();
 
});


    //v6 radio routing questions 
    
    $("#question-submit").click(function(e) {
        e.preventDefault();
        
        var employer = $('input[name="Employer"]').val();
        var url = "";
        if ($("#radio-1").is(":checked")) {
            url = "/mb6/mb6-remove?employer=" + employer;
        } else if ($("#radio-2").is(":checked")) {
            url = "/mb6/mb6-update?employer=" + employer;
        }
        
        if (url.length > 0) {
            window.location = url;
        }
    });
    
    
    
     $("#question-submit2").click(function(e) {
        e.preventDefault();
        
        var employer = $('input[name="Employer"]').val();
        var url = "";
        if ($("#radio-inline-1").is(":checked")) {
            url = "/mb6/mb6-remove?employer=" + employer;
        } else if ($("#radio-inline-2").is(":checked")) {
            url = "/mb6/mb6-home" ;
        }
        
        if (url.length > 0) {
            window.location = url;
        }
    });
    
    
      $("#question-submit3").click(function(e) {
        e.preventDefault();
        
        var employer = $('input[name="Employer"]').val();
        var url = "";
        if ($("#radio-inline-1").is(":checked")) {
            url = "/mb6/mb6-finish" ;
        } else if ($("#radio-inline-2").is(":checked")) {
            url = "/mb6/mb6-question-a?employer=" + employer ;
        }
        
        if (url.length > 0) {
            window.location = url;
        }
    });
    
    
    
      $("#question-submit4").click(function(e) {
        e.preventDefault();
        
        var employer = $('input[name="Employer"]').val();
        var url = "";
        if ($("#radio-inline-1").is(":checked")) {
            url = "/mb6/mb6-finish" ;
        } else if ($("#radio-inline-2").is(":checked")) {
            url = "/mb6/mb6-home";
        }
        
        if (url.length > 0) {
            window.location = url;
        }
    });
    
    
    
     $("#question-submit5").click(function(e) {
        e.preventDefault();
        
        var employer = $('input[name="Employer"]').val();
        var updatedVal = $('#update').val();
         
        var url = "";
        if ($("#radio-indent9-2").is(":checked") && updatedVal.length > 0) {
            url = "/mb6/mb6-summary?employer=" + employer + "&update=" + updatedVal;
        } else if ($("#radio-indent9-1").is(":checked")) {
            url = "/mb6/mb6-done";
        }
        
        if (url.length > 0) {
           window.location = url;
        }
    });
   
    
    
      //v7 radio routing questions 
       $("#question-submit-v7").click(function(e) {
        e.preventDefault();
        
        var employer = $('input[name="Employer"]').val();
        var url = "";
        if ($("#radio-1").is(":checked")) {
            url = "/mb7/mb7-remove?employer=" + employer;
        } else if ($("#radio-2").is(":checked")) {
            url = "/mb7/mb7-update?employer=" + employer;
        }
        
        if (url.length > 0) {
            window.location = url;
        }
    });
    
    
      $("#question-submit2-v7").click(function(e) {
        e.preventDefault();
        
        var employer = $('input[name="Employer"]').val();
        var url = "";
        if ($("#radio-inline-1").is(":checked")) {
            url = "/mb7/mb7-remove?employer=" + employer;
        } else if ($("#radio-inline-2").is(":checked")) {
            url = "/mb7/mb7-home" ;
        }
        
        if (url.length > 0) {
            window.location = url;
        }
    });
    
    
      $("#question-submit3-v7").click(function(e) {
        e.preventDefault();
        
        var employer = $('input[name="Employer"]').val();
        var url = "";
        if ($("#radio-inline-1").is(":checked")) {
            url = "/mb7/mb7-finish" ;
        } else if ($("#radio-inline-2").is(":checked")) {
            url = "/mb7/mb7-question-a?employer=" + employer ;
        }
        
        if (url.length > 0) {
            window.location = url;
        }
    });
    
    
    
      $("#question-submit4-v7").click(function(e) {
        e.preventDefault();
        
        var employer = $('input[name="Employer"]').val();
        var url = "";
        if ($("#radio-inline-1").is(":checked")) {
            url = "/mb7/mb7-finish" ;
        } else if ($("#radio-inline-2").is(":checked")) {
            url = "/mb7/mb7-home";
        }
        
        if (url.length > 0) {
            window.location = url;
        }
    });
    
    
    
     $("#question-submit5-v7").click(function(e) {
        e.preventDefault();
        
        var employer = $('input[name="Employer"]').val();
        var updatedVal = $('#update').val();
         
        var url = "";
        if ($("#radio-indent9-2").is(":checked") && updatedVal.length > 0) {
            url = "/mb7/mb7-summary?employer=" + employer + "&update=" + updatedVal;
        } else if ($("#radio-indent9-1").is(":checked")) {
            url = "/mb7/mb7-done";
        }
        
        if (url.length > 0) {
           window.location = url;
        }
    });
    
    
    

    
    
});

        
        
        




    