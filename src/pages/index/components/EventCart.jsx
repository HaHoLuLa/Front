import { useState } from "react"

export default function EventCart({menu1, menu2, item1, item2}) {
  const [ act, setAct ] = useState(true);

  const activeStyle = {
    width: "50%",
    borderLeft: "#ccc solid 1px",
    borderTop: "#ccc solid 1px",
    borderRight: "#ccc solid 1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const disableStyle = {
    cursor: "pointer",
    color: "#ccc",
    width: "50%",
    borderBottom: "#ccc solid 1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const handleToggle = (newAct) => {
    if (act !== newAct)
      setAct(newAct)
  }

  return (
    <>
    <div className="event-cart">
      <div style={act ? activeStyle : disableStyle} onClick={() => handleToggle(true)}><h2>{menu1}</h2></div>
      <div style={!act ? activeStyle : disableStyle} onClick={() => handleToggle(false)}><h2>{menu2}</h2></div>
    </div>

    <div className="cart-container">

      { act ? item1.map((item, index) => (

        <div className="cart-object" key={index}>
        <div style={{backgroundImage: "url('https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg')"}}>
          <div>{item}</div>
          <div><span>⭐황금연휴 좌석보유⭐</span></div>
        </div>

        <div>
          <div>
            <span>아남아파트 5, 6일</span>
            <div><span>#우리집</span>&nbsp;<span>#집이_최고지</span></div>
          </div>
          <div><h3>500,000원~</h3></div>
        </div>
      </div>

)) : item2.map((item, index) => (

  <div className="cart-object" key={index}>
  <div style={{backgroundImage: "url('https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg')"}}>
    <div>{item}</div>
    <div><span>⭐황금연휴 좌석보유⭐</span></div>
  </div>

  <div>
    <div>
      <span>아남아파트 5, 6일</span>
      <div><span>#우리집</span>&nbsp;<span>#집이_최고지</span></div>
    </div>
    <div><h3>500,000원~</h3></div>
  </div>
</div>

))}
      
    </div>
</>
  )
}