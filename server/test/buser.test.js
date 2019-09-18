// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import users from '../model/users';



chai.use(chaiHttp);
chai.should();
// eslint-disable-next-line no-unused-vars
const [user1] = users;

  describe('SignUp', () => {
    it('it should add user if required fields provided', done => {
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send({
            email: 'marindaalex4@gmail.com',
            first_name: 'teller',
            last_name: 'marinda',
            password: '1234567',
            gender: 'male',
            jobRole :'developer',
            department :'IT',
            address: 'kicukiro',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property('data').be.a('object');
          res.body.should.have.property('data').have.property('token');
          done();
        });
    });

    it('it should return 409 when user choose email taken', done => {
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send({
            email: 'marindaalex44@gmail.com',
            first_name: 'teller',
            last_name: 'marinda',
            password: '1234567',
            gender: 'male',
            jobRole :'developer',
            department :'it',
            address: 'kicukiro',
        })
        .end((err, res) => {
          res.should.have.status(409);
          res.body.should.have.property('message').eql('choose another email this was taken');
          done();
        });
    });


  });



  describe('SignIn', () => {
    it('it should sign in user if correct credentials provided', done => {
      chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send({
          email: 'marindaalex44@gmail.com',
          password: '1234567'
        })
        .end((err, res) => {
          res.should.have.status(200);
         
          res.body.should.have.property('message').eql('succefully');
          res.body.should.have.property('data').be.a('object');
          res.body.should.have.property('data').have.property('token');
          done();
        });
    })

    it('it should return 401  when user fills bad inputs', done => {
      chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send({
          email: 'alex@fdibiz.com',
          password: '12345678'
        })
        .end((err, res) => {
          res.should.have.status(401);
         
          res.body.should.have.property('message').eql('User not found!');
          done();
        });
    });


  });




  


