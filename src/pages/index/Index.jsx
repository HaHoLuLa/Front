import "../../styles/index.css"
import ImageMenu from "./components/ImageMenu"
import EventMenu from "./components/EventMenu"
import EventCart from "./components/EventCart"
import Ad from "./components/Ad"
import Location from  "./components/Location"
import Recommend from "../../components/Recommend"
import { useSetDummyData } from "../../utils/useData"

export default function Index() {
  const data = useSetDummyData();
  // const data0 = data.filter((i) => i.hType === 0)
  const data1 = data.filter((i) => i.hType === 1)
  const data2 = data.filter((i) => i.hType === 2)
  // const data3 = data.filter((i) => i.hType === 3)
  
  return (
    <main>
      <ImageMenu />
    
      <EventMenu title={"TYPE1"} data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />    
    
      <EventCart menu1={"TYPE2"} menu2={"TYPE3"} item1={[1, 2, 3, 4]} item2={[5, 6, 7, "ㅁㄴㄹ"]} />
    
      <Ad images={['/img/ad1.png', '/img/ad2.png']} />
    
      <Location title={"TYPE4"} sub={"---"} data={[1, 2, 3, 4, 5, 6]} />
    
      <Recommend id={1} data={data1} title={"TYPE5"} sub={"type5"} />
    
      <Recommend id={2} style={{marginTop: "50px"}} data={data2} title={"TYPE6"} sub={"type6"} />
    </main>
  )
}