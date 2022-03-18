import React from "react";
import "./Description.css";

function Description(props) {
    const { description } = props;
    return <p className="descriptionStyle">{description}</p>;
}

export default Description;
