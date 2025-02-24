const express = require("express");
const port = 3001;
const app = express();

const notes = [
  [
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
  ],
];

app.get("/api/persons", (req, res) => {
  res.send(notes);
});

app.get("/api/info", (req, res) => {
  const message = `PhoneBook has info for ${notes[0].length} people \n${Date()}`;
  res.set("Content-Type", "text/plain");
  res.send(message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
