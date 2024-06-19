import React, { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "../../styles/tests.css"

export default function Chat2() {
  const [ messages, setMessages ] = useState([]);
  const [ input, setInput ] = useState('');
  // const [ sender, setSender ] = useState('');
  // const { sender } = useParams();
  const [ stompClient, setStompClient ] = useState(null);
  // const { id, sender } = useParams();
  const scrollRef = useRef(null);

  const [ user, setUser ] = useState({})
  const { state } = useLocation();
  const native = state?.native


  useEffect(() => {
    axios.post(`/login/session`).then(res => {setUser(res.data); console.log(res.data)}).catch(e => console.error(e))
  }, [])
  
  useEffect(() => {
    if (scrollRef.current) {
    setTimeout(() => scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth' // 부드러운 스크롤 효과 적용
    }), 100);
  }}, [])
      
  useEffect(() => {
    if (user.native === "0") {
      axios.get(`${process.env.REACT_APP_URL}/get-message?uId=${user.id}&nId=${native}`)
      .then(res => {setMessages(res.data); console.log(res.data)}
      ).catch(e => console.error(e));
    } else {
      axios.get(`${process.env.REACT_APP_URL}/get-message?uId=kim12&nId=${user.id}`)
      .then(res => {setMessages(res.data); console.log(res.data)}
      ).catch(e => console.error(e));

    }
        
    const client = new Client({
      brokerURL: 'ws://localhost:8080/ws', // WebSocket 엔드포인트
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = () => {
      if (user.native === "0") {

        client.subscribe(`/sub/message/${native}/${user.id}`, (message) => {
          setMessages((prevMessages) => [...prevMessages, JSON.parse(message.body)]);
          if (scrollRef.current) {
            setTimeout(() => scrollRef.current.scrollTo({
              top: scrollRef.current.scrollHeight,
              behavior: 'smooth' // 부드러운 스크롤 효과 적용
            }), 10); 
          }
          });
      } else {
        client.subscribe(`/sub/message/${user.id}/kim12`, (message) => {
          setMessages((prevMessages) => [...prevMessages, JSON.parse(message.body)]);
          if (scrollRef.current) {
            setTimeout(() => scrollRef.current.scrollTo({
              top: scrollRef.current.scrollHeight,
              behavior: 'smooth' // 부드러운 스크롤 효과 적용
            }), 10); 
          }});

      }
    };

    client.activate();

    setStompClient(client);

    return () => {
      if (client) {
        client.deactivate();
      }
    };
  }, [user, native]);

  const sendMessage = () => {
    if (stompClient && input.trim() !== '') {
      if (user.native === "0") {

        stompClient.publish({ 
          destination: '/pub/message',
          body: JSON.stringify({
            // sender: sender, 
            content: input,
            // roomId: id 
            nId: native,
            uId: user.id,
            sender: user.native,
          })});
          } else {
            stompClient.publish({ 
              destination: '/pub/message',
              body: JSON.stringify({
                // sender: sender, 
                content: input,
                // roomId: id 
                nId: user.id,
                uId: "kim12",
                sender: user.native,
              })});}
      // console.log(input);
      setInput('');
    }
    if (scrollRef.current) {
      setTimeout(() => scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth' // 부드러운 스크롤 효과 적용
      }), 10); 
    }
  };

  return (
    <>
    <div style={{margin: "0 auto", width: "50%", backgroundColor: "#bacee0", height: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <div>
        <h1 style={{margin: "0"}}>{user.id}</h1>
        <div className='room' ref={scrollRef} style={{width: "auto", height: "500px", overflowY: "auto"}}>
          {messages.map((msg, index) => (
            user.native === msg.sender ? 
            <div key={index} style={{display: "flex", justifyContent: "flex-end", marginRight: "10px"}}><h2 style={{backgroundColor: "#ffeb33", padding: "5px", borderRadius: "5px", maxWidth: "50%", wordWrap: "break-word"}}>{msg.content}</h2></div> : 
            <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "10px"}}><h3 style={{marginBottom: "0"}}>{user.native !== "0" ? msg.userName : msg.nativeName}</h3><h2 style={{marginTop: "5px", backgroundColor: "white", padding: "5px", borderRadius: "5px", maxWidth: "50%", wordWrap: "break-word"}}>{msg.content}</h2></div>
          ))}
        </div>
      </div>
      <div style={{display: "flex", backgroundColor: "white", flexWrap: "wrap", justifyContent: "flex-end"}}>
        {/* <input type='text' value={sender} onChange={(e) => setSender(e.target.value)} placeholder='이름을 적어주세요' /> */}
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }} placeholder='메시지를 적어주세요' style={{width: "100%"}} />
        <button onClick={sendMessage} style={{border: "none", backgroundColor: "#ffeb33"}}>전송</button>
      </div>
    </div>


    <>
      <div className="상단바">
          <div className="상대프로필">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" alt="" />
          </div>
          <p className="상대이름">되네</p>
          <button className="채팅방메뉴">⁝</button>
      </div>

            <div className="채팅배경">
                <div className="채팅방_스크롤_확인_때문에_좀_복붙한거">
                    <p className="상대채팅">입력의 앞부분 1/2을 읽어 스택에 push한 후, 문자열의
                        길이가 짝수이면 뒷부분의 문자 1 개를 읽어서 pop한
                        문자와 비교하는 과정 반복</p>
                    <p className="상대채팅시간">어제 오전 06:30</p>

                    <p className="내채팅">입력의 앞부분 1/2을 읽어 스택에 push한 후, 문자열의
                        길이가 짝수이면 뒷부분의 문자 1 개를 읽어서 pop한
                        문자와 비교하는 과정 반복</p>
                    <p className="내채팅시간">어제 오전 08:30</p>

                </div>

                
            </div>
            <div className="하단바컨테이너">
                    <div className="하단바메뉴바"></div>
                    <div className="하단바채팅박스">
                        <img className="하단바버튼"src={`${process.env.PUBLIC_URL}/img/free-icon-gallery-833281.png`} alt=""/>
                        <input className="하단바진짜채팅박스" type="text"></input>
                        <img className="하단바버튼"src={`${process.env.PUBLIC_URL}/img/free-icon-send-4674417.png`} alt=""/>
                    </div>
                </div>
    </>
    </>
  );
}
