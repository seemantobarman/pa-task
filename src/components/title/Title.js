import React from "react";

function Title(props) {
    const { titleText, bold, size, fontColor } = props;

    console.log(bold, size);
    return (
        <p
            style={{
                fontWeight: bold ? "bold" : "normal",
                fontSize: size ? size : "16px",
                color: fontColor ? fontColor : "black",
            }}
        >
            {titleText}
        </p>
    );
}

export default Title;
