export const Works = ({worksData}: any) => {
  return (
    <div className="w-full bg-red-100">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div>
          <span>My Works</span>
          <h2 className="text-6xl font-bold">
            Websites.<br />
            Web Applications.<br />
            Graphic Designs.<br />
            Illustrations.<br />
            And Many More.
          </h2>
        </div>
        <div>
          {worksData.slice(0, 2).map((work: any, index: number) => {
            return (
              <div key={index} className={`${index === 1 ? 'card lg:right-20' : 'card'}`}>
                <div className="card-img-wrapper">
                  <img src={work.image} alt={work.description} className="card-img" />
                </div>
                <div className="card-body">
                  <h3>{work.title}</h3>
                  <ul className="tags">
                    {work.tags.map((tag: any) => {
                      return (
                        <li key={tag} className="tag">{tag}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}