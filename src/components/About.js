import React from "react";
import Links from "./Links";

function About({bio, links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {
      bio && <p>{bio}</p>
      /* bio==="undefined" || bio.length > 1 ? <p>{bio}</p> : null */
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedIn={links.linkedin} github={links.github}/>
    </div>
  );
}

export default About;
