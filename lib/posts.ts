import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), "posts")
const fileNames = fs.readdirSync(postsDir)

export const getPostsData = () => {
  const postsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDir, fileName)
    const fileContent = fs.readFileSync(fullPath, "utf8")

    const frontMatter = matter(fileContent)

    return {
      id,
      ...frontMatter.data
    }
  })
  return postsData
}

export const getPostIds = () => {
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export const getPostContentAndData = async (id: string) => {
  const fullPath = path.join(postsDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}





