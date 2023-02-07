function change2021() {
    default2021();
    document.querySelector(".header-navi>a").setAttribute("href","삼성디자인-main.html");
    document.querySelectorAll(".header_a")[0].setAttribute("href","our stories_1.html");
    document.querySelectorAll(".header_a")[1].setAttribute("href","about us_1.html");
    document.querySelectorAll(".header_a")[2].setAttribute("href","career_1.html");
    document.querySelectorAll(".header_a")[3].setAttribute("href","news_1.html");
    document.querySelectorAll(".footer_a")[2].setAttribute("href","our stories_1.html");
    document.querySelectorAll(".footer_a")[3].setAttribute("href","about us_1.html");
    document.querySelectorAll(".footer_a")[4].setAttribute("href","career_1.html");
    document.querySelectorAll(".footer_a")[5].setAttribute("href","news_1.html");
    for(let i = 0; i < 6; i++){
        header_b = document.querySelectorAll(".header_b");
        header_b[i].setAttribute("href",`삼성디자인-main.html#toggle_${i}`);
        if(i == 5){
            header_b[i].setAttribute("href",`삼성디자인-main.html#toggle_0`);
        }
    }
    document.querySelector(".image").innerHTML =
        `<img src="resources/image/2021_01.jpg" style="opacity: 1;">
        <img src="resources/image/2021_02.jpg">
        <img src="resources/image/2021_03.jpg">
        <img src="resources/image/2021_04.jpg">
        <img src="resources/image/2021_05.jpg">`;
    document.querySelector("#lthumb1").innerHTML =
        `<img src="resources/image/001_2020-QLED-8K-VIS_276x276.png">
        <b>2020 QLED 8K<br>Visual Identity<br>System</b>
        <div class="content_title">GOOD DESIGN</div>
        <p id="lthumb_p1">QLED 8K TV 모델 특유의 화려함을 컬러, 패턴, 사진 등으로 구현한<br> Visual Identity System</p>`;
    document.querySelector("#lthumb2").innerHTML =
        `<img src="resources/image/002_2021-International-Womens-Day-Social-Campaign-with-MZ-Co-Creator_276x276.png">
        <b>2021 International<br>Women’s Day Social<br>Campaign</b>
        <div class="content_title">IF</div>
        <p id="lthumb_p2">QMutual Respect, Passion, Allyship 세 가지 키워드를 바탕으로 한 국제<br>여성의 날 기념 캠페인</p>`;
    document.querySelector("#lthumb3").innerHTML =
        `<img src="resources/image/003_5G-Network-Design-Identity-3.0_276x276.png">
        <b>5G Network<br>esign Identity<br>3.0</b>
        <div class="content_title">GOOD DESIGN</div>
        <p id="lthumb_p3">여러 장비를 하나로 통합하여 환경 훼손을 줄이면서도 도심 속 설치 환경을<br>고려한 디자인</p>`;
    document.querySelector("#lthumb4").innerHTML =
        `<img src="resources/image/004_5G-nod-Solution_276x276.png">
        <b>5G Node<br>Solution</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p id="lthumb_p4">5G 기지국 설치 최소화를 위해 IAB-MT를 통해 5G 네트워크 스팟을<br>구축하는 통신 기기</p>`;
    document.querySelector("#lthumb5").innerHTML =
        `<img src="resources/image/005_5G-Station_276x276.png">
        <b>5G Station<br>(IDU & ODU)</b>
        <div class="content_title">IDEA</div>
        <p id="lthumb_p5">5G 환경에서 사용하는 옥내외용 CPE로 공예적 감성을 지닌 디자인</p>`;
    document.querySelector("#lthumb6").innerHTML =
        `<img src="resources/image/006_AR9500T-RAC-SERIES_276x276.png">
        <b>AR9500T<br>RAC Series</b>
        <div class="content_title">IF</div>
        <p id="lthumb_p6">기존 대비 더 슬림해진 사이즈로 벽에 밀착이 가능해 공간 속 아름답게<br>스며드는 룸 에어컨 디자인</p>`;
    document.querySelector("#lthumb7").innerHTML =
        `<img src="resources/image/007_IDEAGD_AW5100AM_276x276.png">
        <b>AW5100AM</b>
        <div class="content_title">IDEA·IF</div>
        <p id="lthumb_p7">실외기 없이 창문에 직접 설치하여 사용하는 창문형 룸 에어컨으로 간결한<br>플랫 디자인</p>`;
    document.querySelector("#lthumb8").innerHTML =
        `<img src="resources/image/008_BESPOKE-4-Door-Flex-Refrigerator_276x276.png">
        <b>BESPOKE<br>4-Door Flex<br>Refrigerator</b>
        <div class="content_title">IDEA</div>
        <p id="lthumb_p8">정수기를 내부로 이동시킨 Beverage Center를 적용, 위생과 사용<br>편의성을 향상시킨 냉장고</p>`;
    document.querySelector("#lthumb9").innerHTML =
        `<img src="resources/image/009_iFIDEAGD_BESPOKE-Air-Purifier-AX9500N_276x276.png">
        <b>BESPOKE Air<br>Purifier AX9500N</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p id="lthumb_p9">라이프스타일과 공간의 성격에 맞춰 전면 패널을 선택할 수 있는 디자인</p>`;
    document.querySelector("#lthumb10").innerHTML =
        `<img src="resources/image/010_Bespoke-cube-air-purifier-UX_276x276.png">
        <b>BESPOKE<br>Air Purifier UX</b>
        <div class="content_title">GOOD DESIGN</div>
        <p id="lthumb_p10">사용자 관여를 최소화 하면서도 직관적이고 감성적으로 정보를 전달하는<br>UX 디자인</p>`;
    document.querySelector("#lthumb11").innerHTML =
        `<img src="resources/image/011_BESPOKE-AirDresser_276x276.png">
        <b>BESPOKE<br>AirDresser UX</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p11">복잡한 요소를 줄인 UX로 통합적 의류 관리 경험을 제공하여 확장된<br>사용성 제공</p>`;
    document.querySelector("#lthumb12").innerHTML =
        `<img src="resources/image/012_BESPOKE-CITY-COLOUR-EDITION_276x276.png">
        <b>BESPOKE<br>Colour<br>Edition</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p12">스톡홀름, 베를린, 서울에서 영감을 받은 BESPOKE 컬러 시리즈</p>`;
    document.querySelector("#lthumb13").innerHTML =
        `<img src="resources/image/013_BESPOKE-CUBE-refrigerator_276x276.png">
        <b>BESPOKE<br>Cube<br>Refrigerator</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p id="lthumb_p13">다양한 공간과 어울리는 오브제 스타일의 디자인을 지닌 컴팩트한 모듈형<br>냉장고</p>`;
    document.querySelector("#lthumb14").innerHTML =
        `<img src="resources/image/014_BESPOKE-Dishwasher_276x276.png">
        <b>BESPOKE<br>Dishwasher</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p14">다양한 사용자의 개성을 드러낼 수 있도록 일곱가지 도어 패널 옵션을<br>제공하는 식기세척기</p>`;
    document.querySelector("#lthumb15").innerHTML =
        `<img src="resources/image/015_BESPOKE-Induction-UX_276x276.png">
        <b>BESPOKE<br>Induction UX</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p15">LCD 디스플레이와 몇가지 버튼으로 디자인을 정리하고 대화형 알림창을<br>제공, 심미성과 사용성 증대</p>`;
    document.querySelector("#lthumb16").innerHTML =
        `<img src="resources/image/016_BESPOKE-jet_276x276.png">
        <b>BESPOKE Jet</b>
        <div class="content_title">IF</div>
        <p id="lthumb_p16">청정 스테이션에 슬림한 버티컬 마이크로 패턴을 접목, 주변 환경과<br>조화로운 디자인</p>`;
    document.querySelector("#lthumb17").innerHTML =
        `<img src="resources/image/017_BESPOKE-Jet-Bot-AI_276x276.png">
        <b>BESPOKE<br>Jet Bot AI</b>
        <div class="content_title">GOOD DESIGN</div>
        <p id="lthumb_p17">기본 도형인 원통과 삼각형 조합의 외관 디자인으로 어떤 인테리어에도<br>조화로운 디자인</p>`;
    document.querySelector("#lthumb18").innerHTML =
        `<img src="resources/image/018_-BESPOKE-Jet-Bot-AI-UX_276x276.png">
        <b>BESPOKE<br>Jet Bot AI UX</b>
        <div class="content_title">IDEA</div>
        <p id="lthumb_p18">AI 자율주행으로 집 구조와 가전, 가구를 인식하고, 시간이 지날수록<br>효율적으로 청소해주는 로봇청소기</p>`;
    document.querySelector("#lthumb19").innerHTML =
        `<img src="resources/image/019_iFGD_BESPOKE-Kitchen-Visual-Identity_276x276.png">
        <b>BESPOKE<br>Kitchen Visual<br>Identity</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p19">키친 서비스 시각 경험 전략 및 서비스 디자인 비쥬얼 아이덴티티</p>`;
    document.querySelector("#lthumb20").innerHTML =
        `<img src="resources/image/020_-BESPOKE-Prizm-360-Palette_276x276.png">
        <b>BESPOKE<br>Prizm 360 Palette</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p20">친환경 디지털 프린팅 기술을 적용한 360개의 컬러 패널로 각자의 취향에<br>맞춘 냉장고 구매 가능</p>`;
    document.querySelector("#lthumb21").innerHTML =
        `<img src="resources/image/021_iFGD_Qooker-UX_276x276.png">
        <b>BESPOKE<br>Qooker UX</b>
        <div class="content_title">GOOD DESIGN</div>
        <p id="lthumb_p21">구매 내역과 식단이 연계된 조리법 및 다른 메뉴를 동시에 조리할 수 있는<br>멀티쿡 기능을 제공</p>`;
    document.querySelector("#lthumb22").innerHTML =
        `<img src="resources/image/022_BESPOKE-F3000_276x276.png">
        <b>BESPOKE<br>Refrigerator<br>F3000</b>
        <div class="content_title">IF</div>
        <p id="lthumb_p22">별도로 분리 된 중간 변온실을 적용해 1인 가구의 니즈를 반영한<br>3도어 비스포크 냉장고</p>`;
    document.querySelector("#lthumb23").innerHTML =
        `<img src="resources/image/023_-BESPOKE-ShoeDresser_276x276.png">
        <b>BESPOKE<br>ShoeDresser</b>
        <div class="content_title">IDEA·IF</div>
        <p id="lthumb_p23">다양한 종류의 신발을 사용자가 쉽게 관리 할수 있는 신발 관리 기기로<br>새로운 라이프스타일 제안</p>`;
    document.querySelector("#lthumb24").innerHTML =
        `<img src="resources/image/024_IDEAGD_BESPOKE-Stick-VS6800_276x276.png">
        <b>BESPOKE<br>Stick VS6800</b>
        <div class="content_title">IDEA</div>
        <p id="lthumb_p24">원기둥 모양의 쭉 뻗은 심플하고 슬림한 외형으로 사용하지 않을 때도<br>집 안과 조화로운 디자인</p>`;

    // change2021종료
}

function change2022() {
    default2022();
    document.querySelector(".header-navi>a").setAttribute("href","삼성디자인-main.html");
    document.querySelectorAll(".header_a")[0].setAttribute("href","our stories_1.html");
    document.querySelectorAll(".header_a")[1].setAttribute("href","about us_1.html");
    document.querySelectorAll(".header_a")[2].setAttribute("href","career_1.html");
    document.querySelectorAll(".header_a")[3].setAttribute("href","news_1.html");
    document.querySelectorAll(".footer_a")[2].setAttribute("href","our stories_1.html");
    document.querySelectorAll(".footer_a")[3].setAttribute("href","about us_1.html");
    document.querySelectorAll(".footer_a")[4].setAttribute("href","career_1.html");
    document.querySelectorAll(".footer_a")[5].setAttribute("href","news_1.html");
    for(let i = 0; i < 6; i++){
        header_b = document.querySelectorAll(".header_b");
        header_b[i].setAttribute("href",`삼성디자인-main.html#toggle_${i}`);
        if(i == 5){
            header_b[i].setAttribute("href",`삼성디자인-main.html#toggle_0`);
        }
    }
    document.querySelector(".image").innerHTML =
        `<img src="resources/image/2022_01.jpg" style="opacity: 1;">
        <img src="resources/image/2022_02.jpg">
        <img src="resources/image/2022_03.jpg">
        <img src="resources/image/2022_04.jpg">
        <img src="resources/image/2022_05.jpg">`;
    document.querySelector("#lthumb1").innerHTML =
        `<img src="resources/image/001_-2022-Neo-QLED-TV-Visual-Branding_276x276_2022.png">
        <b>2022 Neo<br>QLED TV<br>Visual Branding</b>
        <div class="content_title">GOOD DESIGN</div>
        <p id="lthumb_p1">기존의 프리미엄 브랜드와 차별화시킨 디자인 에셋을 활용한 가이드와<br>애플리케이션</p>`;
    document.querySelector("#lthumb2").innerHTML =
        `<img src="resources/image/002_2022-Smart-Hub_276x276_2022.png">
        <b>2022 Smart<br>Hub</b>
        <div class="content_title">IF</div>
        <p id="lthumb_p2">삼성 서비스와 콘텐츠 브라우징에 최적화된 2022 TV Home UI 디자인</p>`;
    document.querySelector("#lthumb3").innerHTML =
        `<img src="resources/image/003_24”-Built-in-Wall-Oven-Package_276x276_2022.png">
        <b>24” Built-in<br>Wall Oven<br>Package</b>
        <div class="content_title">GOOD DESIGN</div>
        <p id="lthumb_p3">정갈하고 모던한 디자인 및 비스포크 철학을 담은 다양한 컬러 팔레트를<br>제안하는 오븐 패키지</p>`;
    document.querySelector("#lthumb4").innerHTML =
        `<img src="resources/image/004_5G-Massive-MIMO-Radio-Solution_276x276_2022.png">
        <b>5G Massive MIMO<br>Radio Solution</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p id="lthumb_p4">4G에서 5G까지 매끄럽게 이어주는 범용적인 기지국</p>`;
    document.querySelector("#lthumb5").innerHTML =
        `<img src="resources/image/005_5G-Network-Design-Identity-3.0_276x276_2022.png">
        <b>5G Network<br>Design Identity<br>3.0</b>
        <div class="content_title">IDEA</div>
        <p id="lthumb_p5">제품 설계부터 형태 등 디테일한 요소까지 일관되게 제품을 개발하고<br>도심에 어울리는 형상으로 가이드닫기</p>`;
    document.querySelector("#lthumb6").innerHTML =
        `<img src="resources/image/006_5G-Outdoor-Radio-Solution_276x276_2022.png">
        <b>5G Outdoor<br>Radio Solution</b>
        <div class="content_title">IF</div>
        <p id="lthumb_p6">5G 장비로 안테나를 통해 휴대폰 단말기와 통신이 가능하도록 해주는 장비</p>`;
    document.querySelector("#lthumb7").innerHTML =
        `<img src="resources/image/007_Air-Purifier-AX5500K_276x276_2022.png">
        <b>Air-Purifier<br>AX5500K</b>
        <div class="content_title">IDEA·IF</div>
        <p id="lthumb_p7">미니멀한 직선적 형태와 디스플레이 상부 및 전면 흡입부에 적용된 다양한<br>CMF가 특징</p>`;
    document.querySelector("#lthumb8").innerHTML =
        `<img src="resources/image/008_Animated-Emoji-Pair-Stickers_276x276_2022.png">
        <b>Animated<br>Emoji Pair<br>Stickers</b>
        <div class="content_title">IDEA</div>
        <p id="lthumb_p8">이모지 페어에 시의적절한 애니메이션 입혀 복잡한 감정을 위트있게 표현</p>`;
    document.querySelector("#lthumb9").innerHTML =
        ` <img src="resources/image/009_Art-Mode-Mobile_276x276_2022.png">
        <b>Art Mode Mobile</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p id="lthumb_p9">예술 작품과 콘텐츠를 쉽게 브라우징해 TV에 바로 적용시켜 사용자에게<br>매일 새로운 공간 경험 제공</p>`;
    document.querySelector("#lthumb10").innerHTML =
        `<img src="resources/image/010_ATMOS-Soundbar-HW-Q990B_276x276_2022.png">
        <b>ATMOS Soundbar<br>HW-Q990B</b>
        <div class="content_title">GOOD DESIGN</div>
        <p id="lthumb_p10">양쪽 측면과 코너의 스피커가 만드는 차별화된 형상을 통해 기존<br>사운드바와 다른 독창적 디자인 완성</p>`;
    document.querySelector("#lthumb11").innerHTML =
        `<img src="resources/image/011_Auto-Rotation-Accessory_276x276_2022.png">
        <b>Auto-Rotation<br>Accessory</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p11">기존 더 세로 TV가 가진 가로, 세로 화면 회전 경험을 다양한 크기의 TV와<br>벽걸이 사용성까지 확장</p>`;
    document.querySelector("#lthumb12").innerHTML =
        `<img src="resources/image/013_Bespoke-1DR-RR7000A_276x276_2022.png">
        <b>Bespoke 1DR<br>RR7000A</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p12">터치 오픈 시스템으로 심플하면서도 스마트한 경험 제공</p>`;
    document.querySelector("#lthumb13").innerHTML =
        `<img src="resources/image/014_Bespoke-1DR-RR9000B_276x276_2022.png">
        <b>Bespoke 1DR<br>RR9000B</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p id="lthumb_p13">터치 오픈 시스템으로 가구장과 조화로운 구성 및 라이프스타일에 따라<br> 추가 설치 가능한 디자인</p>`;
    document.querySelector("#lthumb14").innerHTML =
        `<img src="resources/image/015_Bespoke-4DR-Flex-RF9000-7000-Series_276x276_2022.png">
        <b>Bespoke 4DR<br>RF9000/7000<br>Series</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p14">위생에 대한 관심이 높고 깔끔한 외관을 선호하는 흐름에 맞춰 정수기를<br>냉장고 문 안쪽에 배치</p>`;
    document.querySelector("#lthumb15").innerHTML =
        `<img src="resources/image/016_Bespoke-4DR-Multi-RQ9500A_276x276_2022.png">
        <b>Bespoke 4DR<br>RQ9500A</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p15">냉장고 문에 곡물 디스펜서 및 하단에 변온 기능을 가진 멀티 트레이<br>장착으로 사용 편의성 향상</p>`;
    document.querySelector("#lthumb16").innerHTML =
        `<img src="resources/image/017_Bespoke-AirDresser_276x276_2022.png">
        <b>Bespoke<br>AirDresser</b>
        <div class="content_title">IF</div>
        <p id="lthumb_p16">빌트인 또는 단독 어떤 방식으로 놓더라도 공간과 조화로운 디자인의 의류<br>관리 제품</p>`;
    document.querySelector("#lthumb17").innerHTML =
        `<img src="resources/image/018_Bespoke-Curator-AI_276x276_2022.png">
        <b>Bespoke<br>Curator AI</b>
        <div class="content_title">GOOD DESIGN</div>
        <p id="lthumb_p17">비스포크 제품 색상 선택 시 겪는 고민을 덜어주기 위해 제작된 대화형<br>웹사이트</p>`;
    document.querySelector("#lthumb18").innerHTML =
        `<img src="resources/image/019_Bespoke-Dishwasher-Countertop_276x276_2022.png">
        <b>Bespoke<br>Dishwasher<br>Countertop</b>
        <div class="content_title">IDEA</div>
        <p id="lthumb_p18">미니멀한 형태의 디자인으로 협소한 공간에서도 사용할 수 있는 카운터탑<br>식기세척기</p>`;
    document.querySelector("#lthumb19").innerHTML =
        `<img src="resources/image/020_Bespoke-FDR-RF8000-Series_276x276_2022.png">
        <b>Bespoke FDR<br>RF8000 Series</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p19">스테인리스 스틸과 글라스 마감을 적용해 내구성과 공간의 품격을 높인<br>디자인</p>`;
    document.querySelector("#lthumb20").innerHTML =
        `<img src="resources/image/021_Bespoke-Grande-AI-2.0_276x276_2022.png">
        <b>Bespoke<br>Grande AI 2.0</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p id="lthumb_p20">직렬, 병렬, 단독으로 자유롭게 설치 가능하면서도 공간을 돋보이게 하는<br>심플한 디자인</p>`;
    document.querySelector("#lthumb21").innerHTML =
        `<img src="resources/image/022_Bespoke-Induction-Built-in-Infinite-Line_276x276_2022.png">
        <b>Bespoke<br>Induction Built-in<br>Infinite Line</b>
        <div class="content_title">GOOD DESIGN</div>
        <p id="lthumb_p21">마그네틱 노브로 직관적이고 편리한 사용성을 제공하고, 고급스러움과<br>견고함이 강조된 인덕션 디자인</p>`;
    document.querySelector("#lthumb22").innerHTML =
        `<img src="resources/image/023_Bespoke-Jet-Bot-AI-UX_276x276_2022.png">
        <b>Bespoke<br>Jet Bot AI UX</b>
        <div class="content_title">IF</div>
        <p id="lthumb_p22">AI 자율주행으로 집 구조와 가전, 가구를 인식하고, 시간이 지날수록<br>효율적으로 청소해주는 로봇청소기</p>`;
    document.querySelector("#lthumb23").innerHTML =
        ` <img src="resources/image/024_Bespoke-Jet-VS9500_276x276_2022.png">
        <b>Bespoke Jet™<br>VS9500</b>
        <div class="content_title">IDEA·IF</div>
        <p id="lthumb_p23">청정 스테이션에 슬림한 버티컬 마이크로 패턴을 접목, 주변 환경과<br>조화로운 디자인</p>`;
    document.querySelector("#lthumb24").innerHTML =
        `<img src="resources/image/012_Bespoke-Kitchen-Package-CMF-Strategy_276x276_2022.png">
        <b>Bespoke<br>Kitchen Package<br>CMF Strategy</b>
        <div class="content_title">IDEA</div>
        <p id="lthumb_p24">사용자의 취향을 반영하는 비스포크 개념을 조리 기기까지 확장한 CMF<br>제안</p>`;
    // change2022종료
}

function en_change2021() {
    document.querySelector(".header-navi>a").setAttribute("href","삼성디자인-main-eng.html");
    document.querySelectorAll(".header_a")[0].setAttribute("href","our stories_en.html");
    document.querySelectorAll(".header_a")[1].setAttribute("href","about us.html");
    document.querySelectorAll(".header_a")[2].setAttribute("href","career us.html");
    document.querySelectorAll(".header_a")[3].setAttribute("href","news_en.html");
    document.querySelectorAll(".footer_a")[2].setAttribute("href","our stories_en.html");
    document.querySelectorAll(".footer_a")[3].setAttribute("href","about us.html");
    document.querySelectorAll(".footer_a")[4].setAttribute("href","career us.html");
    document.querySelectorAll(".footer_a")[5].setAttribute("href","news_en.html");
    for(let i = 0; i < 6; i++){
        header_b = document.querySelectorAll(".header_b");
        header_b[i].setAttribute("href",`삼성디자인-main-eng.html#toggle_${i}`);
        if(i == 5){
            header_b[i].setAttribute("href",`삼성디자인-main-eng.html#toggle_0`);
        }
    }
    document.querySelector(".image").innerHTML =
        `<img src="resources/image/2021_01_en.jpg" style="opacity: 1;">
        <img src="resources/image/2021_02_en.jpg">
        <img src="resources/image/2021_03_en.jpg">
        <img src="resources/image/2021_04_en.jpg">
        <img src="resources/image/2021_05_en.jpg">`;
    document.querySelector("#lthumb_p1").innerHTML =
        `A Visual Identity System that embodies the unique elegance of<br>the QLED 8K TV model with colors, patterns, and photos.`;
    document.querySelector("#lthumb_p2").innerHTML =
        `An International Women’s Day social campaign based on three<br>keywords: Mutual Respect, Passion, and Allyship.`;
    document.querySelector("#lthumb_p3").innerHTML =
        `A design that considers the installation conditions of a city<br>center while reducing environmental damage by integrating<br>various equipment`;
    document.querySelector("#lthumb_p4").innerHTML =
        `A communication device that builds 5G network spots through<br>IAB-MT to minimize installation of 5G base stations.`;
    document.querySelector("#lthumb_p5").innerHTML =
        `An indoor/outdoor CPE used in a 5G environment and features a<br>design with craft sensibility.`;
    document.querySelector("#lthumb_p6").innerHTML =
        `A room air conditioner design that is slimmer than before and<br>elegantly permeates space when attached to the wall.`;
    document.querySelector("#lthumb_p7").innerHTML =
        `A window-mounted air conditioner that is installed directly on<br>the window without an outdoor unit and features a simple, flat<br>design.`;
    document.querySelector("#lthumb_p8").innerHTML =
        `A refrigerator that features the Beverage Center, an internal<br>water purifier, with improved sanitation and ease of use.`;
    document.querySelector("#lthumb_p9").innerHTML =
        `A design that allows users to select the front panel according to<br>their lifestyle and environment.`;
    document.querySelector("#lthumb_p10").innerHTML =
        `A UX design that delivers information intuitively and<br>sentimentally while minimizing user involvement.`;
    document.querySelector("#lthumb_p11").innerHTML =
        `Offering expanded useability by providing an integrated<br>clothing management experience that features UX with<br>reduced complexity.`;
    document.querySelector("#lthumb_p12").innerHTML =
        `A Bespoke color series inspired by the city colors of Stockholm,<br>Berlin, and Seoul.`;
    document.querySelector("#lthumb_p13").innerHTML =
        `A compact modular refrigerator with an object-style design<br>that adapts to various spaces.`;
    document.querySelector("#lthumb_p14").innerHTML =
        `A dishwasher with seven door panel options to reveal the<br>individuality of different users.`;
    document.querySelector("#lthumb_p15").innerHTML =
        `Featuring an LCD display and control buttons that organize the<br>design along with an interactive notification window, enhancing<br>aesthetics and usability.`;
    document.querySelector("#lthumb_p16").innerHTML =
        `A design that harmonizes with the surrounding environment<br>and grafts a slim vertical micro pattern onto the clean station.`;
    document.querySelector("#lthumb_p17").innerHTML =
        `A design with a combination of triangular and cylindrical<br>shapes that harmonizes with any interior.`;
    document.querySelector("#lthumb_p18").innerHTML =
        `A robot vacuum cleaner that recognizes house structures, home<br>appliances, and furniture through AI-based autonomous driving<br>and cleans efficiently over time.`;
    document.querySelector("#lthumb_p19").innerHTML =
        `A visual experience strategy for kitchen services and visual<br>identity of service design.`;
    document.querySelector("#lthumb_p20").innerHTML =
        `Allowing users to purchase refrigerators tailored to their tastes<br>through eco-friendly printing technology applied with 360<br>color panels.`;
    document.querySelector("#lthumb_p21").innerHTML =
        `Providing a multi-cooker function that allows cooking different<br>menus simultaneously and recipes that are linked to the user’s<br>purchase history and diet.`;
    document.querySelector("#lthumb_p22").innerHTML =
        `A 3-door Bespoke refrigerator that reflects the needs of one-<br>person households by including a separated central<br>compartment with adjustable temperature levels.`;
    document.querySelector("#lthumb_p23").innerHTML =
        `A shoe management device that proposes a new lifestyle by<br>allowing users to conveniently manage various types of shoes.`;
    document.querySelector("#lthumb_p24").innerHTML =
        `A simple and slim design with a cylindrical shape that<br>harmonizes with the home interior even when unused.`;
}

function en_change2022() {
    document.querySelector(".header-navi>a").setAttribute("href","삼성디자인-main-eng.html");
    document.querySelectorAll(".header_a")[0].setAttribute("href","our stories_en.html");
    document.querySelectorAll(".header_a")[1].setAttribute("href","about us.html");
    document.querySelectorAll(".header_a")[2].setAttribute("href","career us.html");
    document.querySelectorAll(".header_a")[3].setAttribute("href","news_en.html");
    document.querySelectorAll(".footer_a")[2].setAttribute("href","our stories_en.html");
    document.querySelectorAll(".footer_a")[3].setAttribute("href","about us.html");
    document.querySelectorAll(".footer_a")[4].setAttribute("href","career us.html");
    document.querySelectorAll(".footer_a")[5].setAttribute("href","news_en.html");
    for(let i = 0; i < 6; i++){
        header_b = document.querySelectorAll(".header_b");
        header_b[i].setAttribute("href",`삼성디자인-main-eng.html#toggle_${i}`);
        if(i == 5){
            header_b[i].setAttribute("href",`삼성디자인-main-eng.html#toggle_0`);
        }
    }
    document.querySelector(".image").innerHTML =
        `<img src="resources/image/2022_01_en.jpg" style="opacity: 1;">
        <img src="resources/image/2022_02_en.jpg">
        <img src="resources/image/2022_03_en.jpg">
        <img src="resources/image/2022_04_en.jpg">
        <img src="resources/image/2022_05_en.jpg">`;
    document.querySelector("#lthumb_p1").innerHTML =
        `A guide and application that utilize design assets differentiated<br>from existing premium brands.`;
    document.querySelector("#lthumb_p2").innerHTML =
        `2022 TV Home UI design fully optimized for content browsing<br>and Samsung services.`;
    document.querySelector("#lthumb_p3").innerHTML =
        `An oven package that offers a clean, modern design and various<br>color palettes encapsulating the Bespoke philosophy.`;
    document.querySelector("#lthumb_p4").innerHTML =
        `A universal base station that seamlessly connects from 4G to<br>5G.`;
    document.querySelector("#lthumb_p5").innerHTML =
        `Developing products with consistency in system, shape, and<br>details, and guiding them to a structure that blends with the<br>city center.`;
    document.querySelector("#lthumb_p6").innerHTML =
        `A 5G equipment that enables communication on a mobile<br>device terminal through an antenna.`;
    document.querySelector("#lthumb_p7").innerHTML =
        `Features a minimalistic linear shape and various CMFs applied<br>to the top of the display and the frontal intake system.`;
    document.querySelector("#lthumb_p8").innerHTML =
        `Wittily expressing complex emotions by applying timely<br>animations to the Emoji Pair.`;
    document.querySelector("#lthumb_p9").innerHTML =
        `Providing users with a new spatial experience each day by<br>easily browsing and displaying artwork and content directly to<br>the TV.`;
    document.querySelector("#lthumb_p10").innerHTML =
        `Completing a unique design through differentiated forms of the<br>side and corner speakers.`;
    document.querySelector("#lthumb_p11").innerHTML =
        `Expanding the horizontal and vertical screen rotation<br>experience of The Sero to accommodate usability for<br>wallmounts and TVs of various sizes.`;
    document.querySelector("#lthumb_p12").innerHTML =
        `Providing a simple yet smart experience with the touch-open<br>system.`;
    document.querySelector("#lthumb_p13").innerHTML =
        `A design that is additionally installed based on the lifestyle<br>and composition harmonizing with the cabinets through the touch-<br>open system.`;
    document.querySelector("#lthumb_p14").innerHTML =
        `Placing the water purifier within the refrigerator door following<br>the trend of user interests in hygiene and preferences for a neat<br>appearance.`;
    document.querySelector("#lthumb_p15").innerHTML =
        `Improving usability convenience by installing a grain dispenser<br>on the refrigerator door and a multi-tray with an adjustable<br>temperature function.`;
    document.querySelector("#lthumb_p16").innerHTML =
        `Built-in or standalone clothing care products with a design that<br>harmonizes with the surrounding space.`;
    document.querySelector("#lthumb_p17").innerHTML =
        `An interactive website designed to facilitate the selection of<br>colors for Bespoke products.`;
    document.querySelector("#lthumb_p18").innerHTML =
        `A countertop dishwasher featuring a minimalistic design that<br>can be used in compact spaces.`;
    document.querySelector("#lthumb_p19").innerHTML =
        `Enhancing the quality of space and durability by applying<br>stainless steel and glass finishes.`;
    document.querySelector("#lthumb_p20").innerHTML =
        `A simple design that can be freely installed in series, parallel, or<br>single circuits while not being confined to space.`;
    document.querySelector("#lthumb_p21").innerHTML =
        `An induction design that provides intuitive and convenient<br>usability with a magnetic knob while emphasizing luxury and<br>robustness.`;
    document.querySelector("#lthumb_p22").innerHTML =
        `A robot vacuum cleaner that recognizes house structures, home<br>appliances, and furniture through AI-based autonomous driving<br>and cleans efficiently over time.`;
    document.querySelector("#lthumb_p23").innerHTML =
        `A design that harmonizes with the surrounding environment<br>and grafts a slim vertical micro pattern onto the clean station.`;
    document.querySelector("#lthumb_p24").innerHTML =
        `Providing a CMF concept that expands the Bespoke concept<br>reflecting user tastes to cooking appliances.`;
}