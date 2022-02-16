import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

const worksDir = path.join(process.cwd(), "works")
const fileNames = fs.readdirSync(worksDir)

export const getWorksData = () => {
  const worksData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(worksDir, fileName)
    const fileContent = fs.readFileSync(fullPath, "utf8")

    const frontMatter = matter(fileContent)

    return {
      id,
      ...frontMatter.data
    }
  })
  return worksData
}

