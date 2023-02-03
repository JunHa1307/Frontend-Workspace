let arr1 = document.querySelectorAll(".year1");
let a = document.querySelectorAll("a[id=off],a[id=on]");
let arr2 = document.querySelectorAll(".langbtn");
change2022();

for (let i = 0; i < 5; i++) {
    a[i].addEventListener("click", function () {
            setTimeout(check,50);
            setTimeout(en_check,50);
    });
}

arr1[0].id="on";

function check() {
    if(a[0].id=="on"){
        if (arr1[0].id == "on") {
            change2022();
        } else if (arr1[1].id == "on") {
            change2021();
        }
    }
}

function en_check(){
    if(a[1].id=="on"){
        if (arr1[0].id == "on") {
            en_change2022();
        } else if (arr1[1].id == "on") {
            en_change2021();
        }
    }
}

a[0].id="on";

// default => .year , sthumb$
function default2021(){
    document.querySelector(".year").innerHTML =
    '<img src="resources/image/year_21.png">';
    document.querySelector("#sthumb1").innerHTML =
        `<p>2020 QLED 8K<br>Visual Identity<br>System</p>
        <img src="resources/image/001_2020-QLED-8K-VIS_90x90.png">
        <div>GOOD DESIGN</div>`;
    document.querySelector("#sthumb2").innerHTML = 
        `<p>2021 International<br>Women’s Day Social<br>Campaign</p>
        <img src="resources/image/002_2021-International-Womens-Day-Social-Campaign-with-MZ-Co-Creator_90x90.png">
        <div>IF</div>`;
    document.querySelector("#sthumb3").innerHTML = 
        `<p>5G Network<br>esign Identity<br>3.0</p>
        <img src="resources/image/003_5G-Network-Design-Identity-3.0_90x90.png">
        <div>GOOD DESIGN</div>`;
    document.querySelector("#sthumb4").innerHTML = 
        `<p>5G Node<br>Solution</p>
        <img src="resources/image/004_5G-nod-Solution_90x90.png">
        <div>IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb5").innerHTML = 
        `<p>5G Station<br>(IDU & ODU)</p>
        <img src="resources/image/005_5G-Station_90x90.png">
        <div>IDEA</div>`;
    document.querySelector("#sthumb6").innerHTML = 
        `<p>AR9500T<br>RAC Series</p>
        <img src="resources/image/006_AR9500T-RAC-SERIES_90x90.png">
        <div>IF</div>`;
    document.querySelector("#sthumb7").innerHTML = 
        `<p>AW5100AM</p>
        <img src="resources/image/007_IDEAGD_AW5100AM_90x90.png">
        <div>IDEA·IF</div>`;
    document.querySelector("#sthumb8").innerHTML = 
        `<p>BESPOKE<br>4-Door Flex<br>Refrigerator</p>
        <img src="resources/image/008_BESPOKE-4-Door-Flex-Refrigerator_90x90.png">
        <div>IDEA</div>`;
    document.querySelector("#sthumb9").innerHTML = 
        `<p>BESPOKE Air<br>Purifier AX9500N</p>
        <img src="resources/image/009_iFIDEAGD_BESPOKE-Air-Purifier-AX9500N_90x90.png">
        <div>IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb10").innerHTML = 
        `<p>BESPOKE<br>Air Purifier UX</p>
        <img src="resources/image/010_Bespoke-cube-air-purifier-UX_90x90.png">
        <div>GOOD DESIGN</div>`;
    document.querySelector("#sthumb11").innerHTML = 
        `<p>BESPOKE<br>AirDresser UX</p>
        <img src="resources/image/011_BESPOKE-AirDresser_90x90.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb12").innerHTML = 
        `<p>BESPOKE<br>Colour<br>Edition</p>
        <img src="resources/image/012_BESPOKE-CITY-COLOUR-EDITION_90x90.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb13").innerHTML = 
        `<p>BESPOKE<br>Cube<br>Refrigerator</p>
        <img src="resources/image/013_BESPOKE-CUBE-refrigerator_90x90.png">
        <div>IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb14").innerHTML = 
        `<p>BESPOKE<br>Dishwasher</p>
        <img src="resources/image/014_BESPOKE-Dishwasher_90x90.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb15").innerHTML = 
        `<p>BESPOKE<br>Induction UX</p>
        <img src="resources/image/015_BESPOKE-Induction-UX_90x90.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb16").innerHTML = 
        `<p>BESPOKE Jet</p>
        <img src="resources/image/016_BESPOKE-jet_90x90.png">
        <div>IF</div>`;
    document.querySelector("#sthumb17").innerHTML = 
        `<p>BESPOKE<br>Jet Bot AI</p>
        <img src="resources/image/017_BESPOKE-Jet-Bot-AI_90x90.png">
        <div>GOOD DESIGN</div>`;
    document.querySelector("#sthumb18").innerHTML = 
        `<p>BESPOKE<br>Jet Bot AI UX</p>
        <img src="resources/image/018_-BESPOKE-Jet-Bot-AI-UX_90x90.png">
        <div>IDEA</div>`;
    document.querySelector("#sthumb19").innerHTML = 
        `<p>BESPOKE<br>Kitchen Visual<br>Identity</p>
        <img src="resources/image/019_iFGD_BESPOKE-Kitchen-Visual-Identity_90x90.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb20").innerHTML = 
        `<p>BESPOKE<br>Prizm 360 Palette</p>
        <img src="resources/image/020_-BESPOKE-Prizm-360-Palette_90x90.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb21").innerHTML = 
        `<p>BESPOKE<br>Qooker UX</p>
        <img src="resources/image/021_iFGD_Qooker-UX_90x90.png">
        <div>GOOD DESIGN</div>`;
    document.querySelector("#sthumb22").innerHTML = 
        `<p>BESPOKE<br>Refrigerator<br>F3000</p>
        <img src="resources/image/022_BESPOKE-F3000_90x90.png">
        <div>IF</div>`;
    document.querySelector("#sthumb23").innerHTML = 
        `<p>BESPOKE<br>ShoeDresser</p>
        <img src="resources/image/023_-BESPOKE-ShoeDresser_90x90.png">
        <div>IDEA·IF</div>`;
    document.querySelector("#sthumb24").innerHTML = 
        `<p>BESPOKE<br>Stick VS6800</p>
        <img src="resources/image/024_IDEAGD_BESPOKE-Stick-VS6800_90x90.png">
        <div>IDEA</div>`;
}

function default2022(){
    document.querySelector(".year").innerHTML =
        '<img src="resources/image/year_22.png">';
        document.querySelector("#sthumb1").innerHTML =
        `<p>2022 Neo<br>QLED TV<br>Visual Branding</p>
        <img src="resources/image/001_-2022-Neo-QLED-TV-Visual-Branding_90x90_2022.png">
        <div>GOOD DESIGN</div>`;
    document.querySelector("#sthumb2").innerHTML =
        `<p>2022 Smart<br>Hub</p>
        <img src="resources/image/002_2022-Smart-Hub_90x90_2022.png">
        <div>IF</div>`;
    document.querySelector("#sthumb3").innerHTML =
        `<p>24” Built-in<br>Wall Oven<br>Package</p>
        <img src="resources/image/003_24-Built-in-Wall-Oven-Package_90x90_2022.png">
        <div>GOOD DESIGN</div>`;
    document.querySelector("#sthumb4").innerHTML =
        `<p>5G Massive MIMO<br>Radio Solution</p>
        <img src="resources/image/004_5G-Massive-MIMO-Radio-Solution_90x90_2022.png">
        <div>IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb5").innerHTML =
        `<p>5G Network<br>Design Identity<br>3.0</p>
        <img src="resources/image/005_5G-Network-Design-Identity-3.0_90x90_2022.png">
        <div>IDEA</div>`;
    document.querySelector("#sthumb6").innerHTML =
        `<p>5G Outdoor<br>Radio Solution</p>
        <img src="resources/image/006_5G-Outdoor-Radio-Solution_90x90_2022.png">
        <div>IF</div>`;
    document.querySelector("#sthumb7").innerHTML =
        `<p>Air Purifier<br>AX5500K</p>
        <img src="resources/image/007_Air-Purifier-AX5500K_90x90_2022.png">
        <div>IDEA·IF</div>`;
    document.querySelector("#sthumb8").innerHTML =
        `<p>Animated<br>Emoji Pair<br>Stickers</p>
        <img src="resources/image/008_Animated-Emoji-Pair-Stickers_90x90_2022.png">
        <div>IDEA</div>`;
    document.querySelector("#sthumb9").innerHTML =
        ` <p>Art Mode Mobile</p>
        <img src="resources/image/009_Art-Mode-Mobile_90x90_2022.png">
        <div>IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb10").innerHTML =
        ` <p>ATMOS Soundbar<br>HW-Q990B</p>
        <img src="resources/image/010_ATMOS-Soundbar-HW-Q990B_90x90_2022.png">
        <div>GOOD DESIGN</div>`;
    document.querySelector("#sthumb11").innerHTML =
        `<p>Auto Rotation<br>Accessory</p>
        <img src="resources/image/011_Auto-Rotation-Accessory_90x90_2022.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb12").innerHTML =
        `<p>Bespoke<br>1DR<br>RR7000A</p>
        <img src="resources/image/013_Bespoke-1DR-RR7000A_90x90_2022.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb13").innerHTML =
        `<p>Bespoke<br>1DR<br>RR9000B</p>
        <img src="resources/image/014_Bespoke-1DR-RR9000B_90x90_2022.png">
        <div>IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb14").innerHTML =
        `<p>Bespoke 4DR<br>RF9000/7000<br>Series</p>
        <img src="resources/image/015_Bespoke-4DR-Flex-RF9000-7000-Series_90x90_2022.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb15").innerHTML =
        `<p>Bespoke 4DR<br>RQ9500A</p>
        <img src="resources/image/016_Bespoke-4DR-Multi-RQ9500A_90x90_2022.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb16").innerHTML =
        `<p>Bespoke<br>Air Dresser</p>
        <img src="resources/image/017_Bespoke-AirDresser_90x90_2022.png">
        <div>IF</div>`;
    document.querySelector("#sthumb17").innerHTML =
        `<p>Bespoke<br>Curator AI</p>
        <img src="resources/image/018_Bespoke-Curator-AI_90x90_2022.png">
        <div>GOOD DESIGN</div>`;
    document.querySelector("#sthumb18").innerHTML =
        `<p>Bespoke<br>Dishwasher<br>Countertop</p>
        <img src="resources/image/019_Bespoke-Dishwasher-Countertop_90x90_2022.png">
        <div>IDEA</div>`;
    document.querySelector("#sthumb19").innerHTML =
        `<p>Bespoke FDR<br>RF8000 Series</p>
        <img src="resources/image/020_Bespoke-FDR-RF8000-Series_90x90_2022.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb20").innerHTML =
        `<p>Bespoke<br>Grande AI 2.0</p>
        <img src="resources/image/021_Bespoke-Grande-AI-2.0_90x90_2022.png">
        <div>IDEA·IF·GOOD DESIGN</div>`;
    document.querySelector("#sthumb21").innerHTML =
        `<p>Bespoke<br>Induction Built-in<br>Infinite Line</p>
        <img src="resources/image/022_Bespoke-Induction-Built-in-Infinite-Line_90x90_2022.png">
        <div>GOOD DESIGN</div>`;
    document.querySelector("#sthumb22").innerHTML =
        `<p>Bespoke<br>Jet Bot AI UX</p>
        <img src="resources/image/023_Bespoke-Jet-Bot-AI-UX_90x90_2022.png">
        <div>IF</div>`;
    document.querySelector("#sthumb23").innerHTML =
        `<p>Bespoke Jet™<br>VS9500</p>
        <img src="resources/image/024_Bespoke-Jet-VS9500_90x90_2022.png">
        <div>IDEA·IF</div>`;
    document.querySelector("#sthumb24").innerHTML =
        `<p>Bespoke<br>Kitchen Packege<br>CMF Strategy</p>
        <img src="resources/image/012_Bespoke-Kitchen-Package-CMF-Strategy_90x90_2022.png">
        <div>IDEA</div>`;
}

function change2021() {

    default2021();

    document.querySelector(".image").innerHTML =
        `<img src="resources/image/2021_01.jpg" style="opacity: 1;">
        <img src="resources/image/2021_02.jpg">
        <img src="resources/image/2021_03.jpg">
        <img src="resources/image/2021_04.jpg">
        <img src="resources/image/2021_05.jpg">`;
    // largethumbs 시작
    document.querySelector("#lthumb1").innerHTML =
        `<img src="resources/image/001_2020-QLED-8K-VIS_276x276.png">
        <b>2020 QLED 8K<br>Visual Identity<br>System</b>
        <div class="content_title">GOOD DESIGN</div>
        <p>QLED 8K TV 모델 특유의 화려함을 컬러, 패턴, 사진 등으로 구현한<br> Visual Identity System</p>`;    
    document.querySelector("#lthumb2").innerHTML = 
        `<img src="resources/image/002_2021-International-Womens-Day-Social-Campaign-with-MZ-Co-Creator_276x276.png">
        <b>2021 International<br>Women’s Day Social<br>Campaign</b>
        <div class="content_title">IF</div>
        <p>QMutual Respect, Passion, Allyship 세 가지 키워드를 바탕으로 한 국제<br>여성의 날 기념 캠페인</p>`;
    document.querySelector("#lthumb3").innerHTML =
        `<img src="resources/image/003_5G-Network-Design-Identity-3.0_276x276.png">
        <b>5G Network<br>esign Identity<br>3.0</b>
        <div class="content_title">GOOD DESIGN</div>
        <p>여러 장비를 하나로 통합하여 환경 훼손을 줄이면서도 도심 속 설치 환경을<br>고려한 디자인</p>`;
    document.querySelector("#lthumb4").innerHTML =
        `<img src="resources/image/004_5G-nod-Solution_276x276.png">
        <b>5G Node<br>Solution</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p>5G 기지국 설치 최소화를 위해 IAB-MT를 통해 5G 네트워크 스팟을<br>구축하는 통신 기기</p>`;
    document.querySelector("#lthumb5").innerHTML =
        `<img src="resources/image/005_5G-Station_276x276.png">
        <b>5G Station<br>(IDU & ODU)</b>
        <div class="content_title">IDEA</div>
        <p>5G 환경에서 사용하는 옥내외용 CPE로 공예적 감성을 지닌 디자인</p>`;
    document.querySelector("#lthumb6").innerHTML =
        `<img src="resources/image/006_AR9500T-RAC-SERIES_276x276.png">
        <b>AR9500T<br>RAC Series</b>
        <div class="content_title">IF</div>
        <p>기존 대비 더 슬림해진 사이즈로 벽에 밀착이 가능해 공간 속 아름답게<br>스며드는 룸 에어컨 디자인</p>`;
    document.querySelector("#lthumb7").innerHTML =
        `<img src="resources/image/007_IDEAGD_AW5100AM_276x276.png">
        <b>AW5100AM</b>
        <div class="content_title">IDEA·IF</div>
        <p>실외기 없이 창문에 직접 설치하여 사용하는 창문형 룸 에어컨으로 간결한<br>플랫 디자인</p>`;
    document.querySelector("#lthumb8").innerHTML =
        `<img src="resources/image/008_BESPOKE-4-Door-Flex-Refrigerator_276x276.png">
        <b>BESPOKE<br>4-Door Flex<br>Refrigerator</b>
        <div class="content_title">IDEA</div>
        <p>정수기를 내부로 이동시킨 Beverage Center를 적용, 위생과 사용<br>편의성을 향상시킨 냉장고</p>`;
    document.querySelector("#lthumb9").innerHTML =
        `<img src="resources/image/009_iFIDEAGD_BESPOKE-Air-Purifier-AX9500N_276x276.png">
        <b>BESPOKE Air<br>Purifier AX9500N</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p>라이프스타일과 공간의 성격에 맞춰 전면 패널을 선택할 수 있는 디자인</p>`;
    document.querySelector("#lthumb10").innerHTML =
        `<img src="resources/image/010_Bespoke-cube-air-purifier-UX_276x276.png">
        <b>BESPOKE<br>Air Purifier UX</b>
        <div class="content_title">GOOD DESIGN</div>
        <p>사용자 관여를 최소화 하면서도 직관적이고 감성적으로 정보를 전달하는<br>UX 디자인</p>`;
    document.querySelector("#lthumb11").innerHTML =
        `<img src="resources/image/011_BESPOKE-AirDresser_276x276.png">
        <b>BESPOKE<br>AirDresser UX</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p>복잡한 요소를 줄인 UX로 통합적 의류 관리 경험을 제공하여 확장된<br>사용성 제공</p>`;
    document.querySelector("#lthumb12").innerHTML =
        `<img src="resources/image/012_BESPOKE-CITY-COLOUR-EDITION_276x276.png">
        <b>BESPOKE<br>Colour<br>Edition</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p>스톡홀름, 베를린, 서울에서 영감을 받은 BESPOKE 컬러 시리즈</p>`;
    document.querySelector("#lthumb13").innerHTML =
        `<img src="resources/image/013_BESPOKE-CUBE-refrigerator_276x276.png">
        <b>BESPOKE<br>Cube<br>Refrigerator</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p>다양한 공간과 어울리는 오브제 스타일의 디자인을 지닌 컴팩트한 모듈형<br>냉장고</p>`;
    document.querySelector("#lthumb14").innerHTML =
        `<img src="resources/image/014_BESPOKE-Dishwasher_276x276.png">
        <b>BESPOKE<br>Dishwasher</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p>다양한 사용자의 개성을 드러낼 수 있도록 일곱가지 도어 패널 옵션을<br>제공하는 식기세척기</p>`;
    document.querySelector("#lthumb15").innerHTML =
        `<img src="resources/image/015_BESPOKE-Induction-UX_276x276.png">
        <b>BESPOKE<br>Induction UX</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
      <p>LCD 디스플레이와 몇가지 버튼으로 디자인을 정리하고 대화형 알림창을<br>제공, 심미성과 사용성 증대</p>`;
    document.querySelector("#lthumb16").innerHTML =
     `<img src="resources/image/016_BESPOKE-jet_276x276.png">
      <b>BESPOKE Jet</b>
      <div class="content_title">IF</div>
      <p>청정 스테이션에 슬림한 버티컬 마이크로 패턴을 접목, 주변 환경과<br>조화로운 디자인</p>`;
    document.querySelector("#lthumb17").innerHTML =
        `<img src="resources/image/017_BESPOKE-Jet-Bot-AI_276x276.png">
        <b>BESPOKE<br>Jet Bot AI</b>
        <div class="content_title">GOOD DESIGN</div>
        <p>기본 도형인 원통과 삼각형 조합의 외관 디자인으로 어떤 인테리어에도<br>조화로운 디자인</p>`;
    document.querySelector("#lthumb18").innerHTML =
        `<img src="resources/image/018_-BESPOKE-Jet-Bot-AI-UX_276x276.png">
        <b>BESPOKE<br>Jet Bot AI UX</b>
        <div class="content_title">IDEA</div>
        <p>AI 자율주행으로 집 구조와 가전, 가구를 인식하고, 시간이 지날수록<br>효율적으로 청소해주는 로봇청소기</p>`;
    document.querySelector("#lthumb19").innerHTML =
        `<img src="resources/image/019_iFGD_BESPOKE-Kitchen-Visual-Identity_276x276.png">
        <b>BESPOKE<br>Kitchen Visual<br>Identity</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p>키친 서비스 시각 경험 전략 및 서비스 디자인 비쥬얼 아이덴티티</p>`;
    document.querySelector("#lthumb20").innerHTML =
        `<img src="resources/image/020_-BESPOKE-Prizm-360-Palette_276x276.png">
        <b>BESPOKE<br>Prizm 360 Palette</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p>친환경 디지털 프린팅 기술을 적용한 360개의 컬러 패널로 각자의 취향에<br>맞춘 냉장고 구매 가능</p>`;
    document.querySelector("#lthumb21").innerHTML =
        `<img src="resources/image/021_iFGD_Qooker-UX_276x276.png">
        <b>BESPOKE<br>Qooker UX</b>
        <div class="content_title">GOOD DESIGN</div>
        <p>구매 내역과 식단이 연계된 조리법 및 다른 메뉴를 동시에 조리할 수 있는<br>멀티쿡 기능을 제공</p>`;
    document.querySelector("#lthumb22").innerHTML =
        `<img src="resources/image/022_BESPOKE-F3000_276x276.png">
        <b>BESPOKE<br>Refrigerator<br>F3000</b>
        <div class="content_title">IF</div>
        <p>별도로 분리 된 중간 변온실을 적용해 1인 가구의 니즈를 반영한<br>3도어 비스포크 냉장고</p>`;
    document.querySelector("#lthumb23").innerHTML =
        `<img src="resources/image/023_-BESPOKE-ShoeDresser_276x276.png">
        <b>BESPOKE<br>ShoeDresser</b>
        <div class="content_title">IDEA·IF</div>
        <p>다양한 종류의 신발을 사용자가 쉽게 관리 할수 있는 신발 관리 기기로<br>새로운 라이프스타일 제안</p>`;
    document.querySelector("#lthumb24").innerHTML =
        `<img src="resources/image/024_IDEAGD_BESPOKE-Stick-VS6800_276x276.png">
        <b>BESPOKE<br>Stick VS6800</b>
        <div class="content_title">IDEA</div>
        <p>원기둥 모양의 쭉 뻗은 심플하고 슬림한 외형으로 사용하지 않을 때도<br>집 안과 조화로운 디자인</p>`;

    // change2021종료
}

function change2022() {

    default2022();

    document.querySelector(".image").innerHTML =
        `<img src="resources/image/2022_01.jpg" style="opacity: 1;">
        <img src="resources/image/2022_02.jpg">
        <img src="resources/image/2022_03.jpg">
        <img src="resources/image/2022_04.jpg">
        <img src="resources/image/2022_05.jpg">`;
    // large thumbs 시작
    document.querySelector("#lthumb1").innerHTML =
        `<img src="resources/image/001_-2022-Neo-QLED-TV-Visual-Branding_276x276_2022.png">
        <b>2022 Neo<br>QLED TV<br>Visual Branding</b>
        <div class="content_title">GOOD DESIGN</div>
        <p>기존의 프리미엄 브랜드와 차별화시킨 디자인 에셋을 활용한 가이드와<br>애플리케이션</p>`;
    document.querySelector("#lthumb2").innerHTML =
        `<img src="resources/image/002_2022-Smart-Hub_276x276_2022.png">
        <b>2022 Smart<br>Hub</b>
        <div class="content_title">IF</div>
        <p>삼성 서비스와 콘텐츠 브라우징에 최적화된 2022 TV Home UI 디자인</p>`;
    document.querySelector("#lthumb3").innerHTML =
        `<img src="resources/image/003_24”-Built-in-Wall-Oven-Package_276x276_2022.png">
        <b>24” Built-in<br>Wall Oven<br>Package</b>
        <div class="content_title">GOOD DESIGN</div>
        <p>정갈하고 모던한 디자인 및 비스포크 철학을 담은 다양한 컬러 팔레트를<br>제안하는 오븐 패키지</p>`;
    document.querySelector("#lthumb4").innerHTML =
        `<img src="resources/image/004_5G-Massive-MIMO-Radio-Solution_276x276_2022.png">
        <b>5G Massive MIMO<br>Radio Solution</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p>4G에서 5G까지 매끄럽게 이어주는 범용적인 기지국</p>`;
    document.querySelector("#lthumb5").innerHTML =
        `<img src="resources/image/005_5G-Network-Design-Identity-3.0_276x276_2022.png">
        <b>5G Network<br>Design Identity<br>3.0</b>
        <div class="content_title">IDEA</div>
        <p>제품 설계부터 형태 등 디테일한 요소까지 일관되게 제품을 개발하고<br>도심에 어울리는 형상으로 가이드닫기</p>`;
    document.querySelector("#lthumb6").innerHTML =
        `<img src="resources/image/006_5G-Outdoor-Radio-Solution_276x276_2022.png">
        <b>5G Outdoor<br>Radio Solution</b>
        <div class="content_title">IF</div>
        <p>5G 장비로 안테나를 통해 휴대폰 단말기와 통신이 가능하도록 해주는 장비</p>`;
    document.querySelector("#lthumb7").innerHTML =
        `<img src="resources/image/007_Air-Purifier-AX5500K_276x276_2022.png">
        <b>Air-Purifier<br>AX5500K</b>
        <div class="content_title">IDEA·IF</div>
        <p>미니멀한 직선적 형태와 디스플레이 상부 및 전면 흡입부에 적용된 다양한<br>CMF가 특징</p>`;
    document.querySelector("#lthumb8").innerHTML =
        `<img src="resources/image/008_Animated-Emoji-Pair-Stickers_276x276_2022.png">
        <b>Animated<br>Emoji Pair<br>Stickers</b>
        <div class="content_title">IDEA</div>
        <p>이모지 페어에 시의적절한 애니메이션 입혀 복잡한 감정을 위트있게 표현</p>`;
    document.querySelector("#lthumb9").innerHTML =
        ` <img src="resources/image/009_Art-Mode-Mobile_276x276_2022.png">
        <b>Art Mode Mobile</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p>예술 작품과 콘텐츠를 쉽게 브라우징해 TV에 바로 적용시켜 사용자에게<br>매일 새로운 공간 경험 제공</p>`;
    document.querySelector("#lthumb10").innerHTML =
        `<img src="resources/image/010_ATMOS-Soundbar-HW-Q990B_276x276_2022.png">
        <b>ATMOS Soundbar<br>HW-Q990B</b>
        <div class="content_title">GOOD DESIGN</div>
        <p>양쪽 측면과 코너의 스피커가 만드는 차별화된 형상을 통해 기존<br>사운드바와 다른 독창적 디자인 완성</p>`;
    document.querySelector("#lthumb11").innerHTML =
        `<img src="resources/image/011_Auto-Rotation-Accessory_276x276_2022.png">
        <b>Auto-Rotation<br>Accessory</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p>기존 더 세로 TV가 가진 가로, 세로 화면 회전 경험을 다양한 크기의 TV와<br>벽걸이 사용성까지 확장</p>`;
    document.querySelector("#lthumb12").innerHTML =
        `<img src="resources/image/013_Bespoke-1DR-RR7000A_276x276_2022.png">
        <b>Bespoke 1DR<br>RR7000A</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p>터치 오픈 시스템으로 심플하면서도 스마트한 경험 제공</p>`;
    document.querySelector("#lthumb13").innerHTML =
        `<img src="resources/image/014_Bespoke-1DR-RR9000B_276x276_2022.png">
        <b>Bespoke 1DR<br>RR9000B</b>
        <div class="content_title">IF·GOOD DESIGN</div>
        <p>터치 오픈 시스템으로 가구장과 조화로운 구성 및 라이프스타일에 따라<br> 추가 설치 가능한 디자인</p>`;
    document.querySelector("#lthumb14").innerHTML =
        `<img src="resources/image/015_Bespoke-4DR-Flex-RF9000-7000-Series_276x276_2022.png">
        <b>Bespoke 4DR<br>RF9000/7000<br>Series</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p>위생에 대한 관심이 높고 깔끔한 외관을 선호하는 흐름에 맞춰 정수기를<br>냉장고 문 안쪽에 배치</p>`;
    document.querySelector("#lthumb15").innerHTML =
        `<img src="resources/image/016_Bespoke-4DR-Multi-RQ9500A_276x276_2022.png">
        <b>Bespoke 4DR<br>RQ9500A</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p>냉장고 문에 곡물 디스펜서 및 하단에 변온 기능을 가진 멀티 트레이<br>장착으로 사용 편의성 향상</p>`;
    document.querySelector("#lthumb16").innerHTML =
        `<img src="resources/image/017_Bespoke-AirDresser_276x276_2022.png">
        <b>Bespoke<br>AirDresser</b>
        <div class="content_title">IF</div>
        <p>빌트인 또는 단독 어떤 방식으로 놓더라도 공간과 조화로운 디자인의 의류<br>관리 제품</p>`;
    document.querySelector("#lthumb17").innerHTML =
        `<img src="resources/image/018_Bespoke-Curator-AI_276x276_2022.png">
        <b>Bespoke<br>Curator AI</b>
        <div class="content_title">GOOD DESIGN</div>
        <p>비스포크 제품 색상 선택 시 겪는 고민을 덜어주기 위해 제작된 대화형<br>웹사이트</p>`;
    document.querySelector("#lthumb18").innerHTML =
        `<img src="resources/image/019_Bespoke-Dishwasher-Countertop_276x276_2022.png">
        <b>Bespoke<br>Dishwasher<br>Countertop</b>
        <div class="content_title">IDEA</div>
        <p>미니멀한 형태의 디자인으로 협소한 공간에서도 사용할 수 있는 카운터탑<br>식기세척기</p>`;
    document.querySelector("#lthumb19").innerHTML =
        `<img src="resources/image/020_Bespoke-FDR-RF8000-Series_276x276_2022.png">
        <b>Bespoke FDR<br>RF8000 Series</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p>스테인리스 스틸과 글라스 마감을 적용해 내구성과 공간의 품격을 높인<br>디자인</p>`;
    document.querySelector("#lthumb20").innerHTML =
        `<img src="resources/image/021_Bespoke-Grande-AI-2.0_276x276_2022.png">
        <b>Bespoke<br>Grande AI 2.0</b>
        <div class="content_title">IDEA·IF·GOOD DESIGN</div>
        <p>직렬, 병렬, 단독으로 자유롭게 설치 가능하면서도 공간을 돋보이게 하는<br>심플한 디자인</p>`;
    document.querySelector("#lthumb21").innerHTML =
        `<img src="resources/image/022_Bespoke-Induction-Built-in-Infinite-Line_276x276_2022.png">
        <b>Bespoke<br>Induction Built-in<br>Infinite Line</b>
        <div class="content_title">GOOD DESIGN</div>
        <p>마그네틱 노브로 직관적이고 편리한 사용성을 제공하고, 고급스러움과<br>견고함이 강조된 인덕션 디자인</p>`;
    document.querySelector("#lthumb22").innerHTML =
        `<img src="resources/image/023_Bespoke-Jet-Bot-AI-UX_276x276_2022.png">
        <b>Bespoke<br>Jet Bot AI UX</b>
        <div class="content_title">IF</div>
        <p>AI 자율주행으로 집 구조와 가전, 가구를 인식하고, 시간이 지날수록<br>효율적으로 청소해주는 로봇청소기</p>`;
    document.querySelector("#lthumb23").innerHTML =
        ` <img src="resources/image/024_Bespoke-Jet-VS9500_276x276_2022.png">
        <b>Bespoke Jet™<br>VS9500</b>
        <div class="content_title">IDEA·IF</div>
        <p>청정 스테이션에 슬림한 버티컬 마이크로 패턴을 접목, 주변 환경과<br>조화로운 디자인</p>`;
    document.querySelector("#lthumb24").innerHTML =
        `<img src="resources/image/012_Bespoke-Kitchen-Package-CMF-Strategy_276x276_2022.png">
        <b>Bespoke<br>Kitchen Package<br>CMF Strategy</b>
        <div class="content_title">IDEA</div>
        <p>사용자의 취향을 반영하는 비스포크 개념을 조리 기기까지 확장한 CMF<br>제안</p>`;
    // large thumbs종료
    // change2022종료
}