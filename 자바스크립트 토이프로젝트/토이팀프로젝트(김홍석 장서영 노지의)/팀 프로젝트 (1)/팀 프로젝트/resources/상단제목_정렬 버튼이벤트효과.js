let kindradio = document.getElementsByName("kinds"); //[신발라디오버튼, 스니커즈 라디오 버튼,샌들/슬라이드 라디오버튼]
let labelradio = [document.getElementById("container-kinds-list1"), document.getElementById("container-kinds-list2"), document.getElementById("container-kinds-list3")];//[신발,스니커드,샌들/슬라이드 텍스트]
labelradio.forEach(function (item, index) {
    item.addEventListener("click", function () {
        kindradio[index].checked = true;
        doFiltering();
        sorting();
        makeItems();
        document.getElementById("numberOfItems").innerHTML = resultSet.length + "개의 상품";
    })
});

document.getElementById("sorting").addEventListener("click", function () {
    let sortbutton = document.getElementById("sort-list");
    if (sortbutton.style.display == "") {
        sortbutton.style.display = "flex";
    } else {
        sortbutton.style.display = "";
    }
});

let sortradios = document.getElementsByName("sort"); //[최근등록순,판매순, 높은가격순, 낮은가격순]
let sortlist = document.getElementsByClassName("sort-list"); //[최근등록순,판매순, 높은가격순, 낮은가격순]

for (let index = 0; index < sortlist.length; index++) {
    sortlist[index].addEventListener("click", function () {
        sortradios[index].checked = true;
        document.getElementById("sort-list").style.display = "";
        if (sortradios[0].checked) {
            document.getElementById("sorting").innerHTML = "최근등록순";
        } else if (sortradios[1].checked) {
            document.getElementById("sorting").innerHTML = "판매순";
        } else if (sortradios[2].checked) {
            document.getElementById("sorting").innerHTML = "높은가격순";
        } else {
            document.getElementById("sorting").innerHTML = "낮은가격순";
        }
        doFiltering();
        sorting();
        makeItems();
    })
};

function sorting() { // 정렬기능
    if (sortradios[0].checked) {
        resultSet.sort((prev, cur) => {
            if (prev.date < cur.date) {
                return 1;
            }
            if (prev.date > cur.date) {
                return -1;
            }
        });
    } else if (sortradios[1].checked) {
        resultSet.sort((prev, cur) => {
            if (prev.saleRate < cur.saleRate) {
                return 1;
            }
            if (prev.saleRate > cur.saleRate) {
                return -1;
            }
        });
    } else if (sortradios[2].checked) {
        resultSet.sort((prev, cur) => {
            if (prev.saleprice() < cur.saleprice()) {
                return 1;
            }
            if (prev.saleprice() > cur.saleprice()) {
                return -1;
            }
        });
    } else {
        resultSet.sort((prev, cur) => {
            if (prev.saleprice() > cur.saleprice()) {
                return 1;
            }
            if (prev.saleprice() < cur.saleprice()) {
                return -1;
            }
        });
    }
}


