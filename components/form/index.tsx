import {useState} from 'react'

export type FormProps = {
  mode: "primary" | "light"
  withBorder?: true
  action: string
}

export const Form = ({mode, withBorder, action}: FormProps) => {
  const [companyName, setCompanyName] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = (e: any) => {

  }

  return (
    <form action={action} method="POST" className="block w-full" data-netlify="true" onSubmit={onSubmit}>
      <input type="hidden" name="Contact Form" value="contact-form" />
      <div className="mb-6">
        <label htmlFor="company-name" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Company Name (optional)</label>
        <input type="text" name="company-name" id="company-name" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} value={companyName} onChange={e => setCompanyName(e.target.value)} />
      </div>
      <div className="mb-6">
        <label htmlFor="name" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Name</label>
        <input type="text" name="name" id="name" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Email Address</label>
        <input type="email" name="email" id="email" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Subject</label>
        <select name="subject" id="subject" className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `} value={subject} onChange={e => setSubject(e.target.value)}>
          <option value="" selected disabled>Choose a subject</option>
          <option value="hiring">Interested in hiring Jesse</option>
          <option value="question">Got a question about a work/post</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-12">
        <label htmlFor="message" className={`block mb-3 ${mode === "primary" && "text-white"}`}>Message</label>
        <textarea name="message" id="message" rows={5} maxLength={500} className={`block w-full rounded-md ${withBorder ? "border-2" : "border-none"} `}value={message} onChange={e => setMessage(e.target.value)}></textarea>
      </div>
      <button type="submit" className="button button-white">Submit</button>
    </form>
  )
}

