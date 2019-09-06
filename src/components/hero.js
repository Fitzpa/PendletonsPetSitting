import React from "react"
import Section from "./section"
import pendletonPic from "../images/pendletonPets.png"

const Hero = () => (
  <Section>
    <div className="container-fluid">
      <img className="heroPic" src={pendletonPic} alt="Pendleton Pet Sitting logo" />
    </div>
  </Section>
)

export default Hero
