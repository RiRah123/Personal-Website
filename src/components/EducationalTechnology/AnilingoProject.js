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
                A fun web app that helps you learn Japanese phrases through your favorite anime clips. 
                It is suppsoed to turn your anime watching time into actual learning time.
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
                Learning Japanese can be tough and boring with traditional methods. That's why I made Anilingo. The goal is to take the anime you already love watching and turns it into a learning tool. It's perfect for people 
                between 15 and 30 who are into anime and want to learn Japanese but don't know where to start.
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
                    Learn to spot and understand 15 to 20 common Japanese phrases you'll hear in anime and real life.
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
                    Figure out when to use each phrase. That is whether it's casual chat with friends or more formal situations.
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
                    It will allow you to be comfortable saying the phrases out loud, so you can use them whenever you're watching anime or talking to Japanese speakers.
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
                I looked at some cool language learning apps to get ideas for AniLingo:
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
                    I liked how FluentU lets you click on words in videos to learn them. That's where I got the idea for 
                    making phrases clickable in anime clips.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/inspirations/fluentU.jpg")}
                      alt="FluentU Interface"
                      style={{
                        width: '30%',
                        height: 'auto',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)',
                        marginBottom: '30px'
                      }}
                    />
                  </div>
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
                    LingQ's way of breaking down text and keeping track of what you've learned was super helpful. I used 
                    that idea to create our phrase breakdown panel and personal phrase collection.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/inspirations/lingQ.png")}
                      alt="LingQ Interface"
                      style={{
                        width: '30%',
                        height: 'auto',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)',
                        marginBottom: '30px'
                      }}
                    />
                  </div>
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
                    Quizlet's flashcard system is awesome for remembering stuff. I added a similar quick quiz feature by using flashcards in my app.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/inspirations/quizlet.png")}
                      alt="Quizlet Interface"
                      style={{
                        width: '30%',
                        height: 'auto',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)',
                        marginBottom: '30px'
                      }}
                    />
                  </div>
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
                I talked to three people who might use AniLingo to understand what they need and what problems they're having 
                with learning Japanese.
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
                      Has trouble figuring out when to use casual vs. formal Japanese.
                    </p>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                      Would love daily reminders and a clear path to follow.
                    </p>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                      Wants to learn how people actually talk in slice-of-life anime.
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
                      Really likes earning achievements and leveling up.
                    </p>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                      Suggested adding spaced repetition to help remember phrases.
                    </p>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                      Wants to see how different anime characters talk differently.
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
                      23, Full-Time Worker, Japan Traveler, Avid Anime Fan
                    </p>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                      <strong>Key Insights:</strong>
                    </p>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, marginTop: '10px' }}>
                      Thinks we should add romaji for beginners.
                    </p>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                      Wants to be able to slow down tricky phrases.
                    </p>
                    <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                      Would love to learn about the cultural background of certain phrases.
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
                    The first goal is to understand what you already know from watching anime to help you learn. The app will then use this to explain the phrases and 
                    add cool cultural notes to help you understand them better.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Motivation-Driven Engagement</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                    The app takes your love for anime and combines it with fun learning features to keep you motivated and excited about learning.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Multimedia Segmentation</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                    The app breaks down each anime clip into short bits with just 1-2 phrases to learn. This makes it easier 
                    to focus and remember what you're learning.
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
                Here are the three main things AniLingo does to help you learn Japanese:
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
                    Short 5-10 second clips from anime with common phrases. Click on any phrase to see how it's written, 
                    what it means, and how to say it.
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
                    Learn when and how to use each phrase, plus cool cultural stuff and emotional meanings, with examples 
                    from different anime.
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
                    It's almost like a Pokédex for phrases. Keep track of what you've learned, earn points, and get cool badges as you improve.
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
                I drew up some quick sketches to figure out how everything would work. These helped me plan out the layout.
              </p>

              <div className="sketch-descriptions">
                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Login Screen</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    The login page is simple and clean. You just enter your email and password, and there's a checkbox to keep you logged in. The Anilingo logo is at the top to welcome you.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/anilingo-sketch-1.png")}
                      alt="Anilingo Login Screen Sketch"
                      style={{
                        width: '40%',
                        height: 'auto',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)',
                        marginBottom: '30px'
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Main Dashboard</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    The dashboard shows your main lessons at the top, with cards for different anime. You can see categories like quizzes and the social hub, and there's a section for your learning progress and badges.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/anilingo-sketch-2.png")}
                      alt="Anilingo Dashboard Sketch"
                      style={{
                        width: '40%',
                        height: 'auto',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)',
                        marginBottom: '30px'
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Explore & Search</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    Here you can search for phrases, pick from popular categories, and filter lessons by type or level. There are also recommendations at the bottom to help you find what to learn next.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/anilingo-sketch-3.png")}
                      alt="Anilingo Explore Search Sketch"
                      style={{
                        width: '40%',
                        height: 'auto',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)',
                        marginBottom: '30px'
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Lesson Detail</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    When you open a lesson, you see a big video at the top and a simple explanation of the grammar or phrase below. There's a start button and some icons for extra actions.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/anilingo-sketch-4.png")}
                      alt="Anilingo Lesson Detail Sketch"
                      style={{
                        width: '40%',
                        height: 'auto',
                        borderRadius: '10px',
                        border: '1px solid rgba(199, 112, 240, 0.3)',
                        marginBottom: '30px'
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h3 style={{ color: '#c770f0', marginBottom: '15px' }}>Quiz & Progress</h3>
                  <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>
                    The quiz page lets you answer questions while watching a video. You can see your progress, get daily alerts, and check out the badges you've earned.
                  </p>
                  <div className="mt-4">
                    <img 
                      src={require("../../Assets/images/anilingo-sketch-5.png")}
                      alt="Anilingo Quiz Progress Sketch"
                      style={{
                        width: '40%',
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
                  These sketches helped me figure out the layout and flow before building the real thing.
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
                Check out our prototype below to see how AniLingo works and try it out for yourself!
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
                    A friendly login screen.
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
                    Your personal dashboard showing lessons from different anime and how far you've come.
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
                    A fun lesson screen with the anime scene, grammar tips, and practice exercises.
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
                    Practice saying phrases, learn about the context, and track how well you're doing.
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
                After building the main features, I tested the app again with our original users to see what they thought 
                and what we could improve.
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
                        src="https://www.youtube.com/embed/ozU_aAXcUAk"
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
                        Wanted the tabs to be clearer - they should only look selected when you actually click them. Also suggested 
                        adding a quick copyright notice when watching anime clips, just to keep everything above board.
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
                        src="https://www.youtube.com/embed/SobMcTjB8Lk"
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
                        Said he'd actually use this app himself! Wanted to be able to make his own flashcards, and thought 
                        the app had everything you need to learn Japanese properly.
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
                        src="https://www.youtube.com/embed/2r3htAFzKFM"
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
                        Really wanted to try out the full app! Suggested showing a quiz summary with your score and which 
                        questions you got right or wrong. Also thought a "Japanese Only" mode would be cool for the social hub.
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
                    <li style={{ marginBottom: '10px' }}>✓ Fixed the tab selection UI to be clearer</li>
                    <li style={{ marginBottom: '10px' }}>✓ Added a copyright notice for anime clips</li>
                    <li>✓ Made the video player controls more intuitive</li>
                  </ul>
                </div>

                <div style={{
                  background: 'rgba(15, 22, 36, 0.6)',
                  padding: '25px',
                  borderRadius: '10px',
                  border: '1px solid rgba(199, 112, 240, 0.2)',
                  marginBottom: '20px'
                }}>
                  <h4 style={{ color: '#c770f0', marginBottom: '15px' }}>Learning Features</h4>
                  <ul style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>✓ Added custom flashcard creation</li>
                    <li style={{ marginBottom: '10px' }}>✓ Added quiz summaries with score breakdown</li>
                    <li>✓ Added a Japanese-only mode for the social hub</li>
                  </ul>
                </div>

                <div style={{
                  background: 'rgba(15, 22, 36, 0.6)',
                  padding: '25px',
                  borderRadius: '10px',
                  border: '1px solid rgba(199, 112, 240, 0.2)'
                }}>
                  <h4 style={{ color: '#c770f0', marginBottom: '15px' }}>User Experience</h4>
                  <ul style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8, listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>✓ Made the interface more intuitive</li>
                    <li style={{ marginBottom: '10px' }}>✓ Added more personalization options</li>
                    <li>✓ Improved the overall learning flow</li>
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
                Overall, users said they were more engaged and remembered phrases better than with 
                traditional methods. Mixing anime with structured learning really helped them stay motivated.
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
                Try out my final prototype below! I've added all the feedback from users to make it even better.
              </p>

              <div style={{ 
                width: '100%',
                height: '600px',
                position: 'relative',
                marginBottom: '20px',
                backgroundColor: '#f5f5f5',
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
                    zIndex: 1,
                    backgroundColor: '#f5f5f5'
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
                  zIndex: 0,
                  width: '100%',
                  padding: '20px'
                }}>
                  <p style={{ color: '#333', fontSize: '1.1rem' }}>
                    Loading prototype... If it doesn't load, you can <a 
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
                This project is really personal to me. I've been learning Japanese myself and wished I had a tool like 
                this when I started. I love anime, and I wanted to make something that would help others learn Japanese 
                in a fun way.
              </p>

              <p style={{ 
                color: 'white',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                opacity: 0.8,
                marginTop: '20px'
              }}>
                Through talking to users and learning about education, I've found that the best learning apps need to 
                be both fun and helpful. The feedback from potential users has been amazing in helping me create features 
                that actually help people learn while keeping them interested.
              </p>
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}

export default AnilingoProject; 