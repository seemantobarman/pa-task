import React from "react";
import "./SecondaryAdsCard.css";
import Title from "../../title/Title";

function SecondaryAdsCard(props) {
    const { imageTitle, imageLink } = props;
    return (
        <div className="secondaryAdsContainer">
            {imageTitle && (
                <div
                    style={{
                        width: "100%",
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}
                >
                    <Title titleText={imageTitle} bold={true} size={"16px"} />
                </div>
            )}

            {imageLink && (
                <img
                    src={imageLink}
                    alt="Ad Space"
                    className="secondaryImageAd"
                />
            )}
        </div>
    );
}

export default SecondaryAdsCard;
