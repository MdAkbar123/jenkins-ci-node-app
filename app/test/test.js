const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return Hello from Jenkins CI/CD Pipeline 👋', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello from Jenkins CI/CD Pipeline 👋');
        done();
      });
  });
});
