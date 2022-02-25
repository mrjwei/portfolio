import {useState} from 'react'
import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react'

type Props = {
  mode: "primary" | "light"
  withBorder?: true
}

export const Form = ({mode, withBorder}: Props) => {
  const [state, handleSubmit] = useForm("mpzbdvpa")

  // if (state.succeeded) {
  //   return (
  //     <p className='bg-mute text-2xl text-red-300'>
  //       Thank you for getting in touch!<br />
  //       Your form is successfully sent and I will get back to you soon!
  //     </p>
  //   )
  // }

  return (
    <div className='w-full bg-mute p-12'>
      <div className='max-w-[12rem] mb-8 mx-auto'>
        <Image src="/images/global-images/mail-sent-for-hp.svg" layout="responsive" width={570} height={512}/>
      </div>
      <p className='text-2xl font-bold text-red-300 text-left'>
        Thank you for getting in touch!<br />
        I will get back to you soon!
      </p>
    </div>
  )

  // return (
  //   <form className="block w-full" onSubmit={handleSubmit}>
  //     <input type="hidden" name="Contact Form" value="contact-form" />
  //     <div className="mb-6">
  //       <label htmlFor="company-name" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Company Name (optional)</label>
  //       <input type="text" name="company-name" id="company-name" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} />
  //       <ValidationError
  //         prefix="CompanyName"
  //         field="company-name"
  //         errors={state.errors}
  //       />
  //     </div>
  //     <div className="mb-6">
  //       <label htmlFor="name" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Name</label>
  //       <input type="text" name="name" id="name" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} />
  //       <ValidationError
  //         prefix="Name"
  //         field="name"
  //         errors={state.errors}
  //       />
  //     </div>
  //     <div className="mb-6">
  //       <label htmlFor="email" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Email Address</label>
  //       <input type="email" name="email" id="email" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} />
  //       <ValidationError
  //         prefix="Email"
  //         field="email"
  //         errors={state.errors}
  //       />
  //     </div>
  //     <div className="mb-6">
  //       <label htmlFor="subject" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Subject</label>
  //       <select name="subject" id="subject" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `}>
  //         <option selected disabled>Choose a subject</option>
  //         <option value="hiring">Interested in hiring Jesse</option>
  //         <option value="question">Got a question about a work/post</option>
  //         <option value="other">Other</option>
  //       </select>
  //       <ValidationError
  //         prefix="Subject"
  //         field="subject"
  //         errors={state.errors}
  //       />
  //     </div>
  //     <div className="mb-12">
  //       <label htmlFor="message" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Message</label>
  //       <textarea name="message" id="message" rows={5} maxLength={500} className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `}></textarea>
  //       <ValidationError
  //         prefix="Message"
  //         field="message"
  //         errors={state.errors}
  //       />
  //     </div>
  //     <button type="submit" className={`button ${mode === "primary" ? "button-white" : "button-bg-primary"}`} disabled={state.submitting}>Submit</button>
  //   </form>
  // )
}

