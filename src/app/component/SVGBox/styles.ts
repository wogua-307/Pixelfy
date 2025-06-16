import styled from 'styled-components'

export const StyledSVGBox = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  &:hover {
    background-color: rgba(162, 162, 252, 0.3);
  }
  &.is-active {
    background-color: rgba(162, 162, 252, 0.9);
  }
  svg {
    width: 22px;
    height: 22px;
  }
`