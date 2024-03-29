import Image from 'next/image'
import Link from 'next/link'
import HeaderItem from './HeaderItem'
import React from 'react'
import { HomeIcon,CollectionIcon, LightningBoltIcon , PuzzleIcon , ShoppingBagIcon , HashtagIcon , AnnotationIcon} from '@heroicons/react/outline'


const Header = ({onSearchHeader}) => {

  const [keyword,setKeyword] = React.useState("")
 
  const onSearchClick = (event) => {
   
    if(event.key === 'Enter'){
    console.log("HEADER",keyword)
    onSearchHeader(keyword)
    }
  }

  return (
    <header className = "flex flex-col md:flex-row mx-5 justify-between items-center h-auto">
        <Link href= {'/'} passHref>
          <div className = "cursor-pointer flex justify-evenly mt-3 md:mt-0">
            <div>
              <Image width={40} height={40} src={'/LogoOutlineColor.png'} alt="Candid Logo" layout = 'fixed'/>
            </div>
            <div className = "hidden md:inline-flex md:w-2"/>
            <div className = "hidden md:inline-flex">
              <Image width={110} height={40} src={'/NameLogoColorWhiteSolid.png'} alt="Candid Name"layout = 'fixed' />
            </div>
            </div>
        </Link>

      <div className = "flex w-11/12 md:w-1/3 lg:1/2 xl:w-3/5 items-center rounded-lg border-2 bg-gray-300 mt-3 md:mt-0 ">
        <form className = "flex-grow rounded-lg ">
            <input 
                className=" w-full focus:outline-none rounded-lg text-sm text-black placeholder-gray-500  py-2 pl-5" 
                type="text" 
                aria-label="Search projects , Ask Questions" 
                placeholder="Search Products , Ask Questions" 
                onChange={(e)=>setKeyword(e.target.value)}
                value = {keyword}
                onKeyPress = {onSearchClick}
                />
        </form>
      </div>
      <div className = "flex justify-evenly max-w-2xl  content-center ">
        <div className = "flex justify-evenly max-w-2xl mt-3 md:mt-3  content-center xl:mt-3">
        <a 
          href='https://play.google.com/store/apps/details?id=com.candid.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
          target="_blank"
          rel="noreferrer"
          className = "cursor-pointer "
          >
          <Image 
            alt='Get it on Google Play' 
            src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
            width = {150}
            height = {60}
            />
        </a>
        </div>
        <div className = "flex justify-evenly max-w-2xl mt-3 md:mt-3 content-center xl:mt-3 pt-3 ">
          <HeaderItem title = "HOME" Icon = {HomeIcon} page = "/" />
          <HeaderItem title = "BLOG" Icon = {AnnotationIcon} page = "https://blog.getcandid.app" />
          <HeaderItem title = "BRANDS" Icon = {ShoppingBagIcon} page = "/brands"/>
          <HeaderItem title = "CATEGORIES" Icon = {CollectionIcon} page = "/categories"/>
        </div>
      </div>
      
    </header>
  )
}

export default Header
