import React from "react";
import Title from "../../title/Title";
import { PostedOnDate } from "../../date/PostedOnDate";
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
                    <Title
                        titleText={newsTitle}
                        bold={true}
                        size={"16px"}
                        supTitle={supTitle}
                    />
                    <p
                        style={{ marginTop: "20px", color: "#bababa" }}
                    >{`Posted ${PostedOnDate(date)} Hours Ago`}</p>
                </div>
            </div>
        </div>
    );
}

export default LowPriorityNewsCard;
