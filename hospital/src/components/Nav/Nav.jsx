import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../Nav/Nav.module.css'
function Nav() {
  return (
    <Container>
      <Row id={styles.mainHeader} className="gap-1 row justify-content-around align-items-center">
        <Col lg="2" md="2" sm="2" xs="6"> {/**Add the offset 1 */}
          <a href='/'><img src="../../assets/images/logo (1).png" alt="MUKTI" id="logo"/></a>
        </Col>
      </Row>
    </Container>
  )
}

export default Nav
