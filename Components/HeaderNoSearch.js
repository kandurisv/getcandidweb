import Image from 'next/image'
import Link from 'next/link'
import HeaderItem from './HeaderItem'
import React from 'react'
import { HomeIcon,CollectionIcon, LightningBoltIcon , PuzzleIcon , ShoppingBagIcon , HashtagIcon , AnnotationIcon} from '@heroicons/react/outline'


const HeaderNoSearch = () => {

  return (
    <header className = "flex flex-col md:flex-row mx-5 justify-between items-center h-auto">
        <Link href= {'/'} passHref>
          <div className = "cursor-pointer flex justify-evenly">
            <div>
              <Image width={100} height={100} src={'/A1500T.png'} alt="Candid Logo" layout = 'fixed'/>
            </div>
            <div className = "hidden md:inline-flex md:w-2"/>
            {/* <div className = "hidden md:inline-flex">
              <Image width={110} height={40} src={'/NameLogoColorWhiteSolid.png'} alt="Candid Name"layout = 'fixed' />
            </div> */}
            </div>
        </Link>



      <div className = "flex justify-evenly max-w-2xl">
        <div className = "group flex justify-evenly max-w-2xl mr-10 border-[#D7354A] border-2 items-center self-center px-4 py-2 rounded-full content-center hover:bg-[#D7354A] hover:text-white cursor-pointer">
          <a 
            href='https://play.google.com/store/apps/details?id=com.candid.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
            target="_blank"
            rel="noreferrer"
            className = "cursor-pointer "
            >
            <div>
              <p className = "text-[#D7354A] font-bold group-hover:text-white">Try Candid</p>
            </div>
          </a>
          </div>
          <div className = "flex justify-evenly max-w-2xl content-center">  
            <HeaderItem title = "HOME" Icon = {HomeIcon} page = "/" />
            <HeaderItem title = "BLOG" Icon = {AnnotationIcon} page = "https://blog.getcandid.app" />
          </div>
      </div>
      
    </header>
  )
}

export default HeaderNoSearch
