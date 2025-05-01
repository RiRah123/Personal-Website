import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLightbulb, FaUserCircle, FaBullseye, FaTools, FaGraduationCap, FaComments, FaCheckCircle, FaLaptopCode, FaCode, FaPencilAlt } from "react-icons/fa";
import { BsTranslate, BsPlayCircle, BsCollection } from "react-icons/bs";

function AnilingoProject() {
  return (
    <div className="anilingo-project-page" style={{ 
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

            {/* Technology Inspirations Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="tech-inspiration-section mb-5"
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
                  Technology <span style={{ color: '#c770f0' }}>Inspirations</span>
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
                Several innovative language learning platforms have influenced AniLingo's design and functionality:
              </p>

              <div style={{ marginLeft: '0', textAlign: 'center' }}>
                <div className="mb-4">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                    <BsPlayCircle style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                    <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                      FluentU
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
                    FluentU's interactive subtitles in real-world videos inspired AniLingo's clickable phrases feature, 
                    allowing users to learn language in authentic contexts through anime content.
                  </p>
                </div>

                <div className="mb-4">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                    <BsTranslate style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                    <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                      LingQ
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
                    LingQ's interactive transcripts influenced our phrase breakdown panel and personalized "phrase library" 
                    feature, enhancing the learning experience through detailed analysis and organization.
                  </p>
                </div>

                <div className="mb-4">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                    <BsCollection style={{ color: '#c770f0', fontSize: '1.5rem', marginRight: '10px' }} />
                    <h3 style={{ color: '#c770f0', margin: 0, fontSize: '1.2rem' }}>
                      Quizlet
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
                    Quizlet's simplified flashcard interface inspired our "quick quiz" feature, implementing spaced 
                    repetition for effective phrase retention and reinforcement learning.
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

            {/* Sketches Section */}
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
                To address our users' needs and pain points, we created detailed sketches for each feature. These early visuals 
                helped us define the layout, screen transitions, and interaction logic before moving into high-fidelity prototypes.
              </p>

              <div className="sketch-descriptions">
                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Interactive Anime Clips</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    Our sketches mapped out the video player interface with interactive elements, showing how users would 
                    engage with phrases, access translations, and control playback speed. We emphasized clear visual 
                    hierarchy and intuitive controls.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/duolingo-sketch-1.png")}
                      alt="Interactive Anime Clips Sketch"
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
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Contextual Learning Tools</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    We designed the phrase breakdown panel with clear sections for grammar explanations, cultural context, 
                    and usage examples. The sketch includes space for character profiles and formality indicators.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/duolingo-sketch-2.png")}
                      alt="Contextual Learning Tools Sketch"
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
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Progress Tracking System</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    The sketch outlines the Pokédex-style collection interface, showing how users would track their progress, 
                    view achievements, and access personalized review schedules. We focused on making the gamification 
                    elements clear and motivating.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/duolingo-sketch-3.png")}
                      alt="Progress Tracking System Sketch"
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

              <div className="user-testing-videos mb-5">
                <h3 style={{ color: '#c770f0', marginBottom: '20px', textAlign: 'center' }}>User Testing Sessions</h3>
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
                        title="Kerrick's Final Test"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen
                      />
                    </div>
                    <div style={{
                      background: 'rgba(15, 22, 36, 0.6)',
                      padding: '15px',
                      borderRadius: '10px',
                      marginTop: '15px',
                      border: '1px solid rgba(199, 112, 240, 0.2)'
                    }}>
                      <h4 style={{ color: '#c770f0', marginBottom: '10px' }}>Kerrick's Insights</h4>
                      <p style={{ color: 'white', fontSize: '1rem', opacity: 0.8 }}>
                        Praised the slow-motion feature for complex phrases and suggested adding more intermediate-level content.
                        Particularly enjoyed the formality indicators and cultural context explanations.
                      </p>
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
                        title="Ajay's Final Test"
                        allowFullScreen
                      />
                    </div>
                    <div style={{
                      background: 'rgba(15, 22, 36, 0.6)',
                      padding: '15px',
                      borderRadius: '10px',
                      marginTop: '15px',
                      border: '1px solid rgba(199, 112, 240, 0.2)'
                    }}>
                      <h4 style={{ color: '#c770f0', marginBottom: '10px' }}>Ajay's Insights</h4>
                      <p style={{ color: 'white', fontSize: '1rem', opacity: 0.8 }}>
                        Found the achievement system motivating and recommended expanding the character personality profiles.
                        Appreciated the spaced repetition implementation for phrase review.
                      </p>
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
                        title="Amit's Final Test"
                        allowFullScreen
                      />
                    </div>
                    <div style={{
                      background: 'rgba(15, 22, 36, 0.6)',
                      padding: '15px',
                      borderRadius: '10px',
                      marginTop: '15px',
                      border: '1px solid rgba(199, 112, 240, 0.2)'
                    }}>
                      <h4 style={{ color: '#c770f0', marginBottom: '10px' }}>Amit's Insights</h4>
                      <p style={{ color: 'white', fontSize: '1rem', opacity: 0.8 }}>
                        Highlighted the effectiveness of the cultural notes and romaji support for beginners.
                        Suggested adding more varied anime genres for diverse learning contexts.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>

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
                marginBottom: '20px',
                backgroundColor: 'rgba(15, 22, 36, 0.5)',
                border: '1px solid rgba(199, 112, 240, 0.3)',
                borderRadius: '10px',
                overflow: 'hidden'
              }}>
                <iframe
                  src="https://app.uizard.io/p/2c732cc0/embed"
                  title="AniLingo Final Design Prototype"
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
                      href="https://app.uizard.io/p/2c732cc0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#c770f0', textDecoration: 'underline' }}
                    >
                      view it directly on Uizard
                    </a>
                  </p>
                </div>
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
    </div>
  );
}

export default AnilingoProject; 