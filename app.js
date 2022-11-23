const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/aboutus', function(req, res) {
    res.sendFile(path.join(__dirname, '/aboutus.html'));
  });

  app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '/contact.html'));
  });

  app.get('/event-detail', function(req, res) {
    res.sendFile(path.join(__dirname, '/event-detail.html'));
  });

  app.get('/event', function(req, res) {
    res.sendFile(path.join(__dirname, '/event.html'));
  });

  app.get('/library', function(req, res) {
    res.sendFile(path.join(__dirname, '/library.html'));
  });

  app.get('/menu', function(req, res) {
    res.sendFile(path.join(__dirname, '/menu.html'));
  });

  app.get('/place-detail', function(req, res) {
    res.sendFile(path.join(__dirname, '/place-detail.html'));
  });

  app.get('/place', function(req, res) {
    res.sendFile(path.join(__dirname, '/place.html'));
  });

  app.get('/service-detail', function(req, res) {
    res.sendFile(path.join(__dirname, '/service-detail.html'));
  });

  app.get('/service', function(req, res) {
    res.sendFile(path.join(__dirname, '/service.html'));
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);