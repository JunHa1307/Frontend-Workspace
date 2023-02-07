let arr1 = document.querySelectorAll(".year1");
let a = document.querySelectorAll("a[id=off],a[id=on]");
let arr2 = document.querySelectorAll(".langbtn");

change2022();

// 년도 , 언어 변화 기능
for (let i = 0; i < 5; i++) {
    a[i].addEventListener("click", function () {
        setTimeout(check, 50);
        setTimeout(en_check, 50);
    });
}

function check() {
    if (a[0].id == "on") {
        if (arr1[0].id == "on") {
            change2022();
        } else if (arr1[1].id == "on") {
            change2021();
        }
    }
}

function en_check() {
    if (a[1].id == "on") {
        if (arr1[0].id == "on") {
            change2022();
            en_change2022();
        } else if (arr1[1].id == "on") {
            change2021();
            en_change2021();
        }
    }
}


// default => .year , sthumb$ 내용
function default2021() {
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

function default2022() {
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
