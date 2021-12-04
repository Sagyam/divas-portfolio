import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import EducationImg from "./EducationImg";
import CertificationImg from "./CertificationImg";
import CourseworksImg from "./CourseworksImg";
import ProjectsImg from "./ProjectsImg";

function GetSkillSvg(props) {
  if (props.fileName === "EducationImg")
    return <EducationImg theme={props.theme} />;
  else if (props.fileName === "CertificationImg")
    return <CertificationImg theme={props.theme} />;
  else if (props.fileName === "CourseworksImg")
    return <CourseworksImg theme={props.theme} />;
  else if (props.fileName === "ProjectsImg")
    return <ProjectsImg theme={props.theme} />;
  else return <div />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
