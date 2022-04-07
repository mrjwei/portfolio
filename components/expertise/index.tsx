import useTranslation from 'next-translate/useTranslation'
import {Title} from '../sectionTitle'
import {ExpertiseItem} from './expertise-item'

export const Expertise = () => {
  const {t} = useTranslation("top")

  const expertiseItems = [
    {
      image: "/images/global-images/design.svg",
      alt: "my expertise: design",
      title: t("expertise.content.design.title"),
      items: [
        t("expertise.content.design.items.1"),
        t("expertise.content.design.items.2"),
        t("expertise.content.design.items.3")
      ]
    },
    {
      image: "/images/global-images/development.svg",
      alt: "my expertise: development",
      title: t("expertise.content.development.title"),
      items: [
        t("expertise.content.development.items.1"),
        t("expertise.content.development.items.2"),
        t("expertise.content.development.items.3")
      ]
    },
    {
      image: "/images/global-images/language.svg",
      alt: "my expertise: language service",
      title: t("expertise.content.language.title"),
      items: [
        t("expertise.content.language.items.1"),
        t("expertise.content.language.items.2"),
        t("expertise.content.language.items.3")
      ]
    }
  ]

  return (
    <div className="w-full py-20 lg:py-36">
      <div className="container">
        <Title
          label={t("expertise.title.main")}
          reverse={false}
          className="mb-20"
        >
          <span className='inline-block relative z-10 after:underbar'>{t("expertise.title.description")}</span>
        </Title>
        <div className="md:grid md:grid-cols-3 ">
          {expertiseItems.map((expertiseItem, index) => {
            const {image, alt, title, items} = expertiseItem
            return (
              <ExpertiseItem
                key={index}
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

