import { createSlice } from '@reduxjs/toolkit'
// import { AiPPTMarketTemplate, BomxMarketTemplate, FeaturedCategory, MarketTemplate } from 'types/template'
// import { DASH_HOME_SUB_ROUTER } from 'pages/dash/router/path'
// import { getHomePageMatched } from 'pages/dash/router/utils'

export interface HomeState {
  featured: {
    page: number
    total: number
    photos: PhotoItem[]
    isLoading: boolean
  },
  bomx: {
    isLoadQsMkt: boolean // 快速开始是否在loading中
    qsMktList: BomxMarketTemplate[], // 快速开始
    isLoadFMkt: boolean
    fcCategoryList: string[]
    fcMktMap: { [key: string]: BomxMarketTemplate[] }
    isLoading: boolean // 全部数据加载中
  },
  aippt: {
    isLoadQsMkt: boolean
    qsMktList: AiPPTMarketTemplate[], // 快速开始
    isLoading: boolean // 全部数据加载中
  }
  moreMaterial: {
    show: boolean,
    name?: string
    platform?: string // 行业
    plabel?: string // 分类
    plabelId?: number // 分类id
  },
  tab: string
}

const getInitHomeTab = () => {
  if (!location?.pathname) return DASH_HOME_SUB_ROUTER.proto
  return getHomePageMatched(location.pathname)?.params?.tab || DASH_HOME_SUB_ROUTER.proto
}

const homeInitialState: HomeState = {
  tab: 'feature' | '' | ''
}

const homeSlice = createSlice({
  name: 'home',
  initialState: homeInitialState,
  reducers: {
    updateHomeState: (state, { payload }) => {
      return { ...state, ...payload }
    },
    updateHomeProtoState: (state, { payload }) => {
      state.proto = { ...state.proto, ...payload }
    },
    updateHomeBomxState: (state, { payload }) => {
      state.bomx = { ...state.bomx, ...payload }
    },
    updateHomeAiPptState: (state, { payload }) => {
      state.aippt = { ...state.aippt, ...payload }
    },
    updateMoreMaterialState: (state, { payload }) => {
      state.moreMaterial = { ...state.moreMaterial, ...payload }
    }
  }
})

export const { updateHomeState, updateHomeProtoState, updateHomeBomxState, updateMoreMaterialState, updateHomeAiPptState } = homeSlice.actions
export default homeSlice.reducer
