import "../../styles/uploadForm.css"

function UploadForm() {
    return (
        <main>
            <div class="FormContainer">

                <button class="FormBackButton">돌아가기</button>

                <div class="FormHeadContainer">
                    <div class="FormImgContainer">
                        <div class="FormTopImg"></div>
                        <div class="FormBottomImg">
                            <div class ="FormInnerImg"></div>
                        </div>
                    </div>

                    <div class="FormTextContainer">
                        <div class="FormText">
                            <p class="FormTextHead">아무도 안 갈 호텔</p>
                            <p class="FormTextBody">대한민국 어디에도 없음</p>
                        </div>

                        <div class="FormInput">
                            <div class="FormInputBox">
                                <p>중개 가격</p>
                                <input type="text"></input>
                            </div>
                            
                            <div class="FormInputBox">
                                <p>룸 옵션</p>
                                <input type="text"></input>
                            </div>

                            <div class="FormInputBox">
                                <p>다른거</p>
                                <input type="text"></input>
                            </div>
                        </div>

                        <div class="FormPrice">
                            <div class="FormPriceBox">
                                <p class="FormPriceTxt">중개 가격</p>
                                <p class="FormPriceNum">1,000,000</p>
                            </div>

                            <div class="FormPriceBox">
                                <p class="FormPriceTxt">기본 가격</p>
                                <p class="FormPriceNum">1,000</p>
                            </div>
                        </div>

                        <div class="FormEndPrice">
                            <div class="FormPriceBox">
                                <p class="FormEndPriceTxt">최종 소비자 가격</p>
                                <p class="FormEndPriceNum">1,001,000</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="FormBodyContainer">
                    textbox
                    수정해야됨
                </div>

                <button class="FormGoButton">등록하기</button>
            </div>
        </main>
    )
}

export default UploadForm