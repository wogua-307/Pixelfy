import { createSlice } from '@reduxjs/toolkit'
import { PhotoItem } from '../../../types/photo'
export interface FeatureState {
  photo: {
    page: number
    total: number
    photos: PhotoItem[]
    isLoading: boolean
  },
  video: {
    page: number
    total: number
    photos: PhotoItem[]
    isLoading: boolean
  }
}

const featureInitialState: FeatureState = {
  photo: {
    page: 1,
    total: 0,
    photos: [],
    isLoading: false
  },
  video: {
    page: 1,
    total: 0,
    photos: [],
    isLoading: false
  }
}

const featureSlice = createSlice({
  name: 'feature',
  initialState: featureInitialState,
  reducers: {
    updateFeatureState: (state, { payload }) => {
      return { ...state, ...payload }
    },
    updateFeaturePhotoState: (state, { payload }) => {
      state.photo = { ...state.photo, ...payload }
    },
    updateFeatureVideoState: (state, { payload }) => {
      state.video = { ...state.video, ...payload }
    }
  }
})

export const { updateFeatureState, updateFeaturePhotoState, updateFeatureVideoState } = featureSlice.actions
export default featureSlice.reducer
