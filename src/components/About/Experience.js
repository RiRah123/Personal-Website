import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {ReactComponent as WorkIcon} from "../../Assets/work.svg";
import {ReactComponent as SchoolIcon} from "../../Assets/school.svg";

function Experience() {
    let timelineElements = [
        {
            id: 1,
            company: "NCR Corportation",
            title: "Software Engineer Intern",
            location: "Atlanta, GA",
            description: "Built",
            date: "May 2022 - August 2022",
        }
    ];

    let workIconStyles = { background: "#06D6A0" }
    let schoolIconStyles = { background: "#F9C74F" }

    return (
        <div>
            <VerticalTimeline>
                {
                    timelineElements.map(element => {
                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                contentStyle={{ background: '#8A2BE2', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid #8A2BE2'}}
                                date={element.date}
                                dataClassName="date"
                                iconStyle={element.icon === "work" ? workIconStyles : schoolIconStyles}
                                icon={element.icon === "work" ? <WorkIcon /> : <SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{element.company}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.title} | {element.location}</h5>
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