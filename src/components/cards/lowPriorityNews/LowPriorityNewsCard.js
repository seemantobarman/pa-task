import React from "react";
import Title from "../../title/Title";
import "./LowPriorityNewsCard.css";
function LowPriorityNewsCard(props) {
    const { newsTitle, supTitle, photo } = props;
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
                <Title
                    titleText={newsTitle}
                    bold={true}
                    size={"16px"}
                    supTitle={supTitle}
                />
            </div>
        </div>
    );
}

export default LowPriorityNewsCard;
