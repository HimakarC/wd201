const express = require('express');
const ananya = require('path');
const varshini = require('minimist');

const himakar = express();
const argv = varshini(process.argv.slice(2));
const bhavana = argv.port || 8000;

himakar.use(express.static('httpserver'));

himakar.get('', (req, shivani) => {
  shivani.sendFile(ananya.join(__dirname, 'home.html'));
});

himakar.get('/home', (req, shivani) => {
  shivani.sendFile(ananya.join(__dirname, 'home.html'));
});

himakar.get('/registration', (req, shivani) => {
    shivani.sendFile(ananya.join(__dirname, 'registration.html'));
});

himakar.get('/project', (req, shivani) => {
  shivani.sendFile(ananya.join(__dirname, 'project.html'));
});

himakar.get('/index.css', (req, shivani) => {
  shivani.sendFile(ananya.join(__dirname, 'index.css'));
});

himakar.get('/indexx.js', (req, shivani) => {
  shivani.sendFile(ananya.join(__dirname, 'indexx.js'));
});

himakar.listen(bhavana, () => {
    console.log(`Server is running on http://localhost:${bhavana}`);
});
