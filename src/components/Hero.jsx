import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactSlider from "react-slider";
import { FaPlay } from "react-icons/fa";
import weacceptimg1 from '../assets/img/t.svg';
import weacceptimg2 from '../assets/img/binanch.svg';
import weacceptimg3 from '../assets/img/bitcoin.svg';
import Herorightimg from '../assets/img/hero-right-star.svg';
const Hero = () => {
 

    useEffect(() => {
      }, []);
      const [countdownDate] = useState(
        new Date("Feb 20, 2023 14:30").getTime()
      );
      const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      useEffect(() => {
        setInterval(() => setNewTime(), 1000);
      }, []);
    
      const setNewTime = () => {
        if (countdownDate) {
          const currentTime = new Date().getTime();
          const distanceToDate = countdownDate - currentTime;
          let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
          let hours = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          let minutes = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
          );
          let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
          const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          days = `${days}`;
          if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
          } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
          } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
          }
          setState({ days: days, hours: hours, minutes, seconds });
        }
      };
  return (
      <section className="hero-area">
          <Container>
              <Row>
                  <Col lg="7">
                      <div className="hero-area-content">
                          <span className="sub_title">ORION CRYPTO AMC</span>
                          <h1><span>Invest in the Future</span><br /> of Finance with Orion <br />
                          <span>Crypto AMC</span></h1>
                          <p>Orion Crypto AMC is a cutting-edge investment opportunity for those looking to gain exposure to both traditional financial services and digital assets. </p>
                          <div className="dual_btns">
                              <a href="/#" className="boxed-btn">Whitepaper</a>
                              <a href="/#" className="playbtn"><span><FaPlay /></span> Learn more</a>
                          </div>
                      </div>
                  </Col>
                  
                  <Col lg="5">
                      <div className="hero-area-content-right">
                        <div className="star">
                          <img src={Herorightimg} alt="" />
                        </div>
                        <p>Orion Crypto Presale is on</p>
                        <div className="hero-count-wrapper">
                            <div className="hero-single-count-item">
                                <span className="countdown">
                                {state.days > 0 ? state.days : "0"}
                                </span>

                                <span className="day sub-item">
                                Days
                                </span>
                            </div>
                            <div className="hero-single-count-item">
                                <span className="countdown">
                                {state.hours > 0 ? state.hours : "00"}
                                </span>
                                <span className="hours sub-item">
                                Hours
                                </span>
                            </div>
                            <div className="hero-single-count-item">
                                <span className="countdown">
                                {state.minutes > 0 ? state.minutes : "00"}
                                </span>
                                <span className="min sub-item">
                                Min
                                </span>
                            </div>
                            <div className="hero-single-count-item">
                                <span className="countdown">
                                {state.seconds > 0 ? state.seconds : "00"}
                                </span>
                                <span className="secound sub-item">
                                Sec
                                </span>
                            </div>
                            </div>
                            <div className="roken-raised">
                                <h4>Token Raised</h4>
                                <ReactSlider
                                    className="horizontal-slider"
                                    thumbClassName="example-thumb"
                                    trackClassName="example-track"
                                    renderTrack={(props, state) => <div {...props} />}//custom track
                                />
                                <div className="slider-count-number">
                                  <span>0 AMC</span>
                                  <span>10000000 AMC</span>
                                </div>
                            </div>
                            <a href="/" className="boxed-btn d-block">Purchase Token</a>

                            <div className="we-accept-wrapper">
                              <h4>WE ACCEPT</h4>
                              <div className="we-accept">
                                <a href="/"><img src={weacceptimg1} alt="" /></a>
                                <a href="/"><img src={weacceptimg2} alt="" /></a>
                                <a href="/"><img src={weacceptimg3} alt="" /></a>
                              </div>
                            </div>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Hero