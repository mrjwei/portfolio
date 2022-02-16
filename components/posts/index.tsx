import Link from 'next/link'

export const Posts = ({postsData}: any) => {
  return (
    <div className="w-full">
      <div className="container">
        <div>
          <span>My Posts</span>
          <h2 className="text-6xl font-bold">
            I Write About Design,<br />
            Programming and<br />
            Technologies.
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3">
          {postsData.slice(0, 2).map((post: any, index: number) => {
            return (
              <div key={index} className={`${index === 1 ? 'card lg:right-20' : 'card'}`}>
                <div className="card-body">
                  <h3>{post.title}</h3>
                  <ul className="tags">
                    {post.tags.map((tag: any) => {
                      return (
                        <li key={tag} className="tag">{tag}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
          <Link href="/posts">More Posts</Link>
        </div>
      </div>
    </div>
  )
}