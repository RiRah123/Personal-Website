import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import NCRLogo from "../../Assets/images/ncr-logo.png";
import { Image } from "react-bootstrap";

function Experience() {
    let timelineElements = [
        {
            id: 1,
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
                                    <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                </div>
                                {element.description}
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    );
}

export default Experience;