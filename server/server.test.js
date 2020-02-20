const app = require('../server');
const request = require('supertest');
const config = require('./config.json');

afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 500));
});

describe('GET /api/locale', () => {
  it('should return the locale based on cookie', async () => {
    const res = await request(app)
      .get('/api/locale')
      .set('Cookie', ['locale=de']);

    expect(res.status).toEqual(200);

    expect(res.body).toEqual({locale: 'de'});
  });

  it('should return the locale based on Accept-Language', async () => {
    const res = await request(app)
      .get('/api/locale')
      .set('Accept-Language', 'de');

    expect(res.status).toEqual(200);

    expect(res.body).toEqual({locale: 'de'});
  });

  it('should return the default locale when no cookie or Accept-Language header is set', async () => {
    const res = await request(app)
      .get('/api/locale');

    expect(res.status).toEqual(200);

    expect(res.body).toEqual({locale: config.DEFAULT_LOCALE});
  });
});
