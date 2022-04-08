import Link from 'next/link'
import {useRouter} from 'next/router'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  mode: string
}

interface LangMapInterface {
  [key: string]: string
}

const langMap: LangMapInterface = {
  "ja": "日本語",
  "en": "English"
}

export const PCNav = ({mode}: Props) => {
  const {pathname, query} = useRouter()

  const {t, lang} = useTranslation("common")

  return (
    <div className="flex">
      <nav className="mr-6 hidden lg:block">
        <ul className='flex items-center'>
          <li>
            <Link href="/" locale={lang}>
              <a className={`px-6 ${mode === "primary" ? "text-white" : "text-red-300"}`}>{t("nav.top")}</a>
            </Link>
          </li>
          <li>
            <Link href="/works" locale={lang}>
              <a className={`px-6 ${mode === "primary" ? "text-white" : "text-red-300"}`}>{t("nav.works")}</a>
            </Link>
          </li>
          <li>
            <Link href="/posts" locale={lang}>
              <a className={`px-6 ${mode === "primary" ? "text-white" : "text-red-300"}`}>{t("nav.posts")}</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" locale={lang}>
              <a className={`button border-2 p-1 px-6 ${mode === "primary" ? "button-white text-white" : "button-primary text-red-300"}`}>{t("nav.contact")}</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`text-sm flex items-center relative ${mode === "primary" ? "text-white" : "text-red-300"}`}>
        <button
          className={`mr-3 ${lang === "ja" ? "relative after:content-[''] after:block after:w-[5px] after:h-[5px] after:bg-red-300 after:rounded-full after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2" : "opacity-60"}`}
        >
          <Link
            href={{
              pathname,
              query
            }}
            locale="ja"
          >
            日本語
          </Link>
        </button>
        <button
          className={`mr-3 ${lang === "en" ? "relative after:content-[''] after:block after:w-[5px] after:h-[5px] after:bg-red-300 after:rounded-full after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2" : "opacity-60"}`}
        >
          <Link
            href={{
              pathname,
              query
            }}
            locale="en"
          >
            EN
          </Link>
        </button>
      </div>
    </div>
  )
}

