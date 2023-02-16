import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TeamImg from '../assets/img/team-member-img.png'
const Team = () => {
  return (
      <section className="team-area">
          <Container>
            <Row className='align-items-center'>
                <Col lg="6">
                    <div className="team-left">
                        <div className="section-title" data-aos="fade-up" data-aos-duration="800">
                            <h2>Team <span>Orion Crypto Ltd</span></h2>
                        </div>
                        <p data-aos="fade-up" data-aos-duration="800"><b>Owner and founder of the Orion Crypto AMC.</b> He has an extensive track record of working within the Banking sector. His career started off at Lehman Brothers. Lehman was the fourth-largest investment bank in the US specialising in <br />
                        Banking, Equity, Fixed-income sales and trading, research, investment management, private equity, and private banking.</p>

                        <p data-aos="fade-up" data-aos-duration="1000">His career started in <b>2000</b> as a security officer and ended in 2010 as one of the youngest Directors in Security for a Major Financial institution. Through a decade of tenure his role and responsibility varied with each year and designation including the key milestone of heading security for PwC through the largest insolvency in financial history and staying on with the administration to relocate 1000+ personnel to a new office location. Other responsibilities and achievements included:</p>

                        <p data-aos="fade-up" data-aos-duration="1200">Physical and Technological Digital Security design and project manager as European Head.</p>
                        <p  data-aos="fade-up" data-aos-duration="1300">After Lehman Brothers he spent a short spell at the Japanese Investment Bank Nomura International Bank PLC. Here has operated in the areas of Compliance and Audit Management, <b>Operations Management of their European</b> Technology Systems and implementation of security systems across Europe</p>

                        <p data-aos="fade-up" data-aos-duration="1400">In 2010 he later went onto work for one of the worlds largest Data Centre Providers, Global Switch. Global Switch is the leading large-scale, carrier neutral data centre provider in Europe and Asia- Pacific. He was responsible for all aspects of security globally, key areas of responsibility including Operations management, Information security, Compliance with security policies and procedures, Risk management and mitigation.</p>
                    </div>
                   
                </Col>
                <Col lg="6">
                      <div className="team-right">
                          <figure  data-aos="fade-right" data-aos-duration="1600">
                            <img src={TeamImg} alt="" />
                          </figure>
                          <div className="team-info" data-aos="fade-up" data-aos-duration="1800">
                            <h5>Vee Virdi</h5>
                            <p>www.orionamc.io / v.virdi@orionamc.io</p>
                          </div>
                      </div>
                  </Col>
            </Row>
          </Container>
      </section>
  )
}

export default Team