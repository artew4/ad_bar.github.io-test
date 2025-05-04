import React from "react";
import "../styles/components/InfoCard.scss";

function InfoCard({ icon, text, link, animation = "fade-up", delay = 0 }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      data-aos={animation}
      data-aos-delay={delay}
    >
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </a>
  );
}

export default InfoCard;
