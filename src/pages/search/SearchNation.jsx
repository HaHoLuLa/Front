import "../../styles/searchNationImage.css"
import SearchNationImage from "./SearchNationImage"
import Recommend from "../../components/Recommend"

export const SearchNation = () => {

  return (
    <main>
      <SearchNationImage />
      <Recommend id={1} data={[1, 1, 1, 1,1, 1,1,1]} title={"TYPE5"} sub={"type5"}  />
    </main>
  )
}