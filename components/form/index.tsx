import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react'
import {Button} from '../button'

type Props = {
  mode: "primary" | "light"
  withBorder?: true
}

export const Form = ({mode, withBorder}: Props) => {
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
    <div className="container lg:grid lg:grid-cols-2">
      <div>
        <h2 className='mb-8'>Contact.</h2>
        <p className='text-xl mb-14 lg:mb-0'>
          Whether you&apos;re interested in hiring me<br/>
          or you&apos;ve got a question to ask,<br/>
          feel free to get in touch!
        </p>
      </div>
      <form className="block w-full" onSubmit={handleSubmit}>
        <input type="hidden" name="Contact Form" value="contact-form" />
        <div className="mb-6">
          <label htmlFor="company-name" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Company Name (optional)</label>
          <input type="text" name="company-name" id="company-name" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} />
          <ValidationError
            prefix="CompanyName"
            field="company-name"
            errors={state.errors}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="name" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Name</label>
          <input type="text" name="name" id="name" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Email Address</label>
          <input type="email" name="email" id="email" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Subject</label>
          <select name="subject" id="subject" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `}>
            <option selected disabled>Choose a subject</option>
            <option value="interested in hiring jesse">Interested in hiring Jesse</option>
            <option value="question about a work/post">Got a question about a work/post</option>
            <option value="other">Other</option>
          </select>
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>
        <div className="mb-12">
          <label htmlFor="message" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Message</label>
          <textarea name="message" id="message" rows={5} maxLength={500} className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `}></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" className={`button ${mode === "primary" ? "button-white" : "button-bg-primary"}`} disabled={state.submitting}>Submit</button>
      </form>
    </div>
  )
}

