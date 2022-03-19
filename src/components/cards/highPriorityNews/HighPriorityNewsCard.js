import React from "react";
import Description from "../../description/Description";
import Title from "../../title/Title";
import TimeOfPost from "../../date/TimeOfPost";
import "./HighPriorityNewsCard.css";

function HighPriorityNewsCard(props) {
    const { newsTitle, newsDesc, photo, supTitle, date } = props;

    const truncatedText = (text) => {
        if (text && text.length > 100) {
            let newText = text.substring(0, 150) + "...";

            return newText;
        } else {
            return text;
        }
    };

    return (
        <div className="hpNewsContainer">
            <div style={{ height: "100%" }}>
                <a href="#">
                    <Title
                        titleText={newsTitle}
                        bold={true}
                        size={"18px"}
                        supTitle={supTitle}
                    />
                </a>
                <Description description={truncatedText(newsDesc)} />

                <TimeOfPost date={date} />
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
