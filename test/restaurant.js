/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const index = require('../index.js');

const should = chai.should();

chai.use(chaiHttp);

// Base url
describe('/GET ', () => {
  it('it should return a response when you call the base url', (done) => {
    chai.request(index)
      .get('/')
      .end((err, res) => {
        res.statusCode.should.eql(200);
        res.status.should.eql(200);
        done();
      });
  });
});

//Get Restaurants
describe('/GET ', () => {
  it('it should return a response with an object when you call the get restaurants url', (done) => {
    chai.request(index)
      .get('/restaurants')
      .end((err, res) => {
        res.statusCode.should.eql(200);
        res.status.should.eql(200);
        res.should.be.an('object');
        res.body.should.have.property('message').eql('Restaurants successfully fetched');
        res.body.should.have.property('data');
        done();
      });
    });
  });

  //Get Restaurant By Name
  describe('/GET ', () => {
    it('it should return a response with an object when you call the get restaurant by name url', (done) => {
      chai.request(index)
        .get('/restaurants/name')
        .end((err, res) => {
          res.statusCode.should.eql(200);
          res.status.should.eql(200);
          res.should.be.an('object');
          res.body.should.have.property('message').eql('Restaurant successfully fetched');
          res.body.should.have.property('data');
          done();
        });
      });
    });
     

