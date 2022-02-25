import Image from 'next/image'

export const FirstView = () => {
  return (
    <div className="w-full pt-28 bg-red-300 md:h-[35rem] lg:h-screen lg:pt-36">
      <div className="container h-full md:grid md:grid-cols-2 md:grid-rows-1">
        <h1 className="text-white mb-16 md:mb-0 md:mr-14 md:flex md:flex-col md:justify-start lg:translate-y-10">
          Hi! I&apos;m Jesse Wei.<br />
          I Create Beautiful & User-Friendly Web Services That Help Business Grow.
        </h1>
        <div className="w-full h-[30rem] relative flex justify-center md:h-full md:justify-end">
          <Image src="/images/global-images/first-view-illustration.svg" alt="first view illustration of Jesse Wei" layout='fill' objectFit='contain' />
        </div>
      </div>
    </div>
  )
}
