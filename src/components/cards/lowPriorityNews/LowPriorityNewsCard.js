import React from "react";
import Title from "../../title/Title";
import TimeOfPost from "../../date/TimeOfPost";
import "./LowPriorityNewsCard.css";

function LowPriorityNewsCard(props) {
    const { newsTitle, supTitle, photo, date } = props;
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
                <div>
                    <a href="#">
                        <Title
                            titleText={newsTitle}
                            bold={true}
                            size={"16px"}
                            supTitle={supTitle}
                        />
                    </a>

                    <TimeOfPost date={date} />
                </div>
            </div>
        </div>
    );
}

export default LowPriorityNewsCard;
