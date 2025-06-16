
import { PhotoItem } from '../../types/photo'
import MockData from './mock-jx.json'

const FETCH_OPTIONS = {
  headers: {
    'Authorization': '1YZX6PnRTsSyQtAObGVwj7aY4LZE2Qb7csIcdckzNfojUWR4Ioo6qUl0'
  }
}
/**
 * 获取 Pexels 精选图片
 */
const fetchPexelsCurated = async (): Promise<{
  page: number,
  per_page: number,
  photos: PhotoItem[],
  total_results: number,
  next_page: string
}> => {
  console.log('fetchPexelsCurated', MockData)
  if (MockData) return MockData
  const result = await  fetch("https://api.pexels.com/v1/curated?per_page=1&per_page=80", { method: 'GET',...FETCH_OPTIONS})
  if (!result.ok) {
    throw new Error('Network response was not ok')
  }
  const resultJson = await result.json()
  return resultJson
}

export {
  fetchPexelsCurated
}