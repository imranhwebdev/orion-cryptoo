import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SingleServiceLogo1 from '../assets/img/-Position.svg'
import SingleServiceLogo2 from '../assets/img/-Chart-bar.svg'
import SingleServiceLogo3 from '../assets/img/dollar 1.svg'
import SingleServiceLogo4 from '../assets/img/-Book-open.svg'
import SingleServiceLogo5 from '../assets/img/-Flower.svg'
import SingleServiceLogo6 from '../assets/img/-Shield-thunder.svg'
const Investment_universe = () => {
  return (
      <section className="investment_universe_area">
          <Container>
              <Row className='align-items-center'>
                  <Col lg="6">
                      <div className="investment_universe_content">
                        <div className="section-title" data-aos="fade-right" data-aos-duration="800">
                            <h2>Orion Crypto AMC  <br/> <span>Investment Universe</span></h2>
                        </div>
                      </div>
                  </Col>
                  <Col lg="6">
                      <div className="investment_universe_content">
                        <div className="investment-content-right" data-aos="fade-left" data-aos-duration="900">
                           <p>The Investment Universe consists of the following assets/ asset classes and represents the basis for the selection, adjustment, and rebalancing of the Strategy-Components by the Strategy- Manager.</p>
                        </div>
                      </div>
                  </Col>
              </Row>
              <Row>
                <Col>
                    <h4 className='sub-title' data-aos="fade-up" data-aos-duration="1000">Permitted Instruments</h4>
                </Col>
              </Row>
              <Row>
                <Col lg='4' sm='6' className='mb-4'>
                    <div className="single-service-item" data-aos="fade-up" data-aos-duration="1100">
                        <figure>
                            <img src={SingleServiceLogo1} alt="" />
                        </figure>
                        <h4>Heading 1</h4>
                        <p>Digital Assets - Cryptocurrencies, Crypto Securities</p>
                    </div>
                </Col>
                <Col lg='4' sm='6' className='mb-4'>
                    <div className="single-service-item" data-aos="fade-up" data-aos-duration="1200">
                        <figure>
                            <img src={SingleServiceLogo2} alt="" />
                        </figure>
                        <h4>Heading 1</h4>
                        <p>Equities Exchange Traded Stocks, Derivatives on Listed Equities and Global Indices</p>
                    </div>
                </Col>
                <Col lg='4' sm='6' className='mb-4'>
                    <div className="single-service-item" data-aos="fade-up" data-aos-duration="1300">
                        <figure>
                            <img src={SingleServiceLogo3} alt="" />
                        </figure>
                        <h4>Heading 1</h4>
                        <p>Fixed Income of all Ratings and Maturities</p>
                    </div>
                </Col>
                <Col lg='4' sm='6' className='mb-4'>
                    <div className="single-service-item" data-aos="fade-up" data-aos-duration="1400">
                        <figure>
                        <img src={SingleServiceLogo4} alt="" />
                        </figure>
                        <h4>Heading 1</h4>
                        <p>Futures and options of all currency pairs, cash in any currency different than the product currency.</p>
                    </div>
                </Col>
                <Col lg='4' sm='6' className='mb-4'>
                    <div className="single-service-item" data-aos="fade-up" data-aos-duration="1500">
                        <figure>
                        <img src={SingleServiceLogo5} alt="" />
                        </figure>
                        <h4>Heading 1</h4>
                        <p>Venture Capital and other Growth Opportunities</p>
                    </div>
                </Col>
                <Col lg='4' sm='6' className='mb-4'>
                    <div className="single-service-item" data-aos="fade-up" data-aos-duration="1600">
                        <figure>
                        <img src={SingleServiceLogo6} alt="" />
                        </figure>
                        <h4>Heading 1</h4>
                        <p>Digital Assets - Cryptocurrencies, Crypto Securities</p>
                    </div>
                </Col>
              </Row>
          </Container>
          
        <div className='isin-codes-content'>
            <Container>
                <Row>
                    <Col md='6'>
                        <div className="isin-text-wrapper">
                            <p data-aos="fade-in" data-aos-duration="800">Once an investor has subscribed to the fund, they will then have access to additional opportunities which may offer significantly higher yields. This will include early-stage venture capital investment in crypto protocols. The investment manager may deploy a percentage of an investors existing cash holding into such venture capital and growth opportunities.</p>
                            <p data-aos="fade-in" data-aos-duration="900">The fund management team includes qualified and skilled analysts who seek to identify further promising opportunities. Subscribers to the fund will further have the option to participate in new innovative projects.</p>
                            <h4 data-aos="fade-in" data-aos-duration="1000">Advantages over Direct Investment into Cryptocurrency</h4>
                            <ul data-aos="fade-in" data-aos-duration="1200">
                                <li>- Structured products created by leading financial institutions</li>
                                <li>- Capital protected products </li>
                                <li>-  Fixed rates of interest averaging at double digits per annum </li>
                                <li>-  Access to high growth venture capital projects</li>
                                <li>-  All investments must pass rigorous compliance checks </li>
                                <li>-  Opportunities carefully sourced by qualified financial analysts </li>
                                <li>-  Invest safely through your own bank or personal brokerage account globally</li>
                                <li>-  Track performance of the fund globally from anywhere in the world </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md='6'>
                        <div className="isin-text-wrapper">
                            <h4 data-aos="fade-in" data-aos-duration="1300">ISIN Codes Explained</h4>
                            <p data-aos="fade-in" data-aos-duration="1400">An ISIN (International Securities Identification Number) is a 12-digit alphanumeric code that uniquely identifies a specific security. The ISIN is a unique number assigned to a regulated security that is universally recognisable by banks, financial advisers, wealth managers and other financial institutions worldwide.</p>
                            <p data-aos="fade-in" data-aos-duration="1500">Orion Crypto AMC also has a unique ISIN code, and therefore investors can easily and securely move their investment capital into the fund via their personal bank or brokerage account. An investor simply needs to provide their bank with our ‘term sheet’ which includes the ISIN code, or ‘look-up’ our ISIN code using their broker platform and move their desired amount of capital into our fund.</p>
                            <h4 data-aos="fade-in" data-aos-duration="1600">Orion Crypto AMC:</h4>
                            <p data-aos="fade-in" data-aos-duration="1700">International Securities Identification Number (ISIN) : CH1134836233</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
      </section>
  )
}

export default Investment_universe