import styled from 'styled-components'
import { ColorTheme } from '../../../@constant/theme'

export const StyleTagItem = styled.div`
  padding: 0 8px;
  height: 32px;
  font-size: 14px;
  color: ${ColorTheme.color_text_L3};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 16px;
    height: 16px;
    path {
      fill: ${ColorTheme.color_text_L3};
    }
  }

  &.is-select {
    border-color: transparent;
    color: ${ColorTheme.main_color};
    svg path {
      fill: ${ColorTheme.main_color};
    }
  }
`
