const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        id: "GoldenGod",
        name: "Dennis Reynolds",
        phone: "555-555-5555",
        email: "dreynolds@philly.edu",
    }
];
const waitList = [
    {
        id: "DayMan",
        name: "Charlie Kelly",
        phone: 555-555-5656,
        email: "ratking@ghgh.com",
    }
];

//paths for three html files
//require files
//relative paths would be similar to these
//routes that handle api vs html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/front-end/index.html')));
app.get('/book-table', (req, res) => res.sendFile(path.join(__dirname, '/front-end/book-table.html')));
app.get('/reserved', (req, res) => res.sendFile(path.join(__dirname, '/front-end/reserved.html')));

// in future pull these paths to their own files and import to server
app.get('/api/book-table', (req, res) => res.json(tables));
app.get('/api/reserved', (req, res) => res.json(waitList));

app.post('/api/book-table', (req, res) => {
    const bookings = req.body;
    console.log(bookings);

    tables.push(bookings);
    console.log(bookings);

});

app.post('api/reserved', (req, res) => {

}



)
// front-end\book-table.html 
// C:\Users\engle\Documents\restaurant-booking\front-end\book-table.html

app.listen (PORT, () => console.log(`Listening on ${PORT}`));