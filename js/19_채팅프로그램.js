
function sendMessage(){
    const inputbox = document.getElementById("user-input");
    const message = inputbox.value.trim(); //trim : 공백제거. 공백은 보내지 못하게 하자
    //만약 빈칸으로 보낼 경우 방지
    if(message=="") return;
    //return 추가

    메세지보이기(message,"user");
    inputbox.value = ""; //input 값에 "" 새로운 값으로 ""를 넣어서 메세지내용 초기화
    
    setTimeout(() =>{
        메세지보이기("저는 채팅 봇입니다.","bot");
    },1000);

}
function 메세지보이기(message,sender){
    const chatbox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    
    messageElement.classList.add("message",sender + "-message");
    messageElement.textContent = message; //메세지 보이기
    chatbox.appendChild(messageElement);
}

