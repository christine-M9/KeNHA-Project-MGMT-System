
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const projects = [
  { id: 1, name: 'Project 1' },
  { id: 2, name: 'Project 2' },
  { id: 3, name: 'Project 3' },

];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
