const request = require('supertest');
const {County} = require('../../models/county');
const mongoose = require('mongoose');

let server;

describe('/api/genres', () => {
  beforeEach(() => { server = require('../../index'); })
  afterEach(async () => { 
    server.close(); 
  });

  describe('GET /', () => {
    it('should return all counties', async () => {

      const res = await request(server).get('/suggest');
      
      expect(res.status).toBe(200);
      expect(res.body.total).toBe(3240);
    });
  });
});