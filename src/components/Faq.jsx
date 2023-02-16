import Accordion from "react-bootstrap/Accordion";
import Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import faqData from '../utils/faqData'

function Faq() {
  return (
    <section className="faq-area">
      <Container>
        <Row>
          <Col lg='12'>
            <div className="section-title text-center">
              <h2 data-aos="fade-up" data-aos-duration="800">Frequently Asked Questions</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0"  data-aos="fade-up" data-aos-duration="1000">
              {
                faqData.map((el, i) => {
                  return (
                    <Accordion.Item eventKey={i} key={i}>
                      <Accordion.Header>{el.title}</Accordion.Header>
                      <Accordion.Body>
                        {el.body}
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                })
              }
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Faq;
