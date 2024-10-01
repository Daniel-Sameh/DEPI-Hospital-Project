import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../Nav/Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/images/logo (1).png"
import phone from "../../assets/images/1.png"
import email from "../../assets/images/2.png"
import address from "../../assets/images/3.png"

function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className={styles.nav}>
      <Row id={styles.mainHeader} className="gap-1 justify-content-around align-items-center">
        <Col lg={{ span: 2, offset: 1 }} md={{ span: 2, offset: 1 }} sm={{ span: 2, offset: 1 }} xs={{ span: 2, offset: 0 }}> {/**Add the offset 1 */}
          <a href='/'><img src={logo} alt="MUKTI" id={styles.logo}/></a>
        </Col>
        <Col id={styles.navIcon} sm='1' xs='1'>
          <Button variant="primary" onClick={handleShow}>
            <FontAwesomeIcon icon={faBars}/>
          </Button>
          <Offcanvas show={show} onHide={handleClose} id={styles.offcanvasExampleLabel}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={styles.offcanvasExampleLabel}>
                MUKTI <sub>Best For Medical</sub>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.offCanvasBody}>
                <div>
                  <div className={styles.info}>
                    <img src={phone} alt="Phone" />
                    <div className={styles.details}>
                      <p>Number:</p>
                      <p className={`h6 ${styles.h6}`}>
                        <a href="tel:+880123456789">+880123456789</a>
                      </p>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <img src={email} alt="Email" />
                    <div className={styles.details}>
                      <p>Email:</p>
                      <p className={`h6 ${styles.h6}`}>
                        <a href="mailto:Mukti@gmail.com">Mukti@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <img src={address} alt="Address" />
                    <div className={styles.details}>
                      <p>Address:</p>
                      <p className={`h6 ${styles.h6}`}>
                        <a href="#">12 North West New York 100</a>
                      </p>
                    </div>
                  </div>
                </div>
                <DropdownButton id="dropdown-basic-button" title="Website Pages">
                  <Dropdown.Item href="/">Home</Dropdown.Item>
                  <Dropdown.Item href="/departments">Departments</Dropdown.Item>
                  <Dropdown.Item href="/doctors">Doctors</Dropdown.Item>
                  <Dropdown.Item href="/services">Services</Dropdown.Item>
                  <Dropdown.Item href="/blogs">Blog</Dropdown.Item>
                  <Dropdown.Item href="/about">About Us</Dropdown.Item>
                  <Dropdown.Item href="/contact">Contact Us</Dropdown.Item>
                </DropdownButton> 
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Col lg='8' sm='6' xs='6' id={styles.contacts}>
          <Row className='align-items-center justify-content-center'>
            <Col md="4" sm="4">
              <div className={styles.info}>
                <img className={styles.images} src={phone} alt="Phone"/>
                <div className={styles.details}>
                  <p>Number:</p>
                  <p className={`${styles.h6} h6`}>
                    <a href="tel:+880123456789">+880123456789</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4" sm="4">
              <div className={styles.info}>
                <img className={styles.images} src={email} alt="Email"/>
                <div className={styles.details}>
                  <p>Email:</p>
                  <p className={`${styles.h6} h6`}>
                    <a href="mailto:Mukti@gmail.com">Mukti@gmail.com</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4" sm="4" >
              <div className={styles.info}>
                <img className={styles.images} src={address} alt="Address"/>
                <div className={styles.details}>
                  <p>Address:</p>
                  <p className={`${styles.h6} h6`}>
                    <a href="#">12 North West New York 100</a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row id={styles.links} className='align-content-center justify-content-center align-items-center p-2'>
          <div className="col-lg-1 col-md-4 col-sm-4 p-lg-2 home">
            <p className={`h6 ${styles.h6}`}><a href="/">Home</a></p>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-4">
            <p className={`h6 ${styles.h6}`}><a href="/departments">Departments</a></p>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-4">
            <p className={`h6 ${styles.h6}`}><a href="/doctors">Doctors</a></p>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-4">
            <p className={`h6 ${styles.h6}`}><a href="/services">Services</a></p>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-4">
            <p className={`h6 ${styles.h6}`}><a href="/blogs">Blog</a></p>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-4">
            <p className={`h6 ${styles.h6}`}><a href="/about">About Us</a></p>
          </div>
          <div className="col-lg-1 col-md-4 col-sm-4">
            <p className={`h6 ${styles.h6}`}><a href="/contact">Contact Us</a></p>
          </div>
      </Row>
    </Container>
  )
}

export default Nav
