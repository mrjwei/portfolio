export const Expertise = () => {
  return (
    <div className="w-full">
      <div className="container">
        <div>
          <span>My Expertise</span>
          <h2>What I Do.</h2>
        </div>
        <div className="columns-1 lg:columns-3">
          <div className="flex">
            <img src="/images/global-images/design.svg" alt="" />
            <div>
              <h3>Design</h3>
              <ul>
                <li>UI/UX design</li>
                <li>Graphic design</li>
                <li>Product design</li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <img src="/images/global-images/development.svg" alt="" />
            <div>
              <h3>Development</h3>
              <ul>
                <li>Frontend </li>
                <li>Backend </li>
                <li>Deployment </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <img src="/images/global-images/design.svg" alt="" />
            <div>
              <h3>Language Service</h3>
              <ul>
                <li>Site localization</li>
                <li>Translation</li>
                <li>Instruction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

