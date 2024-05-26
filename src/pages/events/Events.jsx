import "../../styles/event.css"
import EventChoose from "./EventChoose"

function Events() {
  return (
    <main>
      {/* 헤드 베너*/}
      <div class="eventBennerContainer">
        <img src="https://cdn.pixabay.com/photo/2021/11/03/08/24/baskets-6765014_1280.jpg" alt=""></img>
        <div class="opacityBox"></div>
        <div class="bennerTextCon">
          <p class="bennerTextT">EVENT</p>
          <p class="bennerTextB">여간행장이 준비한 다양한 이벤트를 확인하고, 참가해보세요!</p> {/* 여기 글자 너무 구림 혼자 독보적 블랙이라 그런것 같은데 어떻게 바꿔야될지 모르겠음 색 바꾸면 너무 흐리게 보임 그렇다고 색 바꾸고 굵기를 늘리자니 다채롭게 구림 역시 디자인을 전공했어야*/}
        </div>
      </div>

      {/* 이벤트 보기 선택 */}
      <EventChoose menu1={"진행 중인 이벤트"} menu2={"종료된 이벤트"} item1={[1, 2, 3, 4]} item2={[5, 6, 7, "ㅁㄴㄹ"]} />


      <div class="eventFootContainer">
        {/* 검색창 */}
        <div class="eventSearchContainer">
          <select>
            <option value="1">제목</option>
            <option value="2">글</option>
            <option value="3">제목+글</option>
          </select>
          <input type="text" ></input>
          <button>검색</button> {/* 검색 버튼 포인트 색상으로 변경해야됨 */}
        </div>

        {/* 페이지네이션 :: 대충 버튼으로 구색만 맞춤*/}
        <div class="eventPageContainer">
          <button class="pagePastB">이전</button>
          <button class="choosenPase">1</button> {/* 보고 있는 페이지 버튼임 포인트 색상으로 변경해야됨 얘는 테두리 없음*/}
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button class="pageNextB">다음</button>
        </div>
      </div>

      
      

    </main>
  )
}

export default Events