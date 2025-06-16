import React, { memo, useCallback, useMemo } from "react";
import cx from 'classnames'
import { StyledPhotoCard } from "./styles";
import { PhotoItem } from "../../../../types/photo";
import { SVG_COLLECT } from "../../../component/svg";
import { SVGBox } from "../../../component/SVGBox";
import { useCollectHooks } from "../../Hooks/collectHook";

interface Props {
  item: PhotoItem
}
export const PhotoCard = memo(({item}: Props) => {
  const { width, height, src: {medium}, photographer, photographer_url, avg_color } = item
  const paddingTop = Math.round((height / width) * 100)

  const { collectList, onToggleCollect } = useCollectHooks()
  const isCollect = useMemo(() => {
    return !!(collectList.find((i) => i.id === item.id))
  }, [collectList])

  // 切换收藏
  const handleCollectClick = useCallback(() => {
    onToggleCollect(item)
  }, [item, onToggleCollect])

  return (
    <StyledPhotoCard
      paddingtop={paddingTop}
      bgcolor={avg_color}
    >
      <div
        style={{ backgroundImage: `url(${medium})` }}
        className="mkt-thumbnail" />

      <div className="photo-info">
       <a className="photographer" target="_blank" href={photographer_url}>{photographer}</a>
      </div>

      <div className={cx("actions", {'is-collect': isCollect})}>
        <SVGBox
          isActive={isCollect}
          onClick={handleCollectClick}
        >
          {SVG_COLLECT}
        </SVGBox>
      </div>
    </StyledPhotoCard>
  )
})