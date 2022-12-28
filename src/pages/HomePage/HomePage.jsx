import styled from 'styled-components';

import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData';

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin: 160px auto 0;
  padding-bottom: 156px;
`;

const ContainerProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  // grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  // width: 1260px;
  flex-basis: 1260px;
  max-width: 1260px;
  margin-right: 60px;
`;

export default function HomePage({ loadData }) {
  // console.log(loadData);

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
