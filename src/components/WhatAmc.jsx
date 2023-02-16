import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WhatAmcImg from '../assets/img/whatamc.png'
const Whatamc = () => {
  return (
      <section className="whatamc-area">
        <div className="whatamc-top-section">
            <Container>
                <Row className='justify-content-center'> 
                    <Col lg="8">
                        <div className="section-title ">
                            <h2 data-aos="fade-up" data-aos-duration="800">Expert Support for Orion <span data-aos="fade-up" data-aos-duration="1000">Crypto AMC Investors</span></h2>
                            <p data-aos="fade-up" data-aos-duration="1200">Orion Crypto Ltd is the exclusive introducer that provides support to investors in Orion Crypto AMC.</p>
                            <p data-aos="fade-up" data-aos-duration="1400">Orion Crypto Ltd is the exclusive introducer that provides support to investors in Orion Crypto AMC. We offer expert knowledge and assistance to help you make informed decisions and get the most out of your investment. Contact us for more information about our services and to get started with Orion Crypto AMC.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
          <Container>
              <Row>
                  <Col lg="6" className='order-2 order-lg-1'>
                      <div className="whatamc-area-content">
                        <div className="section-title">
                            <h2 data-aos="fade-up" data-aos-duration="800">What is an <span>AMC?</span></h2>
                        </div>
                        <div className="whatamc-content-list">
                           <p data-aos="fade-up" data-aos-duration="800">AMCs (Actively Managed Certificates) are securities that can be offered to the public as well as professional and institutional investors without any minimum requirements. The structure allows for participation in an underlying portfolio of assets.</p>
                           <p data-aos="fade-up" data-aos-duration="1000">AMCs offer investment managers excellent flexibility for tailoring investment strategies, providing the ability to combine capital protected instruments, high yield products as well as emerging market or other related instruments which may be used for yield optimisation or hedging.</p>
                           <p data-aos="fade-up" data-aos-duration="1200">This structure is vital in allowing the investment manager to achieve its objective of long-term capital growth within the cryptocurrency and digital asset sector.</p>
                        </div>
                      </div>
                  </Col>
                  <Col lg="6" className='order-1 order-lg-2 mb-3 mb-md-0 mt-0 mt-md-5'>
                      <div className="whatamc-area-content-right" data-aos="fade-right" data-aos-duration="800">
                          <img src={WhatAmcImg} alt="" />
                      </div>
                  </Col>
                  
              </Row>
          </Container>
      </section>
  )
}

export default Whatamc