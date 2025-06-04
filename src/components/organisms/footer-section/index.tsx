import React from 'react'
import TextFooter from '@/components/molecules/footer/index'

const FooterWrapper = () => {
  return (
    <footer className="w-full bg-zinc-900 py-6 mt-10 rounded-lg">
      <div className="max-w-[970px] mx-auto flex justify-center items-center md:flex-row flex-col gap-4">
        <TextFooter />
      </div>
    </footer>
  )
}

export default FooterWrapper
