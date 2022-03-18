import React from "react";
import Title from "../../title/Title";
import "./HighPriorityNewsCard.css";

function HighPriorityNewsCard(props) {
    const { newsTitle, newsDesc, photo } = props;

    const truncatedText = (text) => {
        if (text && text.length > 100) {
            let newText = text.substring(0, 100) + "...";

            return newText;
        } else {
            return text;
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <div style={{ height: "100%" }}>
                <Title titleText={newsTitle} bold={true} size={"18px"} />
                <p
                    style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        width: "100%",
                    }}
                >
                    {truncatedText(newsDesc)}
                </p>
            </div>

            {photo && (
                <img
                    src={photo}
                    alt="News Photo"
                    style={{
                        marginRight: "10px",
                        width: "50%",
                        objectFit: "cover",
                    }}
                />
            )}
        </div>
    );
}

export default HighPriorityNewsCard;
