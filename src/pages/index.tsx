/* eslint-disable @typescript-eslint/no-empty-interface */
import { NextPage } from 'next'

import IconLandingPage from "../assets/Images/IconLandingPage.svg"
import IconLandingPagePNG from "../assets/Images/IconLandingPage.png"

import { Medula_One, Markazi_Text } from '@next/font/google'
import Image from 'next/image'

const medula_one = Medula_One({
  weight: '400',
  variable: '--medulaOne',
  subsets: ['latin']
})

const markazi_text = Markazi_Text({
  weight: '700',
  variable: '--markazi',
  subsets: ['latin']
})


interface indexProps {}

const Index: NextPage<indexProps> = ({}) => {
  return (
    <div className={"h-screen w-screen flex items-center justify-between"}>
      <div className={`h-full w-1/2 flex flex-col justify-center gap-y-10 px-[10%] ${medula_one.className} text-[10rem]`}>
        <div className={`w-full flex flex-col justify-center`}>
          <span className={'text-7xl leading-[3rem] text-projectGrey-500'}>
            Vamos
          </span>
          <span className={'text-[10rem] text-projectBlue-100'}>
            Proteger
          </span>
          <span className={'text-[6.5rem] leading-[3rem] text-projectGrey-500'}>
            Seus Dados
          </span>
        </div>
        <div className={"flex flex-col gap-8 items-start"}>
          <span className={`text-lg text-projectGrey-500 leading-none ${markazi_text.className} text-justify`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </span>
          <button className={'bg-projectBlue-100 w-5/6 text-3xl p-2 rounded-2xl text-white flex justify-center items-center'}>
            Faça o teste
          </button>
        </div>
      </div>
      <div className={"h-full w-1/2 flex justify-center items-center"}>
        <IconLandingPage/>
      </div>
    </div>
  )
}

export default Index
