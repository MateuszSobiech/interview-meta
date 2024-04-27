import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 250px;
  height: 500px;
  border: white 1px solid;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  justify-content: center;
  font-size: 18px;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const StyledCheckbox = styled.input`
  width: 18px;
  height: 18px;
`;
