var express = require('express');
const { connectDB } = require('./config/database');
const PORT = process.env.PORT || 3030;
const twig = require('twig');
var app = express();
const user = require ('./models/User');
 //importer le modèle 'User'
// const User = require('./models/User');

// Importation du fichier de route user.js
const userRoutes = require('./routes/user');
const User = require('./models/User');

// Connexion à la base de données
connectDB();

// configuration du moteur de template (twig)
app.set('view engine', 'twig');
app.set('views', './views');
app.use(express.static('public'));

 //Ajouter le middleware 'body-parser'
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuration des routes
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Hello Twig!', name: 'Soufiene!' });
});

// Utilisation des routes définies dans user.js
app.use('/', userRoutes);

// app.get('/register', (req, res) => {
//     res.render('pages/register');
// });

// app.post('/register', async (req, res) => {
//     const { username, email, password } = req.body;
//     const newUser = new User({ username, email, password });
//     await newUser.save();
//     res.redirect('/showusers');
// });

// app.get('/showusers', async (req, res) => {
//     const users = await User.find({});
//     res.render('pages/showusers', { users });
// });

app.listen(3333, () => {
	console.log(`🚀🚀 Lancement avec succès du server`);
});

module.exports = app;