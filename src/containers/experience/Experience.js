import React from "react";
import "./Experience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { experience } from "../../portfolio";
import { Fade } from "react-reveal";


export default function Experience() {
    if(experience.showExperience){
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">Experience</h1>
                        <div className="experience-cards-div">
                        {experience.experience.map((card) => {
                            return (
                                <ExperienceCard
                                    cardInfo={{
                                        company: card.company,
                                        desc: card.desc,
                                        date: card.date,
                                        companylogo: card.companylogo,
                                        role: card.role,
                                        descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}