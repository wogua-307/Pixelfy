import styled from 'styled-components'
import { ColorTheme } from '../../@constant/theme'

export const StyledScrollTopButton = styled.div`
  width: 32px;
  height: 32px;
  right: 10px;
  bottom: 20px;
  z-index: 3;
  position: fixed;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  svg {
    width: 10px;
  }
  &:hover {
    background: ${ColorTheme.main_color};
    svg path {
      fill: white;
    }
  }

  .content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`
