import React from "react";
import "./homepage.css";

const Homepage = () => {
    return (
        <div>
            <div className="container">
                <div className="mainContent">
                    <div className="topNewsContent">
                        <div>Top News 1</div>
                        <div>Top News 2</div>
                    </div>

                    <div className="bottomNewsContent">
                        <div>Bottom News 1</div>
                        <div>Bottom News 2</div>
                        <div>Bottom News 3</div>
                        <div>Bottom News 4</div>
                        <div>Bottom News 5</div>
                        <div>Bottom News 6</div>
                    </div>
                </div>

                <div className="adsRight">
                    <div>ad 1</div>
                    <div>ad 2</div>
                    <div>ad 3</div>
                </div>
            </div>

            <div className="bottomAdsContainer">
                <img
                    className="imageAd"
                    src="https://rupayanpropertyfair.com/wp-content/uploads/2020/08/lake-castle-ads.jpg"
                    alt="Ad Space"
                />
            </div>
        </div>
    );
};

export default Homepage;
