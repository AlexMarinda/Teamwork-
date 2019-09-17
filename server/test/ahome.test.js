import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

// Configure chai
chai.use(chaiHttp);
chai.should();

// eslint-disable-next-line no-unused-vars
const { expect, assert } = chai;

describe('API Entry Point', () => {
  describe('GET /', () => {
    it('it should return Welcome to teamWork API V1.0!', done => {
      chai
        .request(app)
        .get('/api/v1/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message').eql('Welcome to teamWork API V1.0!');
        });
      done();
    });
    it('it should return 404 wiht specified message', done => {
      chai
        .request(app)
        .get('/api/v1/notfound')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property('message').eql('Route Not Found!');
        });
      done();
    });
  });
  
});
