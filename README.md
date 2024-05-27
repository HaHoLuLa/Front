## 여간행장 팀프로젝트

```jsx
export default function App() {
  return (
    <>
    {/* 스크롤 자동으로 위 */}
    <ScrollToTop />
    <Routes>
      {/* 공용 레이아웃 */}
      <Route element={<Layout />}>
        {/* 메인 */}
        <Route index element={<Index />} />
        {/* 로그인 */}
        <Route path="/login" element={<Login />} />
        {/* 마이페이지 */}
        <Route path="/mypage" element={<UserInfo />} />
        {/* 도시들 (아마 안 쓸 수도) */}
        <Route path="/citys" element={<CityList />} />
        {/* 검색 결과 */}
        <Route path="/search/:locate" element={<Sub1 />} />
        {/* 객실 페이지 */}
        <Route path="/room" element={<Sub3 />}>
          <Route path=":num" element={<Sub3 />} />
        </Route>
        {/* 유저 회원가입 */}
        <Route path="/user-join" element={<UserJoin />} />
        {/* 현지인 회원가입 */}
        <Route path="/native-join" element={<NativeJoin />} />
        <Route path="/native-join1" element={<NativeJoin1 />} />
        {/* 현지인 페이지 */}
        <Route path="/local/*" element={<Local />} />
        {/* 객실 업로드 */}
        <Route path="/upload" element={<Upload />} />
        {/* 이벤트 상세 */}
        <Route path="/event" element={<Event />} />
        {/* 예약하기 */}
        <Route path="/order" element={<Reservation />} />
      </Route>
      {/* /test 들은 테스트용 */}
      <Route path="/test/map" element={<Map />} />
      <Route path="/test/swiper" element={<SwiperTest /> } />
      <Route path="/test/hook" element={<HookTest />} />
      <Route path="/test/chat/:sender/:id" element={<Chat />} />
      {/* 본인인증 */}
      <Route path="/identify" element={<Identify />} />
      {/* 404시 메인으로 */}
      <Route path="*" element={<Redirect />} />
    </Routes>
    </>
  )
}
```

---
### 패키지 목록
- react-google-maps/api
- stomp/stompjs
- axios
- quill
- react-quill
- react-helmet-async
- react-router-dom
- swiper

---

### 깃