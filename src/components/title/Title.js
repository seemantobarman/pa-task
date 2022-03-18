import React from "react";

function Title(props) {
    const { titleText, bold, size } = props;

    console.log(bold, size);
    return (
        <p
            style={{
                fontWeight: bold ? "bold" : "normal",
                fontSize: size ? size : "16px",
            }}
        >
            {titleText}
        </p>
    );
}

export default Title;
