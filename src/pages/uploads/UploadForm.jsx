import { useEffect, useState } from "react";
import "../../styles/uploadForm.css"
import ReactQuill, { } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function UploadForm() {
    const [ content, setContent ] = useState('')
    const [ form, setForm ] = useState({
        content: ""
    })
    const [ file, setFile ] = useState(null)

    useEffect(() => {}, [])

    const handleChange = (value) => {
        setContent(value)
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
        console.log(file)
    }

    const handleSubmit = async () => {
        try {
            await axios()
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <main>
            <div className="FormContainer">

                <button className="FormBackButton">돌아가기</button>

                <div className="FormHeadContainer">
                    <div className="FormImgContainer">
                        <div className="FormTopImg">
                            <label htmlFor="image"><i className="fa-solid fa-arrow-up-from-bracket" style={{fontSize: "50px"}}></i></label>
                            <input type="file" name="image" id="image" style={{display: "none"}} accept="image/png, image/jpeg" onChange={handleFileChange} />
                        </div>
                        <div className="FormBottomImg">
                            <div className ="FormInnerImg"></div>
                        </div>
                    </div>

                    <div className="FormTextContainer">
                        <div className="FormText">
                            {/* <p className="FormTextHead">아무도 안 갈 호텔</p> */}
                            <input type="text" name="" id="" value={"아무도 안 갈 호텔"} className="FormTextHead" onChange={(e) => console.log(e.target.value)} />
                            <input type="text" className="FormTextBody" onChange={(e) => console.log(e.target.value)} placeholder="객실 이름" />
                            
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
                <ReactQuill onChange={handleChange} value={content} />

                <button className="FormGoButton">등록하기</button>
            </div>
        </main>
    )
}

export default UploadForm