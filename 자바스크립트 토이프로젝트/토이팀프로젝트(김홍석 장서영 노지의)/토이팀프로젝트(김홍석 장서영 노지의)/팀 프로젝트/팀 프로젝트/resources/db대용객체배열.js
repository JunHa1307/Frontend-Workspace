let itemarray = [];
let resultSet = [];
let selectedItem;
resultSet = itemarray;

let item1 = new Item("[프로스펙스X로우로우]", "LOCAL TRIP 103", 139000, 72, 190, 280);
item1.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0MS20S613&ITHR_CD=null&CAT_GB=10006&NT=1";
item1.imgs.push("https://img.prospecs.com/prod/PS0MS20/PS0MS20S613/PS0MS20S613_01.jpg/dims/resizef/1024x1024/optimize");
item1.imgs.push("https://img.prospecs.com/prod/PS0MS20/PS0MS20S613/PS0MS20S613_02.jpg/dims/resizef/1024x1024/optimize");
item1.imgs.push("https://img.prospecs.com/prod/PS0MS20/PS0MS20S613/PS0MS20S613_03.jpg/dims/resizef/1024x1024/optimize");
item1.imgs.push("https://img.prospecs.com/prod/PS0MS20/PS0MS20S613/PS0MS20S613_04.jpg/dims/resizef/1024x1024/optimize");
item1.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0MS20S613&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0MS20S613%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item1.male = true;
item1.female = true;
item1.coupon = true;
item1.purple = true;
item1.white = true;
item1.baisy = true;
item1.distinct = "스니커즈";
item1.date = new Date(2023, 1, 6);
item1.saleRate = 2421;
item1.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• VIBRAM 솔을 적용, 접지에 따라 무게를 분산하는 터치 다운(TOUCH-DOWN) 기능 구현<br>• 갑피 전체에 레이저 펀칭을 적용함으로써 통기성이 좋아 오래 걸어도 쾌적하게 신을 수 있는 신발<br>• WAX CHAMUDE 자재를 갑피 전체에 홑겹으로 적용, 고급스러운 소재의 느낌과 부드러운 자재로 착용감이 뛰어남<br>• RAWROW의 Signature인 천연가죽 소재를 안감과 힐탑에 적용<br></span>';
itemarray.push(item1);

let item2 = new Item("[LIFESTYLE]", "그랜드슬램 82WT", 89000, 0, 200, 300);
item2.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F401&ITHR_CD=null&CAT_GB=10006&NT=1";
item2.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F401/PS0US22F401_01.jpg/dims/resizef/1024x1024/optimize");
item2.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F401/PS0US22F401_02.jpg/dims/resizef/1024x1024/optimize");
item2.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F401/PS0US22F401_03.jpg/dims/resizef/1024x1024/optimize");
item2.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F401/PS0US22F401_04.jpg/dims/resizef/1024x1024/optimize");
item2.iframe="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F401&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F401%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item2.male = true;
item2.female = true;
item2.coupon = true;
item2.green = true;
item2.white = true;
item2.distinct = "스니커즈";
item2.date = new Date(2000, 1, 1);
item2.saleRate = 453453;
item2.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 80년대 오리지널 테니스화 아카이브에서 영감을 받은 모델<br>• 오리지널 모델의 디테일이 살아있는 어퍼 패턴과 편안한 착화감을 자랑하는 신규 아웃솔 적용<br>• 심플한 디자인의 관리가 편한 신세틱 어퍼를 사용하여 어느룩에도 데일리 착화가 가능한 캐쥬얼 스타일</span>';
itemarray.push(item2);

let item3 = new Item("[LIFESTYLE]", "그랜드슬램 82RD", 89000, 0, 200, 300);
item3.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F403&ITHR_CD=null&CAT_GB=10006";
item3.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F403/PS0US22F403_01.jpg/dims/resizef/1024x1024/optimize");
item3.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F403/PS0US22F403_02.jpg/dims/resizef/1024x1024/optimize");
item3.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F403/PS0US22F403_03.jpg/dims/resizef/1024x1024/optimize");
item3.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F403/PS0US22F403_D01.jpg/dims/resizef/1024x1024/optimize");
item3.iframe="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F403&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F403%26ITHR_CD%3Dnull%26CAT_GB%3D10006&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item3.male = true;
item3.female = true;
item3.coupon = true;
item3.red = true;
item3.white = true;
item3.distinct = "스니커즈";
item3.date = new Date(1998, 7, 8);
item3.saleRate = 2524;
item3.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 80년대 오리지널 테니스화 아카이브에서 영감을 받은 모델<br>• 오리지널 모델의 디테일이 살아있는 어퍼 패턴과 편안한 착화감을 자랑하는 신규 아웃솔 적용<br>• 심플한 디자인의 관리가 편한 신세틱 어퍼를 사용하여 어느룩에도 데일리 착화가 가능한 캐쥬얼 스타일</span>';
itemarray.push(item3);


let item4 = new Item("[LIFESTYLE]", "티렐 101", 99000, 0, 210, 340);
item4.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F101&ITHR_CD=null&CAT_GB=10006&NT=1";
item4.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F101/PS0US22F101_01.jpg/dims/resizef/1024x1024/optimize");
item4.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F101/PS0US22F101_02.jpg/dims/resizef/1024x1024/optimize");
item4.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F101/PS0US22F101_03.jpg/dims/resizef/1024x1024/optimize");
item4.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F101/PS0US22F101_04.jpg/dims/resizef/1024x1024/optimize");
item4.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F101&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F101%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item4.male = true;
item4.female = true;
item4.coupon = true;
item4.baisy = true;
item4.white = true;
item4.distinct = "스니커즈";
item4.date = new Date(1998, 7, 8);
item4.saleRate = 12012;
item4.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 트레일 러닝화 컨셉을 캐쥬얼하게 해석한 스니커즈<br>• 접지력이 높은 아웃솔 러버를 적용, 아웃도어 활동에서도 적합한 스니커즈<br>• 측면 메쉬에 레터링 로고를 적용하며 입체감있는 디자인 원 포인트</span>';
itemarray.push(item4);


let item5 = new Item("[LIFESTYLE]", "티렐 102", 99000, 0, 210, 340);
item5.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F102&ITHR_CD=null&CAT_GB=10006&NT=1";
item5.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F102/PS0US22F102_01.jpg/dims/resizef/1024x1024/optimize");
item5.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F102/PS0US22F102_02.jpg/dims/resizef/1024x1024/optimize");
item5.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F102/PS0US22F102_03.jpg/dims/resizef/1024x1024/optimize");
item5.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F102/PS0US22F102_04.jpg/dims/resizef/1024x1024/optimize");
item5.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F102&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F102%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item5.male = true;
item5.female = true;
item5.coupon = true;
item5.gray = true;
item5.white = true;
item5.baisy = true;
item5.black = true;
item5.distinct = "스니커즈";
item5.date = new Date(1998, 7, 8);
item5.saleRate = 4524;
item5.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 트레일 러닝화 컨셉을 캐쥬얼하게 해석한 스니커즈<br>• 접지력이 높은 아웃솔 러버를 적용, 아웃도어 활동에서도 적합한 스니커즈<br>• 측면 메쉬에 레터링 로고를 적용하며 입체감있는 디자인 원 포인트</span>';
itemarray.push(item5);


let item6 = new Item("[LIFESTYLE]", "JQ 101", 89000, 0, 180, 190);
item6.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F301&ITHR_CD=null&CAT_GB=10006&NT=1";
item6.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F301/PS0US22F301_01.jpg/dims/resizef/1024x1024/optimize");
item6.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F301/PS0US22F301_02.jpg/dims/resizef/1024x1024/optimize");
item6.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F301/PS0US22F301_03.jpg/dims/resizef/1024x1024/optimize");
item6.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F301/PS0US22F301_04.jpg/dims/resizef/1024x1024/optimize");
item6.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F301&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F301%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item6.male = true;
item6.female = true;
item6.coupon = true;
item6.black = true;
item6.white = true;
item6.baisy = true;
item6.distinct = "스니커즈";
item6.date = new Date(2012, 6, 6);
item6.saleRate = 876;
item6.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 80년대 오리지널 조깅화에서 영감을 얻은 스니커즈<br>• F로고를 디자인 포인트로 어느 착장에나 잘 어울리는 데일리 아이템<br>• 오리지널 모델을 복각한 솔 디자인과 접지력을 높여 주는 아웃솔 돌기 적용</span>';
itemarray.push(item6);


let item7 = new Item("[LIFESTYLE]", "JQ 102", 89000, 0, 260, 290);
item7.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F302&ITHR_CD=null&CAT_GB=10006&NT=1";
item7.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F302/PS0US22F302_01.jpg/dims/resizef/1024x1024/optimize");
item7.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F302/PS0US22F302_02.jpg/dims/resizef/1024x1024/optimize");
item7.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F302/PS0US22F302_03.jpg/dims/resizef/1024x1024/optimize");
item7.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F302/PS0US22F302_04.jpg/dims/resizef/1024x1024/optimize");
item7.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F302&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F302%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item7.male = true;
item7.female = true;
item7.coupon = true;
item7.black = true;
item7.white = true;
item7.gray = true;
item7.distinct = "스니커즈";
item7.date = new Date(2012, 6, 6);
item7.saleRate = 876;
item7.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 80년대 오리지널 조깅화에서 영감을 얻은 스니커즈<br>• F로고를 디자인 포인트로 어느 착장에나 잘 어울리는 데일리 아이템<br>• 오리지널 모델을 복각한 솔 디자인과 접지력을 높여 주는 아웃솔 돌기 적용</span>';
itemarray.push(item7);


let item8 = new Item("[LIFESTYLE]", "JQ 103", 89000, 0, 225, 290);
item8.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F303&ITHR_CD=null&CAT_GB=10006&NT=1";
item8.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F303/PS0US22F303_01.jpg/dims/resizef/1024x1024/optimize");
item8.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F303/PS0US22F303_02.jpg/dims/resizef/1024x1024/optimize");
item8.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F303/PS0US22F303_03.jpg/dims/resizef/1024x1024/optimize");
item8.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F303/PS0US22F303_04.jpg/dims/resizef/1024x1024/optimize");
item8.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F303&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F303%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item8.male = true;
item8.female = true;
item8.coupon = true;
item8.red = true;
item8.white = true;
item8.gray = true;
item8.distinct = "스니커즈";
item8.date = new Date(2012, 6, 6);
item8.saleRate = 4144;
item8.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 80년대 오리지널 조깅화에서 영감을 얻은 스니커즈<br>• F로고를 디자인 포인트로 어느 착장에나 잘 어울리는 데일리 아이템<br>• 오리지널 모델을 복각한 솔 디자인과 접지력을 높여 주는 아웃솔 돌기 적용</span>';
itemarray.push(item8);


let item9 = new Item("[LIFESTYLE]", "리피티션 103", 89000, 30, 240, 290);
item9.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F803&ITHR_CD=null&CAT_GB=10006&NT=1"
item9.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F803/PS0US22F803_01.jpg/dims/resizef/1024x1024/optimize");
item9.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F803/PS0US22F803_02.jpg/dims/resizef/1024x1024/optimize");
item9.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F803/PS0US22F803_03.jpg/dims/resizef/1024x1024/optimize");
item9.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F803/PS0US22F803_04.jpg/dims/resizef/1024x1024/optimize");
item9.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F803&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F803%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item9.male = true;
item9.female = true;
item9.coupon = true;
item9.black = true;
item9.white = true;
item9.gray = true;
item9.distinct = "스니커즈";
item9.date = new Date(2012, 3, 6);
item9.saleRate = 7878;
item9.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 80~90년대 클래식 조깅화를 현대적으로 재해석한 디자인<br>• 개성 넘치는 레이어 파츠의 어퍼와 빈티지한 느낌을 살린 워드 로고가 디자인 포인트<br>• 오리지널 모델을 복각한 솔 디자인과 접지력을 높여 주는 아웃솔 돌기 적용</span>';
itemarray.push(item9);


let item10 = new Item("[온라인단독특가]", "건타임 101", 99000, 0, 200, 290);
item10.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F701&ITHR_CD=null&CAT_GB=10006&NT=1";
item10.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F701/PS0US22F701_01.jpg/dims/resizef/1024x1024/optimize");
item10.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F701/PS0US22F701_02.jpg/dims/resizef/1024x1024/optimize");
item10.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F701/PS0US22F701_03.jpg/dims/resizef/1024x1024/optimize");
item10.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F701/PS0US22F701_04.jpg/dims/resizef/1024x1024/optimize");
item10.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F701&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F701%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item10.male = true;
item10.female = true;
item10.coupon = true;
item10.gray = true;
item10.white = true;
item10.baisy = true;
item10.distinct = "스니커즈";
item10.date = new Date(2012, 3, 6);
item10.saleRate = 435453;
item10.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 다양한 레이어 디테일의 소재를 현대적인 감각으로 반영한 개성 넘치는 어퍼 디자인<br>• 임팩트 있는 디자인의 미드솔과 과거 트랙화에서 영감을 얻은 아웃솔 돌기 적용하여 접지력을 향상 시킴<br>• 파일론 중창과 PU 인솔을 적용하여 착화시 최상의 쿠셔닝과 피팅감을 제공</span>';
itemarray.push(item10);


let item11 = new Item("[온라인단독특가]", "건타임 102", 99000, 0, 250, 275);
item11.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F702&ITHR_CD=null&CAT_GB=10006&NT=1";
item11.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F702/PS0US22F702_01.jpg/dims/resizef/1024x1024/optimize");
item11.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F702/PS0US22F702_02.jpg/dims/resizef/1024x1024/optimize");
item11.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F702/PS0US22F702_03.jpg/dims/resizef/1024x1024/optimize");
item11.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F702/PS0US22F702_04.jpg/dims/resizef/1024x1024/optimize");
item11.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F702&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F702%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item11.male = true;
item11.female = true;
item11.coupon = true;
item11.white = true;
item11.baisy = true;
item11.distinct = "스니커즈";
item11.date = new Date(2012, 3, 6);
item11.saleRate = 45678;
item11.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 다양한 레이어 디테일의 소재를 현대적인 감각으로 반영한 개성 넘치는 어퍼 디자인<br>• 임팩트 있는 디자인의 미드솔과 과거 트랙화에서 영감을 얻은 아웃솔 돌기 적용하여 접지력을 향상 시킴<br>• 파일론 중창과 PU 인솔을 적용하여 착화시 최상의 쿠셔닝과 피팅감을 제공</span>';
itemarray.push(item11);


let item12 = new Item("[온라인단독특가]", "건타임 103", 99000, 0, 210, 260);
item12.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F703&ITHR_CD=null&CAT_GB=10006&NT=1";
item12.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F703/PS0US22F703_01.jpg/dims/resizef/1024x1024/optimize");
item12.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F703/PS0US22F703_02.jpg/dims/resizef/1024x1024/optimize");
item12.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F703/PS0US22F703_03.jpg/dims/resizef/1024x1024/optimize");
item12.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F703/PS0US22F703_04.jpg/dims/resizef/1024x1024/optimize");
item12.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F703&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F703%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item12.male = true;
item12.female = true;
item12.coupon = true;
item12.black = true;
item12.white = true;
item12.gray = true;
item12.distinct = "스니커즈";
item12.date = new Date(2012, 3, 6);
item12.saleRate = 654;
item12.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 다양한 레이어 디테일의 소재를 현대적인 감각으로 반영한 개성 넘치는 어퍼 디자인<br>• 임팩트 있는 디자인의 미드솔과 과거 트랙화에서 영감을 얻은 아웃솔 돌기 적용하여 접지력을 향상 시킴<br>• 파일론 중창과 PU 인솔을 적용하여 착화시 최상의 쿠셔닝과 피팅감을 제공</span>';
itemarray.push(item12);


let item13 = new Item("[LIFESTYLE]", "리피티션 101", 89000, 30, 200, 290);
item13.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F801&ITHR_CD=null&CAT_GB=10006&NT=1";
item13.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F801/PS0US22F801_01.jpg/dims/resizef/1024x1024/optimize");
item13.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F801/PS0US22F801_02.jpg/dims/resizef/1024x1024/optimize");
item13.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F801/PS0US22F801_03.jpg/dims/resizef/1024x1024/optimize");
item13.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F801/PS0US22F801_04.jpg/dims/resizef/1024x1024/optimize");
item13.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F801&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F801%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item13.male = true;
item13.female = true;
item13.coupon = true;
item13.white = true;
item13.baisy = true;
item13.distinct = "스니커즈";
item13.date = new Date(2012, 9, 9);
item13.saleRate = 345;
item13.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 80~90년대 클래식 조깅화를 현대적으로 재해석한 디자인<br>• 개성 넘치는 레이어 파츠의 어퍼와 빈티지한 느낌을 살린 워드 로고가 디자인 포인트<br>• 오리지널 모델을 복각한 솔 디자인과 접지력을 높여 주는 아웃솔 돌기 적용<br>• 신세틱 소재를 갑피에 적용하여 좀 더 캐주얼 하게 데일리로 신을 수 있는 디자인</span>';
itemarray.push(item13);


let item14 = new Item("[LIFESTYLE]", "리피티션 102", 89000, 30, 200, 290);
item14.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22F802&ITHR_CD=null&CAT_GB=10006"
item14.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F802/PS0US22F802_01.jpg/dims/resizef/1024x1024/optimize");
item14.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F802/PS0US22F802_02.jpg/dims/resizef/1024x1024/optimize");
item14.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F802/PS0US22F802_03.jpg/dims/resizef/1024x1024/optimize");
item14.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22F802/PS0US22F802_04.jpg/dims/resizef/1024x1024/optimize");
item14.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22F802&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22F802%26ITHR_CD%3Dnull%26CAT_GB%3D10006&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item14.male = true;
item14.female = true;
item14.coupon = true;
item14.white = true;
item14.baisy = true;
item14.distinct = "스니커즈";
item14.date = new Date(2012, 9, 9);
item14.saleRate = 2531;
item14.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 80~90년대 클래식 조깅화를 현대적으로 재해석한 디자인<br>• 개성 넘치는 레이어 파츠의 어퍼와 빈티지한 느낌을 살린 워드 로고가 디자인 포인트<br>• 오리지널 모델을 복각한 솔 디자인과 접지력을 높여 주는 아웃솔 돌기 적용</span>';
itemarray.push(item14);


let item15 = new Item("[LIFESTYLE]", "에어스카이 105", 79000, 30, 200, 290);
item15.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S921&ITHR_CD=null&CAT_GB=10006&NT=1";
item15.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S921/PS0US22S921_01.jpg/dims/resizef/1024x1024/optimize");
item15.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S921/PS0US22S921_02.jpg/dims/resizef/1024x1024/optimize");
item15.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S921/PS0US22S921_03.jpg/dims/resizef/1024x1024/optimize");
item15.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S921/PS0US22S921_04.jpg/dims/resizef/1024x1024/optimize");
item15.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S921&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S921%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item15.male = true;
item15.female = true;
item15.coupon = true;
item15.gray = true;
item15.baisy = true;
item15.distinct = "스니커즈";
item15.date = new Date(2012, 9, 9);
item15.saleRate = 42;
item15.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 80년대 클래식 런닝화에서 영감을 받은 패셔너블 실루엣의 조거 스니커즈<br>• 쿠셔닝이 뛰어난 미드솔 소재를 적용 편안한 착화감 제공<br>• 빈티지한 컬러와 클래식한 갑피 소재로 스타일리쉬한 코디의 포인트로 신을 수 있는 디자인</span>';
itemarray.push(item15);


let item16 = new Item("[농구화]", "헬리우스 이볼루션LOW(R)", 99000, 20, 200, 290);
item16.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0MS22S951&ITHR_CD=null&CAT_GB=10006&NT=1";
item16.imgs.push("https://img.prospecs.com/prod/PS0MS22/PS0MS22S951/PS0MS22S951_01.jpg/dims/resizef/1024x1024/optimize");
item16.imgs.push("https://img.prospecs.com/prod/PS0MS22/PS0MS22S951/PS0MS22S951_02.jpg/dims/resizef/1024x1024/optimize");
item16.imgs.push("https://img.prospecs.com/prod/PS0MS22/PS0MS22S951/PS0MS22S951_03.jpg/dims/resizef/1024x1024/optimize");
item16.imgs.push("https://img.prospecs.com/prod/PS0MS22/PS0MS22S951/PS0MS22S951_04.jpg/dims/resizef/1024x1024/optimize");
item16.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0MS22S951&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0MS22S951%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item16.male = true;
item16.coupon = true;
item16.black = true;
item16.distinct = "스니커즈";
item16.date = new Date(2012, 9, 9);
item16.saleRate = 14;
item16.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 헬리우스 이볼루션의 로우컷 버젼<br>• 영국 디자인 하우스와의 협업으로 탄생한 농구화 스타일의 스니커즈<br>• 전체 니트형 구조로 편안하면서도 피팅과 높은 착화감 구현<br>• 발가락 / 측면 / 힐부분은 니트안쪽 보강을 통해 슬라이딩과 흔들림 제어가 가능토록 설계<br>• 신규 AIR 솔과 메모리폼 인솔을 적용하여 쿠션과 탄성이 우수<br>• 논마킹 아웃솔을 적용하여 실내코트에서도 착화 가능<br>• 실제 스포츠 활동에 적합하도록 타이트한 사이즈로 제작<br>(일상용으로 활용할 시에는 반사이즈 업 권장)</span>';
itemarray.push(item16);



let item17 = new Item("[LIFESTYLE]", "빅스타 105(R)", 79000, 0, 200, 290);
item17.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S932&ITHR_CD=null&CAT_GB=10006&NT=1";
item17.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S932/PS0US22S932_01.jpg/dims/resizef/1024x1024/optimize");
item17.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S932/PS0US22S932_02.jpg/dims/resizef/1024x1024/optimize");
item17.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S932/PS0US22S932_03.jpg/dims/resizef/1024x1024/optimize");
item17.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S932/PS0US22S932_04.jpg/dims/resizef/1024x1024/optimize");
item17.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S932&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S932%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item17.male = true;
item17.female = true;
item17.coupon = true;
item17.white = true;
item17.distinct = "스니커즈";
item17.date = new Date(2017, 9, 9);
item17.saleRate = 52;
item17.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 88년 올림픽 경기 모델로 출시한 테니스화를 현대적인 기술력을 더하여 스니커즈로 재탄생<br>• 클래식한 컵솔의 외형은 유지하면서 쿠셔닝 소재를 복합 적용하여 경량성 까지 확보<br>• 오솔라이트 인솔을 적용하여 항균/항취 및 뛰어난 쿠셔닝</span>';
itemarray.push(item17);


let item18 = new Item("[LIFESTYLE]", "에어스카이 101(R)", 79000, 0, 200, 290);
item18.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S941&ITHR_CD=null&CAT_GB=10006&NT=1";
item18.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S941/PS0US22S941_01.jpg/dims/resizef/1024x1024/optimize");
item18.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S941/PS0US22S941_02.jpg/dims/resizef/1024x1024/optimize");
item18.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S941/PS0US22S941_03.jpg/dims/resizef/1024x1024/optimize");
item18.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S941/PS0US22S941_04.jpg/dims/resizef/1024x1024/optimize");
item18.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S941&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S941%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item18.male = true;
item18.female = true;
item18.coupon = true;
item18.white = true;
item18.black = true;
item18.distinct = "스니커즈";
item18.date = new Date(2017, 9, 9);
item18.saleRate = 345;
item18.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 80년대 클래식 런닝화에서 영감을 받은 패셔너블 실루엣의 조거 스니커즈<br>• 쿠셔닝이 뛰어난 미드솔 소재를 적용 편안한 착화감 제공<br>• 신세틱 소재를 갑피에 적용하여 좀 더 캐쥬얼 하게 데일리로 신을 수 있는 디자인</span>';
itemarray.push(item18);


let item19 = new Item("[LIFESTYLE]", "(리오더)스택스 TR 101(N)", 69000, 0, 180, 250);
item19.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S911&ITHR_CD=null&CAT_GB=10006&NT=1";
item19.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S911/PS0US22S911_01.jpg/dims/resizef/1024x1024/optimize");
item19.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S911/PS0US22S911_02.jpg/dims/resizef/1024x1024/optimize");
item19.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S911/PS0US22S911_03.jpg/dims/resizef/1024x1024/optimize");
item19.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S911/PS0US22S911_04.jpg/dims/resizef/1024x1024/optimize");
item19.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S911&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S911%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item19.male = true;
item19.female = true;
item19.coupon = true;
item19.baisy = true;
item19.distinct = "스니커즈";
item19.date = new Date(2017, 9, 9);
item19.saleRate = 364;
item19.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 스택스 트레일 컨셉 버전<br>• 쿠션성이 뛰어난 두툼한 미드솔과 4cm 키높이 효과<br>• 측면 3M 파이핑 적용으로 스택스만의 시그니처 적용<br>• 천연 스플리트 소재 적용하면서도 뛰어난 가성비</span>';
itemarray.push(item19);


let item20 = new Item("[LIFESTYLE]", "스택스 TR 102(N)", 69000, 0, 180, 250);
item20.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S912&ITHR_CD=null&CAT_GB=10006&NT=1";
item20.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S912/PS0US22S912_01.jpg/dims/resizef/1024x1024/optimize");
item20.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S912/PS0US22S912_02.jpg/dims/resizef/1024x1024/optimize");
item20.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S912/PS0US22S912_03.jpg/dims/resizef/1024x1024/optimize");
item20.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S912/PS0US22S912_04.jpg/dims/resizef/1024x1024/optimize");
item20.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S912&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S912%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item20.male = true;
item20.female = true;
item20.coupon = true;
item20.black = true;
item20.distinct = "스니커즈";
item20.date = new Date(2017, 9, 9);
item20.saleRate = 263;
item20.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 스택스 트레일 컨셉 버전<br>• 쿠션성이 뛰어난 두툼한 미드솔과 4cm 키높이 효과<br>• 측면 3M 파이핑 적용으로 스택스만의 시그니처 적용<br>• 천연 스플리트 소재 적용하면서도 뛰어난 가성비</span>';
itemarray.push(item20);


let item21 = new Item("[LIFESTYLE]", "빅스타 102(R)", 79000, 0, 180, 250);
item21.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S931&ITHR_CD=null&CAT_GB=10006&NT=1";
item21.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S931/PS0US22S931_01.jpg/dims/resizef/1024x1024/optimize");
item21.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S931/PS0US22S931_02.jpg/dims/resizef/1024x1024/optimize");
item21.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S931/PS0US22S931_03.jpg/dims/resizef/1024x1024/optimize");
item21.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S931/PS0US22S931_04.jpg/dims/resizef/1024x1024/optimize");
item21.iframe ="";
item21.male = true;
item21.female = true;
item21.coupon = true;
item21.black = true;
item21.white = true;
item21.baisy = true;
item21.distinct = "스니커즈";
item21.date = new Date(2017, 9, 9);
item21.saleRate = 463364;
item21.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 88년 올림픽 경기 모델로 출시한 테니스화를 현대적인 기술력을 더하여 스니커즈로 재탄생<br>• 클래식한 컵솔의 외형은 유지하면서 쿠셔닝 소재를 복합 적용하여 경량성 까지 확보<br>• 오솔라이트 인솔을 적용하여 항균/항취 및 뛰어난 쿠셔닝</span>';
itemarray.push(item21);


let item22 = new Item("[LIFESTYLE]", "스택스 TR BOA 102(R)", 99000, 0, 180, 250);
item22.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S902&ITHR_CD=null&CAT_GB=10006&NT=1";
item22.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S902/PS0US22S902_01.jpg/dims/resizef/1024x1024/optimize");
item22.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S902/PS0US22S902_02.jpg/dims/resizef/1024x1024/optimize");
item22.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S902/PS0US22S902_03.jpg/dims/resizef/1024x1024/optimize");
item22.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S902/PS0US22S902_04.jpg/dims/resizef/1024x1024/optimize");
item22.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S902&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S902%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item22.male = true;
item22.female = true;
item22.coupon = true;
item22.black = true;
item22.distinct = "스니커즈";
item22.date = new Date(2008, 9, 9);
item22.saleRate = 532;
item22.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 스택스 TR의 보아 다이얼 시스템을 적용, 고급스러움과 신고 벗을 때 편리함을 업그레이드한 제품<br>• 극세사 신세틱 자재를 적용, FW 시즌성에 어울리는 자재로 업데이트하며 내구성을 보완<br>• 톤앤톤 컬러웨이 전개로 무난하면서 세련된 무드를 제공</span>';
itemarray.push(item22);


let item23 = new Item("[LIFESTYLE]", "스택스 TR BOA 102(R)", 99000, 0, 200, 280);
item23.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S901&ITHR_CD=null&CAT_GB=10006&NT=1";
item23.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S901/PS0US22S901_01.jpg/dims/resizef/1024x1024/optimize");
item23.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S901/PS0US22S901_02.jpg/dims/resizef/1024x1024/optimize");
item23.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S901/PS0US22S901_03.jpg/dims/resizef/1024x1024/optimize");
item23.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S901/PS0US22S901_04.jpg/dims/resizef/1024x1024/optimize");
item23.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S901&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S901%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item23.male = true;
item23.female = true;
item23.coupon = true;
item23.gray = true;
item23.white = true;
item23.baisy = true;
item23.distinct = "스니커즈";
item23.date = new Date(2008, 9, 9);
item23.saleRate = 423;
item23.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 스택스 TR의 보아 다이얼 시스템을 적용, 고급스러움과 신고 벗을 때 편리함을 업그레이드한 제품<br>• 극세사 신세틱 자재를 적용, FW 시즌성에 어울리는 자재로 업데이트하며 내구성을 보완<br>• 톤앤톤 컬러웨이 전개로 무난하면서 세련된 무드를 제공</span>';
itemarray.push(item23);


let item24 = new Item("[온라인 단독특가]", "스펙터 102", 109000, 30, 200, 280);
item24.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S122&ITHR_CD=null&CAT_GB=10006&NT=1";
item24.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S122/PS0US22S122_01.jpg/dims/resizef/1024x1024/optimize");
item24.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S122/PS0US22S122_02.jpg/dims/resizef/1024x1024/optimize");
item24.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S122/PS0US22S122_03.jpg/dims/resizef/1024x1024/optimize");
item24.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S122/PS0US22S122_04.jpg/dims/resizef/1024x1024/optimize");
item24.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S122&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S122%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item24.male = true;
item24.female = true;
item24.coupon = true;
item24.black = true;
item24.distinct = "스니커즈";
item24.date = new Date(2008, 9, 9);
item24.saleRate = 634;
item24.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 편안함, 안정성, 시원함 이 3가지 수식어를 모두 갖춘 러닝화<br>• 경량화 및 착지 쿠션성을 위해 2개의 서로 다른 경도를 가진 미드솔 신규 개발<br>• 발을 안전하게 잡아줄 수 있도록 아웃솔 접지 부분 확장<br>• 편안함과 뛰어난 통기성을 제공하는 메쉬 적용<br>• 부드럽고 탄력있는 쿠셔닝과 타공 에어홀 구조로 통풍성을 높인 PU인솔 적용하여, 오래 신고 걸어도 발이 편안함</span>';
itemarray.push(item24);


let item25 = new Item("[온라인 단독특가]", "스펙터 103", 109000, 30, 200, 280);
item25.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S123&ITHR_CD=null&CAT_GB=10006&NT=1";
item25.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S123/PS0US22S123_01.jpg/dims/resizef/1024x1024/optimize");
item25.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S123/PS0US22S123_02.jpg/dims/resizef/1024x1024/optimize");
item25.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S123/PS0US22S123_03.jpg/dims/resizef/1024x1024/optimize");
item25.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S123/PS0US22S123_04.jpg/dims/resizef/1024x1024/optimize");
item25.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S123&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S123%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item25.male = true;
item25.female = true;
item25.coupon = true;
item25.navy = true;
item25.white = true;
item25.black = true;
item25.distinct = "스니커즈";
item25.date = new Date(2008, 9, 9);
item25.saleRate = 523;
item25.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 편안함, 안정성, 시원함 이 3가지 수식어를 모두 갖춘 러닝화<br>• 경량화 및 착지 쿠션성을 위해 2개의 서로 다른 경도를 가진 미드솔 신규 개발<br>• 발을 안전하게 잡아줄 수 있도록 아웃솔 접지 부분 확장<br>• 편안함과 뛰어난 통기성을 제공하는 메쉬 적용<br>• 부드럽고 탄력있는 쿠셔닝과 타공 에어홀 구조로 통풍성을 높인 PU인솔 적용하여, 오래 신고 걸어도 발이 편안함</span>';
itemarray.push(item25);


let item26 = new Item("[온라인 단독특가]", "스펙터 104", 109000, 30, 200, 280);
item26.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S124&ITHR_CD=null&CAT_GB=10006&NT=1";
item26.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S124/PS0US22S124_01.jpg/dims/resizef/1024x1024/optimize");
item26.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S124/PS0US22S124_02.jpg/dims/resizef/1024x1024/optimize");
item26.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S124/PS0US22S124_03.jpg/dims/resizef/1024x1024/optimize");
item26.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S124/PS0US22S124_04.jpg/dims/resizef/1024x1024/optimize");
item26.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S124&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S124%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item26.male = true;
item26.female = true;
item26.coupon = true;
item26.navy = true;
item26.black = true;
item26.orange = true;
item26.baisy = true;
item26.distinct = "스니커즈";
item26.date = new Date(2008, 9, 9);
item26.saleRate = 734;
item26.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 편안함, 안정성, 시원함 이 3가지 수식어를 모두 갖춘 러닝화<br>• 경량화 및 착지 쿠션성을 위해 2개의 서로 다른 경도를 가진 미드솔 신규 개발<br>• 발을 안전하게 잡아줄 수 있도록 아웃솔 접지 부분 확장<br>• 편안함과 뛰어난 통기성을 제공하는 메쉬 적용<br>• 부드럽고 탄력있는 쿠셔닝과 타공 에어홀 구조로 통풍성을 높인 PU인솔 적용하여, 오래 신고 걸어도 발이 편안함</span>';
itemarray.push(item26);


let item27 = new Item("[LIFESTYLE]", "샤이너 101", 109000, 30, 200, 280);
item27.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S141&ITHR_CD=null&CAT_GB=10006&NT=1";
item27.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S141/PS0US22S141_01.jpg/dims/resizef/1024x1024/optimize");
item27.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S141/PS0US22S141_02.jpg/dims/resizef/1024x1024/optimize");
item27.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S141/PS0US22S141_03.jpg/dims/resizef/1024x1024/optimize");
item27.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S141/PS0US22S141_04.jpg/dims/resizef/1024x1024/optimize");
item27.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S141&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S141%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item27.male = true;
item27.female = true;
item27.coupon = true;
item27.orange = true;
item27.white = true;
item27.black = true;
item27.distinct = "스니커즈";
item27.date = new Date(2008, 9, 9);
item27.saleRate = 64;
item27.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 가볍고 통기성이 좋은 TPU원단을 적용하여 안정적인 핏감을 제공<br>• 가벼운 솔을 적용하여 일상생활에도 편하게 신을 수 있는 신발<br>• 신 끈 팁에 포인트 컬러를 적용하여 디자인 원포인트로 활용</span>';
itemarray.push(item27);


let item28 = new Item("[LIFESTYLE]", "샤이너 102", 109000, 30, 200, 280);
item28.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S142&ITHR_CD=null&CAT_GB=10006&NT=1";
item28.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S142/PS0US22S142_01.jpg/dims/resizef/1024x1024/optimize");
item28.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S142/PS0US22S142_02.jpg/dims/resizef/1024x1024/optimize");
item28.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S142/PS0US22S142_03.jpg/dims/resizef/1024x1024/optimize");
item28.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S142/PS0US22S142_04.jpg/dims/resizef/1024x1024/optimize");
item28.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S142&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S142%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item28.male = true;
item28.female = true;
item28.coupon = true;
item28.orange = true;
item28.white = true;
item28.black = true;
item28.distinct = "스니커즈";
item28.date = new Date(2020, 3, 9);
item28.saleRate = 634;
item28.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 가볍고 통기성이 좋은 TPU원단을 적용하여 안정적인 핏감을 제공<br>• 가벼운 솔을 적용하여 일상생활에도 편하게 신을 수 있는 신발<br>• 신 끈 팁에 포인트 컬러를 적용하여 디자인 원포인트로 활용</span>';
itemarray.push(item28);


let item29 = new Item("[LIFESTYLE]", "샤이너 103", 109000, 30, 255, 270);
item29.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0WS22S143&ITHR_CD=null&CAT_GB=10006&NT=1";
item29.imgs.push("https://img.prospecs.com/prod/PS0WS22/PS0WS22S143/PS0WS22S143_01.jpg/dims/resizef/1024x1024/optimize");
item29.imgs.push("https://img.prospecs.com/prod/PS0WS22/PS0WS22S143/PS0WS22S143_02.jpg/dims/resizef/1024x1024/optimize");
item29.imgs.push("https://img.prospecs.com/prod/PS0WS22/PS0WS22S143/PS0WS22S143_03.jpg/dims/resizef/1024x1024/optimize");
item29.imgs.push("https://img.prospecs.com/prod/PS0WS22/PS0WS22S143/PS0WS22S143_04.jpg/dims/resizef/1024x1024/optimize");
item29.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0WS22S143&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0WS22S143%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item29.male = true;
item29.female = true;
item29.coupon = true;
item29.white = true;
item29.blue = true;
item29.baisy = true;
item29.pink = true;
item29.distinct = "스니커즈";
item29.date = new Date(2020, 3, 9);
item29.saleRate = 867;
item29.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 가볍고 통기성이 좋은 TPU원단을 적용하여 안정적인 핏감을 제공<br>• 가벼운 솔을 적용하여 일상생활에도 편하게 신을 수 있는 신발<br>• 신 끈 팁에 포인트 컬러를 적용하여 디자인 원포인트로 활용</span>';
itemarray.push(item29);


let item30 = new Item("[온라인 단독특가]", "스펙터 101", 109000, 30, 255, 270);
item30.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S121&ITHR_CD=null&CAT_GB=10006&NT=1";
item30.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S121/PS0US22S121_01.jpg/dims/resizef/1024x1024/optimize");
item30.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S121/PS0US22S121_02.jpg/dims/resizef/1024x1024/optimize");
item30.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S121/PS0US22S121_03.jpg/dims/resizef/1024x1024/optimize");
item30.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S121/PS0US22S121_04.jpg/dims/resizef/1024x1024/optimize");
item30.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S121&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S121%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item30.male = true;
item30.female = true;
item30.coupon = true;
item30.white = true;
item30.baisy = true;
item30.distinct = "스니커즈";
item30.date = new Date(2020, 3, 9);
item30.saleRate = 4656;
item30.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 편안함, 안정성, 시원함 이 3가지 수식어를 모두 갖춘 러닝화<br>• 경량화 및 착지 쿠션성을 위해 2개의 서로 다른 경도를 가진 미드솔 신규 개발<br>• 발을 안전하게 잡아줄 수 있도록 아웃솔 접지 부분 확장<br>• 편안함과 뛰어난 통기성을 제공하는 메쉬 적용<br>• 부드럽고 탄력있는 쿠셔닝과 타공 에어홀 구조로 통풍성을 높인 PU인솔 적용하여, 오래 신고 걸어도 발이 편안함</span>';
itemarray.push(item30);




//----------------------------스니커즈30개 db 끝---------------------------


let item31 = new Item("[LIFESTYLE]", "ORT 101", 49000, 20, 230, 300);
item31.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UH22S301&ITHR_CD=null&CAT_GB=10006&NT=1";
item31.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S301/PS0UH22S301_01.jpg/dims/resizef/1024x1024/optimize");
item31.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S301/PS0UH22S301_02.jpg/dims/resizef/1024x1024/optimize");
item31.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S301/PS0UH22S301_03.jpg/dims/resizef/1024x1024/optimize");
item31.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S301/PS0UH22S301_04.jpg/dims/resizef/1024x1024/optimize");
item31.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UH22S301&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UH22S301%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item31.male = true;
item31.female = true;
item31.coupon = true;
item31.white = true;
item31.distinct = "샌들/슬라이드";
item31.date = new Date(2020, 8, 9);
item31.saleRate = 856;
item31.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 인젝션 파일론 공법으로 만들어 쿠셔닝이 뛰어난 것이 특징인 쪼리 샌달<br>• 경도 조절을 통해 충격 흡수 효과 극대화<br>• 발바닥 아치를 편안하게 지지하여 착화 시 편안함 제공<br>• 좌우 흔들림을 최소화 시켜주는 측면 그루브 라인 적용<br>• 사이즈를 선택하실 때 참고해주세요<br>S : 230 ~ 240<br>M : 245 ~ 255<br>L : 260 ~ 270<br>XL : 275 ~ 285</span>';
itemarray.push(item31);

let item32 = new Item("[LIFESTYLE]", "ORT 102", 49000, 20, 255, 270);
item32.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UH22S302&ITHR_CD=null&CAT_GB=10006&NT=1";
item32.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S302/PS0UH22S302_01.jpg/dims/resizef/530x530/optimize");
item32.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S302/PS0UH22S302_02.jpg/dims/resizef/530x530/optimize");
item32.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S302/PS0UH22S302_03.jpg/dims/resizef/530x530/optimize");
item32.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S302/PS0UH22S302_04.jpg/dims/resizef/530x530/optimize");
item32.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UH22S302&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UH22S302%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item32.male = true;
item32.female = true;
item32.coupon = true;
item32.black = true;
item32.distinct = "샌들/슬라이드";
item32.date = new Date(2020, 8, 9);
item32.saleRate = 364;
item32.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 인젝션 파일론 공법으로 만들어 쿠셔닝이 뛰어난 것이 특징인 쪼리 샌달<br>• 경도 조절을 통해 충격 흡수 효과 극대화<br>• 발바닥 아치를 편안하게 지지하여 착화 시 편안함 제공<br>• 좌우 흔들림을 최소화 시켜주는 측면 그루브 라인 적용<br>• 사이즈를 선택하실 때 참고해주세요<br>S : 230 ~ 240<br>M : 245 ~ 255<br>L : 260 ~ 270<br>XL : 275 ~ 285</span>';
itemarray.push(item32);

let item33 = new Item("[LIFESTYLE]", "ORT 103", 49000, 20, 180, 290);
item33.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UH22S303&ITHR_CD=null&CAT_GB=10006&NT=1";
item33.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S303/PS0UH22S303_01.jpg/dims/resizef/530x530/optimize");
item33.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S303/PS0UH22S303_02.jpg/dims/resizef/530x530/optimize");
item33.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S303/PS0UH22S303_03.jpg/dims/resizef/530x530/optimize");
item33.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S303/PS0UH22S303_04.jpg/dims/resizef/530x530/optimize");
item33.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UH22S303&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UH22S303%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item33.male = true;
item33.female = true;
item33.coupon = true;
item33.white = true;
item33.distinct = "샌들/슬라이드";
item33.date = new Date(2020, 8, 9);
item33.saleRate = 586;
item33.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 인젝션 파일론 공법으로 만들어 쿠셔닝이 뛰어난 것이 특징인 쪼리 샌달<br>• 경도 조절을 통해 충격 흡수 효과 극대화<br>• 발바닥 아치를 편안하게 지지하여 착화 시 편안함 제공<br>• 좌우 흔들림을 최소화 시켜주는 측면 그루브 라인 적용<br>• 사이즈를 선택하실 때 참고해주세요<br>S : 230 ~ 240<br>M : 245 ~ 255<br>L : 260 ~ 270<br>XL : 275 ~ 285</span>';
itemarray.push(item33);

let item34 = new Item("[LIFESTYLE]", "OSL 102", 54000, 20, 180, 290);
item34.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UL22S102&ITHR_CD=null&CAT_GB=10006&NT=1";
item34.imgs.push("https://img.prospecs.com/prod/PS0UL22/PS0UL22S102/PS0UL22S102_01.jpg/dims/resizef/530x530/optimize");
item34.imgs.push("https://img.prospecs.com/prod/PS0UL22/PS0UL22S102/PS0UL22S102_02.jpg/dims/resizef/530x530/optimize");
item34.imgs.push("https://img.prospecs.com/prod/PS0UL22/PS0UL22S102/PS0UL22S102_03.jpg/dims/resizef/530x530/optimize");
item34.imgs.push("https://img.prospecs.com/prod/PS0UL22/PS0UL22S102/PS0UL22S102_04.jpg/dims/resizef/530x530/optimize");
item34.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UL22S102&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UL22S102%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item34.male = true;
item34.female = true;
item34.coupon = true;
item34.black = true;
item34.distinct = "샌들/슬라이드";
item34.date = new Date(2020, 8, 9);
item34.saleRate = 634;
item34.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 쿠셔닝이 뛰어난 신규 솔을 개발 및 적용, 실내외 및 다양한 환경에서 착용이 가능한 슬라이드<br>• 로고를 양각으로 상단에 적용함으로써 미니멀하면서도 스포티한 무드 제공</span>';
itemarray.push(item34);


let item35 = new Item("[LIFESTYLE]", "OTH 101", 39000, 50, 180, 290);
item35.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UH22S201&ITHR_CD=null&CAT_GB=10006&NT=1";
item35.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S201/PS0UH22S201_01.jpg/dims/resizef/530x530/optimize");
item35.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S201/PS0UH22S201_02.jpg/dims/resizef/530x530/optimize");
item35.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S201/PS0UH22S201_03.jpg/dims/resizef/530x530/optimize");
item35.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S201/PS0UH22S201_04.jpg/dims/resizef/530x530/optimize");
item35.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UH22S201&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UH22S201%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item35.male = true;
item35.female = true;
item35.coupon = true;
item35.purple = true;
item35.white = true;
item35.baisy = true;
item35.distinct = "샌들/슬라이드";
item35.date = new Date(2020, 1, 9);
item35.saleRate = 967;
item35.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 신발 생산 시 발생하는 폐기물을 재활용하여 솔에 적용한 친환경 제품<br>• 직조 고리 적용으로 착화 시 통증 완화 <br>• 미립분자로 인한 스펀지 내부의 구멍으로 탄성과 경량성 향상<br>• 다양한 컬러의 미립 분자 구조물의 디자인 포인트<br>• 약 2CM 굽으로 편안한 쿠셔닝</span>';
itemarray.push(item35);


let item36 = new Item("[LIFESTYLE]", "OTH 102", 39000, 50, 180, 290);
item36.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UH22S202&ITHR_CD=null&CAT_GB=10006&NT=1";
item36.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S202/PS0UH22S202_01.jpg/dims/resizef/1024x1024/optimize");
item36.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S202/PS0UH22S202_02.jpg/dims/resizef/1024x1024/optimize");
item36.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S202/PS0UH22S202_03.jpg/dims/resizef/1024x1024/optimize");
item36.imgs.push("https://img.prospecs.com/prod/PS0UH22/PS0UH22S202/PS0UH22S202_04.jpg/dims/resizef/1024x1024/optimize");
item36.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UH22S202&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UH22S202%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item36.male = true;
item36.female = true;
item36.coupon = true;
item36.black = true;
item36.white = true;
item36.distinct = "샌들/슬라이드";
item36.date = new Date(2020, 1, 9);
item36.saleRate = 75;
item36.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 신발 생산 시 발생하는 폐기물을 재활용하여 솔에 적용한 친환경 제품<br>• 직조 고리 적용으로 착화 시 통증 완화 <br>• 미립분자로 인한 스펀지 내부의 구멍으로 탄성과 경량성 향상<br>• 다양한 컬러의 미립 분자 구조물의 디자인 포인트<br>• 약 2CM 굽으로 편안한 쿠셔닝</span>';
itemarray.push(item36);


let item37 = new Item("[LIFESTYLE]", "OSL 101", 54000, 20, 180, 290);
item37.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UL22S101&ITHR_CD=null&CAT_GB=10006&NT=1";
item37.imgs.push("https://img.prospecs.com/prod/PS0UL22/PS0UL22S101/PS0UL22S101_01.jpg/dims/resizef/1024x1024/optimize");
item37.imgs.push("https://img.prospecs.com/prod/PS0UL22/PS0UL22S101/PS0UL22S101_02.jpg/dims/resizef/1024x1024/optimize");
item37.imgs.push("https://img.prospecs.com/prod/PS0UL22/PS0UL22S101/PS0UL22S101_03.jpg/dims/resizef/1024x1024/optimize");
item37.imgs.push("https://img.prospecs.com/prod/PS0UL22/PS0UL22S101/PS0UL22S101_04.jpg/dims/resizef/1024x1024/optimize");
item37.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UL22S101&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UL22S101%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item37.male = true;
item37.female = true;
item37.coupon = true;
item37.white = true;
item37.navy = true;
item37.distinct = "샌들/슬라이드";
item37.date = new Date(2020, 1, 9);
item37.saleRate = 253;
item37.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 쿠셔닝이 뛰어난 신규 솔을 개발 및 적용, 실내외 및 다양한 환경에서 착용이 가능한 슬라이드<br>• 로고를 양각으로 상단에 적용함으로써 미니멀하면서도 스포티한 무드 제공</span>';
itemarray.push(item37);


let item38 = new Item("[LIFESTYLE]", "플렉스 101", 49000, 20, 180, 290);
item38.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S311&ITHR_CD=null&CAT_GB=10006&NT=1";
item38.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S311/PS0US22S311_01.jpg/dims/resizef/1024x1024/optimize");
item38.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S311/PS0US22S311_02.jpg/dims/resizef/1024x1024/optimize");
item38.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S311/PS0US22S311_03.jpg/dims/resizef/1024x1024/optimize");
item38.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S311/PS0US22S311_04.jpg/dims/resizef/1024x1024/optimize");
item38.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S311&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S311%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item38.male = true;
item38.female = true;
item38.coupon = true;
item38.gray = true;
item38.white = true;
item38.baisy = true;
item38.distinct = "샌들/슬라이드";
item38.date = new Date(2023, 1, 2);
item38.saleRate = 4475;
item38.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 인젝션 파일론 공법으로 만들어 뛰어난 쿠셔닝과 경량성이 특징인 뮬 타입 슬라이드<br>• 오리지널 라인 히트 상품인 빅스타의 모양을 오마주하여 미니멀한 디자인 포인트로 적용<br>• 간절기 뮬에 맞게 타공을 적용하여 한 여름에 신어도 통기성이 우수하여 쾌적한 착화감 제공<br>• 사이즈를 선택하실 때 참고해주세요 <br> S : 230~240 / M : 245~255 / L : 260~270 / XL : 270~285  </span>';
itemarray.push(item38);


let item39 = new Item("[LIFESTYLE]", "플렉스 102", 49000, 20, 180, 290);
item39.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0US22S312&ITHR_CD=null&CAT_GB=10006&NT=1";
item39.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S312/PS0US22S312_01.jpg/dims/resizef/1024x1024/optimize");
item39.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S312/PS0US22S312_02.jpg/dims/resizef/1024x1024/optimize");
item39.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S312/PS0US22S312_03.jpg/dims/resizef/1024x1024/optimize");
item39.imgs.push("https://img.prospecs.com/prod/PS0US22/PS0US22S312/PS0US22S312_04.jpg/dims/resizef/1024x1024/optimize");
item39.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0US22S312&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0US22S312%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item39.male = true;
item39.female = true;
item39.coupon = true;
item39.black = true;
item39.distinct = "샌들/슬라이드";
item39.date = new Date(2023, 1, 5);
item39.saleRate = 523;
item39.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 인젝션 파일론 공법으로 만들어 뛰어난 쿠셔닝과 경량성이 특징인 뮬 타입 슬라이드<br>• 오리지널 라인 히트 상품인 빅스타의 모양을 오마주하여 미니멀한 디자인 포인트로 적용<br>• 간절기 뮬에 맞게 타공을 적용하여 한 여름에 신어도 통기성이 우수하여 쾌적한 착화감 제공 <br>• 사이즈를 선택하실 때 참고해주세요  <br> S : 230~240 / M : 245~255 / L : 260~270 / XL : 270~285</span>';
itemarray.push(item39);


let item40 = new Item("[LIFESTYLE]", "OR 1988", 59000, 60, 180, 290);
item40.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UL21S901&ITHR_CD=null&CAT_GB=10006&NT=1";
item40.imgs.push("https://img.prospecs.com/prod/PS0UL21/PS0UL21S901/PS0UL21S901_01.jpg/dims/resizef/530x530/optimize");
item40.imgs.push("https://img.prospecs.com/prod/PS0UL21/PS0UL21S901/PS0UL21S901_02.jpg/dims/resizef/530x530/optimize");
item40.imgs.push("https://img.prospecs.com/prod/PS0UL21/PS0UL21S901/PS0UL21S901_03.jpg/dims/resizef/530x530/optimize");
item40.imgs.push("https://img.prospecs.com/prod/PS0UL21/PS0UL21S901/PS0UL21S901_04.jpg/dims/resizef/530x530/optimize");
item40.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UL21S901&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UL21S901%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item40.male = true;
item40.female = true;
item40.coupon = true;
item40.orange = true;
item40.red = true;
item40.black = true;
item40.distinct = "샌들/슬라이드";
item40.date = new Date(2023, 1, 4);
item40.saleRate = 364;
item40.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 21SS 메인 테마인 올림픽에서 영감을 얻은 티켓 그래픽을 적용, 디자인 포인트로 활용<br>• 착화시 푹신한 착용감이 장점</span>';
itemarray.push(item40);


let item41 = new Item("[온라인특가]", "OR 2011", 79000, 50, 230, 255);
item41.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0MP21S921&ITHR_CD=null&CAT_GB=10006&NT=1";
item41.imgs.push("https://img.prospecs.com/prod/PS0MP21/PS0MP21S921/PS0MP21S921_01.jpg/dims/resizef/1024x1024/optimize");
item41.imgs.push("https://img.prospecs.com/prod/PS0MP21/PS0MP21S921/PS0MP21S921_02.jpg/dims/resizef/1024x1024/optimize");
item41.imgs.push("https://img.prospecs.com/prod/PS0MP21/PS0MP21S921/PS0MP21S921_03.jpg/dims/resizef/1024x1024/optimize");
item41.imgs.push("https://img.prospecs.com/prod/PS0MP21/PS0MP21S921/PS0MP21S921_04.jpg/dims/resizef/1024x1024/optimize");
item41.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0MP21S921&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0MP21S921%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item41.male = true;
item41.coupon = true;
item41.gray = true;
item41.baisy = true;
item41.distinct = "샌들/슬라이드";
item41.date = new Date(2023, 1, 3);
item41.saleRate = 976;
item41.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 뮬타입의 아웃도어형 제품으로 다양한 외부 활동에 어울리는 만능 샌들<br>• 어퍼에 슈레이스를 적용하여 발등에 꼭 맞도록 편안하고 안정적인 피팅이 가능<br>• 착화감/접지력의 기능적인 면과 트렌디한 디자인을 함께 살린 신규 솔 적용</span>';
itemarray.push(item41);


let item42 = new Item("[온라인특가]", "OR 2012", 79000, 50, 230, 255);
item42.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0MP21S922&ITHR_CD=null&CAT_GB=10006&NT=1";
item42.imgs.push("https://img.prospecs.com/prod/PS0MP21/PS0MP21S922/PS0MP21S922_01.jpg/dims/resizef/1024x1024/optimize");
item42.imgs.push("https://img.prospecs.com/prod/PS0MP21/PS0MP21S922/PS0MP21S922_02.jpg/dims/resizef/1024x1024/optimize");
item42.imgs.push("https://img.prospecs.com/prod/PS0MP21/PS0MP21S922/PS0MP21S922_03.jpg/dims/resizef/1024x1024/optimize");
item42.imgs.push("https://img.prospecs.com/prod/PS0MP21/PS0MP21S922/PS0MP21S922_04.jpg/dims/resizef/1024x1024/optimize");
item42.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0MP21S922&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0MP21S922%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item42.male = true;
item42.coupon = true;
item42.black = true;
item42.white = true;
item42.baisy = true;
item42.distinct = "샌들/슬라이드";
item42.date = new Date(2023, 1, 2);
item42.saleRate = 347;
item42.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 뮬타입의 아웃도어형 제품으로 다양한 외부 활동에 어울리는 만능 샌들<br>• 어퍼에 슈레이스를 적용하여 발등에 꼭 맞도록 편안하고 안정적인 피팅이 가능<br>• 착화감/접지력의 기능적인 면과 트렌디한 디자인을 함께 살린 신규 솔 적용</span>';
itemarray.push(item42);


let item43 = new Item("[온라인특가]", "OR 2001", 59000, 50, 230, 255);
item43.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UL21S911&ITHR_CD=null&CAT_GB=10006&NT=1";
item43.imgs.push("https://img.prospecs.com/prod/PS0UL21/PS0UL21S911/PS0UL21S911_01.jpg/dims/resizef/1024x1024/optimize");
item43.imgs.push("https://img.prospecs.com/prod/PS0UL21/PS0UL21S911/PS0UL21S911_02.jpg/dims/resizef/1024x1024/optimize");
item43.imgs.push("https://img.prospecs.com/prod/PS0UL21/PS0UL21S911/PS0UL21S911_03.jpg/dims/resizef/1024x1024/optimize");
item43.imgs.push("https://img.prospecs.com/prod/PS0UL21/PS0UL21S911/PS0UL21S911_04.jpg/dims/resizef/1024x1024/optimize");
item43.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UL21S911&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UL21S911%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item43.male = true;
item43.female = true;
item43.coupon = true;
item43.black = true;
item43.distinct = "샌들/슬라이드";
item43.date = new Date(2023, 0, 2);
item43.saleRate = 856;
item43.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 와이드 솔을 적용 착화시에 안정적인 착화감 제공<br>• 3개의 벨크로를 적용, 어느 발등에나 맞게 체적이 조절 가능한 점이 장점</span>';
itemarray.push(item43);


let item44 = new Item("[온라인 단독특가]", "덴슬리퍼 101", 59000, 60, 230, 255);
item44.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0WS21S794&ITHR_CD=null&CAT_GB=10006&NT=1";
item44.imgs.push("https://img.prospecs.com/prod/PS0WS21/PS0WS21S794/PS0WS21S794_01.jpg/dims/resizef/1024x1024/optimize");
item44.imgs.push("https://img.prospecs.com/prod/PS0WS21/PS0WS21S794/PS0WS21S794_02.jpg/dims/resizef/1024x1024/optimize");
item44.imgs.push("https://img.prospecs.com/prod/PS0WS21/PS0WS21S794/PS0WS21S794_03.jpg/dims/resizef/1024x1024/optimize");
item44.imgs.push("https://img.prospecs.com/prod/PS0WS21/PS0WS21S794/PS0WS21S794_04.jpg/dims/resizef/1024x1024/optimize");
item44.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0WS21S794&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0WS21S794%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item44.female = true;
item44.coupon = true;
item44.navy = true;
item44.white = true;
item44.baisy = true;
item44.distinct = "샌들/슬라이드";
item44.date = new Date(2023, 1, 2);
item44.saleRate = 2632;
item44.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 캔버스 자재 사용으로 클래식한 무드와 함께 스테디 아이템으로 활용 가능<br>• 측면에 덴스에서 직접 디자인한 로고를 톤앤톤으로 적용하며 디자인 포인트로 활용<br>• 빈티지한 느낌을 줄 수 있는 컬러웨이 적용<br>• 쿠셔닝이 좋은 인솔을 적용, 착화감 개선<br>• 데스마 공법을 사용하여 옛날 신발 제작공법을 적용, 클래식 함을 더욱 더 강조<br>• 뮬 타입으로 신고 벗기 편하며 봄/여름 피크닉 갈때 신기 좋은 스타일</span>';
itemarray.push(item44);


let item45 = new Item("[온라인 단독특가]", "덴슬리퍼 102", 59000, 60, 200, 265);
item45.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0WS21S795&ITHR_CD=null&CAT_GB=10006&NT=1";
item45.imgs.push("https://img.prospecs.com/prod/PS0WS21/PS0WS21S795/PS0WS21S795_01.jpg/dims/resizef/1024x1024/optimize");
item45.imgs.push("https://img.prospecs.com/prod/PS0WS21/PS0WS21S795/PS0WS21S795_02.jpg/dims/resizef/1024x1024/optimize");
item45.imgs.push("https://img.prospecs.com/prod/PS0WS21/PS0WS21S795/PS0WS21S795_03.jpg/dims/resizef/1024x1024/optimize");
item45.imgs.push("https://img.prospecs.com/prod/PS0WS21/PS0WS21S795/PS0WS21S795_04.jpg/dims/resizef/1024x1024/optimize");
item45.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0WS21S795&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0WS21S795%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item45.female = true;
item45.coupon = true;
item45.white = true;
item45.red = true;
item45.distinct = "샌들/슬라이드";
item45.date = new Date(2023, 1, 2);
item45.saleRate = 346;
item45.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 캔버스 자재 사용으로 클래식한 무드와 함께 스테디 아이템으로 활용 가능<br>• 측면에 덴스에서 직접 디자인한 로고를 톤앤톤으로 적용하며 디자인 포인트로 활용<br>• 빈티지한 느낌을 줄 수 있는 컬러웨이 적용<br>• 쿠셔닝이 좋은 인솔을 적용, 착화감 개선<br>• 데스마 공법을 사용하여 옛날 신발 제작공법을 적용, 클래식 함을 더욱 더 강조<br>• 뮬 타입으로 신고 벗기 편하며 봄/여름 피크닉 갈때 신기 좋은 스타일</span>';
itemarray.push(item45);


let item46 = new Item("[LIFESTYLE]", "KOR SL 101", 39000, 51, 200, 265);
item46.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UL20F941&ITHR_CD=null&CAT_GB=10006&NT=1";
item46.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F941/PS0UL20F941_01.jpg/dims/resizef/1024x1024/optimize");
item46.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F941/PS0UL20F941_02.jpg/dims/resizef/1024x1024/optimize");
item46.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F941/PS0UL20F941_03.jpg/dims/resizef/1024x1024/optimize");
item46.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F941/PS0UL20F941_04.jpg/dims/resizef/1024x1024/optimize");
item46.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UL20F941&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UL20F941%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item46.male = true;
item46.female = true;
item46.coupon = true;
item46.black = true;
item46.distinct = "샌들/슬라이드";
item46.date = new Date(1999, 12, 25);
item46.saleRate = 745;
item46.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 태극기와 대한민국 레터링을 적용한 대한민국 이미지 강조<br>• 물기에 강한 속건 소재 어퍼 소재 적용<br>• 뛰어난 쿠셔닝 소재와 미끄럼 방지 러버 설계</span>';
itemarray.push(item46);


let item47 = new Item("[LIFESTYLE]", "KOR SL 102", 39000, 51, 200, 265);
item47.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UL20F942&ITHR_CD=null&CAT_GB=10006&NT=1";
item47.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F942/PS0UL20F942_01.jpg/dims/resizef/1024x1024/optimize");
item47.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F942/PS0UL20F942_02.jpg/dims/resizef/1024x1024/optimize");
item47.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F942/PS0UL20F942_03.jpg/dims/resizef/1024x1024/optimize");
item47.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F942/PS0UL20F942_04.jpg/dims/resizef/1024x1024/optimize");
item47.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UL20F942&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UL20F942%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item47.male = true;
item47.female = true;
item47.coupon = true;
item47.navy = true;
item47.white = true;
item47.baisy = true;
item47.distinct = "샌들/슬라이드";
item47.date = new Date(1999, 12, 25);
item47.saleRate = 236;
item47.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 태극기와 대한민국 레터링을 적용한 대한민국 이미지 강조<br>• 물기에 강한 속건 소재 어퍼 소재 적용<br>• 뛰어난 쿠셔닝 소재와 미끄럼 방지 러버 설계</span>';
itemarray.push(item47);


let item48 = new Item("[LIFESTYLE]", "KOR SL 103", 39000, 51, 200, 265);
item48.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UL20F943&ITHR_CD=null&CAT_GB=10006&NT=1";
item48.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F943/PS0UL20F943_01.jpg/dims/resizef/1024x1024/optimize");
item48.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F943/PS0UL20F943_02.jpg/dims/resizef/1024x1024/optimize");
item48.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F943/PS0UL20F943_03.jpg/dims/resizef/1024x1024/optimize");
item48.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20F943/PS0UL20F943_04.jpg/dims/resizef/1024x1024/optimize");
item48.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UL20F943&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UL20F943%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item48.male = true;
item48.female = true;
item48.coupon = true;
item48.red = true;
item48.distinct = "샌들/슬라이드";
item48.date = new Date(1999, 12, 25);
item48.saleRate = 84;
item48.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">• 태극기와 대한민국 레터링을 적용한 대한민국 이미지 강조<br>• 물기에 강한 속건 소재 어퍼 소재 적용<br>• 뛰어난 쿠셔닝 소재와 미끄럼 방지 러버 설계</span>';
itemarray.push(item48);


let item49 = new Item("[온라인 단독특가]", "OR 1021", 49000, 61, 240, 290);
item49.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UL20S931&ITHR_CD=null&CAT_GB=10006&NT=1";
item49.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20S931/PS0UL20S931_01.jpg/dims/resizef/530x530/optimize");
item49.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20S931/PS0UL20S931_02.jpg/dims/resizef/530x530/optimize");
item49.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20S931/PS0UL20S931_03.jpg/dims/resizef/530x530/optimize");
item49.imgs.push("https://img.prospecs.com/prod/PS0UL20/PS0UL20S931/PS0UL20S931_04.jpg/dims/resizef/530x530/optimize");
item49.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UL20S931&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UL20S931%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item49.male = true;
item49.female = true;
item49.coupon = true;
item49.black = true;
item49.distinct = "샌들/슬라이드";
item49.date = new Date(2000, 12, 25);
item49.saleRate = 6342;
item49.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">- 3.5cm의 키 높이 효과와 푹신한 쿠션감을 느낄 수 있는 두터운 풋베드<br> - 3M 재귀반사 로고와 레이어드 패턴으로 미니멀한 디자인 포인트<br> - 바닥 면적의 30%에 러버를 적용하여 미끄럼 방지 효과</span>';
itemarray.push(item49);


let item50 = new Item("[LIFESTYLE]", "OR 1002", 69000, 58, 240, 290);
item50.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0MP20S902&ITHR_CD=null&CAT_GB=10006&NT=1";
item50.imgs.push("https://img.prospecs.com/prod/PS0MP20/PS0MP20S902/PS0MP20S902_01.jpg/dims/resizef/1024x1024/optimize");
item50.imgs.push("https://img.prospecs.com/prod/PS0MP20/PS0MP20S902/PS0MP20S902_02.jpg/dims/resizef/1024x1024/optimize");
item50.imgs.push("https://img.prospecs.com/prod/PS0MP20/PS0MP20S902/PS0MP20S902_03.jpg/dims/resizef/1024x1024/optimize");
item50.imgs.push("https://img.prospecs.com/prod/PS0MP20/PS0MP20S902/PS0MP20S902_04.jpg/dims/resizef/1024x1024/optimize");
item50.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0MP20S902&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0MP20S902%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item50.male = true;
item50.female = true;
item50.coupon = true;
item50.gray = true;
item50.white = true;
item50.black = true;
item50.distinct = "샌들/슬라이드";
item50.date = new Date(2000, 12, 25);
item50.saleRate = 421;
item50.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">- 직조 벨크로가 터프한 느낌을 주는 어퍼와 트레일 느낌의 미드/아웃솔<br> - 와이드 솔을 적용하여 더운 여름에 땀이 차지 않고 쾌적한 착화감 제공<br> - 바닥 면적의 60%에 적용된 러버 소재로 미끄럼 방지 효과</span>';
itemarray.push(item50);


let item51 = new Item("[온라인단독특가]", "OR 1012", 69000, 43, 240, 290);
item51.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UP20S912&ITHR_CD=null&CAT_GB=10006&NT=1";
item51.imgs.push("https://img.prospecs.com/prod/PS0UP20/PS0UP20S911/PS0UP20S911_01.jpg/dims/resizef/1024x1024/optimize");
item51.imgs.push("https://img.prospecs.com/prod/PS0UP20/PS0UP20S911/PS0UP20S911_02.jpg/dims/resizef/1024x1024/optimize");
item51.imgs.push("https://img.prospecs.com/prod/PS0UP20/PS0UP20S911/PS0UP20S911_03.jpg/dims/resizef/1024x1024/optimize");
item51.imgs.push("https://img.prospecs.com/prod/PS0UP20/PS0UP20S911/PS0UP20S911_04.jpg/dims/resizef/1024x1024/optimize");
item51.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UP20S912&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UP20S912%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item51.male = true;
item51.female = true;
item51.coupon = true;
item51.black = true;
item51.distinct = "샌들/슬라이드";
item51.date = new Date(2000, 12, 25);
item51.saleRate = 253;
item51.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">- 어글리슈즈와 슬라이드가 결합된 스타일<br> - 키높이 효과와 푹신한 쿠션감을 느낄 수 있는 두터운 풋베드<br>(6cm의 키 높이 효과)<br> - 바닥 면적의 70%에 러버를 적용하여 미끄럼 방지 효과</span>';
itemarray.push(item51);


let item52 = new Item("[LIFESTYLE]", "OR 913", 39000, 51, 240, 290);
item52.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0WL19S203&ITHR_CD=null&CAT_GB=10006&NT=1";
item52.imgs.push("https://img.prospecs.com/prod/PS0WL19/PS0WL19S203/PS0WL19S203_01.jpg/dims/resizef/1024x1024/optimize");
item52.imgs.push("https://img.prospecs.com/prod/PS0WL19/PS0WL19S203/PS0WL19S203_02.jpg/dims/resizef/1024x1024/optimize");
item52.imgs.push("https://img.prospecs.com/prod/PS0WL19/PS0WL19S203/PS0WL19S203_03.jpg/dims/resizef/1024x1024/optimize");
item52.imgs.push("https://img.prospecs.com/prod/PS0WL19/PS0WL19S203/PS0WL19S203_04.jpg/dims/resizef/1024x1024/optimize");
item52.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0WL19S203&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0WL19S203%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item52.female = true;
item52.coupon = true;
item52.pink = true;
item52.white = true;
item52.distinct = "샌들/슬라이드";
item52.date = new Date(2000, 10, 25);
item52.saleRate = 523;
item52.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">- 오리지널 라인의 덮개 샌달 <br> - 초경량 미드솔 설계<br> - 러버 아웃솔로 미끄럼 방지<br> - 풋베드 경도를 소프트하게 조정하여 쿠션성 보강<br> - 합리적 가격대</span>';
itemarray.push(item52);


let item53 = new Item("[온라인 단독특가]", "OR 1012", 69000, 43, 240, 290);
item53.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UP20S912&ITHR_CD=null&CAT_GB=10006&NT=1";
item53.imgs.push("https://img.prospecs.com/prod/PS0UP20/PS0UP20S912/PS0UP20S912_01.jpg/dims/resizef/1024x1024/optimize");
item53.imgs.push("https://img.prospecs.com/prod/PS0UP20/PS0UP20S912/PS0UP20S912_02.jpg/dims/resizef/1024x1024/optimize");
item53.imgs.push("https://img.prospecs.com/prod/PS0UP20/PS0UP20S912/PS0UP20S912_03.jpg/dims/resizef/1024x1024/optimize");
item53.imgs.push("https://img.prospecs.com/prod/PS0UP20/PS0UP20S912/PS0UP20S912_04.jpg/dims/resizef/1024x1024/optimize");
item53.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UP20S912&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UP20S912%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item53.male = true;
item53.female = true;
item53.coupon = true;
item53.white = true;
item53.baisy = true;
item53.distinct = "샌들/슬라이드";
item53.date = new Date(2000, 10, 25);
item53.saleRate = 374;
item53.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">- 어글리슈즈와 슬라이드가 결합된 스타일<br> - 키높이 효과와 푹신한 쿠션감을 느낄 수 있는 두터운 풋베드<br>(6cm의 키 높이 효과)<br> - 바닥 면적의 70%에 러버를 적용하여 미끄럼 방지 효과</span>';
itemarray.push(item53);


let item54 = new Item("[LIFESTYLE]", "OR 911", 39000, 51, 240, 290);
item54.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UL19S201&ITHR_CD=null&CAT_GB=10006&NT=1";
item54.imgs.push("https://img.prospecs.com/prod/PS0UL19/PS0UL19S201/PS0UL19S201_01.jpg/dims/resizef/1024x1024/optimize");
item54.imgs.push("https://img.prospecs.com/prod/PS0UL19/PS0UL19S201/PS0UL19S201_02.jpg/dims/resizef/1024x1024/optimize");
item54.imgs.push("https://img.prospecs.com/prod/PS0UL19/PS0UL19S201/PS0UL19S201_03.jpg/dims/resizef/1024x1024/optimize");
item54.imgs.push("https://img.prospecs.com/prod/PS0UL19/PS0UL19S201/PS0UL19S201_04.jpg/dims/resizef/1024x1024/optimize");
item54.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UL19S201&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UL19S201%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item54.male = true;
item54.female = true;
item54.coupon = true;
item54.black = true;
item54.distinct = "샌들/슬라이드";
item54.date = new Date(2022, 12, 25);
item54.saleRate = 5213;
item54.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">- 오리지널 라인의 덮개 샌달 <br> - 초경량 미드솔 설계<br> - 러버 아웃솔로 미끄럼 방지<br> - 풋베드 경도를 소프트하게 조정하여 쿠션성 보강<br> - 합리적 가격대</span>';
itemarray.push(item54);


let item55 = new Item("[LIFESTYLE]", "스택스 샌들 OR 931", 69000, 72, 240, 290);
item55.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UP19S301&ITHR_CD=null&CAT_GB=10006&NT=1";
item55.imgs.push("https://img.prospecs.com/prod/PS0UP19/PS0UP19S301/PS0UP19S301_01.jpg/dims/resizef/1024x1024/optimize");
item55.imgs.push("https://img.prospecs.com/prod/PS0UP19/PS0UP19S301/PS0UP19S301_02.jpg/dims/resizef/1024x1024/optimize");
item55.imgs.push("https://img.prospecs.com/prod/PS0UP19/PS0UP19S301/PS0UP19S301_03.jpg/dims/resizef/1024x1024/optimize");
item55.imgs.push("https://img.prospecs.com/prod/PS0UP19/PS0UP19S301/PS0UP19S301_04.jpg/dims/resizef/1024x1024/optimize");
item55.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UP19S301&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UP19S301%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item55.male = true;
item55.female = true;
item55.coupon = true;
item55.black = true;
item55.white = true;
item55.gray = true;
item55.distinct = "샌들/슬라이드";
item55.date = new Date(2022, 12, 25);
item55.saleRate = 634;
item55.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">- 오리지널 라인 인기품목 '+'"스택스"'+'의 샌들 버젼<br>- 발바닥이 닿는 전체 부분에 쿠션패드를 적용하여 착화감 강화<br>- 어퍼에 정고무 밴드를 사용하여 발등을 편하게 감싸줌<br>- 어퍼의 양측면 아래쪽 메쉬소재로 통기성 부여<br>- 4cm의 키높이 효과와 탁월한 쿠셔닝 IP 솔<br>- 러버 아웃솔로 미끄럼 방지</span>';
itemarray.push(item55);


let item56 = new Item("[LIFESTYLE]", "OR 942", 69000, 72, 240, 290);
item56.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UP19S312&ITHR_CD=null&CAT_GB=10006&NT=1";
item56.imgs.push("https://img.prospecs.com/prod/PS0UP19/PS0UP19S312/PS0UP19S312_01.jpg/dims/resizef/530x530/optimize");
item56.imgs.push("https://img.prospecs.com/prod/PS0UP19/PS0UP19S312/PS0UP19S312_02.jpg/dims/resizef/530x530/optimize");
item56.imgs.push("https://img.prospecs.com/prod/PS0UP19/PS0UP19S312/PS0UP19S312_03.jpg/dims/resizef/530x530/optimize");
item56.imgs.push("https://img.prospecs.com/prod/PS0UP19/PS0UP19S312/PS0UP19S312_04.jpg/dims/resizef/530x530/optimize");
item56.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UP19S312&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UP19S312%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item56.male = true;
item56.female = true;
item56.coupon = true;
item56.black = true;
item56.white = true;
item56.gray = true;
item56.distinct = "샌들/슬라이드";
item56.date = new Date(2022, 12, 25);
item56.saleRate = 74;
item56.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">- 오리지널 라인의 스포츠 샌달<br> - 어퍼 직조를 사용하여 캐주얼한 느낌을 살린 샌달<br> - 러버 아웃솔로 미끄럼 방지<br> - 에어룸이 설계되어 있는 풋베드를 적용하여 아치와 뒤꿈치에 안정성과 쿠션성 향상</span>';
itemarray.push(item56);


let item57 = new Item("[온라인 단독특가]", "OR 921", 29000, 66, 180, 290);
item57.url = "https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PS0UH19S201&ITHR_CD=null&CAT_GB=10006&NT=1";
item57.imgs.push("https://img.prospecs.com/prod/PS0UH19/PS0UH19S201/PS0UH19S201_01.jpg/dims/resizef/530x530/optimize");
item57.imgs.push("https://img.prospecs.com/prod/PS0UH19/PS0UH19S201/PS0UH19S201_02.jpg/dims/resizef/530x530/optimize");
item57.imgs.push("https://img.prospecs.com/prod/PS0UH19/PS0UH19S201/PS0UH19S201_03.jpg/dims/resizef/530x530/optimize");
item57.imgs.push("https://img.prospecs.com/prod/PS0UH19/PS0UH19S201/PS0UH19S201_04.jpg/dims/resizef/530x530/optimize");
item57.iframe ="https://review3.cre.ma/lsnmall.com/products/reviews?product_code=PS0UH19S201&iframe_id=crema-product-reviews-1&widget_style=&app=0&parent_url=https%3A%2F%2Fwww.prospecs.com%2Fproduct.do%3Fcmd%3DgetProductDetail%26PROD_CD%3DPS0UH19S201%26ITHR_CD%3Dnull%26CAT_GB%3D10006%26NT%3D1&nonmember_token=&secure_device_token=V21285f203427f6cc068673afa6c89031bc6cf8d808fc160aea920f1e33ac1f496a69d53a612d5241a05d4c485687658d7&iframe=1";
item57.male = true;
item57.female = true;
item57.coupon = true;
item57.purple = true;
item57.navy = true;
item57.distinct = "샌들/슬라이드";
item57.date = new Date(2022, 0, 1);
item57.saleRate = 346;
item57.point ='<span class="prod_md_talk" style="font-size: 18px; display: inline-block; width:100%; text-align: center; line-height: 1.7;">- 오리지널 라인의 조리 샌달 <br> - F로고를 본 떠 만든 어퍼 직조로 디자인 포인트<br> - 직조를 사용한 어퍼로 내구성 강화 <br> - 러버 아웃솔로 미끄럼 방지<br> - 합리적 가격대</span>';
itemarray.push(item57);

// 샌들/슬라이드 27개 객체------------------