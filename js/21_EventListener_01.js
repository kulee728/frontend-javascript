
            //화면에 존재하는 키 모두 가져오기
            const keys = document.querySelectorAll(".key");
            //keydown > 키보드에서 키가 눌러지는 것을 말함
            document.addEventListener("keydown",function(e){
                let index;
                switch(e.key){
                    case 'q' : index=0;
                    break;
                    case 'w' : index=1;
                    break;
                    case 'e' : index=2;
                    break;
                    case 'r' : index=3;
                    break;
                    default:
                        return; //함수 종료
                }
            /*
                e : 이벤트 객체
                e.key : 입력된 키를 확인
            */
                keys[index].style.background ="blue";
                keys[index].style.color = "white";

            });

            document.addEventListener("keyup",function(e){
                let index;
                switch(e.key){
                    case 'q' : index=0;
                    break;
                    case 'w' : index=1;
                    break;
                    case 'e' : index=2;
                    break;
                    case 'r' : index=3;
                    break;
                    default:
                        return; //함수 종료
                }
            /*
                e : 이벤트 객체
                e.key : 입력된 키를 확인
            */
                keys[index].style.background ="white";
                keys[index].style.color = "black";

            });
