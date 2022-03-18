import React from "react";
import Description from "../../description/Description";
import Title from "../../title/Title";
import "./LowPriorityNewsCard.css";
function LowPriorityNewsCard(props) {
    const { newsTitle, photo } = props;
    return (
        <div>
            <div
                style={{
                    height: "100%",
                    display: "flex",
                }}
            >
                <img
                    src={photo}
                    style={{
                        marginRight: "10px",
                        width: "30%",
                        objectFit: "cover",
                    }}
                />
                <Title titleText={newsTitle} bold={true} size={"16px"} />
            </div>
        </div>
    );
}

export default LowPriorityNewsCard;
