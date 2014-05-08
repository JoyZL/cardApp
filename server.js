var express = require('express');
var expressHandlebars = require('express3-handlebars');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var MongoStore = require('connect-mongo')(expressSession);
var mongo = require('./mongo');
var MongoClient = require('mongodb').MongoClient;
//var mongoUrl = 'mongodb://joyli:19900221Amily@dbh85.mongolab.com:27857/dwdserver';
var mongoUrl = 'mongodb://joyli:cardmachine@ds043447.mongolab.com:43447/cardmachine';
//raphael
//var raphael = require('node-raphael');
//mongoose
var mongoose = require ("mongoose");
mongoose.connect(mongoUrl);

var app = express();

//var handlebars = require('./helpers/create_handlebars');

var handlebars = expressHandlebars.create({
  defaultLayout: 'main'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser());
app.use(cookieParser());
//connect-mongo is creating sessions
app.use(expressSession({secret:'somesecretword',
    store: new MongoStore({
      url: mongoUrl
    })
}));

app.use('/public', express.static('public'));

app.get('/animation', function(req, res){
  console.log('inside animation handlebars');
  res.render('animation');
});

app.get('/', function(req,res){
  res.render('index');
});

app.get('/about', function(req,res){
  res.render('about');
});

app.get('/cards/:card_id', function(req, res){
  var cardId = req.params.card_id;
  findCard(cardId, function(card){
    res.render('card', {card: card});
  })
});
 
var Card = mongoose.model('Card',
  {
    name: String,
    city: String,
    background: String,
    subject: String,
    font: String,
    image: String // 'a1b1c1.png'
  }
);

app.post('/step1', function(req,res){
  var name = req.body.name;
 
  var card = new Card({name: name});
  card.save(function(err){
    if (err) {
        console.log('Error step 1');
      }
 
    req.session.cardId = card.id;
    res.render('step1', {card:card});
  });
});


app.post('/step2', function(req,res){
  var city = req.body.city;
  var cardId = req.body.card_id;
  console.log(cardId);
  
 console.log(req.body);

  Card.findById(cardId, function(err, card){
    console.log(card);
    card.city = city;
    
    card.save(function(err){
      if (err) {
        console.log('Error step 2');
      }
      res.render('step2', {card:card});
    })
  });
});

app.post('/step3', function(req,res){
  
  var cardId = req.body.card_id;
  var background =  req.body.background;
    Card.findById(cardId, function(err, card){
    console.log(card);
    card.background = background;
    console.log(background);
    card.save(function(err){
      if (err) {
        console.log('Error step 3');
      }
      res.render('step3', {card:card});
    })
  });
});

app.post('/step4', function(req,res){
  
  var cardId = req.body.card_id;
  var subject =  req.body.subject;

    Card.findById(cardId, function(err, card){
    console.log(card);
    card.subject = subject;
    console.log(subject);
    card.save(function(err){
      if (err) {
        console.log('Error step 4');
      }
      res.render('step4', {card:card});
    })
  });
});

app.post('/step5', function(req, res){
  var cardId = req.body.card_id;
  var font =  req.body.font;

    Card.findById(cardId, function(err, card){
    console.log(card);
    card.font = font;

    card.image = card.background + card.subject + card.font + '.jpg';

    //card.image = 'a1b1c1.jpg';
    console.log(font);
    card.save(function(err){
      if (err) {
        console.log('Error step 5');
      }
      res.render('step5', {card:card});
    })
  });
});


// app.get('/allCards', function(req, res){
//   Card.find(function(err, cards){

//     console.log('all cards', cards);
//     res.render('allCards', {cards:cards}, {sort:[["_id", -1]]});
//   })
// });

app.get('/allCards', function(req, res){
  Card.find(function(err, cards){

    console.log('all cards', cards);
    cards = cards.reverse();
    res.render('allCards', {cards:cards});
  })
});

var port = Number(process.env.PORT || 5000);
  console.log('Listening on port',port);

var db;
//_db, inner variable
MongoClient.connect(mongoUrl, function(err, _db){

  if (err){
    console.log('there was an error:' + err);
  }

  db = _db;
  console.log('connected to mongo');
  app.listen(port);
  
});


