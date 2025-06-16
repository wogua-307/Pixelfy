import React, { memo, useMemo } from "react";
import { StyleHomeTab } from "./styles";
import { Segmented } from "antd";
import { TagItem } from "./TabItem";
import { SVG_HOME_COLLECT_TAB, SVG_HOME_FEATURE_TAB, SVG_HOME_HISTORY_TAB } from "../../component/svg";
import { TabType } from "../../../types/photo";

interface Props {
  selectVal?: string
  onClickTag: (value: string) => void
}

export const HomeTab = memo(({ selectVal, onClickTag }: Props) => {

  const tabList = useMemo(() => [
    {
      label: 'Feature',
      value: TabType.feature,
      icon: SVG_HOME_FEATURE_TAB
    },
    {
      label: 'Collect',
      value: TabType.collect,
      icon: SVG_HOME_COLLECT_TAB
    },
    {
      label: 'History',
      value: TabType.history,
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