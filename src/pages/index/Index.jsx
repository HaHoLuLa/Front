import "../../styles/index.css"
import ImageMenu from "./components/ImageMenu"
import EventMenu from "./components/EventMenu"
import EventCart from "./components/EventCart"
import Ad from "./components/Ad"
import Location from  "./components/Location"
import Recommend from "../../components/Recommend"
import { useSetDummyData, } from "../../utils/useData"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Index() {
  const data = useSetDummyData();
  // const data0 = data.filter((i) => i.hType === 0)
  const data1 = data.filter((i) => i.hType === 1);
  const data2 = data.filter((i) => i.hType === 2);
  const data14 = data1.slice(0, 4);
  const data24 = data2.slice(0, 4);
  const [ 튀빙겐, set튀빙겐 ] = useState([]);
  const [ 소르그, set소르그 ] = useState([]);
  const [ 최저가, set최저가 ] = useState([]);
  // const realData = useGetData("/main/get-hotel?type=2");
  // const data3 = data.filter((i) => i.hType === 3)
  // console.log(realData);

  useEffect(() => {
    axios.get('/main/get-hotel-city?name=튀빙겐')
    .then(res => {set튀빙겐(res.data); console.log(res.data)})
    .catch(e => console.error(e))
    axios.get('/main/get-hotel-city?name=크베들린부르크')
    .then(res => {set소르그(res.data); console.log(res.data)})
    .catch(e => console.error(e))
    axios.get('/main/get-native-page')
    .then(res => {set최저가(res.data); console.log(res.data)})
    .catch(e => console.error(e))
  }, [])
  
  return (
    <main>
      <ImageMenu />
    
      <EventMenu title={"🎉여간행장 최저가 보장!🎉"} sub={"type1"} data={최저가} />    
    
      <EventCart menu1={"객"} menu2={"객"} item1={data14} item2={data24} title1={"하하호호"} title2={"룰루랄라"} sub1={"type2"} sub2={"type3"} />
    
      <Ad images={['/img/ad1.png', '/img/ad2.png']} />
    
      <Location title={"TYPE4"} sub={"---"} data={[1, 2, 3, 4, 5, 6]} />
    
      <Recommend id={1} data={튀빙겐} title={"튀빙겐"} sub={""} />
    
      <Recommend id={2} style={{marginTop: "50px"}} data={소르그} title={"크베들린부르크"} sub={""} />
    </main>
  )
}