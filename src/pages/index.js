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
    <h2 className="message">Software Developer</h2>
    <p className="message">I am a graduate student at the University of Utah pursuing a Masters Degree in Entertainment Arts and Engineering.</p>
    <p className="message">My goal is to work in the game industry as a gameplay, UI, or VR programmer. Below is a list of applications I have worked on and wish to share with you.</p>
    <p className="message"></p>
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Image src={aou} className="card-img" alt="All of Us" fluid />
            <Card.Body>
              <Card.Title><h2>All of Us</h2></Card.Title>
              <Card.Text>
                A VR game about precision medicine and the All of Us Research Program.
              </Card.Text>
              <Card.Text>
              Programmed accesibility features, npc catching system, tablet system, and UI.
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
                A <a href="https://play.google.com/store/apps/details?id=com.aha_jump.android.communicator" rel="noopener">mobile app</a> for fundraising with the KHC program.
              </Card.Text>
              <Card.Text>
              Core responsiblites included implementing new features, fixing bugs, and updating UI.
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
                A <a href="https://youtu.be/huajQCQFS5k" rel="noopener">VR simulation</a> of Idaho's very own James Castle's studio.
              </Card.Text>
              <Card.Text>
              Built application for the Oculus Quest, created 3D models, and programmed VR interactions.
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
                A <a href="https://play.google.com/store/apps/details?id=com.gimm.NeuralNetwork" rel="noopener">mobile game</a> for children inspired by neurons.
              </Card.Text>
              <Card.Text>
              Programmed level system and touch interactions. Created, designed, and programmed UI.
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
                A <a href="https://heistnheat.netlify.app/" rel="noopener">web game</a> iteration of the arcade classic, Rally-X.
              </Card.Text>
              <Card.Text>Programmed most of the game. Also hosted the game on Netlify using a Webpack configured for Phaser 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Image src={vg} className="card-img" alt="vgMusic" fluid />
            <Card.Body>
              <Card.Title><h2>vgMusic</h2></Card.Title>
              <Card.Text>
                My <a href="https://vgmusic.herokuapp.com/" rel="noopener">first website</a> that functions as a music suggestor.
              </Card.Text>
              <Card.Text>Built it myself! One cool feature is using AJAX to access a database and embed Spotify Widgets.</Card.Text>
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
              <Card.Text>Built it myself! Creates a local database of items from a json file using AWS. I had fun making the UI.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Image src={gat} className="card-img" alt="Gatling Gun Experience" fluid />
            <Card.Body>
              <Card.Title><h2>Gatling Gun Experience</h2></Card.Title>
              <Card.Text>
                An <a href="https://www.youtube.com/watch?v=KLBXxRFKpR8" rel="noopener">educational VR app</a> for the Old Idaho Penitentiary.
              </Card.Text>
              <Card.Text>
              Programmed the audio playback system and UI. Excluding textures, designed the UI.
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
                A <a href="https://www.youtube.com/watch?v=9-KZYXeqjkM" rel="noopener">video</a> showing fun times creating things at Boise State University.
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
