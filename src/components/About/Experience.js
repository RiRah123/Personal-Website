import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GrandstageLogo from "../../Assets/images/grandstage-logo.jpg";
import HPLogo from "../../Assets/images/hp-logo.png";
import NCRLogo from "../../Assets/images/ncr-logo.png";
import UGALogo from "../../Assets/images/uga-logo.png";
import VIPLogo from "../../Assets/images/vip-logo.png";
import { Image } from "react-bootstrap";
import {MdLocationOn} from "react-icons/md";

function Experience() {
    let timelineElements = [
        {
            id: 5,
            logo: GrandstageLogo,
            company: "Grandstage",
            title: "Software Engineer Intern",
            location: "Atlanta, GA (Remote)",
            date: "August 2023 - Present",
            description: 
                    <div>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Interning at Grandstage, an AI-powered startup specialized in helping employees become thought leaders by automating social media content development for small-to-medium sized businesses</li>
                        </ul>
                    </div>
        },
        {
            id: 4,
            logo: HPLogo,
            company: "HP",
            title: "Software Engineer Intern",
            location: "Fort Collins, CO (On-Site) & Atlanta, GA (Remote)",
            date: "May 2023 - Present",
            description: 
                    <div>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Creating a user-friendly graph visualization for 140,000 HP-related API entities in 15 categories, enhancing understanding of complex connections.</li>
                            <li>Implementing and maintaining the graph on hp.dev, reducing search time for 7,000 employees by approximately 85%, using React, Typescript, Highcharts, and GraphQL. Also, conducted successful demos for a 35-member team using Scrum methodology to gauge stakeholder needs.</li>
                        </ul>
                    </div>
        },
        {
            id: 3,
            logo: VIPLogo,
            company: "Georgia Tech VIP Program",
            title: "Undergraduate Researcher",
            location: "Atlanta, GA",
            date: "January 2022 - December 2022",
            description: 
                    <div>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Developed an AI-based face recognition algorithm for robotic blimps and underwater vehicles using TensorFlow, NumPy, and OpenCV, while also integrating a Raspberry Pi for data processing and uploading to an SSH server.</li>
                            <li>Improved blimp navigation with a Python to MATLAB GUI, enhancing image quality and accuracy by 30%, and worked with an eight-member team to broadcast a Georgia Tech basketball game to over 1,000 people on a jumbotron.</li>
                        </ul>
                    </div>
        },
        {
            id: 2,
            logo: NCRLogo,
            company: "NCR",
            title: "Software Engineer Intern",
            location: "Atlanta, GA",
            date: "May 2022 - August 2022",
            description: 
                    <div>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Enhanced consumer data at NCR through RESTful APIs in Go and Spring Boot, simplifying response/request formats.</li>
                            <li>Created an intuitive RBAC dashboard in Next.js for NCR’s Business Platform, managing 60+ million GraphQL APIs, integrating an HTML viewer for template editing, and providing actionable insights through 16 Chart.js visualizations with seamless Google Cloud Platform deployment for peak performance.</li>
                        </ul>
                    </div>
        },
        {
            id: 1,
            logo: UGALogo,
            company: "UGA CS Department",
            title: "Teaching Assistant",
            location: "Athens, GA",
            date: "June 2021 - December 2021",
            description: 
                    <div>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Provided comprehensive guidance to 110 students in mastering core programming concepts over two semesters and developed 12 Java assignment evaluation tools, reducing grading time to under three seconds.</li>
                        </ul>
                    </div>
        },
    ];

    return (
        <div>
            <VerticalTimeline>
                {
                    timelineElements.map(element => {
                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#8A2BE2', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid #8A2BE2'}}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={{background: 'rgb(255, 255, 255)', color: '#fff'}}
                                icon={<Image src={element.logo} fluid roundedCircle/>}
                            >
                                <h3 className="vertical-timeline-element-title">{element.title} @ {element.company}</h3>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    alignContent: "center",
                                    marginTop: "1rem"
                                }}>
                                    <MdLocationOn style={{marginRight: "0.2rem"}} color="red"/>
                                    <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                </div>
                                <p id="experience-description">{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    );
}

export default Experience;