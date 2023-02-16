import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaArrowRight } from "react-icons/fa";
import capital_protectedImg from '../assets/img/capital_protected.png';
import CapitalprotectedshapImg from '../assets/img/capital-protected-shap.png'
const Capital_protected = () => {
  return (
      <section className="capital_protected-area">
        <div className="capital_protected_shap" data-aos="fade-in" data-aos-duration="800">
            <img src={CapitalprotectedshapImg} alt="" />
        </div>
          <Container>
              <Row className='align-items-center'>
                  <Col lg="6">
                      <div className="capital_protected_left" data-aos="fade-left" data-aos-duration="1000">
                          <img src={capital_protectedImg} alt="" />
                      </div>
                  </Col>
                  <Col lg="6">
                      <div className="capital_protected-area-content-right">
                        <div className="section-title" data-aos="fade-up" data-aos-duration="800">
                            <h2>What is a <span>Capital Protected </span>Structured Note ?</h2>
                        </div>
                        <div className="capital_protected-content-list">
                           <p data-aos="fade-up" data-aos-duration="1000">If you are like many people, you probably have questions about what a <b>"Capital Protected Structured Note"</b> is. Luckily, Orion Crypto AMC is here to provide some answers. In simple terms, a capital protected structured note is an investment product that offers investors protection against losses while also providing the potential for gains. This makes it an ideal investment for those who are looking to take a conservative approach to investing in the cryptocurrency markets.</p>
                           <p data-aos="fade-up" data-aos-duration="1200">Orion Crypto AMC offers a variety of different capital protected structured notes that are each designed to meet the unique needs of our clients. Whether you are looking for <b>short-term or long- term protection,</b> we have a note that is right for you. Each of our notes is backed by a team of experts who regularly monitor the markets to ensure that your investment is safeguarded.</p>
                           <p data-aos="fade-up" data-aos-duration="1400">If you are interested in learning more about our Capital Protected Structured Notes or any of the other products and services we offer, please contact us today. We would be more than happy to answer any questions you may have and help you find the investment solution that is right for you.</p>
                        </div>
                        <a href="/" className='outline-btn'  data-aos="fade-up" data-aos-duration="1600">Contact us < FaArrowRight /></a>
                      </div>
                  </Col>
                  
              </Row>
          </Container>
      </section>
  )
}

export default Capital_protected