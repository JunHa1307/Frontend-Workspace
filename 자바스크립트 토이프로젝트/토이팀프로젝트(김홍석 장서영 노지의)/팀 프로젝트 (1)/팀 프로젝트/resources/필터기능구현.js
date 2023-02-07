//함수 배열에 담아 순차적으로 실행시키는 방법으로 진행
let kindcheck = document.getElementsByName("kinds"); // ["신발","스니커즈","샌들/슬라이드"]
let filterFarr = [
    function(item){ //신발, 스니커즈, 샌들/슬라이드인지에 따른 필터링 함수
        if(kindcheck[0].checked){
            return true;
        }else if(kindcheck[1].checked){
            if(item.distinct == "스니커즈"){
                return true;
            }
        }else if(kindcheck[2].checked){
            if(item.distinct == "샌들/슬라이드"){
                return true;
            }
        }
    },
    function (item) { // 성별 필터링 함수
        if (gendercheck[0].checked) {
            return true;
        } else if (gendercheck[1].checked) {
            if (item.male == true && item.female == false) {
                return true;
            }
        } else if (gendercheck[2].checked) {
            if (item.female == true && item.male == false) {
                return true;
            }
        } else {
            return true;
        }
    },

    function (item) { // 색상 필터링 함수
        let ischeckedany = false;
        for (let i = 0; i < colorcheck.length; i++) {
            ischeckedany = ischeckedany || colorcheck[i].checked;
        }
        if (!ischeckedany) {
            return true;
        } else if (colorcheck[0].checked) {
            return true;
        } else {
            let colorcheckarr = []; // 체크된 색상에 대한 논리값 배열
            for (let index = 1; index < colorcheck.length; index++) {
                colorcheckarr.push(colorcheck[index].checked);
            }
            let objColorarr = item.itemcolorarr();
            for (let index = 0; index < colorcheckarr.length; index++) {
                if (colorcheckarr[index] == true && objColorarr[index] == true) {
                    return true;
                }
            }

        }
    },

    function (item) {//가격 필터링 함수
        if (pricecheck[0].value != "" || pricecheck[1].value != "") {
            if(pricecheck[0].value != "" && pricecheck[1].value != ""){
                if (item.saleprice() >= pricecheck[0].value && item.saleprice() <= pricecheck[1].value) {
                    return true;
                } else {
                    return false;
                }

            }else if(pricecheck[0].value != ""){
                if (item.saleprice() >= pricecheck[0].value) {
                    return true;
                } else {
                    return false;
                }
            }else{
                if (item.saleprice() <= pricecheck[1].value) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            let ischeckedany = false;
            for (let i = 2; i < pricecheck.length; i++) {
                ischeckedany = ischeckedany || pricecheck[i].checked;
            }
            if (!ischeckedany) {
                return true;
            } else {
                let pricecheckarr = []; // 체크된 가격에 대한 논리값 배열
                for (let index = 2; index < pricecheck.length; index++) {
                    pricecheckarr.push(pricecheck[index].checked);
                }
                let objPriceArr = item.itemPriceArr();
                for (let index = 0; index < pricecheckarr.length; index++) {
                    if (pricecheckarr[index] == true && objPriceArr[index] == true) {
                        return true;
                    }
                }
            }

        }
    },

    function (item) {//사이즈 필터링 함수
        let ischeckedany = false;
        for (let i = 0; i < sizecheck.length; i++) {
            ischeckedany = ischeckedany || sizecheck[i].checked;
        }
        if (!ischeckedany) {
            return true;
        } else if (sizecheck[0].checked) {
            return true;
        } else {
            let sizecheckarr = []; // 체크된 색상에 대한 논리값 배열
            for (let index = 1; index < sizecheck.length; index++) {
                sizecheckarr.push(sizecheck[index].checked);
            }
            let objSizearr = item.itemSizeArr();
            for (let index = 0; index < sizecheckarr.length; index++) {
                if (sizecheckarr[index] == true && objSizearr[index] == true) {
                    return true;
                }
            }
        }
    }
];

function doFiltering() { // 필터 함수 순차적으로 실행
    resultSet = itemarray;
    filterFarr.forEach(function (item) {
        resultSet = resultSet.filter(item);
    })
}