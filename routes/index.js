var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('index', {
    title: 'NeuroLink',
    body: 'Received a GET for /'
  });
});

/* POST add patient. */
router.post('/patient', (req, res) => {
  res.send('patient', {
    title: 'NeuroLink',
    body: """
      Added new patient with these data:
        Name:" + fullName + }
    """
  })
})

module.exports = router;
