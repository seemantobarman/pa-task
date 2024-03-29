import React from "react";
import "./homepage.css";
import fakeData from "../../data/data.json";
import PrimaryAdsCard from "../cards/primaryAdsCard/PrimaryAdsCard";
import SecondaryAdsCard from "../cards/secondaryAdsCard/SecondaryAdsCard";
import HighPriorityNewsCard from "../cards/highPriorityNews/HighPriorityNewsCard";
import LowPriorityNewsCard from "../cards/lowPriorityNews/LowPriorityNewsCard";

const Homepage = () => {
    return (
        <div>
            <div className="container">
                <div className="mainContent">
                    <div className="topNewsContent">
                        <HighPriorityNewsCard
                            newsTitle={fakeData[0].title}
                            newsDesc={fakeData[0].description}
                            photo={fakeData[0].photo}
                            date={fakeData[0].time}
                        />

                        <HighPriorityNewsCard
                            newsTitle={fakeData[1].title}
                            newsDesc={fakeData[1].description}
                            date={fakeData[1].time}
                            supTitle={fakeData[1]["sup-title"]}
                        />
                    </div>

                    <div className="line"></div>

                    <div className="bottomNewsContent">
                        {fakeData.map((item) => {
                            if (item.sort >= 3 && item.sort <= 5) {
                                return (
                                    <HighPriorityNewsCard
                                        key={item.id}
                                        newsTitle={item.title}
                                        newsDesc={item.description}
                                        date={item.time}
                                        supTitle={item["sup-title"]}
                                    />
                                );
                            }
                        })}
                    </div>

                    <div className="line"></div>

                    <div className="bottomNewsContent">
                        {fakeData.map((item) => {
                            if (item.sort >= 6 && item.sort <= 8) {
                                return (
                                    <LowPriorityNewsCard
                                        key={item.id}
                                        newsTitle={item.title}
                                        photo={item.photo}
                                        date={item.time}
                                        supTitle={item["sup-title"]}
                                    />
                                );
                            }
                        })}
                    </div>

                    <div className="line"></div>

                    <div className="bottomNewsContent">
                        {fakeData.map((item) => {
                            if (item.sort >= 9 && item.sort <= 11) {
                                return (
                                    <LowPriorityNewsCard
                                        key={item.id}
                                        newsTitle={item.title}
                                        photo={item.photo}
                                        date={item.time}
                                        supTitle={item["sup-title"]}
                                    />
                                );
                            }
                        })}
                    </div>

                    <div className="line"></div>

                    <div className="bottomNewsContent">
                        {fakeData.map((item) => {
                            if (item.sort >= 12) {
                                return (
                                    <LowPriorityNewsCard
                                        key={item.id}
                                        newsTitle={item.title}
                                        photo={item.photo}
                                        date={item.time}
                                        supTitle={item["sup-title"]}
                                    />
                                );
                            }
                        })}
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

                    <SecondaryAdsCard
                        imageTitle={"ছাপা কাগজের মতো পড়ুন আজকের পত্রিকা"}
                        imageLink={
                            "https://images.prothomalo.com/prothomalo-bangla/2020-09/54ffe3e4-59b7-4c4a-9c97-b3d8769b2518/a2.jpg?rect=0,27,1432,752&w=1200&ar=40:21&auto=format,compress&ogImage=true&mode=crop&overlay&overlay_position=bottom&overlay_width_pct=1"
                        }
                    />
                </div>
            </div>

            <div className="lineBig"></div>
            <div className="bottomAdsContainer">
                <img
                    className="imageAd"
                    src="https://rupayanpropertyfair.com/wp-content/uploads/2020/08/lake-castle-ads.jpg"
                    alt="Ad Space"
                />
            </div>
            <div className="lineBig"></div>
        </div>
    );
};

export default Homepage;
