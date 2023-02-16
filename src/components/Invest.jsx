import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InvestImg from '../assets/img/invest.png'
import InvestIcon1 from '../assets/img/inv-col-img1.svg'
import InvestIcon2 from '../assets/img/inv-col-img2.svg'
import InvestIcon3 from '../assets/img/inv-col-img3.svg'
const Invest = () => {
  return (
      <section className="invest-area" id='invest'>
          <Container>
            <Row>
                <Col>
                    <div className="section-title text-center" data-aos="fade-up" data-aos-duration="800">
                        <h2>How to <span>invest?</span></h2>
                    </div>
                </Col>
            </Row>
              <Row>
                  <Col lg="6">
                      <div className="invest-area-content" data-aos="fade-right" data-aos-duration="1000">
                          <img src={InvestImg} alt="" />
                      </div>
                  </Col>
                  <Col lg="6">
                      <div className="invest-area-content-right">
                        <div className="invest-content-list" data-aos="fade-in" data-aos-duration="1200">
                            <div className="invest-icons">
                                <img src={InvestIcon1} alt="" />
                            </div>
                            <div className="invest-content">
                                <h4>Variable</h4>
                                <p>Investors can invest in USDC through our dashboard, choose investment level, deposit funds and track performance in real-time. This variable option offers potential for a larger return based on the funds performance, and allows for flexible frequency of returns.</p>
                            </div>
                        </div>
                        <div className="invest-content-list" data-aos="fade-in" data-aos-duration="1400">
                            <div className="invest-icons">
                                <img src={InvestIcon2} alt="" />
                            </div>
                            <div className="invest-content">
                            <h4>Fixed - Passive Income</h4>
                            <p>Investors can invest in USDC through our dashboard, choose investment level, deposit funds and track performance in real-time. This variable option offers potential for a larger return based on the funds performance, and allows for flexible frequency of returns.</p>
                            </div>
                        </div>
                        <div className="invest-content-list" data-aos="fade-in" data-aos-duration="1600">
                            <div className="invest-icons">
                                <img src={InvestIcon3} alt="" />
                            </div>
                            <div className="invest-content">
                            <h4>FIAT</h4>
                            <p>Investors can invest in USDC through our dashboard, choose investment level, deposit funds and track performance in real-time. This variable option offers potential for a larger return based on the funds performance, and allows for flexible frequency of returns.</p>
                            </div>
                        </div>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Invest