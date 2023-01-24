import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import api from "./api/axios";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import CartAndPayment from "./pages/Cart/CartAndPayment";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --main-color: #21BF48;
    --txt-color: #000000;
    --border-color: #c4c4c4;
    --sub-border-color: #e0e0e0;
    --bg-color: #fffff;
    --emphasis-txt-color: #EB5757;
    --warning-color: #EB5757;
    --sub-txt-color: #767676;
    --button-border: #c4c4c4;
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

  html,
  body {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 10px;
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
    vertical-align: baseline;
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

  useEffect(() => {
    if (!loadData) {
      const getProductData = async () => {
        const res = await api.get("/");
        setLoadData(res.data);
      };
      getProductData();
    }
  }, [loadData]);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home loadData={loadData} />} />
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
