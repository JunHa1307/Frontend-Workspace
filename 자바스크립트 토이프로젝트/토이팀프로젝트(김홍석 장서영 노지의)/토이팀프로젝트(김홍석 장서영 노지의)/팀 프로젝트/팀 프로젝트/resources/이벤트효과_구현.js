function bottomButtonRemove() {

    if (scrollY >= document.body.scrollHeight - 4000) {
        document.getElementById("go-bottom-btn").style.visibility = "hidden";
        document.getElementById("go-bottom-btn").style.opacity = "0%";
    } else {
        document.getElementById("go-bottom-btn").style.visibility = "visible";
        document.getElementById("go-bottom-btn").style.opacity = "100%";
    }

}

function topButtonRemove() {

    if (scrollY < 2000) {
        document.getElementById("go-top-btn").style.visibility = "hidden";
        document.getElementById("go-top-btn").style.opacity = "0%";
    } else {
        document.getElementById("go-top-btn").style.visibility = "visible";
        document.getElementById("go-top-btn").style.opacity = "100%";
    }

}

/*버튼 클릭시 페이지 최상단으로 이동 */
function 버튼이벤트부여() {
    document.getElementById("go-top-btn").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });


    /*특정 y축에 도달하면 최상단으로 옮겨주는 버튼 보이기/안보이게하기*/
    window.addEventListener("scroll", topButtonRemove);

    /*버튼 클릭시 페이지 최하단으로 이동 */
    document.getElementById("go-bottom-btn").addEventListener("click", function () {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });



    /*특정 y축에 도달하면 최하단으로 옮겨주는 버튼 보이기/안보이게하기*/
    window.addEventListener("scroll",bottomButtonRemove);
}

버튼이벤트부여();