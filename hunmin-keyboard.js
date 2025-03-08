
var sizeOption = "DEFAULT";
function toggleKeyboard(obj, inpSizeOption) {
    sizeOption = inpSizeOption;
    if (document.getElementById("HM_keyboardzone") != null) {
        document.getElementById("HM_keyboardzone").remove();
    } else {
        // 도큐먼드에 가상 키보드 tag삽입
        var divKeyboardzone = document.createElement("div")
        divKeyboardzone.id = "HM_keyboardzone";
        divKeyboardzone.className = "HM_KBSZ_"+sizeOption;
        
        document.body.appendChild(divKeyboardzone);
        var keyboardzone = document.getElementById("HM_keyboardzone");
        const keyboard = new HMJKeyboard(keyboardzone, null);

        let inputElements = document.getElementsByTagName('input');
        for (let i = 0; i < inputElements.length; i++) {
            inputElements[i].addEventListener("click", function () {
                keyboard.setInput(inputElements[i]);
            });
        }

        $("#HM_keyboardzone").draggable();
        $("#HM_keyboardzone").resizable();

        var button = $(obj);
        $("#HM_keyboardzone")
            .css({
                top: button.offset().top + button.outerHeight()+15, // 버튼 아래 위치
                left: button.offset().left // 버튼과 정렬
            })
            .fadeIn(200); // 부드럽게 나타남
    }
}
function HMJKeyboard(zone, input) {
    var nowlang = "koNormal";
    var shiftActive = false;
    var charlist = [];

    this.setInput = function (inputtag) {
        input = inputtag;
        charlist = Hangul.disassemble(input.value);
    };

    function getText() {
        return Hangul.assemble(charlist);
    }

    const form = {
        koNormal: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '<-'],
        ['TAB', 'ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', '[', ']', '\\'],
        ['한/영','ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', ';', '\'', 'enter'],
        ['shift', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', ',', '.', '?', 'shift'],
        ["space"]],
        koShift: [['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '<-'],
        ['TAB', 'ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅒ', 'ㅖ', '{', '}', '|'],
        ['한/영','ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', ':', '"', 'enter'],
        ['shift', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', '<', '>', '/', 'shift'],
        ["space"]],
        enNormal: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '<-'],
        ['TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
        ['한/영','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
        ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?', 'shift'],
        ["space"]],
        enShift: [['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '<-'],
        ['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
        ['한/영','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter'],
        ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '/', 'shift'],
        ["space"]]
    };

    var keydiv = document.createElement("div");
    keydiv.className = "HM_Keyboard-container";
    zone.appendChild(keydiv);

    function updateKeyboardLayout() {
        keydiv.innerHTML = "";
        let toolbar = document.createElement("div");
        toolbar.className = "HM_Ktoolbar";
        toolbar.innerHTML = '<button class="HM_Kboard_close" onclick="toggleKeyboard();">&#10006;</button>';
        keydiv.appendChild(toolbar);
 
        form[nowlang].forEach(row => {
            let HMkeyLine = document.createElement("div");
            HMkeyLine.className = "HM_Key-line";
            row.forEach(keyText => {
                let key = document.createElement("button");
                key.textContent = keyText;
                key.className = "HM_Key";
                key.addEventListener("click", keyfun);
                key.addEventListener("touchstart", keyfun);
                if (keyText === "space"){key.className = "HM_Key HM_KSZ_"+sizeOption+" HM_space HM_FTSZ_FK_"+sizeOption;}
                else if (keyText === "shift"){shiftActive ? key.className = "HM_Key HM_KSZ_"+sizeOption+" HM_FTSZ_FK_"+sizeOption+" HM_shift-active" : key.className = "HM_Key HM_KSZ_"+sizeOption+" HM_FTSZ_FK_"+sizeOption;}
                else if (keyText === "한/영"){ key.className = "HM_Key HM_KSZ_"+sizeOption+" HM_FTSZ_FK_"+sizeOption;}
                else if (keyText === "TAB"){key.className = "HM_Key HM_KSZ_"+sizeOption+" HM_FTSZ_FK_"+sizeOption;}
                else if (keyText === "enter"){key.className = "HM_Key HM_KSZ_"+sizeOption+" HM_FTSZ_FK_"+sizeOption;}
                else { key.className = "HM_Key HM_KSZ_"+sizeOption+" HM_FTSZ_NK_"+sizeOption }
                HMkeyLine.appendChild(key);
            });
            keydiv.appendChild(HMkeyLine);
        });


           
      
    }
    updateKeyboardLayout();

    function keyfun(event) {
        let keyText = event.target.textContent;
        if (keyText === "<-") charlist.pop();
        else if (keyText === "space") charlist.push(" ");
        else if (keyText === "TAB") charlist.push("\t");
        else if (keyText === "enter") input.value += "\n";
        else if (keyText === "한/영"){ 
            shiftActive = false; 
            nowlang = nowlang.includes("ko") ? "enNormal" : "koNormal"; 
            updateKeyboardLayout();
        }
        else if (keyText === "shift") {
            nowlang = nowlang.includes("ko") ? (shiftActive ? "koNormal" : "koShift") : (shiftActive ? "enNormal" : "enShift");
            shiftActive = !shiftActive;
            updateKeyboardLayout();
        }
        else charlist.push(keyText);

        input.value = Hangul.assemble(charlist);
        
    }
}
