import React, { memo, useMemo } from "react";
import { StyleHomeTab } from "./styles";
import { Segmented } from "antd";
import { TagItem } from "./TabItem";
import { SVG_HOME_COLLECT_TAB, SVG_HOME_FEATURE_TAB, SVG_HOME_HISTORY_TAB } from "../../component/svg";

interface Props {
  selectVal?: string
  className?: string
  style?: React.CSSProperties
  onClickTag: (value: string) => void
  children?: React.ReactNode
}

export const HomeTab = memo(({ selectVal, className, style, onClickTag, children }: Props) => {

  const tabList = useMemo(() => [
    {
      label: 'Feature',
      value: 'Feature',
      icon: SVG_HOME_FEATURE_TAB
    },
    {
      label: 'Collect',
      value: 'Collect',
      icon: SVG_HOME_COLLECT_TAB
    },
    {
      label: 'History',
      value: 'History',
      icon: SVG_HOME_HISTORY_TAB
    }
  ], [])

  return (
    <StyleHomeTab>
      <Segmented
        value={selectVal || ''}
        options={tabList.map(item => ({
          value: item.value,
          label: <TagItem key={item.value} item={item} isSelect={selectVal === item.value} onClickItem={onClickTag}/>
        }))}
      />
    </StyleHomeTab>
  )
})