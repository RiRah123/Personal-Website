import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import NCRLogo from "../../Assets/images/ncr-logo.png";
import UGALogo from "../../Assets/images/uga-logo.png";
import VIPLogo from "../../Assets/images/vip-logo.png"
import { Image } from "react-bootstrap";
import {MdLocationOn} from "react-icons/md";

function Experience() {
    let timelineElements = [
        {
            id: 3,
            logo: VIPLogo,
            company: "Georgia Tech VIP Program",
            title: "Undergraduate Researcher",
            location: "Atlanta, GA",
            date: "January 2022 - Present",
            description: 
                    <div>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Encoding an AI-based face recognition algorithm for miniature robotic blimps and autonomous underwater vehicles using TensorFlow, NumPy, and OpenCV</li>
                            <li>Incorporating a Raspberry Pi for blimp which parses data from face recognition algorithm and uploads it onto an SSH server</li>
                            <li>Creating a Python to MATLAB GUI that remodels a blimp’s pathfinding with an improved 30% in image quality and accuracy detection through deep learning techniques</li>
                            <li>Facilitating with eight teammates to design a blimp that will broadcast a Georgia Tech basketball game with an attendance of 1,000+ people to a jumbotron</li>
                        </ul>
                    </div>
        },
        {
            id: 2,
            logo: NCRLogo,
            company: "NCR Corportation",
            title: "Software Engineer Intern",
            location: "Atlanta, GA",
            date: "May 2022 - August 2022",
            description: 
                    <div>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Constructed RESTful APIs using Go and Java Spring Boot, standardizing request/response format for consumer-related data</li>
                            <li>Developed an RBAC configuration dashboard for NCR’s Business Services Platform, displaying GraphQL API data for 60+ million calls from 100+ partner organizations with Next.js and Material UI</li>
                            <li>Extracted and visualized API data in Chart.js for top 10 organizations, enterprise units, and endpoints by total calls</li>
                            <li>Regularly met with internal managers over four sprints to demo dashboard and assess needs under the Scrum Methodology</li>
                            <li>Assisted in the deployment of the dashboard onto Google Cloud Platform using Helm, Kubernetes, and GitOps</li>
                        </ul>
                    </div>
        },
        {
            id: 1,
            logo: UGALogo,
            company: "UGA Franklin College of Arts and Sciences",
            title: "Undergraduate Teaching Assistant",
            location: "Athens, GA",
            date: "June 2021 - December 2021",
            description: 
                    <div>
                        <ul style={{marginTop: "1rem"}}>
                            <li>Provided feedback on weekly Java labs related to fundamental programming techniques for ~120 students over two semesters</li>
                            <li>Contributed to 12 assignment evaluation tools written in Java that would automate the grading of student submission</li>
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