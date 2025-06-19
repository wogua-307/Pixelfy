import { RefObject, useCallback, useEffect, useRef, useState } from "react"

const PAGE_SIZE = 80

interface Props {
  scrollRef: RefObject<HTMLDivElement>
  totalCount: number
  page: number
  fetchLoadData?: (page: number) => void
}
const useScrollHook = ({ scrollRef, totalCount, page, fetchLoadData }: Props) => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const pageRef = useRef(page)
  const totalRef = useRef(totalCount)

  const handleScroll = useCallback(() => {
    const $content = scrollRef?.current
    if (!$content) return

    const bodyScrollHeight = $content.scrollHeight
    const bodyClientHeight = $content.clientHeight
    const bodyScrollTop = $content.scrollTop

    // 判断是否显示回到顶部按钮
    setShowScrollTop(bodyScrollTop > 80)
    const remainingScroll = bodyScrollHeight - (bodyClientHeight + bodyScrollTop)
    const renderCount = pageRef.current * PAGE_SIZE

    // 判断是否接近底部（加载更多）
    if (remainingScroll <= 0 && renderCount < totalRef.current) {
      fetchLoadData && fetchLoadData(pageRef.current + 1)
    }
  }, [totalRef, pageRef, scrollRef])

  /** 滚动到顶部 */
  const handleScrollTop = useCallback(() => {
    const $content = scrollRef?.current
    if (!$content) return
    requestAnimationFrame(() => $content.scrollTo({ top: 0, behavior: 'smooth' }))
  }, [scrollRef])

  useEffect(() => {
    const $content = scrollRef?.current
    if (!$content) return
    $content.addEventListener('scroll', handleScroll)
    return () => {
      $content.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    console.log('🚜🚜🚜 useScrollHook 🚜🚜🚜', page, totalCount)
    pageRef.current = page;
    totalRef.current = totalCount;
  }, [page, totalCount]);

  return {
    page,
    showScrollTop,
    handleScrollTop
  }
}

export {
  PAGE_SIZE,
  useScrollHook
}