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
import echo from "../images/AlphaPoster.png"
import gat from "../images/gatling.png"
import ggho from "../images/GGHO.png"
import hnh from "../images/HeistnHeat.png"
import hnhi from "../images/HNH.png"
import jc from "../images/JamesCastle.png"
import lmp from "../images/magicpatch.png"
import marathon from "../images/marathon_keyart.png"
import atmosphere from "../images/personal_atmosphere.png"

import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from "gatsby"   // used for linking to additional pages
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome!" />
    <h2 className="message">Game Developer</h2>
    <p className="message">
      I am a Technical UI Designer at Bungie working on Marathon. My specialization in technical design comes from a programming background, multidisciplinary collaboration, and building user interfaces with proprietary tools.
    </p>
    <p className="message">
      As both a programmer and technical designer, my interests are in audio, AI, UI, and VR. Below is a list of games and applications I have worked on over the course of my life.
    </p>
    <p className="message">
      Each card has a hyper link; with exceptions for the All of Us and Disciple of the Land projects.
    </p>
    <Container>
      <Row>
        <Col md={6}>
          <a href="https://www.xbox.com/en-US/games/store/marathon/9pb32dkqkzdq" rel="noopener noreferrer" target="_blank" id="card-link">
            <Card>
              <Image src={marathon} className="card-img" alt="Marathon" fluid />
              <Card.Body>
                <Card.Title>
                  <h2>Marathon</h2>
                </Card.Title>
                <Card.Text>
                  Bungie's Extraction Shooter. Made in the Tiger engine. Language: C++
                </Card.Text>
                <Card.Text>
                  Implemented and owned the technical design of many UI features from prototype to ship fidelity. Focused on the optimization and architecture of UI screens.
                </Card.Text>
                <Card.Text>
                  Worked with many designers, technical designers, and engineers to create new content pipelines and improve workflows for Marathon's UI. 
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={6}>
          <a href="https://store.steampowered.com/app/2200030/Echo_of_the_Last_Light/" rel="noopener noreferrer" target="_blank" id="card-link">
            <Card>
              <Image src={echo} className="card-img" alt="Echo of the Last Light" fluid />
              <Card.Body>
                <Card.Title>
                  <h2>Echo of the Last Light</h2>
                </Card.Title>
                <Card.Text>
                  A puzzle adventure game where you go on a journey with your trusty companion. Made in Unreal Engine. Language: C++
                </Card.Text>
                <Card.Text>
                  Implemented delegate-based behaviors and programmed custom blueprints for AI. Implemented and programmed the UI with Common UI.
                </Card.Text>
                <Card.Text>
                  Implemented dynamic audio systems with Meta Sounds and custom event driven blueprints for all audio. 
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <a href="https://drive.google.com/file/d/1_DH4Fjfv0YlGCIl9ENLYYxOHTaP93wU8/view?usp=sharing" rel="noopener noreferrer" target="_blank" id="card-link">
            <Card>
              <Image src={ggho} className="card-img" alt="Great Gnome Hat Off!" fluid />
              <Card.Body>
                <Card.Title>
                  <h2>Great Gnome Hat Off!</h2>
                </Card.Title>
                <Card.Text>
                  Compete with your friends to collect the most hats in this 4-player party game while wearing a hat controller on your head! Made in Unity. Languages: C#, C++
                </Card.Text>
                <Card.Text>
                  Built the hardware and programmed the hat controllers with an Arduino. Programmed the player mechanics and match UI.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={6}>
          <Card title="Only a gif is available for this project!">
            <Image src={aou} className="card-img" alt="All of Us" fluid />
            <Card.Body>
              <Card.Title>
                <h2>All of Us</h2>
              </Card.Title>
              <Card.Text>
                A VR game about precision medicine and the NIH's All of Us Research Program. Made in Unity with the Steam VR SDK. Language: C#
              </Card.Text>
              <Card.Text>
                Programmed accessibility features, npc catching system with inverse kinematics, diegetic tablet system, and other UI.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <a href="https://creations.bethesda.net/en/starfield/details/99070233-54fb-45c2-b092-8fde72a84194/Improved_Powers___Personal_Atmosphere" rel="noopener noreferrer" target="_blank" id="card-link">
            <Card>
              <Image src={atmosphere} className="card-img" alt="Improved Powers - Personal Atmosphere" fluid />
              <Card.Body>
                <Card.Title>
                  <h2>Improved Powers - Personal Atmosphere</h2>
                </Card.Title>
                <Card.Text>
                  A Starfield mod that adds immersion and utility to one of the Starborn Powers.
                </Card.Text>
                <Card.Text>
                  Created 5 custom Magic Effects to update the Personal Atmosphere Spell.
                </Card.Text>
                <Card.Text>
                  Over 440 likes, 3,400 bookmarks, and 1 million plays.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={6}>
          <a href="https://mods.bethesda.net/en/skyrim/mod-detail/4303704" rel="noopener noreferrer" target="_blank" id="card-link">
            <Card>
              <Image src={lmp} className="card-img" alt="Legendary Magic Patch" fluid />
              <Card.Body>
                <Card.Title>
                  <h2>Legendary Magic Patch</h2>
                </Card.Title>
                <Card.Text>
                  An Elder Scrolls V: Skyrim mod that helps magic users in higher difficulties.
                </Card.Text>
                <Card.Text>
                  Implemented new data entries and conditions for Perks related to schools of magic.
                </Card.Text>
                <Card.Text>
                  Over 280 likes, 4,500 bookmarks, and 829,000 plays.
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
                <Card.Title>
                  <h2>Heist N' Heat</h2>
                </Card.Title>
                <Card.Text>
                  A web game iteration of the arcade classic, Rally-X. Hosted on Netlify using a Webpack configured for Phaser 3. Languages: HTML5, CSS, JavaScript
                </Card.Text>
                <Card.Text>
                  Sole programmer who programmed the audio, cop AI, game mechanics, UI, and website. 
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={6}>
          <a href="https://foursay.itch.io/heist-n-heat-infinite" rel="noopener noreferrer" target="_blank" id="card-link">
            <Card>
              <Image src={hnhi} className="card-img" alt="Heist N' Heat Infinite" fluid />
              <Card.Body>
                <Card.Title>
                  <h2>Heist N' Heat Infinite</h2>
                </Card.Title>
                <Card.Text>
                  My original Heist N' Heat was chosen for a remake! Now with Twitch integration. Made in Unreal Engine.
                </Card.Text>
                <Card.Text>
                  Implemented AI with Behavior Trees, car gameplay mechanics, and twitch data parsing for players to impact gameplay during streams.
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
                <Card.Title>
                  <h2>James Castle</h2>
                </Card.Title>
                <Card.Text>
                  A VR simulation of Idaho's very own James Castle's studio and was featured as a museum piece. Made in Unity with the Oculus SDK. Language: C#
                </Card.Text>
                <Card.Text>
                  Optimized and ported the application to the Oculus Quest, programmed VR interactions, and helped create 3D models.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={6}>
          <a href="https://play.google.com/store/apps/details?id=com.aha_jump.android.communicator" rel="noopener noreferrer" target="_blank" id="card-link">
            <Card>
              <Image src={aha} className="card-img" alt="Kids Heart Challenge" fluid />
              <Card.Body>
                <Card.Title>
                  <h2>Kids Heart Challenge</h2>
                </Card.Title>
                <Card.Text>
                  A mobile app for the AHA's KHC program. Made with the Cordova mobile framework. Languages: HTML5, CSS, JavaScript, PHP
                </Card.Text>
                <Card.Text>
                  Implemented new features, fixed bugs, posted to backend services, and updated the UI. Also worked on the administrative website that managed this application.
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
              <Card.Title>
                <h2>Disciple of the Land</h2>
              </Card.Title>
              <Card.Text>
                A utility app for Final Fantasy XIV. Made in Android Studio. Language: Kotlin
              </Card.Text>
              <Card.Text>
                Programmed a SQL database of items from a json file using AWS and interfaces with a FFXIV API to snapshot data. Programmed and designed the UI.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <a href="https://www.youtube.com/watch?v=KLBXxRFKpR8" rel="noopener noreferrer" target="_blank" id="card-link">
            <Card>
              <Image src={gat} className="card-img" alt="Gatling Gun Experience" fluid />
              <Card.Body>
                <Card.Title>
                  <h2>Gatling Gun Experience</h2>
                </Card.Title>
                <Card.Text>
                  An educational VR game for the Old Idaho Penitentiary and was featured as a museum piece. Made in Unity. Language: C#
                </Card.Text>
                <Card.Text>
                  Programmed the audio playback system and its VR interactions. Programmed and designed the UI.
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
                <Card.Title>
                  <h2>Undergraduate Demo Reel</h2>
                </Card.Title>
                <Card.Text>
                  A video showing miscellaneous projects during my time as an undergraduate student at Boise State University in 2020. I've come a long way!!
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
