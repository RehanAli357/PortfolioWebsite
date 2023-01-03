import React from "react";
import "../asset/Style/Projects/Projetcs.css";
import ProjectData from "./ProjectData";
const Projetcs = () => {
    return (
        <React.Fragment>
            <div className="Projetcs">
                <div className="Heading">
                    <h1>Projects</h1>
                </div>
                <div className="ProjectContent">
                    {
                        ProjectData.map((data) => {
                            return (
                                <React.Fragment>
                                    <div className="Card">
                                        <div className="CardImg">
                                            <img src={data.img} alt="pro" />
                                            <div className="CardInfo">
                                                <a href={data.link}>Visit</a>
                                            </div>
                                        </div>
                                        <div className="CardData">
                                            <b>{data.title}</b>
                                            <p>{data.description}</p>
                                        </div>
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

export default Projetcs;