messageDisplay(
    "안녕하세요, KH 상담 봇 입니다." 
    +"원하시는 메뉴를 입력하세요.","bot"
)

function sendMessage(){
    const userInputBox = document.getElementById("user-input");
    const message = userInputBox.value.trim();
    if(message=="") return;

    messageDisplay(message,"user");
    userInputBox.value = "";
    setTimeout(() =>{
        messageDisplay("저는 채팅 봇입니다.","bot");
    },1000);
}
function messageDisplay(message,sender){
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");

    messageElement.classList.add("message",sender + "-message");
    //클래스에 .messsage 랑 .user-message가 추가될 것이다
    messageElement.textContent = message; //메세지 보이기
    chatBox.appendChild(messageElement);
}
function chatBoxToggle(){
    const chatContainer = document.getElementById("chat-container");
    if(chatContainer.style.display=='none' ||chatContainer.style.display==''){
        chatContainer.style.display='flex';
        document.getElementById("chat-box-toggle").textContent = "채팅 끝내기";
    }
    else{
        chatContainer.style.display='none';
        document.getElementById("chat-box-toggle").textContent = "채팅 시작하기";
    }
}