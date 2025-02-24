const express = require("express");
const port = 3001;
const app = express();
app.use(express.json());

let notes = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(notes);
});

app.post("/api/persons", (req, res) => {
  const newNote = {
    id: Math.floor(Math.random() * 1000000).toString(),
    ...req.body,
  };
  notes.push(newNote);
  res.json(notes);
});

app.get("/api/persons/:id", (req, res) => {
  const personId = req.params.id;
  const person = notes.find((note) => note.id === personId);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const personId = req.params.id;
  const noteToDelete = notes.find((note) => note.id === personId);
  if (noteToDelete) {
    notes = notes.filter((note) => note.id !== noteToDelete.id);
    res.json(noteToDelete);
  } else {
    res.status(404).end();
  }
});

app.get("/api/info", (req, res) => {
  const message = `PhoneBook has info for ${notes.length} people \n${Date()}`;
  res.set("Content-Type", "text/plain");
  res.send(message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
