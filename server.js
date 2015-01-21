var express = require("express"),
  app = express();

  app.get("/", function (req,res) {
    res.send("hello universe!");
  });

  var quotes = [
    "The answer to life the universe and everything is 42.",
    "I must not fear. Fear is the mind-killer. Fear is the little-death...",
    "Life can be so sweet on the sunny side of the street"
  ];

  app.get("/inspiration", function (req, res){
    var randomIndex = Math.floor(Math.random()*quotes.length);
    res.send(quotes[randomIndex]);
  });

  var jokes = [
    { setup: "What did the Zen buddhist say to the hotdog vendor?",
      punchline: "Make me one with everything."},
    { setup: "What did the mushroom say when asked what she looked for in a date?",
      punchline: "A fun guy."},
    { setup: "How many tickles does it take to make an octupus laugh?",
      punchline: "Ten Tickles"}
  ];

  app.get("/joke", function (req, res){
    var randomIndex = Math.floor(Math.random()*jokes.length);
    res.send(jokes[randomIndex]);
  });

  console.log("server starting. available at http://localhost:3000");
  app.listen(3000);

