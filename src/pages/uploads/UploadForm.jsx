import "../../styles/uploadForm.css"
import ReactQuill, { Quill } from 'react-quill';
import "react-quill/dist/quill.snow.css";

function UploadForm() {
    return (
        <main>
            <div className="FormContainer">

                <button className="FormBackButton">돌아가기</button>

                <div className="FormHeadContainer">
                    <div className="FormImgContainer">
                        <div className="FormTopImg"></div>
                        <div className="FormBottomImg">
                            <div className ="FormInnerImg"></div>
                        </div>
                    </div>

                    <div className="FormTextContainer">
                        <div className="FormText">
                            <p className="FormTextHead">아무도 안 갈 호텔</p>
                            <p className="FormTextBody">대한민국 어디에도 없음</p>
                        </div>

                        <div className="FormInput">
                            <div className="FormInputBox">
                                <p>중개 가격</p>
                                <input type="text"></input>
                            </div>
                            
                            <div className="FormInputBox">
                                <p>룸 옵션</p>
                                <input type="text"></input>
                            </div>

                            <div className="FormInputBox">
                                <p>다른거</p>
                                <input type="text"></input>
                            </div>
                        </div>

                        <div className="FormPrice">
                            <div className="FormPriceBox">
                                <p className="FormPriceTxt">중개 가격</p>
                                <p className="FormPriceNum">1,000,000</p>
                            </div>

                            <div className="FormPriceBox">
                                <p className="FormPriceTxt">기본 가격</p>
                                <p className="FormPriceNum">1,000</p>
                            </div>
                        </div>

                        <div className="FormEndPrice">
                            <div className="FormPriceBox">
                                <p className="FormEndPriceTxt">최종 소비자 가격</p>
                                <p className="FormEndPriceNum">1,001,000</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* className="FormBodyContainer" */}
                <ReactQuill />

                <button className="FormGoButton">등록하기</button>
            </div>
        </main>
    )
}

export default UploadForm