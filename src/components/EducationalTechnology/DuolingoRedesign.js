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
                For this course project, I and my groupmates looked into what was missing in Duolingo's current platform. We found that it lacks real cultural immersion, 
                chances to practice conversations, and ways to connect with other learners. These are all things that can help someone when learning a new language.
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
                Language learning apps like Duolingo often don't work well for everyone. While they make learning fun with games, they miss out on real-world practice, 
                social connections, and helping people from different backgrounds. We wanted to fix this by adding features that focus on culture, connecting with others, 
                and real conversations. Specefically our goal was to help students who face challenges because of their background or where they live.
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
                We came up with three new features based on what real users told us and what we know about how people learn:
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
                    We took inspiration from how people learn together. The purpose of this feature is to let users join forums, take part in language challenges, and play learning games with others. 
                    It is suppose to be a space where everyone can help each other learn and stay motivated.
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
                    We wanted to built this AR feature to allow people to point their phone at things around them and get instant translations. It helps connect what they learn in the app with real life, 
                    which is useful for people who are new to a place or culture.
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
                    This feature helps people connect with native speakers for real conversations. It allows them to get immediate feedback, learn about their culture, and improve their speaking skills naturally.
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
                We tested these ideas with real users and kept improving them through different versions of our prototype. We wanted to make sure that the app not only helps people learn words and grammar, 
                but it also creates a learning experience that works for everyone.
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
                Here's what we thought our target user would look like:
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
                  Maria Solis is a 21-year-old computer science student at Georgia Tech. She's fluent in English and Spanish, and just starting to learn French. 
                  She uses Duolingo for studying abroad and to chat with her French-speaking friends. While she likes gamfied learning, Maria finds the lessons 
                  too repetitive, thinks the grammar explanations are too basic, and wishes there were more chances for real conversations. She's looking for better ways to track her progress 
                  and have meaningful practice with the language.
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
                We made some sketches for each feature to help us figure out how everything would work together. These early drawings will help us plan out the layout, 
                how screens would connect.
              </p>

              <div className="sketch-descriptions">
                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Community Hub</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    Our first sketch showed how users would move between challenges, discussions, and leaderboards.
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
                    We then mapped out a simple step-by-step process: pick your language, let the app use your camera, point at something, and see the translation with some grammar tips. 
                    We also added ways to switch languages or scan more things without starting over.
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
                    This sketch below shows the whole conversation flow. It starts from picking your language and skill level, to choosing a tutor, joining a video call, and giving feedback. 
                    This helped us make sure everything went smoothly for a conversation.
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
                  These sketches helped us make sure our ideas would work well in real life, right from the start.
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
                Next, we created an affinity diagram beucase it allowed us to group similar problems and ideas for improvement. The main issues we found were that there was not enough grammar help, 
                lessons that felt too repetitive, and that there was not enough real-world practice. We matched these problems with possible solutions. We thought about adding AR for vocabulary, 
                adding live conversations with native speakers, and creating social learning tools. Many of these ideas came straight from our users.
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
                We started with a simple prototype in PowerPoint. Then we moved to Figma to create a more interactive version based on what our users told us.
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
                    We created a clickable prototype in Figma and conducted testing to gather feedback on usability:
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
                    We refined the prototype based on earlier feedback and conducted another round of user testing on the high-fidelity version:
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
                Each of our new features is based on how people learn:
              </p>

              <div style={{ marginLeft: '20px' }}>
                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Social Learning Community Hub</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                    This feature is all about learning together. It uses the idea that we learn better when we work with others. Through forums and group games, 
                    we created a space where everyone can help each other learn. This feature is applicable to those who might feel left out. The design also uses motivation theory, 
                    with leaderboards and peer support to keep people engaged.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Augmented Reality Vocabulary Scanner</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                    Our AR feature is based on the idea that we learn better when we connect what we're learning to real life. It helps users link the objects they see 
                    every day with the language they're learning. We made the interface work smoothly with the camera, text, and interactions all working together.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Live Conversation with Native Speakers</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                    This feature uses the idea that we learn best when we're pushed a bit beyond our comfort zone, but with support. Real conversations with native speakers 
                    help learners improve their skills naturally. The prompts and tutor recommendations help users practice in meaningful ways, connecting classroom learning 
                    with real-world communication.
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
                Check out our interactive prototype below to see how we've put all these new features together.
              </p>

              <div style={{ 
                width: '100%',
                height: '600px',
                position: 'relative',
                marginBottom: '20px',
                backgroundColor: 'rgba(15, 22, 36, 0.5)',
                border: '1px solid rgba(199, 112, 240, 0.3)',
                borderRadius: '10px',
                overflow: 'hidden'
              }}>
                <iframe
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fj6HivR2IfnOgkMTiIjm9Pj%2FDuolingo-Improvement%3Fnode-id%3D3-2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D3%253A2"
                  title="Figma Prototype"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1
                  }}
                  allow="fullscreen"
                  referrerPolicy="origin"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  zIndex: 0
                }}>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    If the prototype doesn't load, you can <a 
                      href="https://www.figma.com/proto/j6HivR2IfnOgkMTiIjm9Pj/Duolingo-Improvement?node-id=3-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#c770f0', textDecoration: 'underline' }}
                    >
                      view it directly on Figma
                    </a>
                  </p>
                </div>
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
                Take a look at our full presentation below summarizing our project.
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
                Working on this project showed me that good educational tools need to do more than just work well or be fun - they need to be fair, inclusive, and actually help people. 
                From our first sketches to the final prototype, I learned how important it is to listen to real users, especially those who often get left behind by existing apps.
              </p>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginTop: '20px'
              }}>
                I also got a much better understanding of how learning theories can guide design. Features like AR scanning or live conversations aren't just cool tech. They are able to work because 
                they're based on how people actually learn best.
              </p>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginTop: '20px'
              }}>
                Finally, this project taught me that great educational technology isn't just about building tools. It's about helping learners feel capable and valued in their learning journey.
              </p>
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default DuolingoRedesign;