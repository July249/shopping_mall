import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ContainerProductDetails = styled.div`
  place-items: center;
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  visibility: ${(props) => (props.modal ? 'visible' : 'hidden')};
  z-index: ${(props) => (props.modal ? '10' : '-10')};
`;

const ModalContainer = styled.section`
  width: 990px;
  height: 630px;
  margin: 60px auto;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  position: relative;
  padding: 60px 60px 52px;
`;

const ContainerProductDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 30px;
`;

const ContainerProductImg = styled.div`
  width: 400px;
  height: 400px;
`;

const StyledProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ContainerProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ProductDetailsPage({ loadData }) {
  const { id } = useParams();

  const [modal, setModal] = useState(true);
  const [productInfo, setProductInfo] = useState(loadData[id - 1]);

  const handleModal = () => {
    setModal(false);
  };

  return (
    <>
      {productInfo ? (
        <ContainerProductDetails>
          <StyledModalOverlay modal={modal} onClick={handleModal}>
            <ModalContainer>
              <ContainerProductDetail>
                <ContainerProductImg>
                  <StyledProductImg
                    src={`https://test.api.weniv.co.kr/${productInfo.thumbnailImg}`}
                    alt={productInfo.productName}
                  />
                </ContainerProductImg>
                <ContainerProductInfo>
                  <h2>{productInfo.productName}</h2>
                  <p>{productInfo.price}</p>
                </ContainerProductInfo>
              </ContainerProductDetail>
            </ModalContainer>
          </StyledModalOverlay>
        </ContainerProductDetails>
      ) : (
        <div>데이터 없음...</div>
      )}
    </>
  );
}
