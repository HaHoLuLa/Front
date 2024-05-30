import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function EventCart({menu1, menu2, item1, item2, title1, title2, sub1, sub2}) {
  const [ act, setAct ] = useState(true);
  const nav = useNavigate();

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

        <div className="cart-object" key={index} onClick={() => nav(`/room/${item.hNum}`)}>
        <div style={{backgroundImage: "url('https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg')"}}>
          <div>{title1}</div>
          <div><span>{sub1}</span></div>
        </div>

        <div>
          <div>
            <span>{item.hName}</span>
            {/* <div><span>#우리집</span>&nbsp;<span>#집이_최고지</span></div> */}
          </div>
          <div><h3>{item.rCost !== undefined ? item.rCost.toLocaleString() : ""}원~</h3></div>
        </div>
      </div>

)) : item2.map((item, index) => (

  <div className="cart-object" key={index}>
  <div style={{backgroundImage: "url('https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg')"}}>
    <div>{title2}</div>
    <div><span>{sub2}</span></div>
  </div>

  <div>
    <div>
      <span>{item.hName}</span>
      {/* <div><span>#우리집</span>&nbsp;<span>#집이_최고지</span></div> */}
    </div>
    <div><h3>{item.rCost !== undefined ? item.rCost.toLocaleString() : ""}원~</h3></div>
  </div>
</div>

))}
      
    </div>
</>
  )
}