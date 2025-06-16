const { copyFile, copyFolder, fsExistsSync } = require('./fileTool')

const fs = require('fs')
const archiver = require('archiver') // TODO: remove
const archive = archiver('zip', { zlib: { level: 9 } })

const manifest = JSON.parse(fs.readFileSync('./manifest.json'))
const outputPath = './output-package'
// 打包路径
const packagePath = `${outputPath}/mb-figma-plugin-v${manifest.api}`

// 需要打包的文件/文件夹
const fileList = ['manifest.json', 'dist']
// 打包
const getPluginPackage = async () => {
  // 文件夹不存在需要新建
  if (!fsExistsSync(outputPath)) {
    fs.mkdirSync(outputPath)
  }
  if (!fsExistsSync(packagePath)) {
    fs.mkdirSync(packagePath)
  }
  // 复制文件夹
  fileList.forEach(async (path) => {
    const itemPath = `./${path}`
    var stat = fs.lstatSync(itemPath)
    if (stat.isDirectory()) {
      await copyFolder(itemPath, `${packagePath}/${path}`)
    } else {
      copyFile(itemPath, `${packagePath}/${path}`)
    }
  })

  const stream = fs.createWriteStream(`${packagePath}.zip`)

  return new Promise((resolve, reject) => {
    archive
      .directory(packagePath, false)
      .on('error', err => reject(err))
      .pipe(stream)

    stream.on('close', () => resolve())
    archive.finalize()
  })
}

// 打包
getPluginPackage().then(() => {
  console.log('bundle success 🎉😄🎉')
}, err => {
  console.log('##### bundle error 😢', err)
})
