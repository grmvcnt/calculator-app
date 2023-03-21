//themes part

// active main key #FFFFFF
// active main key #FFFFFF
// active main key #6b34ac




// theme 1
// active rem key #a2b3e1
// active equal key #f96c5b

// theme 2
// active rem key #62b5bd
// active equal key #ff8a38

// theme 3
// active rem key #8631b0
// active equal key #94fff9

const themeToggle = document.querySelector('.calculatorContainerHeaderThemes__toggle');

//Colors picker
const colors = [
    theme1 = {
        mainBackground: 'hsl(222, 26%, 31%)',
        screenBackground: 'hsl(224, 36%, 15%)',
        keypadBackground: 'hsl(223, 31%, 20%)',
        mainkey: 'hsl(30, 25%, 89%)',
        mainkeyShadow: 'hsl(28, 16%, 65%)',
        remkey: 'hsl(225, 21%, 49%)',
        remkeyShadow: 'hsl(224, 28%, 35%)',
        equalkey: 'hsl(6, 63%, 50%)',
        equalkeyShadow: 'hsl(6, 70%, 34%)',
        darkBlueText: 'hsl(60, 10%, 19%)',
        whiteText: 'hsl(0, 0%, 100%)',
    },
    theme2 = {
        mainBackground: 'hsl(0, 0%, 90%)',
        screenBackground: 'hsl(0, 0%, 93%)',
        keypadBackground: 'hsl(0, 5%, 81%)',
        mainkey: 'hsl(45, 7%, 89%)',
        mainkeyShadow: 'hsl(35, 11%, 61%)',
        remkey: 'hsl(185, 42%, 37%)',
        remkeyShadow: 'hsl(185, 58%, 25%)',
        equalkey: 'hsl(25, 98%, 40%)',
        equalkeyShadow: 'hsl(25, 99%, 27%)',
        brownText: 'hsl(60, 10%, 19%)',
    },
    theme3 = {
        mainBackground: 'hsl(268, 75%, 9%)',
        screenBackground: 'hsl(268, 71%, 12%)',
        mainkey: 'hsl(268, 47%, 21%)',
        mainkeyShadow: 'hsl(290, 70%, 36%)',
        remkey: 'hsl(281, 89%, 26%)',
        remkeyShadow: 'hsl(285, 91%, 52%)',
        equalkey: 'hsl(176, 100%, 44%)',
        equalkeyShadow: 'hsl(177, 92%, 70%)',
        yellowText: 'hsl(52, 100%, 62%)',
        veryDarkBlueText: 'hsl(198, 20%, 13%)',
    }
];

//Colored Elements
const body = document.querySelector('body');
const screen = document.querySelector('.calculatorContainer__screen');
const keypadAndToggleBackgrounds = document.querySelectorAll('.keypadAndToggleBackgrounds');
const mainKeys = document.querySelectorAll('.main-key');
const remKeys = document.querySelectorAll('.rem-key');
const selectorAndEqualBackgrounds = document.querySelectorAll('.selectorAndEqual');
const equalKey = document.querySelector('.equal-key');
const texts = document.querySelectorAll('.text');


//Toggle Theme Logic
let counter = 2;
themeToggle.addEventListener('click', handleTheme);
function handleTheme() {
    if (counter == 1) {
        themeToggle.setAttribute('style', 'justify-content: flex-start');
        body.style.backgroundColor = colors[0].mainBackground;
        screen.style.backgroundColor = colors[0].screenBackground;
        for (i = 0; i < keypadAndToggleBackgrounds.length; i++) {
            keypadAndToggleBackgrounds[i].style.backgroundColor = colors[0].keypadBackground;
        };
        for (i = 0; i < mainKeys.length; i++) {
            mainKeys[i].style.backgroundColor = colors[0].mainkey;
            mainKeys[i].style["boxShadow"] = "inset 0 -4px 0 0 " + colors[0].mainkeyShadow;
            mainKeys[i].style.color = colors[0].darkBlueText;
            mainKeys[i].classList.remove('main-key-theme3');
            mainKeys[i].classList.add('main-key-theme1');
        };
        for (i = 0; i < remKeys.length; i++) {
            remKeys[i].style.backgroundColor = colors[0].remkey;
            remKeys[i].style["boxShadow"] = "inset 0 -4px 0 0 " + colors[0].remkeyShadow;
            remKeys[i].classList.remove('rem-key-theme3');
            remKeys[i].classList.add('rem-key-theme1');
        };
        for (i = 0; i < selectorAndEqualBackgrounds.length; i++) {
            selectorAndEqualBackgrounds[i].style.backgroundColor = colors[0].equalkey;
        };
        equalKey.style["boxShadow"] = "inset 0 -4px 0 0 " + colors[0].equalkeyShadow;
        equalKey.style.color = colors[0].whiteText;
        equalKey.classList.remove('equal-key-theme3');
        equalKey.classList.add('equal-key-theme1');
        for (i = 0; i < texts.length; i++) {
            texts[i].style.color = colors[0].whiteText;
        };

    } else if (counter == 2) {
        themeToggle.setAttribute('style', 'justify-content: center');
        body.style.backgroundColor = colors[1].mainBackground;
        screen.style.backgroundColor = colors[1].screenBackground;
        for (i = 0; i < keypadAndToggleBackgrounds.length; i++) {
            keypadAndToggleBackgrounds[i].style.backgroundColor = colors[1].keypadBackground;
        };
        for (i = 0; i < mainKeys.length; i++) {
            mainKeys[i].style.backgroundColor = colors[1].mainkey;
            mainKeys[i].style["boxShadow"] = "inset 0 -4px 0 0 " + colors[1].mainkeyShadow;
            mainKeys[i].style.color = colors[1].brownText;
            mainKeys[i].classList.remove('main-key-theme1');
            mainKeys[i].classList.add('main-key-theme2');
        };
        for (i = 0; i < remKeys.length; i++) {
            remKeys[i].style.backgroundColor = colors[1].remkey;
            remKeys[i].style["boxShadow"] = "inset 0 -4px 0 0 " + colors[1].remkeyShadow;
            remKeys[i].classList.remove('rem-key-theme1');
            remKeys[i].classList.add('rem-key-theme2');
        };
        for (i = 0; i < selectorAndEqualBackgrounds.length; i++) {
            selectorAndEqualBackgrounds[i].style.backgroundColor = colors[1].equalkey;
        };
        equalKey.style["boxShadow"] = "inset 0 -4px 0 0 " + colors[1].equalkeyShadow;
        equalKey.style.color = colors[0].whiteText;
        equalKey.classList.remove('equal-key-theme1');
        equalKey.classList.add('equal-key-theme2');
        for (i = 0; i < texts.length; i++) {
            texts[i].style.color = colors[1].brownText;
        };
    } else if (counter == 3) {
        themeToggle.setAttribute('style', 'justify-content: flex-end');
        body.style.backgroundColor = colors[2].mainBackground;
        screen.style.backgroundColor = colors[2].screenBackground;
        for (i = 0; i < keypadAndToggleBackgrounds.length; i++) {
            keypadAndToggleBackgrounds[i].style.backgroundColor = colors[2].screenBackground;
        };
        for (i = 0; i < mainKeys.length; i++) {
            mainKeys[i].style.backgroundColor = colors[2].mainkey;
            mainKeys[i].style["boxShadow"] = "inset 0 -4px 0 0 " + colors[2].mainkeyShadow;
            mainKeys[i].style.color = colors[2].yellowText;
            mainKeys[i].classList.remove('main-key-theme2');
            mainKeys[i].classList.add('main-key-theme3');
        };
        for (i = 0; i < remKeys.length; i++) {
            remKeys[i].style.backgroundColor = colors[2].remkey;
            remKeys[i].style["boxShadow"] = "inset 0 -4px 0 0 " + colors[2].remkeyShadow;
            remKeys[i].classList.remove('rem-key-theme2');
            remKeys[i].classList.add('rem-key-theme3');
        };
        for (i = 0; i < selectorAndEqualBackgrounds.length; i++) {
            selectorAndEqualBackgrounds[i].style.backgroundColor = colors[2].equalkey;
        };
        equalKey.style["boxShadow"] = "inset 0 -4px 0 0 " + colors[2].equalkeyShadow;
        equalKey.style.color = colors[2].veryDarkBlueText;
        equalKey.classList.remove('equal-key-theme2');
        equalKey.classList.add('equal-key-theme3');
        for (i = 0; i < texts.length; i++) {
            texts[i].style.color = colors[2].yellowText;
        };
        counter = 0;
    }
    counter++;
}

//calc part

const keys = document.querySelectorAll('.keys');
let result = "";

keys.forEach(key => {
    const screen = document.querySelector('.calculatorContainerScreen__result');
    const value = key.id
    key.addEventListener('click', handleResult);
    function handleResult() {
        for (i = 0; i <= 9; i++) {
            if (value == [i]) {
                result += value;
                screen.innerText = result;
                console.log(result);
                break;
            }
        }
        if (value == 'dot') {
            result += '.';
            screen.innerText = result;
        }
        else if (value == 'reset') {
            result = "";
            screen.innerText = result;
        } else if (value == 'del') {
            result = result.slice(0, -1);
            screen.innerText = result;
        }
        else if (value == '+') {
            result += value;
            screen.innerText = result;
        } else if (value == '-') {
            result += value;
            screen.innerText = result;
        } else if (value == '*') {
            result += value;
            screen.innerText = result;
        } else if (value == '/') {
            result += value;
            screen.innerText = result;
        } else if (value == 'equal') {
            try {
                result = eval(result);
                screen.innerText = result;
            } catch (error) {
                result = 'Error';
                screen.innerText = 'ERROR';
            }
        }
    }
})