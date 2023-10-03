
const request = require('supertest');
const app = require('./index.js');

let issues = [
    {id: 1, title: 'Issue 1', desc:'desc 1'},
    {id: 2, title: 'Issue 2', desc:'desc 2'},
    {id: 3, title: 'Issue 3', desc:'desc 3'} 
]

test('GET /api/issues should return an array of issues', async () => {
  const response = await request(app).get('/api/issues');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
  });

test('GET /api/issues should return a static JSON object', async () => {
    const response = await request(app).get('/api/issues');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(issues);
    });
