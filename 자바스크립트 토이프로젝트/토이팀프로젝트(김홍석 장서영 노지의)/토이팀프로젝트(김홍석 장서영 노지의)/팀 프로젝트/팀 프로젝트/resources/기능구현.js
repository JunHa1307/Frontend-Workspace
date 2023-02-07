/**
 * 동적으로 불러온 html요소에 이벤트부여
 * 처음 페이지 로딩된후, 필터의 결과가 정해진후 매번 실행되어야함
 */
function makeEvent() {
    $(".container-item>img").each(function (index, item) { //호버이벤트
        $(item).mouseenter(function () {
            $(this).attr("src", resultSet[index].imgs[1]);
        });
        $(item).mouseout(function () {
            $(this).attr("src", resultSet[index].imgs[0]);
        });

    });
    $(".container-item").each(function (index, item) {//클릭시 해당 웹사이트 새창에 띄우기, 클릭된 객체가 뭔지 seletedItem변수에 담기
        $(item).click(function () {
            selectedItem = resultSet[index];
            // window.open(resultSet[index].url);
            window.removeEventListener("scroll", topButtonRemove);
            window.removeEventListener("scroll", bottomButtonRemove);
            상품판매화면구현();
        })

    });
}

/**
 * 상품목록 전부 없애기
 * 필터처리된 html요소를 생성하기전 이전 필터결과물을 삭제하는데 사용 
 */
function clearItemBox() {
    $("#container-items *").remove();
}

/**
 * 정렬을 위한 빈 item html요소생성
 */
function emptyitem() {
    let emptyitem = document.createElement("div");
    emptyitem.className = "container-item"
    document.getElementById("container-items").appendChild(emptyitem);
}

/**
 * 현재 상품목록을 전부 없앤후 필터처리된 객체배열을 순차적으로 html요소로 생성 및 호버이벤트 부여
 * 필터처리된 객체배열길이의 4로 나눈 나머지가 2,3일때 정렬을 위한 내용이 없는 html 요소 추가
 */
function makeItems() {
    clearItemBox();
    resultSet.forEach(function (item) {
        item.createHTML();
    });
    makeEvent();
    if (resultSet.length % 4 == 2) { //내용없는 html요소 2개 추가
        emptyitem();
        emptyitem();
    } else if (resultSet.length % 4 == 3) { //내용없는 html요소 1개 추가
        emptyitem();
    }
}

function 같은모델명요소생성() {
    let coloritems = itemarray.filter(function (item) {
        if (item.name.indexOf(selectedItem.name.substring(0, 5)) != -1) {
            return true;
        }
    });
    coloritems.forEach(function (item) {
        let divtag = document.createElement("div");
        divtag.className = "option-color";
        let colorimg = document.createElement("img");
        colorimg.src = item.imgs[0];
        colorimg.width = 110;
        colorimg.height = 110;
        divtag.appendChild(colorimg);
        let divtag1 = document.createElement("div");
        divtag1.className = "option-color";
        let colorimg1 = document.createElement("img");
        colorimg1.src = item.imgs[0];
        colorimg1.width = 110;
        colorimg1.height = 110;
        divtag1.appendChild(colorimg1);
        $("#option-color").append(divtag1);
        $("#option-color1").append(divtag);
    })


}
function 색상텍스트요소생성() {
    let colortext = "";
    if (selectedItem.white) {
        colortext += "화이트 "
    }
    if (selectedItem.baisy) {
        colortext += "베이지 "
    }
    if (selectedItem.pink) {
        colortext += "핑크 "
    }
    if (selectedItem.red) {
        colortext += "레드 "
    }
    if (selectedItem.gray) {
        colortext += "그레이 "
    }
    if (selectedItem.purple) {
        colortext += "퍼플 "
    }
    if (selectedItem.green) {
        colortext += "그린 "
    }
    if (selectedItem.blue) {
        colortext += "블루 "
    }
    if (selectedItem.navy) {
        colortext += "네이비 "
    }
    if (selectedItem.black) {
        colortext += "블랙 "
    }
    document.getElementById("item-colors").innerHTML = colortext;
}

function 할인가없을때요소삭제() {
    if (selectedItem.sale == 0) {
        $("#original-price").html(" ");
        $("#saleratio").html(" ");
    }
}
function 사이즈요소생성() {
    for (index = selectedItem.minsize; index <= selectedItem.maxsize; index += 10) {
        let createlitag = document.createElement("li");
        let createtext = document.createTextNode(index);
        createlitag.append(createtext);
        
        $("#sizeselect-top>ul").append(createlitag);

        let createlitag2 = document.createElement("li");
        let createtext2 = document.createTextNode(index);
        createlitag2.append(createtext2);
        $("#sizeselect-option>ul").append(createlitag2);
    }
}
function 추천상품요소생성() {
    let colorbtn = document.getElementsByName("color");//[input#All, input#white, input#lightpink, input#blue, input#mint, input#gray, input#lightgray]
    let colorresultset = [];
     
    for (let index = 0; index < colorbtn.length; index++) {
        if (index == 0) { // 랜덤한 객체 10개 요소생성
            colorbtn[index].addEventListener("click", function () {
                for(let index=0; index<10;index++){
                    $("#track>div>div>div>div").eq(index).html(" ");
                }  
                for (let i = 0; i < 10; i++) {
                    itemarray[parseInt(Math.random() * 47)].createSlidenode(i);
                }

            })
        };
        if (index == 1) {
            colorbtn[index].addEventListener("click", function () {
                for(let index=0; index<10;index++){
                    $("#track>div>div>div>div").eq(index).html(" ");
                }  
                colorresultset = itemarray.filter(function (item) {
                    if (item.white) {
                        return true;
                    }
                });
                for (let i = 0; i < colorresultset.length; i++) {
                    colorresultset[parseInt(Math.random()*colorresultset.length)].createSlidenode(i);
                }
            });
        }

        if (index == 2) {
            colorbtn[index].addEventListener("click", function () {
                for(let index=0; index<10;index++){
                    $("#track>div>div>div>div").eq(index).html(" ");
                }  
                colorresultset = itemarray.filter(function (item) {
                    if (item.pink || item.red) {
                        return true;
                    }
                });
                for (let i = 0; i < colorresultset.length; i++) {
                    colorresultset[parseInt(Math.random()*colorresultset.length)].createSlidenode(i);
                }
            });
        }

        if (index == 3) {
            colorbtn[index].addEventListener("click", function () {
                for(let index=0; index<10;index++){
                    $("#track>div>div>div>div").eq(index).html(" ");
                }  
                colorresultset = itemarray.filter(function (item) {
                    if (item.navy) {
                        return true;
                    }
                });
                for (let i = 0; i < colorresultset.length; i++) {
                    colorresultset[parseInt(Math.random()*colorresultset.length)].createSlidenode(i);
                }
            });    
        }

        if (index == 4) {
            colorbtn[index].addEventListener("click", function () {
                for(let index=0; index<10;index++){
                    $("#track>div>div>div>div").eq(index).html(" ");
                }  
                colorresultset = itemarray.filter(function (item) {
                    if (item.blue) {
                        return true;
                    }
                });
                for (let i = 0; i < colorresultset.length; i++) {
                    colorresultset[parseInt(Math.random()*colorresultset.length)].createSlidenode(i);
                }
            });    
        }

        if (index == 5) {
            colorbtn[index].addEventListener("click", function () {
                for(let index=0; index<10;index++){
                    $("#track>div>div>div>div").eq(index).html(" ");
                }  
                colorresultset = itemarray.filter(function (item) {
                    if (item.gray) {
                        return true;
                    }
                });
                for (let i = 0; i < colorresultset.length; i++) {
                    colorresultset[parseInt(Math.random()*colorresultset.length)].createSlidenode(i);
                }
            });    
        }

        if (index == 6) {
            colorbtn[index].addEventListener("click", function () {
                for(let index=0; index<10;index++){
                    $("#track>div>div>div>div").eq(index).html(" ");
                }  
                colorresultset = itemarray.filter(function (item) {
                    if (item.black) {
                        return true;
                    }
                });
                for (let i = 0; i < colorresultset.length; i++) {
                    colorresultset[parseInt(Math.random()*colorresultset.length)].createSlidenode(i);
                }
            });    
        }
    }
}
/*

<div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 321px;" tabindex="0">
                        <img src="https://img.prospecs.com/prod/PS0MS20/PS0MS20S613/PS0MS20S613_01.jpg/dims/resizef/1024x1024/optimize">
                        <p style="font-size: 20px;">JQ 103</p>
                        <p style="font-size: 20px; font-weight: 500;">89000</p>
                    </div>
*/

//검색기능구현
function searchByBtn(){
    if(document.getElementById("search").value !=""){
        resultSet = itemarray.filter(function(item){
            if(item.name.indexOf(document.getElementById("search").value) != -1){
                return true;
            }
        });
        clearFilter();
        makeItems();
        sorting();
        document.getElementById("numberOfItems").innerHTML = resultSet.length + "개의 상품";
        document.getElementById("kind3").checked = true;
    }
}

function searchKeyBoard(){
    if (window.event.keyCode == 13) {
        if(document.getElementById("search").value !=""){
            resultSet = itemarray.filter(function(item){
                if(item.name.indexOf(document.getElementById("search").value) != -1){
                    return true;
                }
            });
            clearFilter();
            sorting();
            makeItems(); 
            document.getElementById("numberOfItems").innerHTML = resultSet.length + "개의 상품";
            document.getElementById("kind3").checked = true;
        }
    }
}




