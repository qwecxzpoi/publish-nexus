/**
 * @file 工具集
 * @description 创建时间 2024:04:13 20:43:05
 * @author benyuanzhang
 */

import { readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

export function pathResolve(path: string) {
  if (/^./.test(path)) {
    return resolve(cwd(), path)
  }
  else {
    return resolve(path)
  }
}

export function getDir(dir: string) {
  const dirs = readdirSync(dir)

  const category: { dirList: string[], fileList: string[] } = {
    dirList: [],
    fileList: [],
  }
  dirs.forEach((i) => {
    const path = resolve(dir, i)
    const stat = statSync(path)
    const categoryType = stat.isFile() ? 'fileList' : 'dirList'

    category[categoryType].push(path)
  })
  return category
}
