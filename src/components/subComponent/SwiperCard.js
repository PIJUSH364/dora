import React from 'react'


export default function SwiperCard({ data }) {
    const { image, name, review, position } = data;
    return (
        <>
            <div className="feedback-active-img">
                <img src={image.url} alt="dora_img" />
            </div>

            <div className="feedback-info-cont">
                <div className="feedback-title-cont">
                    <h3>Awesome Service!</h3>
                    <div className="feedback-title-element">
                        <img
                            src="./images/bg_elements/feedback-element.svg"
                            alt="dora_img"
                        />
                    </div>
                </div>
                <p className="feedback-txt">
                    {review}
                </p>
                <div className="feedback-person-info">
                    <div className="feedback-person-img">
                        <img src="images/testimonials/2.png" alt="dora_img" />
                    </div>
                    <div className="feedback-person-name">
                        <h4>{name}</h4>
                        <p>{position}</p>
                        <div className="feedback-star-cont">
                            <ul>
                                <li>
                                    <img src="images/icons/Star.svg" alt="dora_img" />
                                </li>
                                <li>
                                    <img src="images/icons/Star.svg" alt="dora_img" />
                                </li>
                                <li>
                                    <img src="images/icons/Star.svg" alt="dora_img" />
                                </li>
                                <li>
                                    <img src="images/icons/Star.svg" alt="dora_img" />
                                </li>
                                <li>
                                    <img src="images/icons/Star.svg" alt="dora_img" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}