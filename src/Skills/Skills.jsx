import React from "react";
import "../asset/Style/Skills/Skills.css";
import SkillsData from "./SkillsData";
const Skills = () => {

    return (
        <React.Fragment>
            <div className="Skills">
                <div className="Heading">
                    <h1>Skills</h1>
                </div>
                <div className="SkillsData">
                    {
                        SkillsData.map((data) => {
                            return (
                                <React.Fragment>
                                    <div className="Data">
                                        <img src={data.skill} alt="images" />
                                    </div>
                                </React.Fragment>
                            );
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skills;