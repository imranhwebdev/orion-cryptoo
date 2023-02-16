import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { Col, Container, Row } from "react-bootstrap";

const Tokenomics = () => {
    const [Area, setArea] = useState({
        series: [20, 5, 10, 10, 5, 10, 20, 20],
        options: {
            chart: {
              width: 410,
            },
            colors: ['#8A75E2', '#E275CA', '#75C1E2', '#E7C369', '#E28975', '#E06262', '#DEE062', '#8BE275'],
            labels: ['PUBLIC SALE ', 'PRIVATE SALE', 'MANAGEMENT FEE', 'TEAM', 'ORION CRYPTO AMC', 'LIQUIDITY', 'MARKETING', 'DEVELOPMENT'],
            fill: {
              opacity: 1
            },
            states: {
              active: {
                filter: {
                  type: 'none'
                }
              },
              hover: {
                filter: {
                  type: 'none'
                }
              }
            },
            stroke: {
              show: false
            },
            plotOptions: {
              pie: {
                expandOnClick: false,
                donut:{
                    labels:{
                        show:true,
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'TOTAL',
                            fontSize: '16px',
                            fontFamily: 'Urbanist", sans-serif',
                            fontWeight: 'bold',
                            color: '#ADA9B2',                            
                            formatter: function (w) {
                                let valPercent = w.config.series.reduce((a, b) => a + b);
                                return Math.round(valPercent) + "%"
                            }
                          }
                    }
                }
              }
            },
            legend: {
              show: false,
              position: 'bottom',
              formatter: function (val, opts) {
                return opts.w.config.series[opts.seriesIndex] + '%'
              },
              labels: {
                colors: "#9EACC9"
              },
              onItemHover: {
                highlightDataSeries: false
              },
            },
            dataLabels: {
              enabled: false
            },
            tooltip: {
              y: {
                formatter: function(value) {
                  return value + '%';
                }
              }
            }
          },
    });
    return(
        <div className="tokencharts">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} md={12}>
                        <div className="section-title text-center">
                            <h2 className='mb-0' data-aos="fade-up" data-aos-duration="800">Tokenomics</h2>
                        </div>
                        <Row className='align-items-center'>
                            <Col md={6} data-aos="fade-in" data-aos-duration="1000">
                                <ReactApexChart options={Area.options} series={Area.series} type="donut" />
                            </Col>
                            <Col md={6} data-aos="fade-in" data-aos-duration="1200">
                                <div className="tokencharts-list">
                                    <ul>
                                        {
                                            Area.series.map((el, i) => {
                                                return(
                                                    <li key={i} className="d-flex algn-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className="dot" style={{backgroundColor: Area.options.colors[i]}}></div>
                                                            <div className="content">{Area.options.labels[i]}</div>
                                                        </div>
                                                        <div><strong className="fw-bold">{el + '%'}</strong></div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Tokenomics;