import * as React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"
import aha from "../images/AHA.png"
import aou from "../images/AoU.gif"
import demo from "../images/DemoReel.png"
import dol from "../images/DoL.gif"
import gat from "../images/gatling.png"
import hnh from "../images/HeistnHeat.png"
import jt from "../images/JacquesTale.png"
import jc from "../images/JamesCastle.png"
import vg from "../images/vgMusic.png"
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from "gatsby"   // used for linking to additional pages
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome!" />
    <p className="message">My name is Lionel Lopez. A software developer establishing a carrer in the game industry.</p>
    <p className="message">Below is a list of applications I have worked on and wish to share with you.</p>
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Image src={aou} className="card-img" alt="All of Us" fluid />
            <Card.Body>
              <Card.Title><h2>All of Us</h2></Card.Title>
              <Card.Text>
                An educational VR game about precision medicine and the All of Us Research Program.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Image src={aha} className="card-img" alt="Kids Heart Challenge" fluid />
            <Card.Body>
              <Card.Title><h2>Kids Heart Challenge</h2></Card.Title>
              <Card.Text>
                A mobile app for fundraising with the KHC program. <a href="https://play.google.com/store/apps/details?id=com.aha_jump.android.communicator" rel="noopener">Link</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
          <Card>
            <Image src={jc} className="card-img" alt="James Castle" fluid />
            <Card.Body>
              <Card.Title><h2>James Castle</h2></Card.Title>
              <Card.Text>
                A VR simulation of Idaho's very own James Castle's studio. <a href="https://youtu.be/huajQCQFS5k" rel="noopener">Watch here</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Image src={jt} className="card-img" alt="Jacques Tale" fluid />
            <Card.Body>
              <Card.Title><h2>Jacques' Tale</h2></Card.Title>
              <Card.Text>
                A mobile game for children inspired by neurons. <a href="https://play.google.com/store/apps/details?id=com.gimm.NeuralNetwork" rel="noopener">Link</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
          <Card>
            <Image src={hnh} className="card-img" alt="Heist N Heat" fluid />
            <Card.Body>
              <Card.Title><h2>Heist N' Heat</h2></Card.Title>
              <Card.Text>
                A web iteration of the arcade game Rally-X. <a href="https://heistnheat.netlify.app/" rel="noopener">Link</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Image src={vg} className="card-img" alt="vgMusic" fluid />
            <Card.Body>
              <Card.Title><h2>vgMusic</h2></Card.Title>
              <Card.Text>
                My first website that functions as a music suggestor. <a href="https://vgmusic.herokuapp.com/" rel="noopener">Link</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Image src={dol} className="card-img" alt="Disciple of the Land" fluid />
            <Card.Body>
              <Card.Title><h2>Disciple of the Land</h2></Card.Title>
              <Card.Text>
                A utility app for Final Fantasy XIV.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Image src={gat} className="card-img" alt="Gatling Gun Experience" fluid />
            <Card.Body>
              <Card.Title><h2>Gatling Gun Experience</h2></Card.Title>
              <Card.Text>
                An educational VR app for the Old Idaho Penitentiary. <a href="https://www.youtube.com/watch?v=KLBXxRFKpR8" rel="noopener">Watch here</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
      <Card>
            <Image src={demo} className="card-img" alt="Fun Times during Undergrad" fluid />
            <Card.Body>
              <Card.Title><h2>Undergraduate Demo Reel</h2></Card.Title>
              <Card.Text>
                A video showing fun times creating things at Boise State University. <a href="https://www.youtube.com/watch?v=9-KZYXeqjkM" rel="noopener">Watch here</a>
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
