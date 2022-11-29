import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { callAPIResponse } from '../src/db/callAPI';

import HomePage from './pages/HomePage/HomePage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CartAndPayment from './pages/CartAndPayment/CartAndPayment';
// import './assets/css/reset.css';
// import './app.css';

// 이 공간에서 다른 페이지로 라우팅이 되게 해주세요.
const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --main-color: #6327fe;
    --txt-color: #333333;
    --border-color: #c4c4c4;
    --sub-border-color: #e0e0e0;
    --bg-color: #f2f2f2;
    --emphasis-txt-color: #eb5757;
    --sub-txt-color: #828282;
    --button-border: #bdbdbd;
  }

  div,
  span,
  article,
  section,
  header,
  main,
  footer,
  p,
  ul,
  li,
  label,
  a,
  nav,
  h1,
  h2,
  h3,
  form,
  input,
  button,
  img,
  textarea,
  table,
  thead,
  tbody,
  tr,
  th,
  td {
    box-sizing: border-box;
  }

  body,
  html {
    width: 100%;
    height: 100%;
  }

  body,
  button {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  body {
    font-weight: 400;
    color: var(--txt-color);
  }

  img {
    width: 100%;
    height: auto;
    vertical-align: top;
  }

  a {
    display: block;
    text-decoration: none;
    color: #000;
  }

  table,
  thead,
  tbody,
  tr {
    display: block;
  }

  /* Image Replacement 약자 스크린리더가 읽을 수 있도록 대체텍스트 */
  .ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  /* 한줄 말줄임 */
  .sl-ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 두줄 말줄임 */
  .multi-ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  /* button 스타일 */
  button {
    border: none;
    cursor: pointer;
    padding: 0;
  }
`;

function App() {
  const [loadData, setLoadData] = useState(null);

  useContext(callAPIResponse).then((data) => {
    // console.log(data);
    setLoadData(data);
  });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage loadData={loadData} />} />
        <Route path="/:id" element={<ProductDetails loadData={loadData} />} />
        <Route
          path="/payment"
          element={<CartAndPayment loadData={loadData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
