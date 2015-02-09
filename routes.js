module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {

      res.render('index',
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
    
      app.get('/your-occupation.html', function (req, res) {
      res.render('your-occupation', {'assetPath' : assetPath });
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

  }
};
