
const keys = document.querySelectorAll(".key");
//keydown > 키보드에서 키가 눌러지는 것을 말함
function keyDownfunction(e){
    let index;
    switch(e.key){
        case 'a' : index=0;
        break;
        case 's' : index=1;
        break;
        case 'd' : index=2;
        break;
        case 'f' : index=3;
        break;
        default:
            return; //함수 종료
    }
    keys[index].style.background ="blue";
    keys[index].style.color = "white";
}

function keyUpfunction(e){
    let index;
    switch(e.key){
        case 'a' : index=0;
        break;
        case 's' : index=1;
        break;
        case 'd' : index=2;
        break;
        case 'f' : index=3;
        break;
        default:
            return; //함수 종료
    }
    keys[index].style.background ="white";
    keys[index].style.color = "black";
}
document.addEventListener("keydown",keyDownfunction);
document.addEventListener("keyup",keyUpfunction);
