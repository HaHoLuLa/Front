import { useParams } from "react-router-dom"
import "../../styles/sub1.css"

export const Sub1 = () => {
  const { locate } = useParams()

  return (
    <main>
    <h2>'{locate}' 검색 결과</h2>
    <div className="main">

      <div className="left-menu">

        <div className="map-menu">
          <i className="fa-solid fa-location-dot fa-2xl"></i>
          <span><b>지도에서 숙소보기</b></span>
        </div>

        <div className="local-cart">
          <p><input type="checkbox" value="" />체크1</p>
          <p><input type="checkbox" value="" />체크2</p>
          <p><input type="checkbox" value="" />체크3</p>
          <p><input type="checkbox" value="" />체크4</p>
          <p><input type="checkbox" value="" />체크5</p>
        </div>

        <div className="local-opt">
          <hr /><div><span>메뉴 1</span><i className="fa-solid fa-plus"></i></div>
          <hr /><div><span>메뉴 2</span><i className="fa-solid fa-plus"></i></div>
          <hr /><div><span>메뉴 3</span><i className="fa-solid fa-plus"></i></div>
          <hr /><div><span>메뉴 4</span><i className="fa-solid fa-plus"></i></div>
          <hr />
        </div>
      </div>

      <div className="right-menu">

        <div className="sort-menu">

          <h4>134건의 검색 결과</h4>

          <div>
            <select><option>예약가능 날짜</option></select>
            <select><option>가격대</option></select>
            <span>예약즉시 확정<input type="checkbox" /></span>
          </div>
          <label for="정렬">정렬 : </label>
          <select name="정렬"><option>추천순</option></select>
        </div>

        <div className="result-container">

        {[1,1,1,1,1,1,1,1,1,1,1,1].map((i) => (
          
          <div className="result-obj" key={i}>
            <div style={{backgroundImage: "url('https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg')"}}>
              <div>
                <i className="fa-regular fa-heart fa-xl"></i>
              </div>
            </div>
            <div>
              <p><b>신라 호텔</b></p>
              <p><i className="fa-solid fa-star"></i> 4.2 (142)</p>
              <p><b>105,319</b>원</p>
            </div>
          </div>
        ))}
          
        </div>

        <div className="result-page"><h3>&lt; 1 2 3 4 5 &gt;</h3></div>
      </div>
    </div>
  </main>
  )
}