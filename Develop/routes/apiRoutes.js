const express = require("express");
const store = require("../db/store");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    store.fetchNotes().then((notes) => res.json(notes));
  });

  app.post("/api/notes", function (req, res) {
    store.addNotes(req.body).then((notes) => res.json(notes));
  });

  app.delete("/api/notes/:id", function (req, res) {
    store.removeNotes(req.params.id).then(() => res.json({ ok: true }));
  });
};
