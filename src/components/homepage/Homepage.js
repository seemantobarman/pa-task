import React from "react";
import "./homepage.css";
import fakeData from "../../data/data.json";
import PrimaryAdsCard from "../cards/primaryAdsCard/PrimaryAdsCard";

const Homepage = () => {
    console.log(fakeData);
    return (
        <div>
            <div className="container">
                <div className="mainContent">
                    <div className="topNewsContent">
                        <div>Top News 1</div>
                        <div>Top News 2</div>
                        <div className="line"></div>
                    </div>

                    <div className="bottomNewsContent">
                        <div>Bottom News 1</div>
                        <div>Bottom News 2</div>
                        <div>Bottom News 3</div>
                        <div className="line"></div>
                        <div>Bottom News 4</div>
                        <div>Bottom News 5</div>
                        <div>Bottom News 6</div>
                        <div className="line"></div>
                    </div>
                </div>

                <div className="adsRight">
                    <PrimaryAdsCard
                        imageLink={
                            "https://www.bssnews.net/assets/news_photos/2021/07/24/image-6982-1627112365.jpg"
                        }
                    />

                    <PrimaryAdsCard
                        imageLink={fakeData[11].photo}
                        imageTitle={fakeData[11].title}
                    />

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
