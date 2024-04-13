#!/usr/bin/env node

// import inquirer, { type Question } from 'inquirer'
import { exec } from 'node:child_process'
import { getDir, pathResolve } from './utils'

// const questions: Question[] = [
//   { type: 'input', name: 'path', message: '请输入目标路径' },
// ]

// 获取路径
// const { path } = await inquirer.prompt(questions)

// const { fileList } = getDir(pathResolve(path))
const { fileList } = getDir(pathResolve('.'))

// 只要 .tar.gz 文件
const newFileList = fileList.filter(i => i.endsWith('.tgz'))

newFileList.forEach((p) => {
  const filename = p.split(/[\\|/]/).pop()
  if (!filename) {
    throw new Error('未发现包名')
  }
  const execStr: string = `curl -u admin:123321 -X POST http://192.168.0.107:9100/service/rest/v1/components?repository=npm-hosted \
    -H "accept: application/json" \
    -H "Content-Type: multipart/form-data" \
    -F "npm.asset=@${p};type=application/x-compressed"
  `

  exec(execStr, (_err, stdout, stderr) => {
    if (stderr) {
      console.log(stderr)
      return
    }
    console.log('stdout', stdout)
  })
})
