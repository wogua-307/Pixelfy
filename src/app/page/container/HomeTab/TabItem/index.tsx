import React, { memo } from 'react'
import { StyleTagItem } from './styles'

interface Props {
  isSelect: boolean
  item: { label: string, value: string, icon?: React.ReactNode }
  onClickItem: (value: string) => void
}
export const TagItem = memo(({ isSelect, item, onClickItem }: Props) => {
  return (
    <StyleTagItem className={isSelect ? 'is-select' : ''} onClick={() => onClickItem(item.value)}>
      {item.icon && item.icon}
      {item.label}
    </StyleTagItem>
  )
})
