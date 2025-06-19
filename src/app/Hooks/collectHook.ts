import { PhotoItem } from "../../types/photo"
import { PLUGIN_WEB_POST_KEY } from "../@constant/postKeys"
import { figmaWebToPluginPost } from "../page/utils"
import { useAppDispatch, useAppSelector } from "../store"
import { getCollectList, updateCollectList } from "../store/reducers/collect"

const useCollectHooks = () => {
  const dispatch = useAppDispatch()
  const collectList = useAppSelector(getCollectList)

  // 切换收藏
  const onToggleCollect = (item: PhotoItem) => {
    let pre  = collectList
    if (collectList.find((i) => i.id === item.id)) {
      pre = collectList.filter((i) => i.id !== item.id)
    } else {
      pre = [...collectList, item]
      // 最多保留 100 条数据，超出则删除最早添加的
      if (pre.length > 100) pre = pre.slice(pre.length - 100)
    }
    figmaWebToPluginPost({type: PLUGIN_WEB_POST_KEY.webFrameLocalCollectSave, message: JSON.stringify(pre)})
    dispatch(updateCollectList(pre))
  }

  return {
    collectList,
    onToggleCollect
  }
}

export {
  useCollectHooks
}