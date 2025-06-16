const fs = require('fs')
const fsExtra = require('fs-extra')

// 复制文件
const copyFile = (fromPath, toPath) => {
  return new Promise((resolve, reject) => {
    fs.writeFileSync(toPath, fs.readFileSync(fromPath))
    resolve()
  })
}

// 复制文件夹
const copyFolder = (source, destination) => {
  return new Promise((resolve, reject) => {
    fsExtra.copy(source, destination, function (err) {
      if (err) {
        console.log('An error occured while copying the folder.')
        reject(err)
        return
      }
      resolve()
      console.log('Copy completed!')
    })
  })
}

// 判断文件/文件夹是否存在
const fsExistsSync = (path) => {
  try {
    fs.accessSync(path, fs.F_OK)
  } catch (e) {
    return false
  }
  return true
}
module.exports = {
  copyFile,
  copyFolder,
  fsExistsSync
}
