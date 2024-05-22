function f1(){
    //자동으로 대문자 입력시 변환해주는 함수를 만들어주자
        const inputBoxEnglishName = document.getElementById("inputBox-englishName");
        inputBoxEnglishName.value = inputBoxEnglishName.value.toUpperCase();
}

function keyPressHandler(e){
    //만약에 엔터 키를 눌렀을 때
    if(e.key==='Enter'){
        alert("입력한 내용이 전달되었습니다.")

    }
}