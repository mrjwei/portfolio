export const Article = ({postData}: any) => {
  const {title, date, tags, contentHtml} = postData
  return (
    <article>
      <time>{date}</time>
      <h1 className="text-6xl">{title}</h1>
      <ul className="flex">
      {tags.map((tag: string, index: number) => {
        return (
          <li key={index}>{tag}</li>
        )
      })}
      </ul>
      <div dangerouslySetInnerHTML={{__html: contentHtml}} />
    </article>
  )
}

