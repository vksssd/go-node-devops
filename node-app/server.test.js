// const request = require('supertest');
// const app = require('./server');

// describe('GET /', () => {
//     it('responds with "Hello from Node.js!"', async () => {
//         const response = await request(app).get('/');
//         expect(response.text).toEqual('Hello from Node.js!');
//         expect(response.statusCode).toBe(200);
//     });
// });


const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
    it('responds with "Hello from Node.js!" and serves index.html', async () => {
        const response = await request(app).get('/');
        expect(response.text).toContain('Hello from Node.js!');
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toContain('text/html');
    });
});
