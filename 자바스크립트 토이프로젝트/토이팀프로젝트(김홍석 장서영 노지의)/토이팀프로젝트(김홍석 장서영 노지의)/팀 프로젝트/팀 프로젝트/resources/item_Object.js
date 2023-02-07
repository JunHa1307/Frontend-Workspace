

/**
 * 
 * @param {*} category  카테고리명(ex: "LIFESTYLE","온라인단독특가",..)
 * @param {*} name 상품명
 * @param {*} price 상품가격
 * @param {*} sale 할인율
 * @param {*} minsize 최소사이즈
 * @param {*} maxsize 최대사이즈
 * @param {*} imgs 이미지들의 경로를 담은 배열
 * @param {*} url 해당 상품에 대한 판매 웹페이지경로
 * @param {*} iframe 해당 상품에 대한 리뷰 웹페이지경로
 * @param {*} distinct 상품의 종류구분
 * @param {*} date 등록일자
 * @param {*} saleRate 판매량
 * @param {*} male 남성전용여부
 * @param {*} female 여성전용여부
 * @param {*} coupon 쿠폰유무
 * @param {*} white 해당색 포함여부
 * @param {*} orange 해당색 포함여부
 * @param {*} baisy 해당색 포함여부
 * @param {*} pink 해당색 포함여부
 * @param {*} red 해당색 포함여부
 * @param {*} gray 해당색 포함여부
 * @param {*} purple 해당색 포함여부
 * @param {*} green 해당색 포함여부
 * @param {*} blue 해당색 포함여부
 * @param {*} navy 해당색 포함여부
 * @param {*} black 해당색 포함여부
 * @param {*} point 객체설명에 대한 요소
 */
function Item(category = " ", name = "", price = 0, sale = 0, minsize = 0, maxsize = 0, imgs = [], url = "", iframe = "", distinct = "", date = new Date(), saleRate = 0, male = false, female = false, coupon = false, white = false, orange = false, baisy = false, pink = false, red = false, gray = false, purple = false, green = false, blue = false, navy = false, black = false, point = "") {
    this.category = category;
    this.name = name;
    this.price = price;
    this.sale = sale;
    this.minsize = minsize;
    this.maxsize = maxsize;
    this.imgs = imgs;
    this.url = url;
    this.iframe = iframe;
    this.distinct = distinct;
    this.date = date;
    this.saleRate = saleRate;
    this.male = male;
    this.female = female;
    this.coupon = coupon;
    this.white = white;
    this.orange = orange;
    this.baisy = baisy;
    this.pink = pink;
    this.red = red;
    this.gray = gray;
    this.purple = purple;
    this.green = green;
    this.blue = blue;
    this.navy = navy;
    this.black = black;
    this.point = point;

    /**
     * 
     * @returns 해당 객체가 가진 색상논리값을 배열로 반환
     */
    this.itemcolorarr = function () {
        let arr = [];
        arr.push(this.white);
        arr.push(this.orange);
        arr.push(this.baisy);
        arr.push(this.pink);
        arr.push(this.red);
        arr.push(this.gray);
        arr.push(this.purple);
        arr.push(this.green);
        arr.push(this.blue);
        arr.push(this.navy);
        arr.push(this.black);
        return arr;
    }

    /**
     * 필터링될 사이즈의 논리값을 배열로 반환
     */
    this.itemSizeArr = function () {
        let arr = [];
        let sizearr = [180, 190, 200, 205, 210, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290];
        for (let i = 0; i < sizearr.length; i++) {
            arr.push(this.isSize(sizearr[i]));
        }
        return arr;
    }

    /**
     * 
     * @param {*} size : 필터체크박스의 사이즈
     * @returns 그사이즈의 객체(신발사이즈)가 있는지 여부를 반환
     */
    this.isSize = function (size) {
        if (size >= this.minsize && size < this.maxsize) {
            return true;
        } else {
            return false;
        }

    }

    /**
     * 
     * @returns 체크박스들의 최소최대가격에 대한 각각의 조건만족 여부를 논리배열로 담아서 반환
     */
    this.itemPriceArr = function () {
        let arr = [];
        let priceArr = [[0, 30000], [30000, 50000], [50000, 100000], [100000, 200000], [200000, 300000], [300000, 1000000]];
        for (let i = 0; i < priceArr.length; i++) {
            arr.push(this.isPrice(priceArr[i][0], priceArr[i][1]));
        }
        return arr;
    }

    /**
     * 
     * @param {*} minprice 필터창 체크박스의 최소가격
     * @param {*} maxprice 필터창 체크박스의 최대가격
     * @returns 이객체가 그사이에 가격인지 아닌지를 반환
     */
    this.isPrice = function (minprice, maxprice) {
        if (this.saleprice() >= minprice && this.saleprice() <= maxprice) {
            return true;
        } else {
            return false;
        }
    }

    /* <div class="container-item" data-aos="fade-up" data-aos-anchor-placement="center-center">
    <img src="this.img" alt="this.name 이미지" width="380" height="380">
    <div class="item-category">this.category</div>
    <div class="item-name">this.name</div>
    <div class="item-price">this.price</div>
    <div class="item-sale-container">
        <div class="item-sale">this.sale%</div>
        <div class="item-sale-price">this.saleprice</div>
    </div>
    <div class="item-gender-coupon">
        <div class="item-gender-m">남</div>
        <div class="item-gender-f">여</div>
        <div class="item-coupon">쿠폰</div>
    </div>
 </div>*/
    /**
     *필요한 HTML요소끼리 연결후 해당 item div하위 요소로 연결
     */
    this.createHTML = function () {
        let completeHTML = document.createElement("div");
        completeHTML.className = "container-item";
        let AOSarr = ["fade-up", "fade-down", "zoom-in", "zoom-out", "flip-left", "flip-up"]
        completeHTML.setAttribute("data-aos", AOSarr[0]);
        // completeHTML.setAttribute("data-aos",AOSarr[parseInt(Math.random()*AOSarr.length)]);
        completeHTML.setAttribute("data-aos-duration", 2000);
        // completeHTML.setAttribute("data-aos-easing","ease-out-cubic");

        $(completeHTML).append($(this.imgHTML()))
            .append($(this.categoryHTML()))
            .append($(this.nameHTML()))
            .append($(this.priceHTML()))
            .append($(this.saleHTML()))
            .append($(this.genderCouponHTML()));
        document.getElementById("container-items").appendChild(completeHTML);
    };
    /**
     * 카테고리html요소 생성
     */
    this.categoryHTML = function () {
        let eletag = document.createElement("div");
        eletag.className = "item-category";
        let textnode = document.createTextNode(this.category);
        eletag.appendChild(textnode);
        return eletag;
    };
    /**
     * 이미지태그요소 생성
     */
    this.imgHTML = function () {
        let imgtag = document.createElement("img");
        imgtag.src = this.imgs[0];
        imgtag.alt = this.name + "이미지입니다.";
        imgtag.width = "380";
        imgtag.height = "380";
        return imgtag;
    };
    /**
     * 상품명html요소생성
     */
    this.nameHTML = function () {
        let nametag = document.createElement("div");
        nametag.className = "item-name";
        let textNode = document.createTextNode(this.name);
        nametag.appendChild(textNode);
        return nametag;
    };
    /**
     * 상품정가html요소생성
     */
    this.priceHTML = function () {
        let pricetag = document.createElement("div");
        pricetag.className = "item-price";
        if (this.sale != 0) {
            let textNode = document.createTextNode(this.price);
            pricetag.appendChild(textNode);
        }
        return pricetag;
    };

    /**
     * @returns 할인율적용 할인가 반환
     */
    this.saleprice = function () { return this.price * (100 - this.sale) / 100; };

    /**
     * 할인가html 요소 생성
     */
    this.saleHTML = function () {
        let containertag = document.createElement("div");
        containertag.className = "item-sale-container";
        let saletag = document.createElement("div");

        saletag.className = "item-sale";
        saletag.appendChild(document.createTextNode(this.sale + "%"));
        let salepricetag = document.createElement("div");
        salepricetag.className = "item-sale-price";
        salepricetag.append(document.createTextNode(this.saleprice() + "원 "));
        if (this.sale != 0) {
            $(containertag).append($(saletag))
                .append($(salepricetag));
        } else {
            $(containertag).append($(salepricetag));
        }
        return containertag;
    };
    /**
     * 성별전용여부에 따른 html요소 생성
     */
    this.genderCouponHTML = function () {
        let eletag = document.createElement("div");
        eletag.className = "item-gender-coupon"
        if (this.male) {
            let maletag = document.createElement("div");
            maletag.className = "item-gender-m";
            let textNode = document.createTextNode("남");
            maletag.appendChild(textNode);
            $(eletag).append($(maletag));
        }
        if (this.female) {
            let femaletag = document.createElement("div");
            femaletag.className = "item-gender-f";
            let textNode = document.createTextNode("여");
            femaletag.appendChild(textNode);
            $(eletag).append($(femaletag));
        }
        if (this.coupon) {
            let coupontag = document.createElement("div");
            coupontag.className = "item-coupon";
            let textNode = document.createTextNode("쿠폰");
            coupontag.appendChild(textNode);
            $(eletag).append($(coupontag));
        }
        return eletag;
    };



    /*
     <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 321px;" tabindex="0">
                        <img src="https://img.prospecs.com/prod/PS0MS20/PS0MS20S613/PS0MS20S613_01.jpg/dims/resizef/1024x1024/optimize">
                        <p style="font-size: 20px;">(리오더)스택스 TR 101(N)</p>
                        <p style="font-size: 20px; font-weight: 500;">69000</p>
                    </div>
      
      
     */

    this.createSlidenode = function (index) {
        // let maintag = document.createElement("div");
        // maintag.className = "slide-slide slick-active";
        // maintag.setAttribute("data-slick-index",index);
        // maintag.setAttribute("aria-hidden","false");
        // maintag.setAttribute("style","width: 321px;")
        // maintag.setAttribute("tabindex","0");
        let imgtag = document.createElement("img");
        imgtag.src = this.imgs[0];
        let nametext = document.createElement("p");
        nametext.setAttribute("style", "font-size: 20px;");
        let nametextnode = document.createTextNode(this.name);
        nametext.appendChild(nametextnode);
        let pricetext = document.createElement("p");
        pricetext.setAttribute("style", "font-size: 20px;");
        let pricetextnode = document.createTextNode(this.saleprice());
        pricetext.appendChild(pricetextnode);
        
        $("#track>div>div>div>div").eq(index).append(imgtag)
            .append(nametext)
            .append(pricetext);
    }



}



