import Link from 'next/link'

type Props = {
  tags: Array<string>
  isLink: boolean
  fontSize?: string
}

export const Tags = ({tags, isLink, fontSize = "text-sm"}: Props) => {
  return (
    <ul className="tags">
      {tags.map((tag: string) => {
        return (
          <li key={tag} className="tag">
            {isLink ? (
              <Link href="/">
                <a className={`${fontSize} text-red-300 tracking-normal`}>{tag}</a>
              </Link>
            ) : (
              <>{tag}</>
            )}
          </li>
        )
      })}
    </ul>
  )
}

