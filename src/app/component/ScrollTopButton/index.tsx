import React, { memo } from 'react'

import { StyledScrollTopButton } from './styles'
import { SVG_SCROLL_TOP } from '../svg'

interface Props {
  onClickScrollTop: () => void
}
export const ScrollTopButton = memo(({ onClickScrollTop }: Props) => {
  return (
    <StyledScrollTopButton onClick={onClickScrollTop}>
      {SVG_SCROLL_TOP}
    </StyledScrollTopButton>
  )
})
