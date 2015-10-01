var userName,
    medBen = 5000,
    medBenOne = 1000,
    medBenTwo,
    flag,
    displayFlag = 'false',
    remove,
    //mbv2
    starBucks = 'Starbucks',
    costaCoffee  = 'Costa Coffee',
    sbBen = 400,
    ccBen = 600,
    employer,
    currentValue,
    tempValue,
    addedAmount,
    addedEmployer;

var resetFunction = function() {
    sbBen = 400;
    ccBen = 600;
    addedEmployer = undefined;
    addedAmount = 0;
};

var summaryFunction = function() {
    if (employer == 'Starbucks') {
        currentValue = sbBen;
    } else if (employer == 'Costa') {
        currentValue = ccBen;
    }
};

var updateFunction = function() {
    if (employer == 'Starbucks') {
        sbBen = tempValue;
    } else if (employer == 'Costa') {
        ccBen = tempValue;
    }
};

var flagCheck = function () {
    if (flag === 'true') {
        medBen = medBenOne;
    } else if (flag === 'false') {
        medBen = medBenTwo;
    }
};

if (medBenOne === '0') {
    alert();
}

var summaryAmounts = function() {
    if (flag === 'true') {
        medBenOne = medBen;
    } else {
        medBenTwo = medBen;
    }
};

module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {

      res.render('index',
                {'assetPath' : assetPath});

    });
      
    app.get('/flatrate', function (req, res) {
        res.render('flatrate',
            {'assetPath' : assetPath});
    });
      
    app.get('/med-ben', function (req, res) {
        res.render('med-ben',
            {'assetPath' : assetPath});
    });
      
       app.get('/car-service', function (req, res) {
        res.render('car-service',
            {'assetPath' : assetPath});
    });

    app.get('/sample', function (req, res) {

      res.render('sample',
                {'assetPath' : assetPath});
    });

    /* Example pages */

    app.get('/examples/template-partial-areas', function (req, res) {
      res.render('examples/template_partial_areas',
                {'assetPath' : assetPath});
    });

    /* Elements pages */

    app.get('/examples/elements/intro', function (req, res) {
      res.render('examples/elements/intro', {'assetPath' : assetPath });
    });

    app.get('/examples/elements/grid-layout', function (req, res) {
      res.render('examples/elements/grid_layout', {'assetPath' : assetPath });
    });

    app.get('/examples/elements/typography', function (req, res) {
      res.render('examples/elements/typography', {'assetPath' : assetPath });
    });

    app.get('/examples/elements/forms', function (req, res) {
      res.render('examples/elements/forms', {'assetPath' : assetPath });
    });

    app.get('/start.html', function (req, res) {
      res.render('start', {'assetPath' : assetPath });
    });
      
    app.get('/your-employment.html', function (req, res) {
      res.render('your-employment', {'assetPath' : assetPath });
    });
    
    app.get('/your-industry.html', function (req, res) {
      res.render('your-industry', {'assetPath' : assetPath });
    });
    
    app.get('/end.html', function (req, res) {
      res.render('end', {'assetPath' : assetPath });
    });
      
    app.get('/summary.html', function (req, res) {
      res.render('summary', {'assetPath' : assetPath });
    });
      
    app.get('/summary-other.html', function (req, res) {
      res.render('summary-other', {'assetPath' : assetPath });
    });
                        
    app.get('/occupation-other.html', function (req, res) {
      res.render('occupation-other', {'assetPath' : assetPath });
    });

    app.get('/error.html', function (req, res) {
      res.render('error', {'assetPath' : assetPath });
    });
      
    /*Occupations */
            
    app.get('/oc/aluminium.html', function (req, res) {
      res.render('oc/aluminium', {'assetPath' : assetPath });
    });
      
    app.get('/oc/agriculture.html', function (req, res) {
      res.render('oc/agriculture', {'assetPath' : assetPath });
    });
      
    app.get('/oc/banks.html', function (req, res) {
      res.render('oc/banks', {'assetPath' : assetPath });
    });
      
    app.get('/oc/brass.html', function (req, res) {
      res.render('oc/brass', {'assetPath' : assetPath });
    });
      
    app.get('/oc/building.html', function (req, res) {
      res.render('oc/building', {'assetPath' : assetPath });
    });
      
    app.get('/oc/construction.html', function (req, res) {
      res.render('oc/construction', {'assetPath' : assetPath });
    });
      
    app.get('/oc/clothing.html', function (req, res) {
      res.render('oc/clothing', {'assetPath' : assetPath });
    });
      
    app.get('/oc/docks.html', function (req, res) {
      res.render('oc/docks', {'assetPath' : assetPath });
    });
      
    app.get('/oc/electrical.html', function (req, res) {
      res.render('oc/electrical', {'assetPath' : assetPath });
    });
      
    app.get('/oc/engineering.html', function (req, res) {
      res.render('oc/engineering', {'assetPath' : assetPath });
    });
            
    app.get('/oc/fire.html', function (req, res) {
      res.render('oc/fire', {'assetPath' : assetPath });
    });
      
    app.get('/oc/food.html', function (req, res) {
      res.render('oc/food', {'assetPath' : assetPath });
    });

    app.get('/oc/retail.html', function (req, res) {
      res.render('oc/retail', {'assetPath' : assetPath });
    });

    app.get('/oc/forestry.html', function (req, res) {
      res.render('oc/forestry', {'assetPath' : assetPath });
    });

    app.get('/oc/glass.html', function (req, res) {
      res.render('oc/glass', {'assetPath' : assetPath });
    });

    app.get('/oc/healthcare.html', function (req, res) {
      res.render('oc/healthcare', {'assetPath' : assetPath });
    });

    app.get('/oc/heating.html', function (req, res) {
      res.render('oc/heating', {'assetPath' : assetPath });
    });
      
    app.get('/oc/iron-steel.html', function (req, res) {
      res.render('oc/iron-steel', {'assetPath' : assetPath });
    });
      
    app.get('/oc/iron-mining.html', function (req, res) {
      res.render('oc/iron-mining', {'assetPath' : assetPath });
    });
      
    app.get('/oc/leather.html', function (req, res) {
      res.render('oc/leather', {'assetPath' : assetPath });
    });
      
    app.get('/oc/materials.html', function (req, res) {
      res.render('oc/materials', {'assetPath' : assetPath });
    });
      
    app.get('/oc/metals.html', function (req, res) {
      res.render('oc/metals', {'assetPath' : assetPath });
    });
      
    app.get('/oc/other.html', function (req, res) {
      res.render('oc/other', {'assetPath' : assetPath });
    });
      
    app.get('/oc/particular-engineering.html', function (req, res) {
      res.render('oc/particular-engineering', {'assetPath' : assetPath });
    });
      
    app.get('/oc/police.html', function (req, res) {
      res.render('oc/police', {'assetPath' : assetPath });
    });
      
    app.get('/oc/printing.html', function (req, res) {
      res.render('oc/printing', {'assetPath' : assetPath });
    });
      
    app.get('/oc/prison.html', function (req, res) {
      res.render('oc/prison', {'assetPath' : assetPath });
    });
      
    app.get('/oc/quarrying.html', function (req, res) {
      res.render('oc/quarrying', {'assetPath' : assetPath });
    });
      
    app.get('/oc/rail.html', function (req, res) {
      res.render('oc/rail', {'assetPath' : assetPath });
    });
      
    app.get('/oc/seamen.html', function (req, res) {
      res.render('oc/seamen', {'assetPath' : assetPath });
    });
      
    app.get('/oc/shipyards.html', function (req, res) {
      res.render('oc/shipyards', {'assetPath' : assetPath });
    });
      
    app.get('/oc/textile.html', function (req, res) {
      res.render('oc/textile', {'assetPath' : assetPath });
    });
      
    app.get('/oc/transport.html', function (req, res) {
      res.render('oc/transport', {'assetPath' : assetPath });
    });
      
    app.get('/oc/vehicles.html', function (req, res) {
      res.render('oc/vehicles', {'assetPath' : assetPath });
    });
      
    app.get('/oc/wood.html', function (req, res) {
      res.render('oc/wood', {'assetPath' : assetPath });
    });
      
    /*DropDown */
    
    app.get('/dd/dd-start.html', function (req, res) {
      res.render('dd/dd-start', {'assetPath' : assetPath });
    });
      
    app.get('/dd/dd.html', function (req, res) {
      res.render('dd/dd', {'assetPath' : assetPath });
    });
    
    app.get('/dd/dd-industry.html', function (req, res) {
      res.render('dd/dd-industry', {'assetPath' : assetPath });
    });
      
    app.get('/dd/dd-employment.html', function (req, res) {
      res.render('dd/dd-employment', {'assetPath' : assetPath });
    });
      
    app.get('/dd/dd-occupation.html', function (req, res) {
      res.render('dd/dd-occupation', {'assetPath' : assetPath });
    });
      
    app.get('/dd/dd-not-listed.html', function (req, res) {
      res.render('dd/dd-not-listed', {'assetPath' : assetPath });
    });
      
    /* FRE version 2 */
    app.get('/employment-summary.html', function (req, res) {
      res.render('employment-summary', {'assetPath' : assetPath });
    });
      
      
      
      /* Car Service */
    app.get('/car-service/car-1.html', function (req, res) {
      res.render('car-service/car-1', {'assetPath' : assetPath });
    });
      
      
      app.get('/car-service/car-2.html', function (req, res) {
      res.render('car-service/car-2', {'assetPath' : assetPath });
    });
      
       app.get('/car-service/car-3.html', function (req, res) {
      res.render('car-service/car-3', {'assetPath' : assetPath });
    });
      
      
       app.get('/car-service/car-4.html', function (req, res) {
      res.render('car-service/car-4', {'assetPath' : assetPath });
    });
      
      
      app.get('/car-service/car-5.html', function (req, res) {
      res.render('car-service/car-5', {'assetPath' : assetPath });
    });
      
       app.get('/car-service/car-6.html', function (req, res) {
      res.render('car-service/car-6', {'assetPath' : assetPath });
    });
      
             app.get('/car-service/car-7.html', function (req, res) {
      res.render('car-service/car-7', {'assetPath' : assetPath });
    });
      
      
             app.get('/car-service/car-8.html', function (req, res) {
      res.render('car-service/car-8', {'assetPath' : assetPath });
    });
      
      
             app.get('/car-service/car-9.html', function (req, res) {
      res.render('car-service/car-9', {'assetPath' : assetPath });
    });
      
      app.get('/car-service/car-10.html', function (req, res) {
      res.render('car-service/car-10', {'assetPath' : assetPath });
    });
      
      
      app.get('/car-service/car-11.html', function (req, res) {
      res.render('car-service/car-11', {'assetPath' : assetPath });
    });
      
      
      app.get('/car-service/car-12.html', function (req, res) {
      res.render('car-service/car-12', {'assetPath' : assetPath });
    });
      
        app.get('/car-service/splash-page.html', function (req, res) {
      res.render('car-service/splash-page', {'assetPath' : assetPath });
    });
      
       app.get('/car-service/sprint-31-confirmation-page.html', function (req, res) {
      res.render('car-service/sprint-31-confirmation-page', {'assetPath' : assetPath });
    });
      
      app.get('/car-service/sprint-31-confirmation-page-standalone.html', function (req, res) {
      res.render('car-service/sprint-31-confirmation-page-standalone', {'assetPath' : assetPath });
    });
      
       app.get('/car-service/service-breadcrumb.html', function (req, res) {
      res.render('car-service/service-breadcrumb', {'assetPath' : assetPath });
    });
      
       app.get('/car-service/integrated-breadcrumb.html', function (req, res) {
      res.render('car-service/integrated-breadcrumb', {'assetPath' : assetPath });
    });
      
       app.get('/car-service/service-breadcrumb-journey.html', function (req, res) {
      res.render('car-service/service-breadcrumb-journey', {'assetPath' : assetPath });
    });
      
       app.get('/car-service/integrated-breadcrumb-journey.html', function (req, res) {
      res.render('car-service/integrated-breadcrumb-journey', {'assetPath' : assetPath });
    });
      
      
      
      /* TES SERVICE */
      
         app.get('/mb7/mb7-income-tax.html', function (req, res) {
      res.render('mb7/mb7-income-tax', {'assetPath' : assetPath });
    });
      
         app.get('/mb7/mb7-about-a-change.html', function (req, res) {
      res.render('mb7/mb7-about-a-change', {'assetPath' : assetPath });
    });
      
        
       app.get('/mb7-2/mb7-2-income-tax.html', function (req, res) {
      res.render('mb7-2/mb7-2-income-tax', {'assetPath' : assetPath });
    });
      
         app.get('/mb7-2/mb7-2-about-a-change.html', function (req, res) {
      res.render('mb7-2/mb7-2-about-a-change', {'assetPath' : assetPath });
    });
      
      
      
        app.get('/mb7-3/mb7-3-income-tax.html', function (req, res) {
      res.render('mb7-3/mb7-3-income-tax', {'assetPath' : assetPath });
    });
      
         app.get('/mb7-3/mb7-3-about-a-change.html', function (req, res) {
      res.render('mb7-3/mb7-3-about-a-change', {'assetPath' : assetPath });
    });
      
      
         app.get('/mb8/mb8-tax-on-income.html', function (req, res) {
      res.render('mb8/mb8-tax-on-income', {'assetPath' : assetPath });
    });
      
        app.get('/mb8/mb8-check-income-tax.html', function (req, res) {
      res.render('mb8/mb8-check-income-tax', {'assetPath' : assetPath });
    });
      
      app.get('/mb8/mb8-tax-codes.html', function (req, res) {
      res.render('mb8/mb8-tax-codes', {'assetPath' : assetPath });
    });
      
         app.get('/mb8/mb8-about-a-change.html', function (req, res) {
      res.render('mb8/mb8-about-a-change', {'assetPath' : assetPath });
    });
      
      
        app.get('/mb8/mb8-error.html', function (req, res) {
      res.render('mb8/mb8-error', {'assetPath' : assetPath });
    });
      
      
          app.get('/mb8-v2/mb8-v2-tax-on-income.html', function (req, res) {
      res.render('mb8-v2/mb8-v2-tax-on-income', {'assetPath' : assetPath });
    });
      
        app.get('/mb8-v2/mb8-v2-check-income-tax.html', function (req, res) {
      res.render('mb8-v2/mb8-v2-check-income-tax', {'assetPath' : assetPath });
    });
      
      app.get('/mb8-v2/mb8-v2-tax-codes.html', function (req, res) {
      res.render('mb8-v2/mb8-v2-tax-codes', {'assetPath' : assetPath });
    });
      
         app.get('/mb8-v2/mb8-v2-about-a-change.html', function (req, res) {
      res.render('mb8-v2/mb8-v2-about-a-change', {'assetPath' : assetPath });
    });
      
      
      
         app.get('/mb8-1/mb8-1-tax-on-income.html', function (req, res) {
      res.render('mb8-1/mb8-1-tax-on-income', {'assetPath' : assetPath });
    });
      
        app.get('/mb8-1/mb8-1-check-income-tax.html', function (req, res) {
      res.render('mb8-1/mb8-1-check-income-tax', {'assetPath' : assetPath });
    });
      
      app.get('/mb8-1/mb8-1-tax-codes.html', function (req, res) {
      res.render('mb8-1/mb8-1-tax-codes', {'assetPath' : assetPath });
    });
      
         app.get('/mb8-1/mb8-1-about-a-change.html', function (req, res) {
      res.render('mb8-1/mb8-1-about-a-change', {'assetPath' : assetPath });
    });
      
      
       

      app.get('/mb9/mb9-tax-on-income.html', function (req, res) {
      res.render('mb9/mb9-tax-on-income', {'assetPath' : assetPath });
    });
      
        app.get('/mb9/mb9-check-income-tax.html', function (req, res) {
      res.render('mb9/mb9-check-income-tax', {'assetPath' : assetPath });
    });
      
      app.get('/mb9/mb9-tax-codes.html', function (req, res) {
      res.render('mb9/mb9-tax-codes', {'assetPath' : assetPath });
    });
      
         app.get('/mb9/mb9-about-a-change.html', function (req, res) {
      res.render('mb9/mb9-about-a-change', {'assetPath' : assetPath });
    });
      
      
        app.get('/mb9/mb9-error.html', function (req, res) {
      res.render('mb9/mb9-error', {'assetPath' : assetPath });
    });
      
       app.get('/mb9/mb9-time-out.html', function (req, res) {
      res.render('mb9/mb9-time-out', {'assetPath' : assetPath });
    });

      
      app.get('/mb9v2/mb9v2-tax-on-income.html', function (req, res) {
      res.render('mb9v2/mb9v2-tax-on-income', {'assetPath' : assetPath });
    });
      
        app.get('/mb9v2/mb9v2-check-income-tax.html', function (req, res) {
      res.render('mb9v2/mb9v2-check-income-tax', {'assetPath' : assetPath });
    });
      
      app.get('/mb9v2/mb9v2-tax-codes.html', function (req, res) {
      res.render('mb9v2/mb9v2-tax-codes', {'assetPath' : assetPath });
    });
      
         app.get('/mb9v2/mb9v2-about-a-change.html', function (req, res) {
      res.render('mb9v2/mb9v2-about-a-change', {'assetPath' : assetPath });
    });

      
      
      
      
      
      
/* Med Bens */
    app.get('/mb/mb-start.html', function (req, res) {
      res.render('mb/mb-start', {'assetPath' : assetPath });
    });
      
    app.get('/mb/mb-summary.html', function (req, res) {
        summaryAmounts();
        res.render('mb/mb-summary', {
          'medBenOne' : medBenOne,
          'medBenTwo' : medBenTwo,
          'flag' : flag,
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb/mb-question.html', function (req, res) {
        flag = req.query.flag;
        flagCheck();
        res.render('mb/mb-question', {
          'assetPath' : assetPath, 
          'flag' : flag, 
          'medBen' : medBen 
        });
    });
      
    app.get('/mb/mb-question2.html', function (req, res) {
      res.render('mb/mb-question2', {'assetPath' : assetPath });
    });
            
    app.get('/mb/mb-question3.html', function (req, res) {
      res.render('mb/mb-question3', {'assetPath' : assetPath });
    });
            
    app.get('/mb/mb-question4.html', function (req, res) {
      res.render('mb/mb-question4', {'assetPath' : assetPath });
    });
            
    app.get('/mb/mb-question5.html', function (req, res) {
        res.render('mb/mb-question5', {
            'assetPath' : assetPath,
            'flag' : flag,
            'medBen' : medBen
        });
    });
      
    app.get('/mb/remove-benefit.html', function (req, res) {
      res.render('mb/remove-benefit', {'assetPath' : assetPath });
    });
           
    app.get('/mb/remove-benefit2.html', function (req, res) {
        medBen = req.query.amount;
        res.render('mb/remove-benefit2', {
            'assetPath' : assetPath,
            'medBen' : medBen,
            'flag' : flag
        });
    });
           
    app.get('/mb/remove-done.html', function (req, res) {
        medBen = req.query.medBen;
        res.render('mb/remove-done', {
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb/remove-done2.html', function (req, res) {
      res.render('mb/remove-done2', {'assetPath' : assetPath });
    });
      
    app.get('/mb/mybens-removed.html', function (req, res) {
      res.render('mb/mybens-removed', {'assetPath' : assetPath });
    });
      
    app.get('/mb/mybens-updated.html', function (req, res) {
      res.render('mb/mybens-updated', {'assetPath' : assetPath });
    });
      
    app.get('/mb/update-benefit.html', function (req, res) {
      res.render('mb/update-benefit', {'assetPath' : assetPath });
    });
      
    app.get('/mb/update-summary.html', function (req, res) {
      res.render('mb/update-summary', {'assetPath' : assetPath });
    });
      
    app.get('/mb/update-done.html', function (req, res) {
      res.render('mb/update-done', {'assetPath' : assetPath });
    });
      
    app.get('/mb/nr-remove.html', function (req, res) {
        res.render('mb/nr-remove', {
            'medBen' : medBen, 
            'assetPath' : assetPath 
        });
    });

    app.get('/mb/mb-error.html', function (req, res) {
      res.render('mb/mb-error', {'assetPath' : assetPath });
    });

    app.get('/test.html', function (req, res) {
      res.render('test', {'assetPath' : assetPath });
    });
      
    app.get('/user.html', function (req, res) {   
        userName = req.query.userName;
        res.render('user', {
            'userName': userName,
            'assetPath' : assetPath
        });
    });
      
/* Med Bens v2 */
    app.get('/mb2/mb2-start.html', function (req, res) {
        resetFunction();
        res.render('mb2/mb2-start', {
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb2/mb2-home', function (req, res) {
        res.render('mb2/mb2-home', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb2/mb2-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb2/mb2-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb2/mb2-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb2/mb2-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb2/mb2-done', function (req, res) {
        updateFunction();
        res.render('mb2/mb2-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb2/mb2-home-updated', function (req, res) {
        res.render('mb2/mb2-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb2/mb2-finish', function (req, res) {
        updateFunction();
        res.render('mb2/mb2-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb2/mb2-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb2/mb2-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });

      
      
      
      
      
    app.get('/mb2/mb2-question.html', function (req, res) {
        flag = req.query.flag;
        flagCheck();
        res.render('mb2/mb2-question', {
          'assetPath' : assetPath, 
          'flag' : flag, 
          'medBen' : medBen 
        });
    });
      
    app.get('/mb2/mb2-question2.html', function (req, res) {
      res.render('mb2/mb2-question2', {'assetPath' : assetPath });
    });
            
    app.get('/mb2/mb2-question3.html', function (req, res) {
      res.render('mb2/mb2-question3', {'assetPath' : assetPath });
    });
            
    app.get('/mb2/mb2-question4.html', function (req, res) {
      res.render('mb2/mb2-question4', {'assetPath' : assetPath });
    });
                  
    app.get('/mb2/mb2-remove-benefit.html', function (req, res) {
      res.render('mb2/mb2-remove-benefit', {'assetPath' : assetPath });
    });
         
      
      
      
      
      
    app.get('/mb2/mb2-remove-benefit2.html', function (req, res) {
        medBen = req.query.amount;
        res.render('mb2/mb2-remove-benefit2', {
            'assetPath' : assetPath,
            'medBen' : medBen,
            'flag' : flag
        });
    });
                 
    app.get('/mb2/mb2-remove-done2.html', function (req, res) {
      res.render('mb2/mb2-remove-done2', {'assetPath' : assetPath });
    });
      
    app.get('/mb2/mb2-mybens-removed.html', function (req, res) {
      res.render('mb2/mb2-mybens-removed', {'assetPath' : assetPath });
    });
      
    app.get('/mb2/mb2-mybens-updated.html', function (req, res) {
      res.render('mb2/mb2-mybens-updated', {'assetPath' : assetPath });
    });
      
    app.get('/mb2/mb2-update-benefit.html', function (req, res) {
      res.render('mb2/mb2-update-benefit', {'assetPath' : assetPath });
    });
      
    app.get('/mb2/mb2-update-summary.html', function (req, res) {
      res.render('mb2/mb2-update-summary', {'assetPath' : assetPath });
    });
      
    app.get('/mb2/mb2-update-done.html', function (req, res) {
      res.render('mb2/mb2-update-done', {'assetPath' : assetPath });
    });
      
    app.get('/mb2/mb2-error.html', function (req, res) {
      res.render('mb2/mb2-error', {'assetPath' : assetPath });
    });

    app.get('/test.html', function (req, res) {
      res.render('test', {'assetPath' : assetPath });
    });
      
    app.get('/user.html', function (req, res) {   
        userName = req.query.userName;
        res.render('user', {
            'userName': userName,
            'assetPath' : assetPath
        });
    });

      
/*mb3 */
    app.get('/mb3/mb3-start.html', function (req, res) {
        resetFunction();
        res.render('mb3/mb3-start', {
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb3/mb3-home', function (req, res) {
        res.render('mb3/mb3-home', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb3/mb3-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb3/mb3-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb3/mb3-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb3/mb3-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb3/mb3-done', function (req, res) {
        updateFunction();
        res.render('mb3/mb3-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb3/mb3-home-updated', function (req, res) {
        res.render('mb3/mb3-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb3/mb3-finish', function (req, res) {
        updateFunction();
        res.render('mb3/mb3-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb3/mb3-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb3/mb3-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
      
      
      /*mb4 */
    app.get('/mb4/mb4-start.html', function (req, res) {
        resetFunction();
        res.render('mb4/mb4-start', {
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb4/mb4-home', function (req, res) {
        res.render('mb4/mb4-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb4/mb4-add', function (req, res) {
        res.render('mb4/mb4-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb4/mb4-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb4/mb4-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb4/mb4-exit-survey', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb4/mb4-exit-survey', {
          'assetPath' : assetPath 
        });
    });
      
    
      
      
      
    app.get('/mb4/mb4-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb4/mb4-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
       app.get('/mb4/mb4-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb4/mb4-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb4/mb4-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb4/mb4-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb4/mb4-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb4/mb4-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb4/mb4-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb4/mb4-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb4/mb4-done', function (req, res) {
        updateFunction();
        res.render('mb4/mb4-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb4/mb4-home-updated', function (req, res) {
        res.render('mb4/mb4-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb4/mb4-finish', function (req, res) {
        updateFunction();
        res.render('mb4/mb4-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb4/mb4-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb4/mb4-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });

      
   
      
         /*mb5 */
    app.get('/mb5/mb5-start.html', function (req, res) {
        resetFunction();
        res.render('mb5/mb5-start', {
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb5/mb5-home', function (req, res) {
        res.render('mb5/mb5-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb5/mb5-add', function (req, res) {
        res.render('mb5/mb5-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb5/mb5-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb5/mb5-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb5/mb5-exit-survey', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb5/mb5-exit-survey', {
          'assetPath' : assetPath 
        });
    });
      
    
      
      
      
    app.get('/mb5/mb5-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb5/mb5-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
       app.get('/mb5/mb5-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb5/mb5-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb5/mb5-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb5/mb5-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb5/mb5-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb5/mb5-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb5/mb5-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb5/mb5-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb5/mb5-done', function (req, res) {
        updateFunction();
        res.render('mb5/mb5-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb5/mb5-home-updated', function (req, res) {
        res.render('mb5/mb5-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb5/mb5-finish', function (req, res) {
        updateFunction();
        res.render('mb5/mb5-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb5/mb5-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb5/mb5-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb5/mb5-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb5/mb5-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
   
   
     
      
      /*mb6 */
    app.get('/mb6/mb6-start.html', function (req, res) {
        resetFunction();
        res.render('mb6/mb6-start', {
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6/mb6-home', function (req, res) {
        res.render('mb6/mb6-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb6/mb6-add', function (req, res) {
        res.render('mb6/mb6-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6/mb6-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb6/mb6-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb6/mb6-exit-survey', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb6/mb6-exit-survey', {
          'assetPath' : assetPath 
        });
    });
      
       
      
    
      
      
      
    
         
    app.get('/mb6/mb6-question-a', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6/mb6-question-a', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb6/mb6-question-b', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6/mb6-question-b', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
    app.get('/mb6/mb6-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6/mb6-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      app.get('/mb6/mb6-update-b-1', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6/mb6-update-b-1', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
       app.get('/mb6/mb6-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6/mb6-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb6/mb6-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb6/mb6-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
        app.get('/mb6/mb6-summary-b-1', function (req, res) {
        tempValue = req.query.update;
        res.render('mb6/mb6-summary-b-1', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
       app.get('/mb6/mb6-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb6/mb6-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb6/mb6-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb6/mb6-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb6/mb6-done', function (req, res) {
        if (req.query.amount) {
            tempValue = req.query.amount;
            updateFunction();
        }
        res.render('mb6/mb6-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6/mb6-home-updated', function (req, res) {
        res.render('mb6/mb6-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb6/mb6-finish', function (req, res) {
        updateFunction();
        res.render('mb6/mb6-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6/mb6-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb6/mb6-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb6/mb6-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb6/mb6-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
   

      
    
      
      
      
      
        /*mb6.1 */
    app.get('/mb6-5/mb6-5-start.html', function (req, res) {
        resetFunction();
        res.render('mb6-5/mb6-5-start', {
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6-5/mb6-5-home', function (req, res) {
        res.render('mb6-5/mb6-5-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb6-5/mb6-5-add', function (req, res) {
        res.render('mb6-5/mb6-5-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6-5/mb6-5-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb6-5/mb6-5-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb6-5/mb6-5-exit-survey', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb6-5/mb6-5-exit-survey', {
          'assetPath' : assetPath 
        });
    });
      
       
      
    
      
      
      
    
         
    app.get('/mb6-5/mb6-5-question-a', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6-5/mb6-5-question-a', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb6-5/mb6-5-question-b', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6-5/mb6-5-question-b', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
    app.get('/mb6-5/mb6-5-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6-5/mb6-5-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      app.get('/mb6-5/mb6-5-update-b-1', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6-5/mb6-5-update-b-1', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
       app.get('/mb6-5/mb6-5-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6-5/mb6-5-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb6-5/mb6-5-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb6-5/mb6-5-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
        app.get('/mb6-5/mb6-5-summary-b-1', function (req, res) {
        tempValue = req.query.update;
        res.render('mb6-5/mb6-5-summary-b-1', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
       app.get('/mb6-5/mb6-5-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb6-5/mb6-5-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb6-5/mb6-5-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb6-5/mb6-5-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb6-5/mb6-5-done', function (req, res) {
        if (req.query.amount) {
            tempValue = req.query.amount;
            updateFunction();
        }
        res.render('mb6-5/mb6-5-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6-5/mb6-5-home-updated', function (req, res) {
        res.render('mb6-5/mb6-5-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb6-5/mb6-5-finish', function (req, res) {
        updateFunction();
        res.render('mb6-5/mb6-5-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6-5/mb6-5-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb6-5/mb6-5-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb6-5/mb6-5-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb6-5/mb6-5-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
   

        app.get('/mb6-5/mb6-5-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb6-5/mb6-5-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
      
     
      
      
      /*mb6.5 - version b */
    app.get('/mb6-5-vb/mb6-5-start-vb.html', function (req, res) {
        resetFunction();
        res.render('mb6-5-vb/mb6-5-start-vb', {
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6-5-vb/mb6-5-home-vb', function (req, res) {
        res.render('mb6-5-vb/mb6-5-home-vb', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb6-5-vb/mb6-5-add-vb', function (req, res) {
        res.render('mb6-5-vb/mb6-5-add-vb', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6-5-vb/mb6-5-add-amount-vb', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb6-5-vb/mb6-5-add-amount-vb', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb6-5-vb/mb6-5-exit-survey-vb', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb6-5-vb/mb6-5-exit-survey-vb', {
          'assetPath' : assetPath 
        });
    });
      
       
      
    
      
      
      
    
         
    app.get('/mb6-5-vb/mb6-5-question-a-vb', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6-5-vb/mb6-5-question-a-vb', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb6-5-vb/mb6-5-question-b-vb', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6-5-vb/mb6-5-question-b-vb', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
    app.get('/mb6-5-vb/mb6-5-update-vb', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6-5-vb/mb6-5-update-vb', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      app.get('/mb6-5-vb/mb6-5-update-b-1-vb', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6-5-vb/mb6-5-update-b-1-vb', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
       app.get('/mb6-5-vb/mb6-5-update-only-vb', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb6-5-vb/mb6-5-update-only-vb', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb6-5-vb/mb6-5-summary-vb', function (req, res) {
        tempValue = req.query.update;
        res.render('mb6-5-vb/mb6-5-summary-vb', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
        app.get('/mb6-5-vb/mb6-5-summary-b-1-vb', function (req, res) {
        tempValue = req.query.update;
        res.render('mb6-5-vb/mb6-5-summary-b-1-vb', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
       app.get('/mb6-5-vb/mb6-5-summary-add-vb', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb6-5-vb/mb6-5-summary-add-vb', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb6-5-vb/mb6-5-summary-update-only-vb', function (req, res) {
        tempValue = req.query.update;
        res.render('mb6-5-vb/mb6-5-summary-update-only-vb', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb6-5-vb/mb6-5-done-vb', function (req, res) {
        if (req.query.amount) {
            tempValue = req.query.amount;
            updateFunction();
        }
        res.render('mb6-5-vb/mb6-5-done-vb', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6-5-vb/mb6-5-home-updated-vb', function (req, res) {
        res.render('mb6-5-vb/mb6-5-home-updated-vb', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb6-5-vb/mb6-5-finish-vb', function (req, res) {
        updateFunction();
        res.render('mb6-5-vb/mb6-5-finish-vb', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb6-5-vb/mb6-5-remove-vb', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb6-5-vb/mb6-5-remove-vb', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb6-5-vb/mb6-5-remove-b-vb', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb6-5-vb/mb6-5-remove-b-vb', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
   

        app.get('/mb6-5-vb/mb6-5-remove-b-vb', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb6-5-vb/mb6-5-remove-b-vb', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : sbBen,
            'assetPath' : assetPath 
        });
    });
      

      
      
      
      
      
      
      
      
      /*mb7 */
      
      
      
    app.get('/mb7/mb7-start.html', function (req, res) {
        resetFunction();
        res.render('mb7/mb7-start', {
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7/mb7-home', function (req, res) {
        res.render('mb7/mb7-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb7/mb7-add', function (req, res) {
        res.render('mb7/mb7-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7/mb7-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb7/mb7-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb7/mb7-exit-survey', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb7/mb7-exit-survey', {
          'assetPath' : assetPath 
        });
    });
      
       
      
    
      
      
      
    
         
    app.get('/mb7/mb7-question-a', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7/mb7-question-a', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb7/mb7-question-b', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7/mb7-question-b', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
    app.get('/mb7/mb7-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7/mb7-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      app.get('/mb7/mb7-update-b-1', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7/mb7-update-b-1', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
       app.get('/mb7/mb7-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7/mb7-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb7/mb7-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb7/mb7-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
        app.get('/mb7/mb7-summary-b-1', function (req, res) {
        tempValue = req.query.update;
        res.render('mb7/mb7-summary-b-1', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
       app.get('/mb7/mb7-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb7/mb7-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb7/mb7-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb7/mb7-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb7/mb7-done', function (req, res) {
        if (req.query.amount) {
            tempValue = req.query.amount;
            updateFunction();
        }
        res.render('mb7/mb7-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7/mb7-home-updated', function (req, res) {
        res.render('mb7/mb7-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb7/mb7-finish', function (req, res) {
        updateFunction();
        res.render('mb7/mb7-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7/mb7-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb7/mb7-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb7/mb7-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb7/mb7-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
   

      
        app.get('/mb7/mb7-income-tax-updated', function (req, res) {
        res.render('mb7/mb7-income-tax-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       app.get('/mb7/mb7-income-tax-updated', function (req, res) {
        res.render('mb7/mb7-income-tax-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
  
      
      
      
           app.get('/mb7/mb7-ended-amend', function (req, res) {
        res.render('mb7/mb7-ended-amend', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
           app.get('/mb7/mb7-about-a-change-amended', function (req, res) {
        res.render('mb7/mb7-about-a-change-amended', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
    
      
      
      
      
      
      
      
      
      /*mb7-2 */
      
      
      
    app.get('/mb7-2/mb7-2-start.html', function (req, res) {
        resetFunction();
        res.render('mb7-2/mb7-2-start', {
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7-2/mb7-2-home', function (req, res) {
        res.render('mb7-2/mb7-2-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb7-2/mb7-2-add', function (req, res) {
        res.render('mb7-2/mb7-2-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7-2/mb7-2-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb7-2/mb7-2-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb7-2/mb7-2-exit-survey', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb7-2/mb7-2-exit-survey', {
          'assetPath' : assetPath 
        });
    });
      
       
      
    
      
      
      
    
         
    app.get('/mb7-2/mb7-2-question-a', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7-2/mb7-2-question-a', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb7-2/mb7-2-question-b', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7-2/mb7-2-question-b', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
    app.get('/mb7-2/mb7-2-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7-2/mb7-2-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      app.get('/mb7-2/mb7-2-update-b-1', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7-2/mb7-2-update-b-1', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
       app.get('/mb7-2/mb7-2-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7-2/mb7-2-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb7-2/mb7-2-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb7-2/mb7-2-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
        app.get('/mb7-2/mb7-2-summary-b-1', function (req, res) {
        tempValue = req.query.update;
        res.render('mb7-2/mb7-2-summary-b-1', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
       app.get('/mb7-2/mb7-2-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb7-2/mb7-2-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb7-2/mb7-2-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb7-2/mb7-2-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb7-2/mb7-2-done', function (req, res) {
        if (req.query.amount) {
            tempValue = req.query.amount;
            updateFunction();
        }
        res.render('mb7-2/mb7-2-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7-2/mb7-2-home-updated', function (req, res) {
        res.render('mb7-2/mb7-2-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb7-2/mb7-2-finish', function (req, res) {
        updateFunction();
        res.render('mb7-2/mb7-2-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7-2/mb7-2-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb7-2/mb7-2-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb7-2/mb7-2-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb7-2/mb7-2-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
   

      
        app.get('/mb7-2/mb7-2-income-tax-updated', function (req, res) {
        res.render('mb7-2/mb7-2-income-tax-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       app.get('/mb7-2/mb7-2-income-tax-updated', function (req, res) {
        res.render('mb7-2/mb7-2-income-tax-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
  
      
      
      
           app.get('/mb7-2/mb7-2-ended-amend', function (req, res) {
        res.render('mb7-2/mb7-2-ended-amend', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
           app.get('/mb7-2/mb7-2-about-a-change-amended', function (req, res) {
        res.render('mb7-2/mb7-2-about-a-change-amended', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });

      
      
      
      
      
      
      
      
      /*mb7-3 */
      
      
      
    app.get('/mb7-3/mb7-3-start.html', function (req, res) {
        resetFunction();
        res.render('mb7-3/mb7-3-start', {
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7-3/mb7-3-home', function (req, res) {
        res.render('mb7-3/mb7-3-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb7-3/mb7-3-add', function (req, res) {
        res.render('mb7-3/mb7-3-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7-3/mb7-3-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb7-3/mb7-3-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb7-3/mb7-3-exit-survey', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb7-3/mb7-3-exit-survey', {
          'assetPath' : assetPath 
        });
    });
      
       
      
    
      
      
      
    
         
    app.get('/mb7-3/mb7-3-question-a', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7-3/mb7-3-question-a', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb7-3/mb7-3-question-b', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7-3/mb7-3-question-b', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
    app.get('/mb7-3/mb7-3-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7-3/mb7-3-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      app.get('/mb7-3/mb7-3-update-b-1', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7-3/mb7-3-update-b-1', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
       app.get('/mb7-3/mb7-3-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb7-3/mb7-3-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb7-3/mb7-3-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb7-3/mb7-3-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
        app.get('/mb7-3/mb7-3-summary-b-1', function (req, res) {
        tempValue = req.query.update;
        res.render('mb7-3/mb7-3-summary-b-1', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
       app.get('/mb7-3/mb7-3-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb7-3/mb7-3-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb7-3/mb7-3-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb7-3/mb7-3-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb7-3/mb7-3-done', function (req, res) {
        if (req.query.amount) {
            tempValue = req.query.amount;
            updateFunction();
        }
        res.render('mb7-3/mb7-3-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7-3/mb7-3-home-updated', function (req, res) {
        res.render('mb7-3/mb7-3-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb7-3/mb7-3-finish', function (req, res) {
        updateFunction();
        res.render('mb7-3/mb7-3-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb7-3/mb7-3-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb7-3/mb7-3-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb7-3/mb7-3-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb7-3/mb7-3-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
   

      
        app.get('/mb7-3/mb7-3-income-tax-updated', function (req, res) {
        res.render('mb7-3/mb7-3-income-tax-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       app.get('/mb7-3/mb7-3-income-tax-updated', function (req, res) {
        res.render('mb7-3/mb7-3-income-tax-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
  
      
      
      
           app.get('/mb7-3/mb7-3-ended-amend', function (req, res) {
        res.render('mb7-3/mb7-3-ended-amend', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
           app.get('/mb7-3/mb7-3-about-a-change-amended', function (req, res) {
        res.render('mb7-3/mb7-3-about-a-change-amended', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });

      
      
      /*mb8 */
      
      
      
    app.get('/mb8/mb8-start.html', function (req, res) {
        resetFunction();
        res.render('mb8/mb8-start', {
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8/mb8-home', function (req, res) {
        res.render('mb8/mb8-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb8/mb8-add', function (req, res) {
        res.render('mb8/mb8-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8/mb8-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb8/mb8-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb8/mb8-exit-survey', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb8/mb8-exit-survey', {
          'assetPath' : assetPath 
        });
    });
      
       
      
    
      
      
      
    
         
    app.get('/mb8/mb8-question-a', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8/mb8-question-a', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb8/mb8-question-b', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8/mb8-question-b', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
    app.get('/mb8/mb8-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8/mb8-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
      
      
       app.get('/mb8/mb8-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8/mb8-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb8/mb8-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb8/mb8-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       
      
      
      
       app.get('/mb8/mb8-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb8/mb8-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb8/mb8-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb8/mb8-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb8/mb8-done', function (req, res) {
        if (req.query.amount) {
            tempValue = req.query.amount;
            updateFunction();
        }
        res.render('mb8/mb8-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8/mb8-home-updated', function (req, res) {
        res.render('mb8/mb8-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb8/mb8-finish', function (req, res) {
        updateFunction();
        res.render('mb8/mb8-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8/mb8-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb8/mb8-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb8/mb8-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb8/mb8-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
   

      
        app.get('/mb8/mb8-tax-on-income-updated', function (req, res) {
        res.render('mb8/mb8-tax-on-income-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       app.get('/mb8/mb8-check-income-tax-updated', function (req, res) {
        res.render('mb8/mb8-check-income-tax-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
  
      
      
      
           app.get('/mb8/mb8-ended-amend', function (req, res) {
        res.render('mb8/mb8-ended-amend', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
           app.get('/mb8/mb8-about-a-change-amended', function (req, res) {
        res.render('mb8/mb8-about-a-change-amended', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       
           app.get('/mb8/mb8-tax-on-income', function (req, res) {
        res.render('mb8/mb8-tax-on-income', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb8/mb8-tax-codes-updated', function (req, res) {
        res.render('mb8/mb8-tax-codes-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      

      
      
        /*mb8-v2 */
      
      
      
    app.get('/mb8-v2/mb8-v2-start.html', function (req, res) {
        resetFunction();
        res.render('mb8-v2/mb8-v2-start', {
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8-v2/mb8-v2-home', function (req, res) {
        res.render('mb8-v2/mb8-v2-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb8-v2/mb8-v2-add', function (req, res) {
        res.render('mb8-v2/mb8-v2-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8-v2/mb8-v2-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb8-v2/mb8-v2-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb8-v2/mb8-v2-exit-survey', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb8-v2/mb8-v2-exit-survey', {
          'assetPath' : assetPath 
        });
    });
      
       
      
    
      
      
      
    
         
    app.get('/mb8-v2/mb8-v2-question-a', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8-v2/mb8-v2-question-a', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb8-v2/mb8-v2-question-b', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8-v2/mb8-v2-question-b', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
    app.get('/mb8-v2/mb8-v2-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8-v2/mb8-v2-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
      
       app.get('/mb8-v2/mb8-v2-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8-v2/mb8-v2-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb8-v2/mb8-v2-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb8-v2/mb8-v2-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       
      
      
      
       app.get('/mb8-v2/mb8-v2-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb8-v2/mb8-v2-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb8-v2/mb8-v2-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb8-v2/mb8-v2-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb8-v2/mb8-v2-done', function (req, res) {
        if (req.query.amount) {
            tempValue = req.query.amount;
            updateFunction();
        }
        res.render('mb8-v2/mb8-v2-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8-v2/mb8-v2-home-updated', function (req, res) {
        res.render('mb8-v2/mb8-v2-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb8-v2/mb8-v2-finish', function (req, res) {
        updateFunction();
        res.render('mb8-v2/mb8-v2-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8-v2/mb8-v2-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb8-v2/mb8-v2-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb8-v2/mb8-v2-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb8-v2/mb8-v2-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
   

      
        app.get('/mb8-v2/mb8-v2-tax-on-income-updated', function (req, res) {
        res.render('mb8-v2/mb8-v2-tax-on-income-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       app.get('/mb8-v2/mb8-v2-check-income-tax-updated', function (req, res) {
        res.render('mb8-v2/mb8-v2-check-income-tax-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
  
      
      
      
           app.get('/mb8-v2/mb8-v2-ended-amend', function (req, res) {
        res.render('mb8-v2/mb8-v2-ended-amend', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
           app.get('/mb8-v2/mb8-v2-about-a-change-amended', function (req, res) {
        res.render('mb8-v2/mb8-v2-about-a-change-amended', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       
           app.get('/mb8-v2/mb8-v2-tax-on-income', function (req, res) {
        res.render('mb8-v2/mb8-v2-tax-on-income', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb8-v2/mb8-v2-tax-codes-updated', function (req, res) {
        res.render('mb8-v2/mb8-v2-tax-codes-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      

      
      
      
        /*mb8-1 - for dev work */
      
      
      
    app.get('/mb8-1/mb8-1-start.html', function (req, res) {
        resetFunction();
        res.render('mb8-1/mb8-1-start', {
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8-1/mb8-1-home', function (req, res) {
        res.render('mb8-1/mb8-1-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb8-1/mb8-1-add', function (req, res) {
        res.render('mb8-1/mb8-1-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8-1/mb8-1-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb8-1/mb8-1-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb8-1/mb8-1-exit-survey', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb8-1/mb8-1-exit-survey', {
          'assetPath' : assetPath 
        });
    });
      
       
      
    
      
      
      
    
         
    app.get('/mb8-1/mb8-1-question-a', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8-1/mb8-1-question-a', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb8-1/mb8-1-question-b', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8-1/mb8-1-question-b', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
    app.get('/mb8-1/mb8-1-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8-1/mb8-1-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
      
       app.get('/mb8-1/mb8-1-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb8-1/mb8-1-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb8-1/mb8-1-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb8-1/mb8-1-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       
      
      
      
       app.get('/mb8-1/mb8-1-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb8-1/mb8-1-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb8-1/mb8-1-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb8-1/mb8-1-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb8-1/mb8-1-done', function (req, res) {
        if (req.query.amount) {
            tempValue = req.query.amount;
            updateFunction();
        }
        res.render('mb8-1/mb8-1-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8-1/mb8-1-home-updated', function (req, res) {
        res.render('mb8-1/mb8-1-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb8-1/mb8-1-finish', function (req, res) {
        updateFunction();
        res.render('mb8-1/mb8-1-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb8-1/mb8-1-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb8-1/mb8-1-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb8-1/mb8-1-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb8-1/mb8-1-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
   

      
        app.get('/mb8-1/mb8-1-tax-on-income-updated', function (req, res) {
        res.render('mb8-1/mb8-1-tax-on-income-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       app.get('/mb8-1/mb8-1-check-income-tax-updated', function (req, res) {
        res.render('mb8-1/mb8-1-check-income-tax-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
  
      
      
      
           app.get('/mb8-1/mb8-1-ended-amend', function (req, res) {
        res.render('mb8-1/mb8-1-ended-amend', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
           app.get('/mb8-1/mb8-1-about-a-change-amended', function (req, res) {
        res.render('mb8-1/mb8-1-about-a-change-amended', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       
           app.get('/mb8-1/mb8-1-tax-on-income', function (req, res) {
        res.render('mb8-1/mb8-1-tax-on-income', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb8-1/mb8-1-tax-codes-updated', function (req, res) {
        res.render('mb8-1/mb8-1-tax-codes-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      

      
      
      
      
      
        /*mb9 */
      
      
      
    app.get('/mb9/mb9-start.html', function (req, res) {
        resetFunction();
        res.render('mb9/mb9-start', {
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb9/mb9-home', function (req, res) {
        res.render('mb9/mb9-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb9/mb9-add', function (req, res) {
        res.render('mb9/mb9-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb9/mb9-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb9/mb9-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
          app.get('/mb9/mb9-exit-survey', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb9/mb9-exit-survey', {
          'assetPath' : assetPath 
        });
    });
      
       
      
    
      
      
      
    
         
    app.get('/mb9/mb9-question-a', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb9/mb9-question-a', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb9/mb9-question-b', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb9/mb9-question-b', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
    app.get('/mb9/mb9-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb9/mb9-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
      
       app.get('/mb9/mb9-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb9/mb9-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb9/mb9-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb9/mb9-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       
      
      
      
       app.get('/mb9/mb9-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb9/mb9-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb9/mb9-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb9/mb9-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb9/mb9-done', function (req, res) {
        if (req.query.amount) {
            tempValue = req.query.amount;
            updateFunction();
        }
        res.render('mb9/mb9-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb9/mb9-home-updated', function (req, res) {
        res.render('mb9/mb9-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb9/mb9-finish', function (req, res) {
        updateFunction();
        res.render('mb9/mb9-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb9/mb9-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb9/mb9-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb9/mb9-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb9/mb9-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
   

      
        app.get('/mb9/mb9-tax-on-income-updated', function (req, res) {
        res.render('mb9/mb9-tax-on-income-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       app.get('/mb9/mb9-check-income-tax-updated', function (req, res) {
        res.render('mb9/mb9-check-income-tax-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
  
      
      
      
           app.get('/mb9/mb9-ended-amend', function (req, res) {
        res.render('mb9/mb9-ended-amend', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
           app.get('/mb9/mb9-about-a-change-amended', function (req, res) {
        res.render('mb9/mb9-about-a-change-amended', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       
           app.get('/mb9/mb9-tax-on-income', function (req, res) {
        res.render('mb9/mb9-tax-on-income', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb9/mb9-tax-codes-updated', function (req, res) {
        res.render('mb9/mb9-tax-codes-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      

      
      
        /*mb9v2 */
      
      
      
    app.get('/mb9v2/mb9v2-start.html', function (req, res) {
        resetFunction();
        res.render('mb9v2/mb9v2-start', {
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb9v2/mb9v2-home', function (req, res) {
        res.render('mb9v2/mb9v2-home', {
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
     app.get('/mb9v2/mb9v2-add', function (req, res) {
        res.render('mb9v2/mb9v2-add', {
          'assetPath' : assetPath 
        });
    });
      
    app.get('/mb9v2/mb9v2-add-amount', function (req, res) {
        addedEmployer = req.query.addedEmployer;
        res.render('mb9v2/mb9v2-add-amount', {
          'assetPath' : assetPath 
        });
    });
      
       
      
    
      
      
      
    
         
    app.get('/mb9v2/mb9v2-question-a', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb9v2/mb9v2-question-a', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       app.get('/mb9v2/mb9v2-question-b', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb9v2/mb9v2-question-b', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
    app.get('/mb9v2/mb9v2-update', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb9v2/mb9v2-update', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
      
      
      
      
       app.get('/mb9v2/mb9v2-update-only', function (req, res) {
        employer = req.query.employer;
        summaryFunction();
        res.render('mb9v2/mb9v2-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
       
      
    app.get('/mb9v2/mb9v2-summary', function (req, res) {
        tempValue = req.query.update;
        res.render('mb9v2/mb9v2-summary', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
      
       
      
      
      
       app.get('/mb9v2/mb9v2-summary-add', function (req, res) {
        addedAmount = req.query.addedAmount;
        res.render('mb9v2/mb9v2-summary-add', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
            'addedEmployer' : addedEmployer,
            'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb9v2/mb9v2-summary-update-only', function (req, res) {
        tempValue = req.query.update;
        res.render('mb9v2/mb9v2-summary-update-only', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath,
        });
    });
      
    app.get('/mb9v2/mb9v2-done', function (req, res) {
        if (req.query.amount) {
            tempValue = req.query.amount;
            updateFunction();
        }
        res.render('mb9v2/mb9v2-done', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb9v2/mb9v2-home-updated', function (req, res) {
        res.render('mb9v2/mb9v2-home-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
    app.get('/mb9v2/mb9v2-finish', function (req, res) {
        updateFunction();
        res.render('mb9v2/mb9v2-finish', {
            'employer' : employer,
            'currentValue' : currentValue,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
      
    app.get('/mb9v2/mb9v2-remove', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb9v2/mb9v2-remove', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });

       app.get('/mb9v2/mb9v2-remove-b', function (req, res) {
        tempValue = 0;
        employer = req.query.employer;
        res.render('mb9v2/mb9v2-remove-b', {
            'employer' : employer,
            'tempValue' : tempValue,
            'sbBen' : sbBen,
            'ccBen' : ccBen,
            'assetPath' : assetPath 
        });
    });
   

      
        app.get('/mb9v2/mb9v2-tax-on-income-updated', function (req, res) {
        res.render('mb9v2/mb9v2-tax-on-income-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       app.get('/mb9v2/mb9v2-check-income-tax-updated', function (req, res) {
        res.render('mb9v2/mb9v2-check-income-tax-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
  
      
      
      
           app.get('/mb9v2/mb9v2-ended-amend', function (req, res) {
        res.render('mb9v2/mb9v2-ended-amend', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
           app.get('/mb9v2/mb9v2-about-a-change-amended', function (req, res) {
        res.render('mb9v2/mb9v2-about-a-change-amended', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
      
      
       
           app.get('/mb9v2/mb9v2-tax-on-income', function (req, res) {
        res.render('mb9v2/mb9v2-tax-on-income', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      
      
       app.get('/mb9v2/mb9v2-tax-codes-updated', function (req, res) {
        res.render('mb9v2/mb9v2-tax-codes-updated', {
          'sbBen' : sbBen,
          'ccBen' : ccBen,
          'assetPath' : assetPath,
          'addedEmployer' : addedEmployer,
          'addedAmount' : addedAmount
        });
    });
      

      


      
      
   
      
      
  }
    
    
    
};

 
