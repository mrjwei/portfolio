import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'
import {WorkDataType} from '../types'

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

export const getWorkIds = () => {
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export const getWorkDataAndContent = async (id: string) => {
  const fullPath = path.join(worksDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const content = processedContent.toString()

  return {
    id,
    content,
    ...matterResult.data
  }
}
