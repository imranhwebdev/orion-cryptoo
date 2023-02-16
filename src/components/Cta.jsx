import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Cta = () => {
  return (
      <section className="cta-area">
          <Container>
              <Row>
                  <Col lg="12 text-center">
                      <div className="cta-area-content">
                          <h2 className='mb-4' data-aos="fade-up" data-aos-duration="800">Need Any Help?</h2>
                          <a href="/#" className="boxed-btn" data-aos="fade-up" data-aos-duration="1000"><span>Contact us</span></a>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Cta