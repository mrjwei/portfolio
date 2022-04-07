import useTranslation from 'next-translate/useTranslation'
import {
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiApollographql,
  SiReact,
  SiRedux,
  SiVuedotjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiAntdesign,
  SiMaterialui,
  SiPython,
  SiDjango,
  SiRubyonrails,
  SiAmazonaws,
  SiFirebase
 } from "react-icons/si"
import {Title} from '../sectionTitle'

export const About = () => {
  const {t} = useTranslation("top")

  return (
    <div className="w-full py-20 lg:py-56">
      <div className="container">
        <Title
          label={t("about.title.main")}
          reverse={false}
          className="mb-20"
        >
          <span className='inline-block relative z-10 after:underbar'>{t("about.title.description.1")}</span><br />
          <span className='inline-block relative z-10 after:underbar'>{t("about.title.description.2")}</span><br />
          <span className='inline-block relative z-10 after:underbar'>{t("about.title.description.3")}</span>
        </Title>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className='text-4xl text-red-150 grid grid-cols-4 gap-8 mb-16 lg:gap-0 lg:gap-y-8 lg:mb-0 lg:translate-y-2'>
            <SiAdobexd />
            <SiAdobeillustrator />
            <SiHtml5 />
            <SiCss3 />
            <SiSass />
            <SiTailwindcss />
            <SiAntdesign />
            <SiTypescript />
            <SiApollographql />
            <SiReact />
            <SiVuedotjs />
            <SiNextdotjs />
            <SiNuxtdotjs />
            <SiDjango />
            <SiRubyonrails />
            <SiAmazonaws />
          </div>
          <div>
            <p className='mb-8'>{t("about.content.1")}</p>
            <p  className='mb-8'>{t("about.content.2")}</p>
            <p>{t("about.content.3")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

