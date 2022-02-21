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
  return (
    <div className="w-full py-20 lg:py-56">
      <div className="container">
        <Title
          label="About Me"
          reverse={false}
          className="mb-20"
        >
          <span className='inline-block relative z-10 after:underbar'>I Am a Trilingua</span>l<br />
          <span className='inline-block relative z-10 after:underbar'>Designer and</span><br />
          <span className='inline-block relative z-10 after:underbar'>Developer.</span>
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
            <p className='mb-8'>My name is Jesse Wei. I am a <span className='font-bold'>trilingual (Chinese, English and Japanese) designer and developer</span> currently based in Japan.</p>
            <p  className='mb-8'>Trained as a product designer, I learned coding 6 years ago. Being able to <span className='font-bold'>design AND develop</span> helps me understand a project better. It also allows me to see a potential solution from different perspectives so it not just looks appealing but is technically viable as well.</p>
            <p>In addition to design and coding, I like <span className='font-bold'>illustrating</span> as well. On weekends, I usually <span className='font-bold'>practice latte art</span> or treat my friends to freshly brewed coffee at home. I also like football and I am a fan of <span className='font-bold'>LiverpoolFC</span> and the Premier League.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

