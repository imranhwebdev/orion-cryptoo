import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import poweredImg from "../assets/img/brand-logos/Logo.svg";
import poweredImg2 from "../assets/img/brand-logos/logo2.svg";
import poweredImg3 from "../assets/img/brand-logos/logo3.svg";
import poweredImg4 from "../assets/img/brand-logos/logo4.svg";
import poweredImg5 from "../assets/img/brand-logos/logo5.svg";

import poweredImg6 from "../assets/img/brand-logos/Logo.svg";
import poweredImg7 from "../assets/img/brand-logos/logo2.svg";
import poweredImg8 from "../assets/img/brand-logos/logo3.svg";
import poweredImg9 from "../assets/img/brand-logos/logo4.svg";
import poweredImg10 from "../assets/img/brand-logos/logo5.svg";

const Brands = () => {
  return (
      <section className="brand_logos_area">
          <Container>
            <Row>
                <Col lg='12 text-center pb-2'>
                    <div className="section-title" data-aos="fade-up" data-aos-duration="800">
                        <h2>Powered by</h2>
                    </div>
                </Col>
            </Row>
              <Row className="align-items-center justify-content-between justify-content-center g-5"  data-aos="fade-up" data-aos-duration="1000">
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg2} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg3} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg4} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg5} alt="" />
                      </a>
                  </Col>
              </Row>
              
            <Row>
                <Col lg='12 text-center mt-5 pt-3 pb-2' data-aos="fade-up" data-aos-duration="1200">
                    <div className="section-title">
                        <h2>Featured by</h2>
                    </div>
                </Col>
            </Row>
            <Row className="align-items-center justify-content-between  brand_featured_area g-5"  data-aos="fade-up" data-aos-duration="1400">
            <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg6} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg7} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg8} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg9} alt="" />
                      </a>
                  </Col>
                  <Col xxl='2' lg='3' sm='6' className="text-center">
                      <a href="/#" target="_blank" className="single_brand_logo_item">
                          <img src={poweredImg10} alt="" />
                      </a>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Brands