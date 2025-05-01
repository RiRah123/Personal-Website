import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBullseye, FaCrosshairs, FaLightbulb, FaHandshake, FaPencilAlt, FaUserCircle, FaSitemap, FaFlask, FaComments, FaTools, FaCheckCircle } from "react-icons/fa";
import { BsPeopleFill, BsTranslate, BsCameraFill } from "react-icons/bs";
import '../style.css';

const DuolingoRedesign = () => {
    return (
      <Container fluid className="duolingo-redesign-page project-section" style={{ 
        background: '#0F1624',
        minHeight: '100vh',
        paddingTop: '50px'
      }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
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
                  Duolingo Redesign <span style={{ color: '#c770f0' }}>– Educational Technology Project</span>
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
                  <div style={{ marginLeft: '20px' }}>
                    <div className="mb-4">
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <BsPeopleFill style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                        <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                          Social Learning Community Hub
                        </h3>
                      </div>
                      <p style={{ 
                        color: 'white',
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        opacity: 0.8
                      }}>
                        Inspired by Vygotsky's Social Constructivism, this feature enables users to engage in forums, language challenges, and peer-led minigames to support collaborative learning. It provides a space for mutual support and motivation, helping users co-construct knowledge with others.
                      </p>
                    </div>
  
                    <div className="mb-4">
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <BsCameraFill style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                        <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                          Augmented Reality-Based Vocabulary Scanner
                        </h3>
                      </div>
                      <p style={{ 
                        color: 'white',
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        opacity: 0.8
                      }}>
                        Grounded in Situated and Distributed Cognition, this AR feature lets users point their camera at real-world objects and receive instant translations in their target language. It bridges classroom learning and real-life context, particularly for learners navigating new cultural environments.
                      </p>
                    </div>
  
                    <div className="mb-4">
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <BsTranslate style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                        <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                          Live Conversation with Native Speakers
                        </h3>
                      </div>
                      <p style={{ 
                        color: 'white',
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        opacity: 0.8
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
                      src={require("../Assets/images/duolingo-persona.png")}
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
                      src={require("../Assets/images/duolingo-affinity-diagram.png")}
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
                    </div>
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
                          src={require("../Assets/images/duolingo-sketch-1.png")}
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
                          src={require("../Assets/images/duolingo-sketch-2.png")}
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
                          src={require("../Assets/images/duolingo-sketch-3.png")}
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
                  transition={{ duration: 0.5, delay: 1 }}
                  className="prototype-section mb-5"
                >
                  <h2 className="project-heading" style={{ 
                    textAlign: 'center',
                    marginBottom: '30px',
                    color: 'white'
                  }}>
                    Interactive <span style={{ color: '#c770f0' }}>Prototype</span>
                  </h2>
                  <div className="iframe-container" style={{ 
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    overflow: 'hidden',
                    borderRadius: '15px',
                    border: '1px solid rgba(199, 112, 240, 0.2)',
                    background: 'rgba(15, 22, 36, 0.8)'
                  }}>
                    <iframe
                      src="https://www.figma.com/proto/j6HivR2IfnOgkMTiIjm9Pj/Duolingo-Improvement?node-id=3-2&p=f&t=rn47tdaYq4KUlneb-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                      }}
                      title="Figma Prototype"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
  
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="presentation-section mb-5"
                >
                  <h2 className="project-heading" style={{ 
                    textAlign: 'center',
                    marginBottom: '30px',
                    color: 'white'
                  }}>
                    Project <span style={{ color: '#c770f0' }}>Presentation</span>
                  </h2>
                  <div className="iframe-container" style={{ 
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    overflow: 'hidden',
                    borderRadius: '15px',
                    border: '1px solid rgba(199, 112, 240, 0.2)',
                    background: 'rgba(15, 22, 36, 0.8)'
                  }}>
                    <iframe
                      src="https://gtvault-my.sharepoint.com/:p:/g/personal/dsingh93_gatech_edu/EXbf5GXKatJJhDOHmmwoZTsBbR06zz5uwLbiLh78XutmMQ?e=X2C2et&nav=eyJzSWQiOjI1NiwiY0lkIjoxMDk4NTcyMjJ9"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                      }}
                      title="Project Presentation"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  };
  
  export default DuolingoRedesign;