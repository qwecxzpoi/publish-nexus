#!/usr/bin/env node

import { resolve } from 'node:path'
import process from 'node:process'
import inquirer, { type Question } from 'inquirer'

const questions: Question[] = [
  { type: 'input', name: 'path', message: '请输入目标路径' },
]

// 获取路径
const { path } = await inquirer.prompt(questions)
function pathResolve(path: string) {
  console.log(path)
  if (/^./.test(path)) {
    return resolve(process.cwd(), path)
  }
  else {
    return resolve(path)
  }
}

console.log(pathResolve(path))
