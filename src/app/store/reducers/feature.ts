import { createSlice } from '@reduxjs/toolkit'
import { PhotoItem } from '../../../types/photo'
export interface FeatureState {
  page: number
  total: number
  photos: PhotoItem[]
  isLoading: boolean
}

const featureInitialState: FeatureState = {
  page: 1,
  total: 0,
  photos: [],
  isLoading: false
}

const featureSlice = createSlice({
  name: 'feature',
  initialState: featureInitialState,
  reducers: {
    updateFeatureState: (state, { payload }) => {
      console.log('updateFeatureState', payload, { ...state, ...payload })
      return { ...state, ...payload, photos: payload.photos ? [...state.photos, ...payload.photos] : state.photos }
    }
  },
  selectors: {
    getFeatureState: (state) => state,
    getFeaturePage: (state) => state.page,
    getFeaturePhotos: (state) => state.photos,
    getFeatureTotal: (state) => state.total,
    getFeatureIsLoading: (state) => state.isLoading
  }
})

export const { updateFeatureState } = featureSlice.actions
export const { getFeatureState, getFeaturePage, getFeaturePhotos, getFeatureTotal, getFeatureIsLoading } = featureSlice.selectors
export default featureSlice.reducer
