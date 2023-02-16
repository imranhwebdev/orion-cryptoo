import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RoundUpImg from '../assets/img/roundup/roundup.png'
const Roundup = () => {
  return (
      <section className="roundup-area">
          <Container>
              <Row>
                  <Col lg="5">
                      <div className="roundup-area-content"  data-aos="fade-right" data-aos-duration="800">
                          <img src={RoundUpImg} alt="" />
                      </div>
                  </Col>
                  
                  <Col lg="7">
                      <div className="roundup-area-content-right">
                        <div className="section-title"  data-aos="fade-up" data-aos-duration="800">
                            <h2>The investment objectives <br /> of <span>Orion Crypto AMC are</span></h2>
                        </div>
                        <div className="roundup-content-list">
                           <ul>
                            <li  data-aos="fade-up" data-aos-duration="800">To achieve a combination of long-term and short-term capital growth by <b>investing in a diverse range</b> of high yield trading strategies and major cryptocurrencies.</li>
                            <li data-aos="fade-up" data-aos-duration="1000">To provide investors with a choice of investment options, including a variable option with quarterly or annual returns and a fixed <b>passive income model for a more steady approach.</b></li>
                            <li data-aos="fade-up" data-aos-duration="1200"><b>To invest in a diverse range of assets, including Bitcoin (BTC), Ethereum (ETH)</b>, capital protected structured notes, other highly liquid cryptocurrencies and more aggressive trading strategies.</li>
                            <li data-aos="fade-up" data-aos-duration="1400"><b>To invest in a diverse range of assets, including Bitcoin (BTC), Ethereum (ETH)</b>, capital protected structured notes, other highly liquid cryptocurrencies and more aggressive trading strategies.</li>
                            <li data-aos="fade-up" data-aos-duration="1600">To engage in yield enhancement strategies with cryptocurrencies as underlying holdings to maximize returns.</li>
                            <li data-aos="fade-up" data-aos-duration="1800">To provide investors access to <b>cutting-edge technologies</b> and investment tactics that are proven to deliver consistent, <b>exemplary performance.</b></li>
                           </ul>
                        </div>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Roundup