# 쇼핑몰 페이지

### https://july249.github.io/shopping_mall/

## 프로젝트 소개

- weniv에서 제공되는 OpenAPI 상품 정보를 이용한 쇼핑몰 웹 어플리케이션

## 미리보기

- 메인 페이지

![image](https://user-images.githubusercontent.com/90930391/210039658-b9512dfa-c4e6-4982-8b12-4e3f7c3277c4.png)

- 상품 상세보기 모달창 페이지

![image](https://user-images.githubusercontent.com/90930391/210039687-a6331364-822e-4925-9fcd-364425c16ba7.png)

- 장바구니 페이지

![image](https://user-images.githubusercontent.com/90930391/210039710-e4ac2860-d84c-4808-a292-7f12cc33ff76.png)

## 프로젝트 경험

- fetchAPI를 이용하여 받아온 데이터를 useState에 저장하여 각 컴포넌트에 직접 전달하였음
  ⇒ 불필요한 코드가 발생하여 ContextAPI를 이용한 리팩토링을 통해 props drilling을 개선시킬 예정임
- react-router-dom에서 제공하는 useParams 훅을 이용하여 상품별 상세페이지의 URL 파라미터 정보를 가져옴
  ⇒ 가져온 파라미터 정보를 활용하여 props로 받아온 상품 정보 배열에서 클릭한 Card 컴포넌트에 적합한 데이터 추출
- 스타일컴포넌트를 이용하여 상세페이지 모달창 구현
- fetchAPI를 이용하는 대신 axios로 변경하여 자동으로 응답 받은 데이터를 JSON 데이터로 변환 받도록 수정함
- 사용자의 로그인 상태를 전역에서 관리하기 위하여 useReducer와 ContextAPI를 같이 사용할 예정임
- 로그인 하지 않은 사용자가 장바구니와 같이 사용자 정보를 요하는 페이지에 접근하고자 하는 경우 useNavigate 훅을 이용하여 login 페이지로 이동 및 replace 인자를 true로 지정하여 히스토리를 초기화할 예정임
