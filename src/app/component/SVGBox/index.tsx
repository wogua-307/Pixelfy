import React, { memo } from "react";
import cx from 'classnames'
import { StyledSVGBox } from "./styles";

interface Props {
  isActive?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: () => void
}
export const SVGBox = memo(({style, className, children, isActive, onClick}: Props) => {
  return (
    <StyledSVGBox
      className={cx(className, {'is-active': isActive})}
      style={style}
      onClick={onClick}
    >
      {children}
    </StyledSVGBox>
  )
})