import React from "react";
import NordSystem_data from "./projects data/NordSystem_data";
import NLOB_data from "./projects data/NLOB_data";
import Pokemon_data from "./projects data/Pokemon_data";
import Chat_data from "./projects data/Chat_data";
import Blockbuster_data from "./projects data/Blockbuster_data";

export default function Project(props) {
  const slide = props.slide;

  let selectedSlide = {
    name: "",
    description: "",
    techs: [],
    github: "",
    site: "",
  };

  switch (slide) {
    case 1:
      selectedSlide = {
        name: Blockbuster_data.name,
        description: Blockbuster_data.description,
        techs: Blockbuster_data.techs,
        github: Blockbuster_data.github,
        site: Blockbuster_data.site,
      };
      break;

    case 2:
      selectedSlide = {
        name: NordSystem_data.name,
        description: NordSystem_data.description,
        techs: NordSystem_data.techs,
        github: NordSystem_data.github,
        site: NordSystem_data.site,
      };
      break;
    case 3:
      selectedSlide = {
        name: NLOB_data.name,
        description: NLOB_data.description,
        techs: NLOB_data.techs,
        github: NLOB_data.github,
        site: NLOB_data.site,
      };
      break;
    case 4:
      selectedSlide = {
        name: Chat_data.name,
        description: Chat_data.description,
        techs: Chat_data.techs,
        github: Chat_data.github,
        site: Chat_data.site,
      };
      break;
    case 5:
      selectedSlide = {
        name: Pokemon_data.name,
        description: Pokemon_data.description,
        techs: Pokemon_data.techs,
        github: Pokemon_data.github,
        site: Pokemon_data.site,
      };
      break;

    default:
      break;
  }

  const li_tech = selectedSlide.techs.map((tech, index) => (
    <li key={index}>{tech}</li>
  ));

  return (
    <div className="project_data">
      <h2 className="project_data_name">{selectedSlide.name}</h2>
      <p>{selectedSlide.description}</p>

      <ul>
        <label>Techs</label>
        {li_tech}
      </ul>

      <div className="links_portfolio">
        <div>
          <a href={selectedSlide.github}>{selectedSlide.github}</a>
        </div>
        <div>
          <a href={selectedSlide.site}>{selectedSlide.site}</a>
        </div>
      </div>
    </div>
  );
}
