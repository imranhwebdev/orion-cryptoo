import { useEffect } from "react";
import AOS from "aos";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Investment_objectives = () => {
    useEffect(() => {
        AOS.init();
    
    }, []);
  return (
      <section className="investment_objectives-area" id='investment_objectives'>
          <Container>
              <Row>
                  <Col lg="6">
                      <div className="investment_objectives-area-content"  data-aos="fade-right" data-aos-duration="800">
                          <h3>The investment objectives< br /> of Orion Crypto AMC are<br /> Regulated Fund</h3>
                          <a href="/#" className="inline_btn">Learn more</a>
                      </div>
                  </Col>
                  
                  <Col lg="6">
                      <div className="investment_objectives-area-content-right" data-aos="fade-up" data-aos-duration="1000">
                        <div className="single-item-object-count">
                            <h3 className='count'>10+</h3>
                            <p>Orion Crypto AMC is a cutting-edge investment opportunity for those looking to gain exposure to both traditional</p>
                        </div>
                        <div className="single-item-object-count" data-aos="fade-up" data-aos-duration="1200">
                            <h3 className='count'>50+</h3>
                            <p>Orion Crypto AMC is a cutting-edge investment opportunity for those looking to gain exposure to both traditional</p>
                        </div>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Investment_objectives