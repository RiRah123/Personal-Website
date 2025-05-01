import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBullseye, FaCrosshairs, FaLightbulb, FaHandshake, FaPencilAlt, FaUserCircle, FaSitemap, FaFlask, FaComments, FaTools, FaCheckCircle, FaCode, FaChalkboardTeacher } from "react-icons/fa";
import { BsPeopleFill, BsTranslate, BsCameraFill } from "react-icons/bs";
import presentationPDF from '../../Assets/Educational Technology Final Group Presentation Slides.pdf';
import '../../style.css';

const DuolingoRedesign = () => {
  const [prototypeLoaded, setPrototypeLoaded] = useState(false);
  const [presentationLoaded, setPresentationLoaded] = useState(false);

  const handleLoad = (type) => {
    if (type === 'prototype') {
      setPrototypeLoaded(true);
    } else if (type === 'presentation') {
      setPresentationLoaded(true);
    }
  };

  return (
    <div className="duolingo-redesign-page" style={{ 
      width: '100%',
      paddingTop: 0
    }}>
      <Row className="justify-content-center">
        <Col lg={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="project-heading" style={{ 
              textAlign: 'center',
              marginBottom: '50px',
              color: 'white'
            }}>
              Duolingo Redesign <span style={{ color: '#c770f0' }}> (Group Project) </span>
            </h1>
            
            <div className="project-summary mb-5">
              <p style={{ 
                color: 'white',
                fontSize: '1.2rem',
                lineHeight: '1.8',
                textAlign: 'center',
                opacity: 0.8
              }}>
                This course project focused on addressing key limitations in Duolingo's current platform, 
                specifically targeting the lack of cultural immersion, real-world conversation opportunities, 
                and community engagement features that are crucial for effective language learning.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="objective-section mb-5"
              style={{
                background: 'rgba(15, 22, 36, 0.8)',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(199, 112, 240, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <FaLightbulb style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                <h2 className="project-heading" style={{ 
                  textAlign: 'center',
                  margin: 0,
                  color: 'white'
                }}>
                  Project <span style={{ color: '#c770f0' }}>Objective</span>
                </h2>
                <FaLightbulb style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
              </div>
              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8
              }}>
                Current digital language learning tools like Duolingo often fall short in supporting learners from diverse linguistic and cultural backgrounds. While they offer gamified experiences, they lack real-world immersion, social connection, and adaptability for marginalized users. Our goal was to redesign Duolingo to bridge these gaps by introducing features that emphasize cultural relevance, peer interaction, and authentic communication opportunities. We focused specifically on improving learning experiences for students who face language barriers due to socioeconomic, racial, or geographic disparities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="intervention-section mb-5"
              style={{
                background: 'rgba(15, 22, 36, 0.8)',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(199, 112, 240, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <FaHandshake style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                <h2 className="project-heading" style={{ 
                  textAlign: 'center',
                  margin: 0,
                  color: 'white'
                }}>
                  Our <span style={{ color: '#c770f0' }}>Intervention</span>
                </h2>
                <FaHandshake style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
              </div>
              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginBottom: '30px'
              }}>
                Our redesign introduces three features grounded in learning science principles and feedback from real users:
              </p>
              <div style={{ marginLeft: '0', textAlign: 'center' }}>
                <div className="mb-4">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                    <BsPeopleFill style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                    <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                      Social Learning Community Hub
                    </h3>
                  </div>
                  <p style={{ 
                    color: 'white',
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    opacity: 0.8,
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center'
                  }}>
                    Inspired by Vygotsky's Social Constructivism, this feature enables users to engage in forums, language challenges, and peer-led minigames to support collaborative learning. It provides a space for mutual support and motivation, helping users co-construct knowledge with others.
                  </p>
                </div>

                <div className="mb-4">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                    <BsCameraFill style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                    <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                      Augmented Reality-Based Vocabulary Scanner
                    </h3>
                  </div>
                  <p style={{ 
                    color: 'white',
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    opacity: 0.8,
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center'
                  }}>
                    Grounded in Situated and Distributed Cognition, this AR feature lets users point their camera at real-world objects and receive instant translations in their target language. It bridges classroom learning and real-life context, particularly for learners navigating new cultural environments.
                  </p>
                </div>

                <div className="mb-4">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                    <BsTranslate style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                    <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                      Live Conversation with Native Speakers
                    </h3>
                  </div>
                  <p style={{ 
                    color: 'white',
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    opacity: 0.8,
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center'
                  }}>
                    Leveraging Sociocultural Theory and the Zone of Proximal Development, this feature connects learners with native speakers for real-time conversations, enabling immediate feedback, cultural exchange, and fluency growth.
                  </p>
                </div>
              </div>
              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginTop: '20px'
              }}>
                These interventions were tested through user studies and iterated across low-, mid-, and high-fidelity prototypes. Our approach aimed to support not just knowledge acquisition, but also inclusive and meaningful learning experiences for language minority users.
              </p>
            </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="persona-section mb-5"
                style={{
                  background: 'rgba(15, 22, 36, 0.8)',
                  borderRadius: '15px',
                  padding: '30px',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(199, 112, 240, 0.2)'
                }}
              >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <FaUserCircle style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                <h2 className="project-heading" style={{ 
                  textAlign: 'center',
                  margin: 0,
                  color: 'white'
                }}>
                  Target <span style={{ color: '#c770f0' }}>Persona</span>
                </h2>
                <FaUserCircle style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
              </div>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginBottom: '30px'
              }}>
                To better understand our target user, we created a detailed persona:
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                <img 
                  src={require("../../Assets/images/duolingo-persona.png")}
                  alt="Persona - Maria Solis"
                  style={{
                    width: '20%',
                    height: 'auto',
                    borderRadius: '10px',
                    border: '1px solid rgba(199, 112, 240, 0.3)'
                  }}
                />
              </div>

              <div style={{
                background: 'rgba(15, 22, 36, 0.6)',
                padding: '25px',
                borderRadius: '10px',
                border: '1px solid rgba(199, 112, 240, 0.2)'
              }}>
                <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Maria Solis</h3>
                <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                  A 21-year-old computer science student at Georgia Tech, fluent in English and Spanish, and a beginner in French. 
                  She uses Duolingo to prepare for study abroad and connect with French-speaking friends. While she appreciates 
                  gamified learning, Maria struggles with repetitive lessons, shallow grammar explanations, and lack of real-world 
                  interaction. She wants a more structured way to track her progress and deeper opportunities for meaningful conversation.
                  </p>
                </div>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="sketches-section mb-5"
              style={{
                background: 'rgba(15, 22, 36, 0.8)',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(199, 112, 240, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <FaPencilAlt style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
              <h2 className="project-heading" style={{ 
                textAlign: 'center',
                  margin: 0,
                color: 'white'
                }}>
                  Design <span style={{ color: '#c770f0' }}>Sketches</span>
                </h2>
                <FaPencilAlt style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
              </div>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginBottom: '30px'
              }}>
                To address Maria's needs and pain points, we created detailed sketches for each feature. These early visuals 
                helped us define the layout, screen transitions, and interaction logic before moving into high-fidelity prototypes.
              </p>

              <div className="sketch-descriptions">
                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Community Hub</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    Our sketches laid out how users would navigate between challenges, discussions, and leaderboards. 
                    We emphasized clarity by visually separating each section and showing progression through language 
                    levels and point systems.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/duolingo-sketch-1.png")}
                      alt="Community Hub Sketch"
                      style={{
                        width: '50%',
                        height: 'auto',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)',
                        marginBottom: '30px'
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>AR Vocabulary Scanner</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    We mapped a clear step-by-step flow: starting from language selection, granting camera permissions, 
                    capturing an object, and showing translated vocabulary along with grammatical context. The sketch also 
                    includes a way to switch languages or classify additional objects without restarting.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/duolingo-sketch-2.png")}
                      alt="AR Vocabulary Scanner Sketch"
                      style={{
                        width: '50%',
                        height: 'auto',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)',
                        marginBottom: '30px'
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Live Conversation Interface</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    The sketch outlines the full tutor interaction—from choosing a language and proficiency level, 
                    to selecting a tutor, joining a video call, and leaving feedback or notes. This helped us visualize 
                    how to streamline transitions between call setup, interaction, and reflection.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/duolingo-sketch-3.png")}
                      alt="Live Conversation Interface Sketch"
                      style={{
                        width: '50%',
                        height: 'auto',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)',
                        marginBottom: '30px'
                      }}
                    />
                  </div>
                </div>

                <p style={{ 
                  color: 'white', 
                  fontSize: '1.1rem', 
                  opacity: 0.8,
                  fontStyle: 'italic',
                  marginTop: '30px'
                }}>
                  These sketches ensured that our feature ideas translated into intuitive, usable interfaces right from the start.
                </p>
              </div>
            </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="affinity-section mb-5"
                style={{
                  background: 'rgba(15, 22, 36, 0.8)',
                  borderRadius: '15px',
                  padding: '30px',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(199, 112, 240, 0.2)'
                }}
              >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <FaSitemap style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                <h2 className="project-heading" style={{ 
                  textAlign: 'center',
                  margin: 0,
                  color: 'white'
                }}>
                  Affinity <span style={{ color: '#c770f0' }}>Mapping</span>
                </h2>
                <FaSitemap style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
              </div>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginBottom: '30px'
              }}>
                Next, we created an affinity diagram that grouped common frustrations and improvement ideas. 
                Key problems included lack of in-depth grammar instruction, repetitive lessons, and minimal 
                real-world interaction. These were mapped to actionable feature ideas—such as AR-based vocabulary 
                learning, live native speaker conversations, and social engagement tools—many of which were also 
                directly suggested by users.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                <img 
                  src={require("../../Assets/images/duolingo-affinity-diagram.png")}
                  alt="Duolingo Affinity Diagram"
                  style={{
                    width: '90%',
                    height: 'auto',
                    borderRadius: '10px',
                    border: '1px solid rgba(199, 112, 240, 0.3)'
                  }}
                />
                </div>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="research-section mb-5"
                style={{
                  background: 'rgba(15, 22, 36, 0.8)',
                  borderRadius: '15px',
                  padding: '30px',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(199, 112, 240, 0.2)'
                }}
              >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <FaFlask style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                <h2 className="project-heading" style={{ 
                  textAlign: 'center',
                  margin: 0,
                  color: 'white'
                }}>
                  Prototyping Process & <span style={{ color: '#c770f0' }}>User Research</span>
                </h2>
                <FaFlask style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
              </div>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginBottom: '30px'
              }}>
                Our redesign journey began with a basic prototype built in PowerPoint, allowing us to quickly 
                visualize our ideas before committing to a full design tool. From there, we transitioned to 
                Figma to create a more interactive, high-fidelity experience based on user feedback.
              </p>

              <div className="research-phases">
                {/* Initial Research Section */}
                <div className="research-phase mb-5">
                  <h3 style={{ color: '#c770f0', marginBottom: '20px' }}>
                    <FaComments style={{ marginRight: '10px' }} /> Initial Research (Before Prototyping)
                  </h3>
                  <p style={{ 
                    color: 'white',
                    fontSize: '1.1rem',
                    opacity: 0.8,
                    marginBottom: '20px'
                  }}>
                    Before building anything, we interviewed Duolingo users to understand their pain points and desires:
                  </p>
                  <Row className="video-row">
                    <Col md={4} className="mb-4">
                      <div className="video-container" style={{ 
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}>
                        <iframe
                          src="https://gtvault-my.sharepoint.com/personal/dsingh93_gatech_edu/_layouts/15/embed.aspx?UniqueId=65183957-3122-4798-bcf9-88cefc715c2b&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                          title="Initial Research Interview 1"
                          frameBorder="0"
                          scrolling="no"
                          allowFullScreen
                        />
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <div className="video-container" style={{ 
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}>
                        <iframe
                          src="https://drive.google.com/file/d/1LHtDWAgDmAGTpMR8IZ7VlhnHW24xD2Fi/preview"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                          title="Initial Research Interview 2"
                          frameBorder="0"
                          scrolling="no"
                          allowFullScreen
                        />
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <div className="video-container" style={{ 
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}>
                        <iframe
                          src="https://drive.google.com/file/d/11UQHtH3gRP05tqofbDGLxI14x1xca2Ff/preview"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                          title="Initial Research Interview 3"
                          frameBorder="0"
                          scrolling="no"
                          allowFullScreen
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="findings-subsection mt-4" style={{
                    background: 'rgba(15, 22, 36, 0.6)',
                    borderRadius: '15px',
                    padding: '25px',
                    border: '1px solid rgba(199, 112, 240, 0.2)'
                  }}>
                    <h4 style={{ color: '#c770f0', marginBottom: '20px' }}>Initial Research Findings:</h4>
                    <div className="table-responsive">
                      <table style={{
                        width: '100%',
                        borderCollapse: 'separate',
                        borderSpacing: '0 8px'
                      }}>
                        <tbody>
                          {[
                            'Social Learning Community Hub',
                            'Augmented Reality Vocabulary Scanner',
                            'Live Conversation with Native Speakers'
                          ].map((feature) => {
                            const findings = {
                              'Social Learning Community Hub': 'Users felt isolated from others; wanted forums, social engagement, and shared learning spaces.',
                              'Augmented Reality Vocabulary Scanner': 'Users wanted culturally grounded learning with real-world objects; suggested scanning familiar surroundings.',
                              'Live Conversation with Native Speakers': 'Users expressed a need for real conversational practice to understand grammar and slang.'
                            };

                            return (
                              <tr key={feature} style={{
                                background: 'rgba(15, 22, 36, 0.4)',
                                marginBottom: '8px'
                              }}>
                                <td style={{
                                  color: '#c770f0',
                                  padding: '16px',
                                  width: '30%',
                                  borderLeft: '3px solid #c770f0',
                                  borderRadius: '4px 0 0 4px'
                                }}>
                                  {feature}
                                </td>
                                <td style={{
                                  color: 'white',
                                  padding: '16px',
                                  borderRadius: '0 4px 4px 0'
                                }}>
                                  {findings[feature]}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Mid-Fidelity Testing Section */}
                <div className="research-phase mb-5">
                  <h3 style={{ color: '#c770f0', marginBottom: '20px' }}>
                    <FaTools style={{ marginRight: '10px' }} /> Mid-Fidelity Prototype Testing
                  </h3>
                  <p style={{ 
                    color: 'white',
                    fontSize: '1.1rem',
                    opacity: 0.8,
                    marginBottom: '20px'
                  }}>
                    We created a clickable prototype in Figma and conducted testing to gather feedback on usability and design clarity:
                  </p>
                  <Row className="video-row">
                    <Col md={4} className="mb-4">
                      <div className="video-container" style={{ 
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}>
                        <iframe
                          src="https://gtvault-my.sharepoint.com/personal/dsingh93_gatech_edu/_layouts/15/embed.aspx?UniqueId=d65c3885-4694-4d2d-87fb-c2149c468f37&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                          title="Mid-Fidelity Test 1"
                          frameBorder="0"
                          scrolling="no"
                          allowFullScreen
                        />
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <div className="video-container" style={{ 
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}>
                        <iframe
                          src="https://www.youtube.com/embed/FBIiHbm9rN0"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                          title="Mid-Fidelity Test 2"
                          allowFullScreen
                        />
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <div className="video-container" style={{ 
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}>
                        <iframe
                          src="https://www.youtube.com/embed/fI-yfUdLUwQ"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                          title="Mid-Fidelity Test 3"
                          allowFullScreen
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="findings-subsection mt-4" style={{
                    background: 'rgba(15, 22, 36, 0.6)',
                    borderRadius: '15px',
                    padding: '25px',
                    border: '1px solid rgba(199, 112, 240, 0.2)'
                  }}>
                    <h4 style={{ color: '#c770f0', marginBottom: '20px' }}>Mid-Fidelity Testing Findings:</h4>
                    <div className="table-responsive">
                      <table style={{
                        width: '100%',
                        borderCollapse: 'separate',
                        borderSpacing: '0 8px'
                      }}>
                        <tbody>
                          {[
                            'Social Learning Community Hub',
                            'Augmented Reality Vocabulary Scanner',
                            'Live Conversation with Native Speakers'
                          ].map((feature) => {
                            const findings = {
                              'Social Learning Community Hub': 'Leaderboard and discussion threads were unclear; lacked filters and structured categories.',
                              'Augmented Reality Vocabulary Scanner': 'Unclear object selection feedback; missing options to redo or confirm image; UI confusion on actions.',
                              'Live Conversation with Native Speakers': "Users didn't know what to do in video chat; lacked prompts or clear next steps."
                            };

                            return (
                              <tr key={feature} style={{
                                background: 'rgba(15, 22, 36, 0.4)',
                                marginBottom: '8px'
                              }}>
                                <td style={{
                                  color: '#c770f0',
                                  padding: '16px',
                                  width: '30%',
                                  borderLeft: '3px solid #c770f0',
                                  borderRadius: '4px 0 0 4px'
                                }}>
                                  {feature}
                                </td>
                                <td style={{
                                  color: 'white',
                                  padding: '16px',
                                  borderRadius: '0 4px 4px 0'
                                }}>
                                  {findings[feature]}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Final Testing Section */}
                <div className="research-phase">
                  <h3 style={{ color: '#c770f0', marginBottom: '20px' }}>
                    <FaCheckCircle style={{ marginRight: '10px' }} /> Final Prototype Testing
                  </h3>
                  <p style={{ 
                    color: 'white',
                    fontSize: '1.1rem',
                    opacity: 0.8,
                    marginBottom: '20px'
                  }}>
                    We refined the prototype based on earlier feedback and conducted a second round of user testing on the high-fidelity version:
                  </p>
                  <Row className="video-row">
                    <Col md={4} className="mb-4">
                      <div className="video-container" style={{ 
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}>
                        <iframe
                          src="https://gtvault-my.sharepoint.com/personal/dsingh93_gatech_edu/_layouts/15/embed.aspx?UniqueId=731290b4-6c84-46e1-a54b-393fe9d8ede4&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                          title="Final Test 1"
                          frameBorder="0"
                          scrolling="no"
                          allowFullScreen
                        />
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <div className="video-container" style={{ 
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}>
                        <iframe
                          src="https://www.youtube.com/embed/oWXszyd7-bI"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                          title="Final Test 2"
                          allowFullScreen
                        />
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <div className="video-container" style={{ 
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}>
                        <iframe
                          src="https://www.youtube.com/embed/Ewlex-ZomlU"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                          title="Final Test 3"
                          allowFullScreen
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="findings-subsection mt-4" style={{
                    background: 'rgba(15, 22, 36, 0.6)',
                    borderRadius: '15px',
                    padding: '25px',
                    border: '1px solid rgba(199, 112, 240, 0.2)'
                  }}>
                    <h4 style={{ color: '#c770f0', marginBottom: '20px' }}>Final Testing Findings:</h4>
                    <div className="table-responsive">
                      <table style={{
                        width: '100%',
                        borderCollapse: 'separate',
                        borderSpacing: '0 8px'
                      }}>
                        <tbody>
                          {[
                            'Social Learning Community Hub',
                            'Augmented Reality Vocabulary Scanner',
                            'Live Conversation with Native Speakers'
                          ].map((feature) => {
                            const findings = {
                              'Social Learning Community Hub': 'Added clearer navigation and filters; redesigned UI for easier challenge discovery.',
                              'Augmented Reality Vocabulary Scanner': 'Added object confirmation, save/retake options, and clearer on-screen feedback.',
                              'Live Conversation with Native Speakers': 'Introduced reminders for conversation prompts; improved tutor selection feedback and relabeling.'
                            };

                            return (
                              <tr key={feature} style={{
                                background: 'rgba(15, 22, 36, 0.4)',
                                marginBottom: '8px'
                              }}>
                                <td style={{
                                  color: '#c770f0',
                                  padding: '16px',
                                  width: '30%',
                                  borderLeft: '3px solid #c770f0',
                                  borderRadius: '4px 0 0 4px'
                                }}>
                                  {feature}
                                </td>
                                <td style={{
                                  color: 'white',
                                  padding: '16px',
                                  borderRadius: '0 4px 4px 0'
                                }}>
                                  {findings[feature]}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                </div>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="learning-principles-section mb-5"
              style={{
                background: 'rgba(15, 22, 36, 0.8)',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(199, 112, 240, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <FaLightbulb style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                <h2 className="project-heading" style={{ 
                  textAlign: 'center',
                  margin: 0,
                  color: 'white'
                }}>
                  Connection to <span style={{ color: '#c770f0' }}>Learning Principles</span>
                </h2>
                <FaLightbulb style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
              </div>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginBottom: '30px'
              }}>
                Each of our redesigned features was grounded in well-established learning theories:
              </p>

              <div style={{ marginLeft: '20px' }}>
                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Social Learning Community Hub</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                    This feature draws from Social Constructivism and Social Learning Theory, emphasizing peer-based learning, shared challenges, and community support. 
                    By fostering interaction through discussion forums and collaborative minigames, we enabled learners—especially those from marginalized backgrounds—to 
                    co-construct knowledge in a supportive environment. The design aligns with motivation theory as well, using leaderboards and peer encouragement to 
                    sustain learning.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Augmented Reality Vocabulary Scanner</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                    Our AR feature was inspired by Situated Cognition and Embodied Learning, ensuring that vocabulary acquisition happens in real-world contexts. 
                    Learners build connections between the objects they encounter and the language they're learning. We also applied Distributed Cognition by 
                    integrating camera, text, and interaction in a seamless interface, treating the environment as part of the cognitive system.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Live Conversation with Native Speakers</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                    This feature leverages Vygotsky's Zone of Proximal Development and Sociocultural Theory. Real-time, authentic dialogue allows learners to 
                    stretch their capabilities with support, building fluency through practice. Prompts and personalized tutor recommendations further enable 
                    learners to apply their language skills in meaningful ways, bridging academic learning with real-life communication.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Figma Prototype Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="prototype-section mb-5"
              style={{
                background: 'rgba(15, 22, 36, 0.8)',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(199, 112, 240, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <FaCode style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                <h2 className="project-heading" style={{ 
                  textAlign: 'center',
                  margin: 0,
                  color: 'white'
                }}>
                  Final <span style={{ color: '#c770f0' }}>Figma Prototype</span>
                </h2>
                <FaCode style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
              </div>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginBottom: '30px',
                textAlign: 'center'
              }}>
                Explore our interactive prototype below to see how we've implemented the new features and improvements.
              </p>

              <div className="iframe-container" style={{ 
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '15px',
                border: '1px solid rgba(199, 112, 240, 0.2)',
                background: 'rgba(15, 22, 36, 0.8)'
              }}>
                {!prototypeLoaded && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(15, 22, 36, 0.9)',
                    zIndex: 2
                  }}>
                    <div style={{
                      color: '#c770f0',
                      padding: '1rem 2rem',
                      border: '2px solid #c770f0',
                      borderRadius: '8px',
                      fontSize: '1.1rem'
                    }}>
                      Loading Prototype...
                    </div>
                  </div>
                )}
                <iframe
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fj6HivR2IfnOgkMTiIjm9Pj%2FDuolingo-Improvement%3Fnode-id%3D3-2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D3%253A2"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    opacity: prototypeLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  title="Figma Prototype"
                  onLoad={() => handleLoad('prototype')}
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* Project Presentation Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="presentation-section mb-5"
              style={{
                background: 'rgba(15, 22, 36, 0.8)',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(199, 112, 240, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <FaChalkboardTeacher style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                <h2 className="project-heading" style={{ 
                  textAlign: 'center',
                  margin: 0,
                  color: 'white'
                }}>
                  Project <span style={{ color: '#c770f0' }}>Presentation</span>
                </h2>
                <FaChalkboardTeacher style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
              </div>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginBottom: '30px',
                textAlign: 'center'
              }}>
                View our complete project presentation detailing our research, design process, and final outcomes.
              </p>

              <div className="iframe-container" style={{ 
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '15px',
                border: '1px solid rgba(199, 112, 240, 0.2)',
                background: 'rgba(15, 22, 36, 0.8)'
              }}>
                <object
                  data={presentationPDF}
                  type="application/pdf"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(15, 22, 36, 0.9)',
                    color: '#c770f0',
                    padding: '2rem'
                  }}>
                    <p>
                      It seems your browser doesn't support embedded PDFs.{' '}
                      <a 
                        href={presentationPDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#c770f0', textDecoration: 'underline' }}
                      >
                        Click here to download the PDF
                      </a>
                    </p>
                  </div>
                </object>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="reflection-section mb-5"
              style={{
                background: 'rgba(15, 22, 36, 0.8)',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(199, 112, 240, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <FaUserCircle style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                <h2 className="project-heading" style={{ 
                  textAlign: 'center',
                  margin: 0,
                  color: 'white'
                }}>
                  Personal <span style={{ color: '#c770f0' }}>Reflection</span>
                </h2>
                <FaUserCircle style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
              </div>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8
              }}>
                Working on this project taught me the importance of designing educational tools not just for usability or engagement—but for equity, inclusion, 
                and real-world impact. At every step, from early sketches to our final Figma prototype, I learned how critical it is to center the voices of 
                actual users, especially those who are often underserved by existing platforms.
              </p>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginTop: '20px'
              }}>
                I also gained a much deeper understanding of how learning science theories can directly inform interface design. Features like AR scanning or 
                live conversations aren't just "cool" ideas—they're effective because they're backed by how people actually learn best.
              </p>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginTop: '20px'
              }}>
                Above all, this project made me realize that great edtech isn't just about building tools—it's about empowering learners to see themselves as 
                capable, valued participants in their own learning journey.
              </p>
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default DuolingoRedesign;