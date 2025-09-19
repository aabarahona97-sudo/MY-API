const chai = require('chai')
const chaiHttp = require('chai-http')
//const app = require('../index').app
const expect = require('chai').expect

chai.use(chaiHttp);

const url = 'http://localhost:3000'



describe('Inserte el nombre y el precio', ()=>{
  it('Esperamos un name y un price', (done)=>{
    chai.request(url)
    .post('/api/v1/products')
    .send({name: 'Compu', price:2000})
    .end((err, res)=>{
      console.log(res.body)
      expect(res).to.have.status(200)
      done()
    })
  })
})


/*describe('suite de pruebas e2e para el curso', ()=>{
  it('esperamos un hola mundo', (done)=>{
    chai.request(app)
    .get('/')
    .end((err, res)=>{
      console.log('A')
      chai.assert.equal(res.text, 'Hola mundo')
      done()
    })
    console.log('B')
  })
})*/
