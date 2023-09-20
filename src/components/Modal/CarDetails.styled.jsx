import styled from 'styled-components';

export const CardList = styled.li`
  position: relative;
  display: flex;
  width: 541px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding: 40px;

  z-index: 100;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 460px;
  min-height: 248px;
  margin-bottom: 14px;

  overflow: hidden;

  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Img = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  margin-bottom: 8px;

  & .accent {
    color: #3470ff;
  }
`;

export const TextItem = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  width: 277px;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  color: #121417;

  font-size: 14px;

  font-weight: 400;
  line-height: 1.43;

  margin-bottom: 24px;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  margin-bottom: 24px;
`;

export const TitleAccessories = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const AccessoriesText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const TitleRental = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;
export const ListConditions = styled.ul`
  display: flex;

  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const ListConditionsItem = styled.li`
  padding: 7px 14px;
  margin-right: 8px;

  & span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const CardButton = styled.a`
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
