import React, { useCallback, useEffect, useRef } from "react";
import { fetchPexelsCurated } from "../../service";
import { MaterialList } from "../container/MaterialList";
import { useAppDispatch, useAppSelector } from "../../store";
import { getFeatureIsLoading, getFeaturePage, getFeaturePhotos, getFeatureState, getFeatureTotal, updateFeatureState } from "../../store/reducers/feature";
import { PAGE_SIZE, useScrollHook } from "../../Hooks/scrollHooks";
import { ScrollTopButton } from "../../component/ScrollTopButton";

const FeaturePage = () => {
  const dispatch = useAppDispatch()
  const scrollRef = useRef<HTMLDivElement>(null)
  const page = useAppSelector(getFeaturePage)
  const total = useAppSelector(getFeatureTotal)
  const isLoading = useAppSelector(getFeatureIsLoading)
  const photos = useAppSelector(getFeaturePhotos)

  /** 加载精选数据 */
  const fetchFeaturePhotos = useCallback(async (page) => {
    console.log('🚜🚜🚜 fetchFeaturePhotos 🚜🚜🚜', page, photos)
    if (isLoading) return
    dispatch(updateFeatureState({isLoading: true}))
    const result = await fetchPexelsCurated({page})
    if (!result) return dispatch(updateFeatureState({isLoading: false}))
    const {total_results, photos: newPhotos} = result
    dispatch(updateFeatureState({total: total_results, photos: newPhotos, isLoading: false, page: page}))
  }, [photos, isLoading, dispatch])

  const {showScrollTop, handleScrollTop} =  useScrollHook({ scrollRef: scrollRef, totalCount: total, page, fetchLoadData: fetchFeaturePhotos })

  useEffect(() => {
    if (photos.length) return
    fetchFeaturePhotos(1)
  }, [fetchFeaturePhotos])

  return (
    <>
      <MaterialList photos={photos} ref={scrollRef}/>
      {showScrollTop && <ScrollTopButton onClickScrollTop={handleScrollTop}/>}
    </>
    
  )
}

export default FeaturePage