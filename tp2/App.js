const { Client } = require('@elastic/elasticsearch')
const config = require('config');
const elasticConfig = config.get('elastic');
const express = require("express");
const app = express();

const client = new Client({
  cloud: {
    id: elasticConfig.cloudID
  },
  auth: {
    username: elasticConfig.username,
    password: elasticConfig.password
  }
})

app.use(express.json());
app.use(express.static("public"));


  app.post("/delete", (req, res) => {
    const { id } = req.body;
    client
      .delete({
        index: "songs",
        id: id,
      })
      .then((resp) => {
        res.send("Delete done");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Erreur lors de la suppression");
      });
  });
  
  app.post("/update", (req, res) => {
    const { id, title, author, released } = req.body;
    client
      .update({
        index: "songs",
        id: id,
        body: {
          doc: {
            title: title,
            author: author,
            released: released,
          },
        },
      })
      .then((resp) => {
        res.send("Update done");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Erreur lors de la mise à jour");
      });
  });
  
  app.get("/getAllSongs", (req, res) => {
    client
      .search({
        index: "songs",
        body: {
          query: {
            match_all: {},
          },
        },
      })
      .then(function (resp) {
        var hits = resp.hits.hits;
        res.send(hits);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Erreur lors de la recherche");
      });
  });
  
  app.post("/submit", (req, res) => {
    res.send("Upload done");
  });
  
  app.post("/search", (req, res) => {
    const { search } = req.body;
    client
      .search({
        index: "songs",
        body: {
          query: {
            multi_match: {
              query: search,
              type: "phrase_prefix",
              fields: ["title", "author", "released"],
            },
          },
        },
      })
      .then(function (resp) {
        var hits = resp.hits.hits;
        res.send(hits);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Erreur lors de la recherche");
      });
  });
  
  app.listen(3000, () => {
    console.log("Server running on port 3000" );
  });