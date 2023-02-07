/*
[성별값]
name : gender
[색상값]
name : color
[사이즈값]
name : size
*/


//성별 체크박스 부분
//남성 여성 모두 체크시 전체체크박스도 체크상태로만들기
//전체 체크박스 체크시 남성 여성 모두 체크상태로 만들기
//전체 체크 상태에서 전체체크박스 클릭시 전부 체크해제상태로 만들기
let gendercheck = document.getElementsByName("gender"); // [전체체크박스, 남성체크박스, 여성체크박스]

gendercheck[0].addEventListener("click", function () {
    if (gendercheck[0].checked) {
        gendercheck[1].checked = true;
        gendercheck[2].checked = true;
    } else {
        gendercheck[1].checked = false;
        gendercheck[2].checked = false;
    }
})

gendercheck[1].addEventListener("click", function () {
    if (gendercheck[1].checked && gendercheck[2].checked) {
        gendercheck[0].checked = true;
    } else {
        gendercheck[0].checked = false;
    }
    if (gendercheck[0].checked) {

    }
})

gendercheck[2].addEventListener("click", function () {
    if (gendercheck[1].checked && gendercheck[2].checked) {
        gendercheck[0].checked = true;
    } else {
        gendercheck[0].checked = false;
    }
    if (gendercheck[0].checked) {

    }
})


//-----컬러 체크박스부분
let colorcheck = document.getElementsByName("color")//[전체컬러체크박스, 컬러1, 컬러2,...]

colorcheck[0].addEventListener("click", function () {
    if (colorcheck[0].checked) {
        colorcheck.forEach(function (item) {
            item.checked = true;
        })
    } else {
        colorcheck.forEach(function (item) {
            item.checked = false;
        })
    }
});

// 전체컬러체크박스{colorcheck[0]}제외한 컬러체크박스에 대한 이벤트추가
for (let index = 1; index < colorcheck.length; index++) {
    colorcheck[index].addEventListener("click", function () {
        let isCheckAll = true;
        for (let i = 1; i < colorcheck.length; i++) {
            isCheckAll = isCheckAll && colorcheck[i].checked;
        }//하나라도 체크되지않으면 checkall이 false가 됨

        if (isCheckAll) {
            colorcheck[0].checked = true;
        } else {
            colorcheck[0].checked = false;
        }
    });
}

//---가격체크박스부분
let pricecheck = document.getElementsByName("price");//[textbox최소값, textbox최대값, 체크박스1, 체크박스2,...]

/*
textbox 입력값 
숫자가 아닌값이오면 지우기 => 키보드입력을 멈췄을때 정규식/^\d+$/을 만족하지않으면 빈칸으로 초기화
어떤 입력값이라도 입력이 되면 체크박스에 체크되어있는 것들 전부 체크해제
*/
for (index = 0; index < 2; index++) {
    pricecheck[index].addEventListener("keyup", function () {
        let regExp = /^\d+$/;
        if (!regExp.test(this.value)) {
            this.value = "";
        }
        for (let i = 2; i < pricecheck.length; i++) {
            pricecheck[i].checked = false;
        }
    });
}

/*
checkbox 입력값
클릭이벤트가 발생하면 text입력값을 빈값으로 만듦
*/
for (index = 2; index < pricecheck.length; index++) {
    pricecheck[index].addEventListener("click", function () {
        pricecheck[0].value = "";
        pricecheck[1].value = "";
    })
}

//size 체크박스부분
//전체 체크박스에 대한 동작만 구현
let sizecheck = document.getElementsByName("size"); //[전체체크박스, 사이즈1, 사이즈2, ...]

sizecheck[0].addEventListener("click", function () {
    if (this.checked) {
        for (let i = 1; i < sizecheck.length; i++) {
            sizecheck[i].checked = true;
        }
    } else {
        for (let i = 1; i < sizecheck.length; i++) {
            sizecheck[i].checked = false;
        }
    }
});

// 초기화 버튼 이벤트
document.getElementById("reset-filter-btn").addEventListener("click", function () {
    clearFilter();
});


//X (나가기)버튼 이벤트
document.getElementById("exit-button").addEventListener("click",function(){
    document.getElementById("filter-screen").style.display = "none";
});


// 필터적용 버튼 동작
document.getElementById("submit-filter-btn").addEventListener("click",function(){
    document.getElementById("filter-screen").style.display = "none";
    doFiltering();
    sorting();
    makeItems();
    document.getElementById("numberOfItems").innerHTML = resultSet.length + "개의 상품";
});

//필터검색 버튼 동작
document.getElementById("filter-search").addEventListener("click", function(){
    document.getElementById("filter-screen").style.display = "block";
});

function clearFilter(){
    gendercheck.forEach(function (item) {
        item.checked = false;
    });
    colorcheck.forEach(function(item){
        item.checked = false;
    })
    pricecheck[0].value = "";
    pricecheck[1].value = "";
    for(let i = 2; i < pricecheck.length ; i++){
        pricecheck[i].checked = false;
    }

    sizecheck.forEach(function (item) {
        item.checked = false;
    });
}


