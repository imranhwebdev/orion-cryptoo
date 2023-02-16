import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TokenOrionImg from '../assets/img/token-orion.png'
const TokenOrion = () => {
  return (
      <section className="tokenorion-area">
          <Container>
            <Row className='align-items-center'>
                <Col lg="6 order-2 order-lg-1 mt-5 mt-lg-0">
                    <div className="section-title">
                        <h2 data-aos="fade-up" data-aos-duration="800">Token - ORION</h2>
                        <p data-aos="fade-up" data-aos-duration="1000">£ORION$ ORION token provides a unique opportunity for investors to invest directly into a low risk traditional financial product. The Orion Crypto AMC is formed to give investors access to traditional financial services and structured digital asset investments with the aim of providing long-term stability and growth. </p>
                        <p data-aos="fade-up" data-aos-duration="1200">Through the ORION token, investors can gain exposure to a variety of assets including bonds, equities, and commodities. By using the ORION token you can seamlessly access the AMC and our Fixed Passive Income model instantly without the lengthy process of investing through a bank or brokerage but ultimately still receiving the same protection and regulation associated with the more traditional institutions. </p>
                        <p data-aos="fade-up" data-aos-duration="1400">The AMC is managed by a team of experienced professionals who are committed to providing returns that exceed the market average. With a minimum investment of just $1,000, Orion Crypto gives you the chance to grow your portfolio without exposing yourself to the high risks associated with cryptocurrency investing. Contact us today to learn more about how you can benefit from investing in the ORION Crypto token. </p>
                    </div>
                </Col>
                <Col lg="6 order-1 order-lg-2">
                      <div className="tokenorion-area-content" data-aos="fade-left" data-aos-duration="1600">
                          <img src={TokenOrionImg} alt="" />
                      </div>
                  </Col>
            </Row>
          </Container>
      </section>
  )
}

export default TokenOrion