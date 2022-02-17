import {Title} from '../layout/title'
import {ExpertiseItem} from './expertise-item'

export const Expertise = () => {
  const expertiseItems = [
    {
      image: "/images/global-images/design.svg",
      alt: "my expertise: design",
      title: "Design",
      items: [
        "UI/UX design",
        "Graphic design",
        "Product design"
      ]
    },
    {
      image: "/images/global-images/development.svg",
      alt: "my expertise: development",
      title: "Development",
      items: [
        "Frontend",
        "Backend",
        "Deployment"
      ]
    },
    {
      image: "/images/global-images/language.svg",
      alt: "my expertise: language service",
      title: "Language Service",
      items: [
        "Site localization",
        "Translation",
        "Instruction"
      ]
    }
  ]

  return (
    <div className="w-full py-20 lg:py-36">
      <div className="container">
        <Title
          label="My Expertise"
          title="What I Do."
          reverse={false}
          className="mb-16"
        />
        <div className="md:grid md:grid-cols-3 ">
          {expertiseItems.map(expertiseItem => {
            const {image, alt, title, items} = expertiseItem
            return (
              <ExpertiseItem
                image={image}
                alt={alt}
                title={title}
                items={items}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

