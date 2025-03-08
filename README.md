# hunmin_keyboard
공공기관을 포함한 모두가 쓸 수 있는 한글 가상 웹키보드 

## 설명
한글 및 영문을 입력할 수 있는 가벼운 웹 가상키보드입니다. 
어디서나 임포트 하여 함수 하나로 불러낼 수 있으며, focus가 있는 곳에 화면으로 타이핑할 수 있습니다.
web접근성 기준에도 충족할 수 있도록 만들어진 키보드입니다.
어떤 화면에서 불러내더라도 가볍게 쓸 수 있는 모듈을 목표로 합니다.

## 설치법-Installation

### 필요사항-Requirements
이 프로젝트를 실행하려면 아래 오픈소스 라이브러리를 반드시 임포트해야 합니다:
- **[jQuery](https://jquery.com/)**: 자바스크립트 DOM 조작 및 이벤트 처리를 위한 라이브러리  
- **[jQuery-UI](https://jqueryui.com/)**: jQuery 기반의 사용자 인터페이스 기능 제공 라이브러리
- **[hangle.js](https://github.com/blurfx/hangul.js)**: 한국어 입력 처리를 위한 라이브러리  

### 아래 지침에 따라 각 라이브러리를 프로젝트에 추가하세요
#### jquery
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```
#### jquery-ui
```html
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
```
#### hangle.js
```html
<script src="./[프로젝트 경로]/hangul.js" type="text/javascript"></script>
```
#### hunmin-keyboard.js
```html
<script src="./[프로젝트 경로]/hunmin-keyboard.js" type="text/javascript"></script>
```



## 용례-Usage
```html
<button onclick="toggleKeyboard(this,'BIG');"> Keyboard(BIG) </button>
<button onclick="toggleKeyboard(this,'DEFAULT');">Keyboard(Default)</button>
<button onclick="toggleKeyboard(this,'SMALL');">Keyboard(small)</button>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
Please make sure to update tests as appropriate.
johnathanl305@gmail.com
## License

[MIT](https://choosealicense.com/licenses/mit/)
