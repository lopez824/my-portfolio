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
import echo from "../images/AlphaPoster.png"
import ggho from "../images/GGHO.png"
import hnhi from "../images/HNH.png"
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from "gatsby"   // used for linking to additional pages
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome!" />
    <h2 className="message">Game Developer</h2>
    <p className="message">I am a graduate student at the University of Utah pursuing a Masters Degree in Entertainment Arts and Engineering. My specialization is an Engineer with a focus of game design.</p>
    <p className="message">I enjoy working as a gameplay, AI, UI, or VR programmer. Below is a list of games and applications I have worked on. Except for the All of Us project, each card is interactable.</p>
    <p className="message"></p>
    <Container>
      <Row>
        <Col md={6}>
        <a href="https://store.steampowered.com/app/2200030/Echo_of_the_Last_Light/" rel="noopener noreferrer" target="_blank" id="card-link">
        <Card>
            <Image src={echo} className="card-img" alt="Echo of the Last Light" fluid />
            <Card.Body>
              <Card.Title><h2>Echo of the Last Light</h2></Card.Title>
              <Card.Text>
                A puzzle adventure game where you go on a journey with your trusty companion. Made in Unreal Engine.
              </Card.Text>
              <Card.Text>
                Programmed and designed AI, companion gameplay mechanics, and responsible for build reviews. 
              </Card.Text>
              <Card.Text>
                Currently in Alpha, wishlist on Steam!
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
        <Col md={6}>
        <a href="https://drive.google.com/file/d/1_DH4Fjfv0YlGCIl9ENLYYxOHTaP93wU8/view?usp=sharing" rel="noopener noreferrer" target="_blank" id="card-link">
        <Card>
            <Image src={ggho} className="card-img" alt="Great Gnome Hat Off!" fluid />
            <Card.Body>
              <Card.Title><h2>Great Gnome Hat Off!</h2></Card.Title>
              <Card.Text>
                Compete with your friends to collect the most hats in this wacky 4-player party game while wearing a hat controller on your head!
              </Card.Text>
              <Card.Text>
                Built and programmed the alternative controller, player mechanics, and UI.
              </Card.Text>
              <Card.Text>
                Currently submitted to the 2023 alt.ctrl.GDC competition!
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card title="Only a gif is available for this project!">
            <Image src={aou} className="card-img" alt="All of Us" fluid />
            <Card.Body>
              <Card.Title><h2>All of Us</h2></Card.Title>
              <Card.Text>
                A VR game about precision medicine and the All of Us Research Program. Made in Unity.
              </Card.Text>
              <Card.Text>
                Programmed accesibility features, npc catching system, tablet system, and UI.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
        <a href="https://foursay.itch.io/heist-n-heat-infinite" rel="noopener noreferrer" target="_blank" id="card-link">
        <Card>
            <Image src={hnhi} className="card-img" alt="Heist N' Heat Infinite" fluid />
            <Card.Body>
              <Card.Title><h2>Heist N' Heat Infinite</h2></Card.Title>
              <Card.Text>
                My original Heist N' Heat was chosen for a remake! Now with Twitch integration. Made in Unreal Engine.
              </Card.Text>
              <Card.Text>
                Programmed AI, car gameplay mechanics, and twitch data parsing.
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
        <a href="https://youtu.be/huajQCQFS5k" rel="noopener noreferrer" target="_blank" id="card-link">
          <Card>
            <Image src={jc} className="card-img" alt="James Castle" fluid />
            <Card.Body>
              <Card.Title><h2>James Castle</h2></Card.Title>
              <Card.Text>
                A VR simulation of Idaho's very own James Castle's studio. Made in Unity.
              </Card.Text>
              <Card.Text>
                Built application for the Oculus Quest, created 3D models, and programmed VR interactions.
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
        <Col md={6}>
          <a href="https://play.google.com/store/apps/details?id=com.gimm.NeuralNetwork" rel="noopener noreferrer" target="_blank" id="card-link">
          <Card>
            <Image src={jt} className="card-img" alt="Jacques Tale" fluid />
            <Card.Body>
              <Card.Title><h2>Jacques' Tale</h2></Card.Title>
              <Card.Text>
                A mobile game for children inspired by neurons. Made in Unity.
              </Card.Text>
              <Card.Text>
                Programmed level system and touch interactions. Created, designed, and programmed UI.
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
        <a href="https://heistnheat.netlify.app/" rel="noopener noreferrer" target="_blank" id="card-link">
          <Card>
            <Image src={hnh} className="card-img" alt="Heist N Heat" fluid />
            <Card.Body>
              <Card.Title><h2>Heist N' Heat</h2></Card.Title>
              <Card.Text>
                A web game iteration of the arcade classic, Rally-X.
              </Card.Text>
              <Card.Text>Programmed most of the game. Also hosted the game on Netlify using a Webpack configured for Phaser 3.</Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
        <Col md={6}>
          <a href="https://play.google.com/store/apps/details?id=com.aha_jump.android.communicator" rel="noopener noreferrer" target="_blank" id="card-link">
          <Card>
            <Image src={aha} className="card-img" alt="Kids Heart Challenge" fluid />
            <Card.Body>
              <Card.Title><h2>Kids Heart Challenge</h2></Card.Title>
              <Card.Text>
                A mobile app for fundraising with the KHC program. Made with Cordova mobile framework.
              </Card.Text>
              <Card.Text>
                Core responsiblites included implementing new features, fixing bugs, and updating UI.
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
          <Card title="Only a gif is available for this project!">
            <Image src={dol} className="card-img" alt="Disciple of the Land" fluid />
            <Card.Body>
              <Card.Title><h2>Disciple of the Land</h2></Card.Title>
              <Card.Text>
                A utility app for Final Fantasy XIV. Native Android app I programmed from scratch.
              </Card.Text>
              <Card.Text>Creates a local database of items from a json file using AWS. I had fun making the UI.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <a href="https://www.youtube.com/watch?v=KLBXxRFKpR8" rel="noopener noreferrer" target="_blank" id="card-link">
          <Card>
            <Image src={gat} className="card-img" alt="Gatling Gun Experience" fluid />
            <Card.Body>
              <Card.Title><h2>Gatling Gun Experience</h2></Card.Title>
              <Card.Text>
                An educational VR game for the Old Idaho Penitentiary. Made in Unity.
              </Card.Text>
              <Card.Text>
                Programmed the audio playback system and UI. Excluding textures, designed the UI.
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
          <a href="https://www.youtube.com/watch?v=9-KZYXeqjkM" rel="noopener noreferrer" target="_blank" id="card-link">
            <Card>
            <Image src={demo} className="card-img" alt="Fun Times during Undergrad" fluid />
            <Card.Body>
              <Card.Title><h2>Undergraduate Demo Reel</h2></Card.Title>
              <Card.Text>
                A video showing fun times creating things during my four years at Boise State University.
              </Card.Text>
            </Card.Body>
            </Card>
          </a>
      </Col>
      </Row>
    </Container>
  </Layout>
)
export default IndexPage
