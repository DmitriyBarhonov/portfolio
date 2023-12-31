import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #19d5fb;
`

export const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`