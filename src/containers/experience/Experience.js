import React from "react"
import "./Experience.css"
import ExperienceCard from "../../components/experienceCard/ExperienceCard"
import { experience } from "../../portfolio"
import { Fade } from "react-reveal"


export default function Experience() {
    if(experience.showExperience){
        return (
            <div id="experience">
                <Fade bottom cascade duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">Experience</h1>
                        <div className="experience-cards-div">
                        {experience.experience.map((card, i) => {
                            return (
                                <ExperienceCard
                                    cardInfo={{
                                        key: card.key,
                                        company: card.company,
                                        companyHomepage: card.companyHomepage,
                                        background: card.background,
                                        desc: card.desc,
                                        date: card.date,
                                        companyLogo: card.companyLogo,
                                        role: card.role,
                                        descBullets: card.descBullets
                                    }}
                                    key={i}
                                />
                            )
                        })}
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        )
    }
    return null
}