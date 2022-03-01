import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

export const getEntriesData = (dirName: string) => {
  const fileDir = path.join(process.cwd(), dirName)
  const fileNames = fs.readdirSync(fileDir)

  const entriesData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(fileDir, fileName)
    const fileContent = fs.readFileSync(fullPath, "utf8")

    const frontMatter = matter(fileContent)

    return {
      id,
      ...frontMatter.data
    }
  })
  return entriesData
}

export const getEntryIds = (dirName: string) => {
  const fileDir = path.join(process.cwd(), dirName)
  const fileNames = fs.readdirSync(fileDir)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export const getContentAndData = async (dirName: string, id: string) => {
  const fileDir = path.join(process.cwd(), dirName)
  const fullPath = path.join(fileDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug) // adds id to heading so can be used by in-file anchor
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content)

  const content = result.toString()

  return {
    id,
    content,
    ...matterResult.data
  }
}