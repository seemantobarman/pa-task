import React from "react";

function Title(props) {
    const { titleText, bold, size, fontColor, supTitle } = props;

    return (
        <p
            style={{
                fontWeight: bold ? "bold" : "normal",
                fontSize: size ? size : "16px",
                color: fontColor ? fontColor : "black",
            }}
        >
            <span style={{ color: "red" }}>{supTitle && `${supTitle} / `}</span>
            {titleText}
        </p>
    );
}

export default Title;
