import React from "react";
import Title from "../../title/Title";
import "./PrimaryAdsCard.css";

function PrimaryAdsCard(props) {
    const { imageLink, imageTitle } = props;
    return (
        <div>
            <div className="primaryAdsContainer">
                {imageLink && (
                    <img
                        src={imageLink}
                        alt="Ad Space"
                        className="rightImageAd"
                    />
                )}

                {imageTitle && (
                    <div
                        style={{
                            width: "100%",
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        <Title
                            titleText={imageTitle}
                            bold={true}
                            size={"16px"}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default PrimaryAdsCard;
