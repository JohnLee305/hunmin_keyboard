# hunmin_keyboard.js
공공기관을 포함한 모두가 쓸 수 있는 한글 가상 웹키보드 

## 설명
이 프로젝트는 웹 페이지에서 한글 및 영문 입력을 지원하는 가벼운 가상 키보드를 제공합니다. <br>
별도의 설치 없이 간단한 함수 호출로 사용할 수 있으며, 웹 접근성 기준을 충족하도록 설계되었습니다.<br>
어떤 화면에서든 가볍게 사용할 수 있는 모듈을 목표로 합니다.<br>
[데모페이지](https://johnlee305.github.io/keyboard_demo.html)를 클릭하시면 DEMO를 확인할 수 있습니다.<br>
https://johnlee305.github.io/keyboard_demo.html <br>
## 개발 상태
이 프로젝트는 현재 **개발 중**이며 **베타 버전**입니다. 일부 기능이 완전하지 않을 수 있으며, 버그가 있을 수 있습니다. <br>
사용자 여러분의 피드백과 버그 보고를 환영합니다! <br>
사용 중 발견한 버그나 개선 제안은 [이슈](https://github.com/JohnLee305/hunmin_keyboard/issues)를 통해 알려주세요. 여러분의 의견이 큰 도움이 됩니다!

## 설치법 - Installation

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
- [GitHub 페이지](https://github.com/blurfx/hangul.js)에서 다운로드하여 프로젝트 경로에 추가하세요.
```html
<script src="./[프로젝트 경로]/hangul.js" type="text/javascript"></script>
```

#### hunmin-keyboard.js
- 프로젝트 파일을 다운로드하여 경로에 추가하세요.
```html
<script src="./[프로젝트 경로]/hunmin-keyboard.js" type="text/javascript"></script>
```
#### hunmin-keyboard.css
- 프로젝트 파일을 다운로드하여 경로에 추가하세요.
```html
<link rel="stylesheet" href="./[프로젝트 경로]/hunmin-keyboard.css">
```




#### 전체 설치 예시
```html
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
  <script src="./path/to/hangul.js"></script>
  <script src="./path/to/hunmin-keyboard.js"></script>
  <link rel="stylesheet" href="./path/to/hunmin-keyboard.css">
</head>
```

## 용례-Usage
```html
<button onclick="toggleKeyboard(this,'BIG');"> Keyboard(BIG) </button>
<button onclick="toggleKeyboard(this,'DEFAULT');">Keyboard(Default)</button>
<button onclick="toggleKeyboard(this,'SMALL');">Keyboard(small)</button>
```

### 개발 중인 기능
- 컬러 theme지원
- javascript 바닐라만으로 동작하는 버젼 제공
- 상태바

## Contributing
새로운 기능을 제안하거나 버그를 보고하려면 이슈를 열어주세요.<br>
풀 리퀘스트를 제출하기 전에 코딩 스타일을 확인하세요. 기여를 환영합니다! <br>
<br>
Pull requests are welcome. For major changes, please open an issue first <br>
to discuss what you would like to change. <br>
Please make sure to update tests as appropriate. <br>
johnathanl305@gmail.com
## License

[MIT](https://choosealicense.com/licenses/mit/)
