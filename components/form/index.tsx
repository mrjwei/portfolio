import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import { useForm, ValidationError } from '@formspree/react'
import {Button} from '../button'

type Props = {
  mode: "primary" | "light"
  withBorder?: true
}

export const Form = ({mode, withBorder}: Props) => {
  const {t} = useTranslation("contact")

  const router = useRouter()

  const [state, handleSubmit] = useForm("mpzbdvpa")

  if (state.succeeded) {
    return (
      <div className='w-full'>
        <div className='max-w-[14rem] mb-12 mx-auto'>
          <Image src="/images/global-images/mail-sent-for-hp.svg" layout="responsive" width={570} height={512}/>
        </div>
        <p className='text-3xl font-bold text-red-300 text-center mb-12'>
          Thank you for getting in touch!<br />
          I will get back to you soon!
        </p>
        <Button mode="primary-border" className='mx-auto'>
          <Link href="/contact">
            Back to Form
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className={`container ${router.asPath === "/contact" && "container lg:grid lg:grid-cols-2"}`}>
      {router.asPath === "/contact" && (
        <div>
          <h2 className='mb-8'>{t("title.main")}</h2>
          <Trans
              i18nKey="contact:title.description"
              components={[
                <p key={0} className="text-xl mb-14 lg:mb-0" />,
                <p key={1} className="text-xl mb-14 lg:mb-0" />,
                <p key={2} className="text-xl mb-14 lg:mb-0" />,
              ]}
            />
          <p className='text-xl mb-14 lg:mb-0'>

          </p>
        </div>
      )}
      <form className="block w-full" onSubmit={handleSubmit}>
        <input type="hidden" name="Contact Form" value="contact-form" />
        <div className="mb-6">
          <label htmlFor="company-name" className={`block mb-3 ${mode === "primary" && "text-white"}`}>{t("form.companyName")}</label>
          <input type="text" name="company-name" id="company-name" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} />
          <ValidationError
            prefix="CompanyName"
            field="company-name"
            errors={state.errors}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="name" className={`block mb-3 ${mode === "primary" && "text-white"}`}>{t("form.name")}</label>
          <input type="text" name="name" id="name" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className={`block mb-3 ${mode === "primary" && "text-white"}`}>{t("form.email")}</label>
          <input type="email" name="email" id="email" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className={`block mb-3 ${mode === "primary" && "text-white"}`}>{t("form.subject.label")}</label>
          <select name="subject" id="subject" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `}>
            <option selected disabled>{t("form.subject.options.1")}</option>
            <option value="interested in hiring jesse">{t("form.subject.options.2")}</option>
            <option value="question about a work/post">{t("form.subject.options.3")}</option>
            <option value="other">{t("form.subject.options.4")}</option>
          </select>
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>
        <div className="mb-12">
          <label htmlFor="message" className={`block mb-3 ${mode === "primary" && "text-white"}`}>{t("form.message")}</label>
          <textarea name="message" id="message" rows={5} maxLength={500} className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `}></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" className={`button ${mode === "primary" ? "button-white" : "button-bg-primary"}`} disabled={state.submitting}>{t("button")}</button>
      </form>
    </div>
  )
}

