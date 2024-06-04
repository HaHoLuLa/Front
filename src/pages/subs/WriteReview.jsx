import React, { useState, useEffect } from "react";
import "../../styles/writeReview.css";

export default function WriteReview() {
    const [star, setStar] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const handleRating = (value) => {
        if (star !== value) {
            setStar(value);
            console.log("선택된 별 개수:", value);
        }
    };

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleSubmitReview = () => {
        // 리뷰를 등록하는 로직을 추가할 수 있습니다.
        console.log("리뷰 내용:", reviewText);
    };

    useEffect(() => {
        console.log("실시간으로 작성 중인 리뷰 내용:", reviewText);
    }, [reviewText]);

    return (
        <form className="write-review">
            <p className="write-review-title">리뷰쓰기</p>
            <hr style={{width: "99%"}} />
            <div className="write-review-header">
                <img
                    className="review-item-image"
                    src="https://i.travelapi.com/lodging/1000000/490000/481300/481277/3d487938_z.jpg"
                    alt="Review item"
                />
                <div className="write-review-text">
                    <div className="review-info" style={{ color: "GrayText" }}>
                        {"판매자 이름"}
                    </div>
                    <div className="review-info">
                        {"지역/호텔이름"}
                    </div>
                    <div className="review-info" style={{ color: "GrayText" }}>
                        {"객실 정보(스위트룸, 일반, 등)"}
                    </div>
                </div>
            </div>
            <hr style={{width: "90%", borderTop: "2px solid #f8f9fa"}} />
            <div className="reviewStarTitle">상품은 만족하셨나요?</div>
            <div className="reviewStar-rating">
                {[1, 2, 3, 4, 5].map((value) => (
                    <React.Fragment key={value}>
                        <input
                            type="radio"
                            id={`star${value}`}
                            name="reviewStar"
                            className="reviewStar"
                            value={value}
                            checked={star === value}
                            onChange={() => handleRating(value)}
                        />
                        <label htmlFor={`star${value}`}></label>
                    </React.Fragment>
                ))}
            </div>
            <div style={{color: "gray"}}>
                {star === 0 ? "선택하세요" : `별점 ${star}점이 선택되었습니다`}
            </div>
            <hr style={{width: "90%", borderTop: "2px solid #f8f9fa"}} />
            <div className="reviewStarTitle">어떤 점이 좋았나요?</div>
            <textarea
                className="writeReview-textarea"
                value={reviewText}
                onChange={handleReviewTextChange}
                placeholder="리뷰를 작성해주세요."
            ></textarea>
            <button className="writeReview-submit" onClick={handleSubmitReview}>리뷰 등록하기</button>
        </form>
    );
}
