import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData';

import { callAPIResponse } from '../../db/callAPI';

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
  padding-bottom: 156px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`;

export default function HomePage() {
  const [loadData, setLoadData] = useState(null);

  useContext(callAPIResponse).then((data) => {
    console.log(data);
    setLoadData(data);
  });

  return (
    <ContainerMain>
      {loadData !== null ? (
        <>
          <ContainerProductList>
            {loadData.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </ContainerProductList>
          <Cart />
        </>
      ) : (
        <FailLoadData />
      )}
    </ContainerMain>
  );
}
