import React from "react";
import Description from "../../description/Description";
import Title from "../../title/Title";
import "./HighPriorityNewsCard.css";

function HighPriorityNewsCard(props) {
    const { newsTitle, newsDesc, photo, supTitle } = props;

    const truncatedText = (text) => {
        if (text && text.length > 100) {
            let newText = text.substring(0, 100) + "...";

            return newText;
        } else {
            return text;
        }
    };

    return (
        <div className="hpNewsContainer">
            <div style={{ height: "100%" }}>
                <Title
                    titleText={newsTitle}
                    bold={true}
                    size={"18px"}
                    supTitle={supTitle}
                />
                <Description description={truncatedText(newsDesc)} />
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
