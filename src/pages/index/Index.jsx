import "../../styles/index.css"
import ImageMenu from "./components/ImageMenu"
import EventMenu from "./components/EventMenu"
import EventCart from "./components/EventCart"
import Ad from "./components/Ad"
import Location from  "./components/Location"
import Recommend from "../../components/Recommend"
import { useSetDummyData, } from "../../utils/useData"

export default function Index() {
  const data = useSetDummyData();
  // const data0 = data.filter((i) => i.hType === 0)
  const data1 = data.filter((i) => i.hType === 1);
  const data2 = data.filter((i) => i.hType === 2);
  const data14 = data1.slice(0, 4);
  const data24 = data2.slice(0, 4);
  // const realData = useGetData("/main/get-hotel?type=2");
  // const data3 = data.filter((i) => i.hType === 3)
  // console.log(realData);
  
  return (
    <main>
      <ImageMenu />
    
      <EventMenu title={"객"} sub={"type1"} data={data} />    
    
      <EventCart menu1={"객"} menu2={"객"} item1={data14} item2={data24} title1={"하하호호"} title2={"룰루랄라"} sub1={"type2"} sub2={"type3"} />
    
      <Ad images={['/img/ad1.png', '/img/ad2.png']} />
    
      <Location title={"TYPE4"} sub={"---"} data={[1, 2, 3, 4, 5, 6]} />
    
      <Recommend id={1} data={data1} title={"TYPE5"} sub={"type5"} />
    
      <Recommend id={2} style={{marginTop: "50px"}} data={data2} title={"TYPE6"} sub={"type6"} />
    </main>
  )
}