interface PhotoItem {
  id: number,
  width: number,
  height: number,
  url: string, // 照片所在的 Pexels URL
  photographer: string, // 拍摄照片的摄影师的姓名
  photographer_url: string, // 摄影师的 Pexels 个人主页的 URL
  photographer_id: number,
  avg_color: string, // 照片的平均颜色。在图像加载时，对于占位符很有用
  src: {
    original: string,
    large2x: string,
    large: string,
    medium: string,
    small: string,
    portrait: string,
    landscape: string,
    tiny: string
  },
  liked: boolean,
  alt: string // 要在 alt 属性中使用的照片的文本描述
}

export type {
  PhotoItem
}