import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLightbulb, FaUserCircle, FaBullseye, FaTools, FaGraduationCap, FaComments, FaCheckCircle, FaLaptopCode, FaCode } from "react-icons/fa";
import { BsTranslate, BsPlayCircle, BsCollection } from "react-icons/bs";

function AnilingoProject() {
  return (
    <Container fluid className="project-section" style={{ paddingTop: 0 }}>
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
                Anilingo <span style={{ color: '#c770f0' }}>Project</span>
              </h1>
              
              <div className="project-summary mb-5">
                <p style={{ 
                  color: 'white',
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  textAlign: 'center',
                  opacity: 0.8
                }}>
                  An innovative web application designed to teach everyday Japanese phrases through engaging anime clips, 
                  bridging the gap between passive anime watching and active language acquisition.
                </p>
              </div>

              {/* Project Objective Section */}
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
                  <FaBullseye style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                  <h2 className="project-heading" style={{ 
                    textAlign: 'center',
                    margin: 0,
                    color: 'white'
                  }}>
                    Project <span style={{ color: '#c770f0' }}>Objective</span>
                  </h2>
                  <FaBullseye style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
                </div>
                <p style={{ 
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  opacity: 0.8
                }}>
                  Traditional Japanese learning methods can be overwhelming and disconnected from learners' interests. 
                  Anilingo aims to transform this experience by leveraging anime content that learners already enjoy, 
                  creating an engaging bridge between entertainment and language acquisition. Our target audience includes 
                  15-30 year olds who are interested in learning Japanese and have basic exposure to anime but lack the 
                  tools to effectively learn from it.
                </p>
              </motion.div>

              {/* Learning Outcomes Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="outcomes-section mb-5"
                style={{
                  background: 'rgba(15, 22, 36, 0.8)',
                  borderRadius: '15px',
                  padding: '30px',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(199, 112, 240, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                  <FaGraduationCap style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                  <h2 className="project-heading" style={{ 
                    textAlign: 'center',
                    margin: 0,
                    color: 'white'
                  }}>
                    Learning <span style={{ color: '#c770f0' }}>Outcomes</span>
                  </h2>
                  <FaGraduationCap style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
                </div>
                <div style={{ marginLeft: '0', textAlign: 'center' }}>
                  <div className="mb-4">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                      <BsTranslate style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                      <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                        Phrase Recognition
                      </h3>
                    </div>
                    <p style={{ 
                      color: 'white',
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      opacity: 0.8,
                      maxWidth: '800px',
                      margin: '0 auto'
                    }}>
                      Identify and understand 15-20 high-frequency Japanese phrases commonly used in anime and everyday conversation.
                    </p>
                  </div>

                  <div className="mb-4">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                      <BsPlayCircle style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                      <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                        Contextual Application
                      </h3>
                    </div>
                    <p style={{ 
                      color: 'white',
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      opacity: 0.8,
                      maxWidth: '800px',
                      margin: '0 auto'
                    }}>
                      Apply phrases in the correct context, distinguishing between casual, polite, and emotional tones.
                    </p>
                  </div>

                  <div className="mb-4">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                      <BsCollection style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                      <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                        Pronunciation Mastery
                      </h3>
                    </div>
                    <p style={{ 
                      color: 'white',
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      opacity: 0.8,
                      maxWidth: '800px',
                      margin: '0 auto'
                    }}>
                      Recall and reproduce the pronunciation and form of learned phrases in future anime viewing or spoken interactions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* User Research Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
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
                  <FaComments style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                  <h2 className="project-heading" style={{ 
                    textAlign: 'center',
                    margin: 0,
                    color: 'white'
                  }}>
                    Initial User <span style={{ color: '#c770f0' }}>Research</span>
                  </h2>
                  <FaComments style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
                </div>

                <p style={{ 
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  opacity: 0.8,
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  We conducted in-depth interviews with three target users to understand their language learning needs,
                  challenges with existing tools, and their relationship with anime as a learning resource.
                </p>

                <div className="user-profiles">
                  <div className="mb-4">
                    <h3 style={{ color: '#c770f0', marginBottom: '15px', textAlign: 'center' }}>Target User Interviews & Initial Findings</h3>
                    
                    <div style={{
                      background: 'rgba(15, 22, 36, 0.6)',
                      padding: '25px',
                      borderRadius: '10px',
                      border: '1px solid rgba(199, 112, 240, 0.2)',
                      marginBottom: '20px'
                    }}>
                      <h4 style={{ color: '#c770f0' }}>Kerrick McDonald</h4>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        21, Business Student, Beginner in Japanese, Regular Anime Watcher
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        <strong>Key Insights:</strong>
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
                        Struggles with understanding formality levels in Japanese speech.
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        Wants daily practice reminders and structured learning paths.
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        Interested in learning casual speech patterns from slice-of-life anime.
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <img 
                          src={require("../../Assets/images/users/anilingo-user-1.jpeg")}
                          alt="Kerrick McDonald"
                          style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '60px',
                            border: '2px solid rgba(199, 112, 240, 0.3)',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    </div>

                    <div style={{
                      background: 'rgba(15, 22, 36, 0.6)',
                      padding: '25px',
                      borderRadius: '10px',
                      border: '1px solid rgba(199, 112, 240, 0.2)',
                      marginBottom: '20px'
                    }}>
                      <h4 style={{ color: '#c770f0' }}>Ajay Krishnaswamy</h4>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        22, CS Student, Duolingo User, Casual Anime Viewer
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        <strong>Key Insights:</strong>
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
                        Wants achievement-based progression system.
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        Suggested implementing spaced repetition for phrase review.
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        Interested in comparing different anime characters' speaking styles.
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <img 
                          src={require("../../Assets/images/users/anilingo-user-2.jpeg")}
                          alt="Ajay Krishnaswamy"
                          style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '60px',
                            border: '2px solid rgba(199, 112, 240, 0.3)',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    </div>

                    <div style={{
                      background: 'rgba(15, 22, 36, 0.6)',
                      padding: '25px',
                      borderRadius: '10px',
                      border: '1px solid rgba(199, 112, 240, 0.2)'
                    }}>
                      <h4 style={{ color: '#c770f0' }}>Amit Kulkarni</h4>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        24, Full-Time Worker, Japan Traveler, Avid Anime Fan
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        <strong>Key Insights:</strong>
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
                        Emphasized need for romaji support for beginners.
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        Requested variable playback speeds for complex phrases.
                      </p>
                      <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                        Suggested cultural context explanations for certain expressions.
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <img 
                          src={require("../../Assets/images/users/anilingo-user-3.jpeg")}
                          alt="Amit Kulkarni"
                          style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '60px',
                            border: '2px solid rgba(199, 112, 240, 0.3)',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Learning Principles Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="principles-section mb-5"
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
                    Learning <span style={{ color: '#c770f0' }}>Principles</span>
                  </h2>
                  <FaLightbulb style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
                </div>

                <div style={{ marginLeft: '20px' }}>
                  <div className="mb-4">
                    <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Prior Knowledge Activation</h3>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                      The application leverages users' existing familiarity with common Japanese phrases from anime, 
                      making explicit connections and correcting misunderstandings through cultural and contextual notes.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Motivation-Driven Engagement</h3>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                      Combines intrinsic motivation (love for anime) with extrinsic motivation (gamification elements) 
                      to sustain learner engagement and effort over time.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Multimedia Segmentation</h3>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                      Content is divided into short, focused anime clips with 1-2 key phrases, reducing cognitive load 
                      and reinforcing learning through visual and auditory channels.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Implementation Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="implementation-section mb-5"
                style={{
                  background: 'rgba(15, 22, 36, 0.8)',
                  borderRadius: '15px',
                  padding: '30px',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(199, 112, 240, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                  <FaTools style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                  <h2 className="project-heading" style={{ 
                    textAlign: 'center',
                    margin: 0,
                    color: 'white'
                  }}>
                    Key <span style={{ color: '#c770f0' }}>Features</span>
                  </h2>
                  <FaTools style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
                </div>

                <p style={{ 
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  opacity: 0.8,
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  Our application introduces three core features designed to enhance the Japanese learning experience:
                </p>

                <div style={{ textAlign: 'center' }}>
                  <div className="mb-4">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                      <BsTranslate style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                      <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                        Interactive Anime Clips
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
                      Short, focused 5-10 second scenes featuring common Japanese phrases with clickable elements showing romaji, 
                      English translations, and audio pronunciation.
                    </p>
                  </div>

                  <div className="mb-4">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                      <BsPlayCircle style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                      <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                        Contextual Learning Tools
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
                      Detailed explanations of phrase usage, cultural context, and emotional nuances, with examples from various anime series.
                    </p>
                  </div>

                  <div className="mb-4">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                      <BsCollection style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                      <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                        Progress Tracking System
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
                      Pokédex-style phrase collection feature with gamification elements, including mastery points and achievement badges.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Prototype Showcase Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
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
                  <FaLaptopCode style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                  <h2 className="project-heading" style={{ 
                    textAlign: 'center',
                    margin: 0,
                    color: 'white'
                  }}>
                    Interactive <span style={{ color: '#c770f0' }}>Prototype</span>
                  </h2>
                  <FaLaptopCode style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
                </div>

                <p style={{ 
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  opacity: 0.8,
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  Our high-fidelity prototype demonstrates the core features and user interface of AniLingo,
                  showcasing how users will interact with the platform to learn Japanese through anime.
                </p>

                <div className="prototype-images">
                  {/* Login Screen */}
                  <div className="prototype-image mb-5">
                    <img
                      src={require("../../Assets/images/anilingo-initial-prototype-1.png")}
                      alt="AniLingo Login Screen"
                      style={{
                        width: '40%',
                        borderRadius: '10px',
                        marginBottom: '15px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}
                    />
                    <h4 style={{ color: '#c770f0', marginBottom: '10px', textAlign: 'center' }}>
                      Welcoming Login Interface
                    </h4>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, textAlign: 'center' }}>
                      Clean and intuitive login screen featuring our mascot character and simple authentication options.
                    </p>
                  </div>

                  {/* Dashboard */}
                  <div className="prototype-image mb-5">
                    <img
                      src={require("../../Assets/images/anilingo-initial-prototype-2.png")}
                      alt="AniLingo Dashboard"
                      style={{
                        width: '40%',
                        borderRadius: '10px',
                        marginBottom: '15px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}
                    />
                    <h4 style={{ color: '#c770f0', marginBottom: '10px', textAlign: 'center' }}>
                      Main Learning Dashboard
                    </h4>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, textAlign: 'center' }}>
                      Personalized dashboard featuring lesson cards from various anime series and progress tracking.
                    </p>
                  </div>

                  {/* Lesson View */}
                  <div className="prototype-image mb-5">
                    <img
                      src={require("../../Assets/images/anilingo-initial-prototype-3.png")}
                      alt="AniLingo Lesson Interface"
                      style={{
                        width: '40%',
                        borderRadius: '10px',
                        marginBottom: '15px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}
                    />
                    <h4 style={{ color: '#c770f0', marginBottom: '10px', textAlign: 'center' }}>
                      Interactive Lesson Interface
                    </h4>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, textAlign: 'center' }}>
                      Immersive lesson experience with scene context, grammar explanations, and practice exercises.
                    </p>
                  </div>

                  {/* Phrase Practice */}
                  <div className="prototype-image">
                    <img
                      src={require("../../Assets/images/anilingo-initial-prototype-4.png")}
                      alt="AniLingo Phrase Practice"
                      style={{
                        width: '40%',
                        borderRadius: '10px',
                        marginBottom: '15px',
                        border: '1px solid rgba(199, 112, 240, 0.3)'
                      }}
                    />
                    <h4 style={{ color: '#c770f0', marginBottom: '10px', textAlign: 'center' }}>
                      Phrase Practice & Progress Tracking
                    </h4>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, textAlign: 'center' }}>
                      Detailed phrase practice with pronunciation, context, and emotional response tracking.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Final User Testing Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="final-testing-section mb-5"
                style={{
                  background: 'rgba(15, 22, 36, 0.8)',
                  borderRadius: '15px',
                  padding: '30px',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(199, 112, 240, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                  <FaCheckCircle style={{ color: '#c770f0', fontSize: '2.5rem', marginRight: '15px' }} />
                  <h2 className="project-heading" style={{ 
                    textAlign: 'center',
                    margin: 0,
                    color: 'white'
                  }}>
                    Final User <span style={{ color: '#c770f0' }}>Testing</span>
                  </h2>
                  <FaCheckCircle style={{ color: '#c770f0', fontSize: '2.5rem', marginLeft: '15px' }} />
                </div>

                <p style={{ 
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  opacity: 0.8,
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  After implementing our core features, we conducted a second round of testing with our original participants
                  to validate our solutions and gather final feedback.
                </p>

                <div className="testing-results" style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: '#c770f0', marginBottom: '20px', textAlign: 'center' }}>Key Findings & Improvements</h3>
                  
                  <div style={{
                    background: 'rgba(15, 22, 36, 0.6)',
                    padding: '25px',
                    borderRadius: '10px',
                    border: '1px solid rgba(199, 112, 240, 0.2)',
                    marginBottom: '20px'
                  }}>
                    <h4 style={{ color: '#c770f0', marginBottom: '15px' }}>Interactive Anime Clips</h4>
                    <ul style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '10px' }}>✓ Added slow-motion playback option for complex phrases</li>
                      <li style={{ marginBottom: '10px' }}>✓ Implemented one-click switching between romaji and hiragana</li>
                      <li>✓ Enhanced cultural context tooltips based on user feedback</li>
                    </ul>
                  </div>

                  <div style={{
                    background: 'rgba(15, 22, 36, 0.6)',
                    padding: '25px',
                    borderRadius: '10px',
                    border: '1px solid rgba(199, 112, 240, 0.2)',
                    marginBottom: '20px'
                  }}>
                    <h4 style={{ color: '#c770f0', marginBottom: '15px' }}>Contextual Learning Tools</h4>
                    <ul style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '10px' }}>✓ Added formality level indicators for each phrase</li>
                      <li style={{ marginBottom: '10px' }}>✓ Integrated character personality profiles for context</li>
                      <li>✓ Expanded cultural notes section based on user requests</li>
                    </ul>
                  </div>

                  <div style={{
                    background: 'rgba(15, 22, 36, 0.6)',
                    padding: '25px',
                    borderRadius: '10px',
                    border: '1px solid rgba(199, 112, 240, 0.2)'
                  }}>
                    <h4 style={{ color: '#c770f0', marginBottom: '15px' }}>Progress Tracking System</h4>
                    <ul style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '10px' }}>✓ Implemented daily learning streaks and reminders</li>
                      <li style={{ marginBottom: '10px' }}>✓ Added achievement badges for different learning milestones</li>
                      <li>✓ Created personalized review schedules based on user performance</li>
                    </ul>
                  </div>
                </div>

                <p style={{ 
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  opacity: 0.8,
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}>
                  The final testing phase validated our approach, with users reporting increased engagement and better retention
                  of phrases compared to traditional learning methods. The combination of familiar anime content with structured
                  learning tools proved especially effective for maintaining long-term motivation.
                </p>
              </motion.div>

              {/* Final Design Prototype */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
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
                    Final Design <span style={{ color: '#c770f0' }}>Prototype</span>
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
                  Explore our interactive final prototype below, incorporating user feedback and refined features
                  for an enhanced learning experience.
                </p>

                <div style={{ 
                  width: '100%',
                  height: '600px',
                  position: 'relative',
                  marginBottom: '20px'
                }}>
                  <iframe
                    src="https://app.uizard.io/p/2c732cc0"
                    title="AniLingo Final Design Prototype"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: '1px solid rgba(199, 112, 240, 0.3)',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(15, 22, 36, 0.5)'
                    }}
                    allow="fullscreen"
                  />
                </div>

                <p style={{ 
                  color: 'white',
                  fontSize: '1rem',
                  opacity: 0.8,
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}>
                  Click to interact with the prototype and explore the full functionality of AniLingo.
                </p>
              </motion.div>

              {/* Personal Reflection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
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
                  This project represents a personal journey in combining my passion for anime with language education. 
                  Having experienced the challenge of learning Japanese through traditional methods, I wanted to create 
                  a tool that I wish I had when starting my language learning journey.
                </p>

                <p style={{ 
                  color: 'white',
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  opacity: 0.8,
                  marginTop: '20px'
                }}>
                  Through user research and applying learning principles, I've learned that effective educational technology 
                  must balance entertainment with pedagogical value. The feedback from potential users has been invaluable 
                  in shaping features that address real learning needs while maintaining engagement.
                </p>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AnilingoProject; 