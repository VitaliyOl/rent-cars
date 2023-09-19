import styled from 'styled-components';

export const CardList = styled.li`
  display: flex;
  width: 274px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 274px;
  min-height: 268px;
  overflow: hidden;
  border-radius: 14px;
`;

export const Img = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Favorite = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 14px;
  padding-bottom: 28px;
`;

export const Title = styled.h2`
  display: flex;
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  & .make {
    display: inline-block;
  }

  & .accent {
    color: #3470ff;
  }

  & .price {
    margin-left: auto;
    display: inline-block;
  }
`;

export const TextItem = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 28px;
`;

export const CardButton = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px;
  justify-content: center;
  align-items: center;

  border-color: transparent;

  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
