// ------------------------------- 기본정보 -------------------------------
$(function () {
    // ------------------------------- EMAIL -------------------------------
    // 1 아이디 입력 확인
    $("#emailSelect").click(function () {
        if ($("#userId").val() != "" && ($("#emailSelect").val() != 'x') && ($("input[name=EMAIL]").is(":checked"))) {
            $("#emailLevelResult").html("");
        } else if ($("#userId").val() == "" && $("#emailSelect").val() != 'x') {
            $("#emailLevelResult").html("아이디를 입력해 주세요.");
            // 1_2 아이디값이 비어있거나 / 이메일 값 x
        } else if ($("#userId").val() != "" && $("#emailSelect").val() != 'x') {
            $("#emailLevelResult").html("이메일 수신동의여부를 선택해 주세요.");
        } else {
            if ($("#userId").val() != "") {
                if ($("#emailSelect").val() == 'x') { // 옵션값이 x일 경우
                    $("#emailLevelResult").html("메일 주소를 선택해 주세요.");
                } else {
                    $("#emailLevelResult").html("이메일 수신동의여부를 선택해 주세요.");
                }
            }
        }
    });
    // 2 수신동의 체크한다면
    $("input[name=EMAIL]").click(function () {
        if ($("#userId").val() != "" && ($("#emailSelect").val() != 'x') && ($("input[name=EMAIL]").is(":checked"))) {
            $("#emailLevelResult").html("");
        } else if ($("#userId").val() == "") {
            $("#emailLevelResult").html("아이디를 입력해 주세요.");
        }
    });

    // 모든 조건을 만족했을 경우 페이지내 어디든 클릭시
    $(document).click(function () {
        if ($("#userId").val() != "" &&
            ($("#emailSelect").val() != 'x') &&
            ($("input[name=EMAIL]").is(":checked"))) {
            $("#emailLevelResult").html("");
        }
    })

    // 이메일 옵션값 인풋박스에 넣기
    $("#emailSelect").click(function () {
        $("#emailSelect").change(function () {
            $("#email_in").val($("#emailSelect option:selected").html());
        });
    });


    // ------------------------------- 이름 ------------------------------- 
    // .onblur() : 사용자가 입력 필드를 떠날 때 자바 스크립트를 실행
    $("#name_js").blur(function () {
        let userName = document.getElementById("name_js").value;
        // let regExpName1 = /^+{2,5}$/;
        let regName = /\w/ig; // 영문자, 숫자, _
        let regNameGap = /^\s/; // 첫글자가 공백

        // 이름값이 비어있거나 공백일경우
        if ($("#name_js").val() == '' || regNameGap.test(userName)) {
            $("#nameLevelResult").html("이름을 입력해 주세요.");
        } else if (regName.test(userName)) {
            $("#nameLevelResult").html("이름을 한글로 입력해 주세요.");
        } else if (userName.length < 2 || userName.length > 5) {
            $("#nameLevelResult").html("이름을 2자 이상 5자 이하로 입력해 주세요.");
        }
    });


    // ------------------------------- 비밀번호 ------------------------------- 
    // keyup 이벤트
    // 1. 한글자라도 입력했을 떄 -> 입력값의 길이가 0보다 클때
    // 비밀번호를 8자 이상 입력해 주세요.
    // 2. 8자 이상 입력했을 떄 -> 입력값의 길이가 8이상일때
    // 비밀번호 확인을 위해 다시 한 번 입력해 주세요.
    $("#pwd_js").keyup(function () {
        if ($("#pwd_js").val().length > 0 || $("#pwd_js").val().length < 8) {
            $("#pwdLevelResult").html("비밀번호를 8자 이상 입력해 주세요.");
        }
        if ($("#pwd_js").val().length >= 8) {
            $("#pwdLevelResult").html("비밀번호 확인을 위해 다시 한 번 입력해 주세요.");
        }
    });


    // ------------------------------- 비밀번호 확인 ------------------------------- 
    // keyup 이벤트
    // 1. 일치
    // 1_1. 비밀번호 유효성 만족시 비밀번호/비밀번호확인 멘트 사라짐
    // 1_2. 비밀번호 유효성 불일치시 -> 
    // 영문+숫자, 혹은 영문+특수문자 등 비밀번호를 조합하여 입력해 주세요.

    // 2. 불일치
    // 2_1. 8글자 이상입력했을 때 비밀번호값과 일치하는지 확인
    //      -> 비밀번호가 일치하지 않습니다. 아래 출력
    $(".pwd_equal").keyup(function () {
        let userPwd = document.getElementById("pwd_js").value;
        let userPwdCk = document.getElementById("pwdch_js").value;
        let regPwd = /\S{8,}/;

        // if(userPwd == userPwdCk && regPwd.test(userPwd)){
        //     $("#pwdLevelResult").html("");
        //     $("#pwdckFixed").html("");
        // }
        if (regPwd.test(userPwdCk)) {
            $("#pwdLevelResult").html("영문+숫자, 혹은 영문+특수문자 등 비밀번호를 조합하여 입력해 주세요.");
        }

    });


    // ------------------------------- 휴대폰 번호 ------------------------------- 


    // ------------------------------- 생년월일 ------------------------------- 
    $("#birth_y option:selected").val();
    $("#birth_m option:selected").val();
    $("#birth_d option:selected").val();

    $(".birth_js").change(function () {
        // 모든 옵션값이 선택된 경우
        if ($("#birth_d option:selected").val() != '' && $("#birth_m option:selected").val() != '' && $("#birth_y option:selected").val() != '') {
            $("#birthLevelResult").html("");
        }
        else { // 모든 옵션값이 선택되지 않았을 경우
            if ($("#birth_d option:selected").val() == '') {
                $("#birthLevelResult").html("생년월일 일자를 선택해 주세요.");
            }

            if ($("#birth_m option:selected").val() == '') {
                $("#birthLevelResult").html("생년월일 월을 선택해 주세요.");
            }

            if ($("#birth_y option:selected").val() == '') {
                $("#birthLevelResult").html("생년월일 연도를 선택해 주세요.");
            }
        }
    });


    // ------------------------------- 회원가입 약관 -------------------------------
    // 전체약관 동의 클릭시 하단 모든 체크박스 클릭
    // 전체약관 동의 클릭
    $(document).on("click", "#totalCheck", function () {
        // 하단 모든 체크박스들 체크
        if ($("#totalCheck").is(":checked")) {
            $("input[name=sCheck]").prop("checked", true);
        } else {
            $("input[name=sCheck]").prop("checked", false);
        }
    });

    // 하나라도 체크 해제 시 전체약관동의 언체크
    $(document).on("click", "input[name=sCheck]", function () {
        if ($("input[name=sCheck]:checked").length == $("input[name=sCheck]").length) {
            $("#totalCheck").prop("checked", true);
        } else {
            $("#totalCheck").prop("checked", false);
        }
    });



    // ------------------------------- 스크롤반응 -------------------------------












    //회원가입 버튼 클릭시 이벤트
    /*
    1. **기본정보(input-radio 태그 먼저 실행 → 필수입력정보순)**
    1. 이메일수신동의 체크
    - 미체크시 alert(”이메일 수신동의여부를 선택해 주세요.”)
    - 기본정보 텍스트있는곳으로 페이지업
    2. SMS수신동의 체크
    - 미체크시 alert(”SMS 수신동의여부를 선택해 주세요.”)
    - 기본정보 텍스트있는곳으로 페이지업
    3. 기본정보입력란 필수입력정보들
    - 기본정보 텍스트있는곳으로 페이지업
    2. ****회원 가입약관****
    1. 이용약관
    - 미체크시 alert(”프로스펙스닷컴 이용약관에 동의해주세요.”)
    2. 개인정보 수집 및 이용에 관한 동의
    - 미체크시 alert(”개인정보 수집 및 이용 약관에 동의해주세요.”)
    3. 개인정보의 취급 위탁 동의
    - 미체크시 alert(”개인정보 취급 및 위탁에 동의해주세요.”)
    3. 위의내용 모두 만족시
    1. alert(”입력하신 정보로 회원가입 하시겠습니까?”)
    2. 생년월일 14세미만
    - alert(”14세 미만은 가입할 수 없습니다.”)
    */

    let 회원가입버튼 = document.getElementById("main_btn");
    회원가입버튼.addEventListener("click", function () {
        
        let 이메일 = [document.getElementById("userId"), document.getElementById("email_in")];
        let 이메일수신동의 = document.getElementsByName("EMAIL");
        let 비밀번호 = [document.getElementById("pwd_js"), document.getElementById("pwdch_js")];
        let 이름 = document.getElementById("name_js");
        let 폰번호 = [document.getElementById("phone_js1"), document.getElementById("phone_js2")];
        let sms수신동의 = document.getElementsByName("SMS");
        let 생년월일 = [document.getElementById("birth_y"), document.getElementById("birth_m"), document.getElementById("birth_d"),];
        let 성별 = document.getElementsByName("gender");
        let 가입약관 = document.getElementsByName("sCheck");
        if (!(이메일수신동의[0].checked || 이메일수신동의[1].checked)) {
            alert("이메일 수신동의여부를 선택해 주세요.");
            window.scrollTo(0, 300);
            return;
        }
        if (!(sms수신동의[0].checked || sms수신동의[1].checked)) {
            alert("SMS 수신동의여부를 선택해 주세요.");
            window.scrollTo(0, 300);
            return;
        }
        if (이메일[0].value == '' || 이메일[1].value == '') {
            alert("이메일을 입력하세요");
            window.scrollTo(0, 300);
            return;
        }
        if (비밀번호[0].value == '' || 비밀번호[1].value == '') {
            alert("비밀번호를 입력하세요");
            window.scrollTo(0, 300);
            return;
        }
        if (이름.value == '') {
            alert("이름을 입력하세요");
            window.scrollTo(0, 300);
            return;
        }
        if (폰번호[0].value == '' || 폰번호[1].value == '') {
            alert("휴대폰 번호를 입력해주세요");
            window.scrollTo(0, 300);
            return;
        }
        if (생년월일[0].value == '' || 생년월일[1].value == '' || 생년월일[2].value == '') {
            alert("생년월일을 입력해주세요");
            window.scrollTo(0, 300);
            return;
        }
        if (!(성별[0].checked || 성별[1].checked)) {
            alert("성별을 선택해주세요");
            window.scrollTo(0, 300);
            return;
        }
        if (!가입약관[0].checked) {
            alert("프로스펙스닷컴 이용약관에 동의해주세요.");
            return;
        }
        if (!가입약관[1].checked) {
            alert("개인정보 수집 및 이용에 동의해주세요.");
            return;
        }
        if (!가입약관[2].checked) {
            alert("개인정보 취급 및 위탁에 동의해주세요.");
            return;
        }
        if (!가입약관[3].checked) {
            alert("개인정보 제3자 제공에 동의해주세요");
            return;
        }

        if (new Date().getFullYear() - 생년월일[0].value < 14) {
            alert("14세 미만은 가입할 수 없습니다.")
        } else {
            if(confirm("입력하신 정보로 회원가입 하시겠습니까?")){
                alert("회원가입되었습니다.");
                location.reload();
            }
        }
    })
});






