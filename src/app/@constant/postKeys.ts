const PLUGIN_POST_KEY = {
  'selectionChange': 'mb-figma-selection-change',
  'uploadFrame': 'mb-figma-upload-frame',
  'uploadCollect': 'mb-figma-upload-collect', // 获取收藏数据
}

// plugin webview postmessage
const PLUGIN_WEB_POST_KEY = {
  'webFrameInfo': 'mb-figma-web-frame-info', // 获取当前画板信息
  'webFrameImgMosaic': 'mb-figma-web-frame-img-mosaic', // 图片马赛克
  'webFrameGetCollect': 'mb-figma-web-frame-get-collect-data', // 获取收藏数据
  'webFrameLocalCollectSave': 'mb-figma-web-frame-local-collect-save', // 收藏保存
}

export {
  PLUGIN_POST_KEY,
  PLUGIN_WEB_POST_KEY
}
