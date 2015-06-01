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
    sbBen = 5000,
    ccBen = 1000,
    employer,
    currentValue,
    tempValue,
    addedAmount,
    addedEmployer;

var resetFunction = function() {
    sbBen = 5000;
    ccBen = 1000;
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

      
      
      
  }
};