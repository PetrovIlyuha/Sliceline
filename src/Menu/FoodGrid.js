import styled from 'styled-components';
import { Title } from '../Styles/title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: #cfef6f96;
  padding: 5px;
`;

export const Food = styled(Title)`
  height: 200px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({img}) => `url(${img});`}
  background-position: center;
  background-size: cover;
  filter: saturate(80%);
  border-radius: 10px;
  box-shadow: 10px 12px 18px -10px rgba(163,18,18,1);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
