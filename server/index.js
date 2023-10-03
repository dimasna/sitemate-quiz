const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());

let issues = [
    {id: 1, title: 'Issue 1', desc:'desc 1'},
    {id: 2, title: 'Issue 2', desc:'desc 2'},
    {id: 3, title: 'Issue 3', desc:'desc 3'} 
]

// Create: accepts a JSON object & prints/logs the object
app.post('/api/issues', (req, res) => {
    const newIssue = req.body;
    issues.push(newIssue);
    console.log('Created: ',  newIssue);
    res.json(newIssue);
});
// Read: returns a static JSON object
app.get('/api/issues/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const issue = issues.find((i) => i.id === id);
    console.log('Read: ',  issue);
    res.json(issue);
});
// Update: accepts a JSON object & prints/logs the object
app.put('/api/issues/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedIssue = req.body;
    issues = issues.map((i) => i.id === id ? updatedIssue : i);
    console.log('Updated: ',  updatedIssue);
    res.json(updatedIssue);
});
// Delete: prints/logs out the object or id to delete
app.delete('/api/issues/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deletedIssue = issues.find((i) => i.id === id);
    issues = issues.map((i) => i.id === id ? updatedIssue : i);
    console.log('Deleted: ',  deletedIssue);
    res.json(deletedIssue);
});

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});