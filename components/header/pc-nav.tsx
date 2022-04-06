import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  mode: string
}

export const PCNav = ({mode}: Props) => {
  const {t} = useTranslation("common")

  return (
    <nav className="hidden lg:block">
      <ul className='flex items-center'>
        <li><Link href="/"><a className={`px-6 ${mode === "primary" ? "text-white" : "text-red-300"}`}>{t("nav.top")}</a></Link></li>
        <li><Link href="/works"><a className={`px-6 ${mode === "primary" ? "text-white" : "text-red-300"}`}>{t("nav.works")}</a></Link></li>
        <li><Link href="/posts"><a className={`px-6 ${mode === "primary" ? "text-white" : "text-red-300"}`}>{t("nav.posts")}</a></Link></li>
        <li><Link href="/contact"><a className={`button border-2 p-1 px-6 ${mode === "primary" ? "button-white text-white" : "button-primary text-red-300"}`}>{t("nav.contact")}</a></Link></li>
      </ul>
    </nav>
  )
}

