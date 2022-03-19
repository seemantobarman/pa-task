import React from "react";
import { PostedOnDate } from "./PostedOnDate";
import { toBengaliNumber } from "bengali-number";

function TimeOfPost(props) {
    const { date } = props;
    return (
        <div>
            {date && (
                <p
                    style={{
                        marginTop: "20px",
                        color: "#bababa",
                        fontSize: "12px",
                    }}
                >{`${toBengaliNumber(PostedOnDate(date))} ঘন্টা আগে`}</p>
            )}
        </div>
    );
}

export default TimeOfPost;
