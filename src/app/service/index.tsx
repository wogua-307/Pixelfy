
import { PhotoItem } from '../../types/photo'
import MockData from './mock-jx.json'

const SERVICE_BASE_URL = 'https://api.pexels.com'
const FETCH_OPTIONS = {
  headers: {
    'Authorization': '1YZX6PnRTsSyQtAObGVwj7aY4LZE2Qb7csIcdckzNfojUWR4Ioo6qUl0'
  }
}
/**
 * 获取 Pexels 精选图片
 */
const fetchPexelsCurated = async ({page, per_page = 80}: {
  page: number,
  per_page?: number
}): Promise<{
  page: number,
  per_page: number,
  photos: PhotoItem[],
  total_results: number,
  next_page: string
}> => {
  // console.log('fetchPexelsCurated', MockData)
  // if (MockData) return MockData
  const result = await  fetch(`${SERVICE_BASE_URL}/v1/curated?page=${page}&per_page=${per_page}`, { method: 'GET',...FETCH_OPTIONS})
  if (!result.ok) {
    throw new Error('Network response was not ok')
  }
  const resultJson = await result.json()
  return resultJson
}

/**
 * 图片搜索
 * @param param0 
 * @returns 
 */
const fetchPexelsSearch = async ({query, page, per_page = 80}: {
  query: string,
  page: number,
  per_page?: number
}): Promise<{
  page: number,
  per_page: number,
  photos: PhotoItem[],
  total_results: number,
  next_page: string
}> => {
  const result = await  fetch(`${SERVICE_BASE_URL}/v1/search?query=${query}&page=${page}&per_page=${per_page}`, { method: 'GET',...FETCH_OPTIONS})
  if (!result.ok) {
    throw new Error('Network response was not ok')
  }
  const resultJson = await result.json()
  return resultJson
}

export {
  fetchPexelsCurated,
  fetchPexelsSearch
}