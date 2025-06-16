import { createSlice } from '@reduxjs/toolkit'
import { PhotoItem } from '../../../types/photo'

export interface CollectState {
  collectList: PhotoItem []
}

const initialState: CollectState = {
  collectList: []
}

const collectSlice = createSlice({
  name: 'collect',
  initialState,
  reducers: {
    updateCollectList(state, action) {
      state.collectList = action.payload
    }
  },
  selectors: {
    getCollectList: (state) => state.collectList || []
  }
})

export const { updateCollectList } = collectSlice.actions
export const { getCollectList } = collectSlice.selectors
export default collectSlice.reducer