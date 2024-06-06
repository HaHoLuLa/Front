import axios from "axios"
import "../styles/sub4.css"
import { useState, useEffect } from "react"

function CityList() {
  const [ data, setData ] = useState([])

  useEffect(() => {
    axios.get("/search/getCity-all")
    .then(res => setData(res.data))
    .catch(e => console.error(e))
  }, [])
  
  return (
  <main>
    {data.map((item, index) => (
      <div className="city-menu" key={index} style={{backgroundImage: `url('${item.pic}')`, marginBottom: '20px'}}>
        <h1>{item.name}</h1>
        <span>{item.info}</span>
        <button>숙소 보러가기 &gt;</button>
      </div>
    ))}
  </main>
  )
}

export default CityList