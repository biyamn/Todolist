# 투두리스트

<div align="center">
  <img src='https://user-images.githubusercontent.com/101965666/221892947-4d9a9650-658b-4042-b092-d77f1a95b0f6.PNG' width="60%"/>

**배포 링크**: https://todolist.biyamn.dev

</div>

<br>

## 프로젝트 실행 방법

```
$ npm install
$ npm start
```

<br>

## 투두리스트 소개

CRUD 기능과 반응형 레이아웃이 적용된 투두리스트입니다. Goal 부분에 목표를 쓰고, Todo list 부분에 목표를 이루기 위한 투두를 적을 수 있습니다.

<br>

## 기능 소개

### 목표 추가하기

- Goal 부분에 목표를 입력할 수 있습니다.

| <img src='https://github.com/biyamn/Quiz-App/assets/101965666/a8bcc58d-5470-40ab-bac2-dd486b03108e' style="width: 50%" /> |
| :-----------------------------------------------------------------------------------------------------------------------: |
|                                                         목표 입력                                                         |

### 투두 추가, 완료, 수정, 삭제하기

- Todo list 부분에 목표를 이루기 위한 투두를 추가할 수 있습니다.
- 투두 왼쪽의 원을 눌러 완료 처리할 수 있습니다. 완료되면 빈 원 안에 체크 아이콘이 추가되며 기존에 입력한 글자가 회색 처리됩니다. 원을 다시 누르면 완료 전의 상태로 돌아옵니다.
- 수정 아이콘을 눌러 투두를 수정할 수 있습니다. 수정 버튼 클릭시 placeholder에 기존의 투두가 표시됩니다. 수정 아이콘을 누르면 수정/삭제 아이콘이 ✅/❌ 버튼으로 변경되며, ✅ 버튼을 누르면 수정이 완료되고 ❌ 버튼을 누르면 수정이 취소됩니다.
- 삭제 아이콘을 눌러 투두를 삭제할 수 있습니다. 삭제 버튼 클릭시 수정/삭제 아이콘이 ✅/❌ 버튼으로 변경되며, ✅ 버튼을 누르면 삭제가 완료되고 ❌ 버튼을 누르면 삭제가 취소됩니다.

| ![추가하기](https://github.com/biyamn/Quiz-App/assets/101965666/1b8b7a8c-bd1e-4391-9ca5-af6748a0a679) | ![완료하기](https://github.com/biyamn/Quiz-App/assets/101965666/6518aa04-d2e6-4423-8c60-ff361b6c40ab) |
| :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
|                                               추가하기                                                |                                               완료하기                                                |

| ![수정하기](https://github.com/biyamn/Quiz-App/assets/101965666/c34dac42-cbdf-462d-8fcf-a458a70388c3) | ![삭제하기](https://github.com/biyamn/Quiz-App/assets/101965666/61eae715-8f78-44db-a371-6c033dd1c2fe) |
| :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
|                                               수정하기                                                |                                               삭제하기                                                |

### 입력값 유효성 검사하기

- 입력값이 빈 문자열이거나 공백이면 입력이 불가능하며, 입력창의 테두리와 입력창의 배경색이 빨간 색으로 변경됩니다.

| <img src='https://github.com/biyamn/Quiz-App/assets/101965666/e3e02c8b-6b0b-4e22-9f87-c8a770576a52' style="width: 50%" /> |
| :-----------------------------------------------------------------------------------------------------------------------: |
|                                                        유효성 검사                                                        |

### 반응형 레이아웃

| ![데스크탑](https://github.com/biyamn/Quiz-App/assets/101965666/6e7e7b80-7d36-45b7-8527-961c4833237a) | ![모바일](https://github.com/biyamn/Quiz-App/assets/101965666/b6a73484-9fb1-43da-b6c6-c4f36176a580) |
| :---------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
|                                               데스크탑                                                |                                               모바일                                                |

### 데이터 저장

- Firebase에 데이터 저장

### 여러개의 목표 설정 가능(예정)

- Goal CRUD 기능
- Goal 하나만 선택 가능하게(+ 스타일링)
- Goal 부분에 여러 개의 목표 설정 가능

### 로그인(예정)

- Firebase에서 제공하는 로그인 기능 적용

<br>

## 기술 스택

- HTML5, CSS3
- JavaScript
- React.js

<br>

## 폴더 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Goal
 ┃ ┃ ┣ 📂Goal
 ┃ ┃ ┣ 📂GoalInput
 ┃ ┃ ┗ 📂GoalTitle
 ┃ ┗ 📂Todo
 ┃ ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📂TodoInput
 ┃ ┃ ┣ 📂TodoItem
 ┃ ┃ ┗ 📂TodoList
 ┣ 📜App.js
 ┣ 📜App.module.css
 ┣ 📜global.css
 ┗ 📜index.js
```

<br>

## 구현 과정 블로깅

- <a href='https://velog.io/@hamham/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-ChatGPT'>[투두리스트 1탄] 추가 기능, 빈칸 검증 기능 만들기</a>
- <a href='https://velog.io/@hamham/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-2%ED%83%84-CSS-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0'>[투두리스트 2탄] CSS 추가하기</a>
- <a href='https://velog.io/@hamham/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-3%ED%83%84-%EC%82%AD%EC%A0%9C-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0'>[투두리스트 3탄] 삭제 기능 만들기</a>
- <a href='https://velog.io/@hamham/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-4%ED%83%84-%EC%82%AD%EC%A0%9C-%EA%B8%B0%EB%8A%A5-%EC%88%98%EC%A0%95%ED%95%98%EA%B8%B0'>[투두리스트 4탄] 삭제 기능 개선하기</a>
- <a href='https://velog.io/@hamham/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-5%ED%83%84-%EC%99%84%EB%A3%8C-%EA%B8%B0%EB%8A%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0'>[투두리스트 5탄] 완료 기능 만들기</a>
- <a href='https://velog.io/@hamham/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-6%ED%83%84-%EC%88%98%EC%A0%95-%EA%B8%B0%EB%8A%A5-%EB%A7%8C%EB%93%A4%EA%B8%B0'>[투두리스트 6탄] 수정 기능 만들기</a>
- <a href='https://velog.io/@hamham/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-7%ED%83%84-%EB%B0%98%EC%9D%91%ED%98%95-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0'>[투두리스트 7탄] 반응형 레이아웃 만들기 + 배포하기</a>
- <a href='https://velog.io/@hamham/CRA%EB%A5%BC-Vite%EB%A1%9C-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98'>[투두리스트 8탄] CRA를 Vite로 마이그레이션</a>
- <a href='https://velog.io/@hamham/Firebase-%EC%88%98%EC%A0%95%EC%8B%9C-%EA%B9%9C%EB%B0%95'>[투두리스트 9탄] optimistic update</a>

## 구현 기능 목록

### 2023-09-22-금

- [x] goal crud
- [x] goal crud firebase 연동
- [ ] goal과 todo 연결
- [ ] goal과 todo 연결한 거 firebase 연동
