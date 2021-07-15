import Image from 'next/image'
import Link from 'next/link'
import HeaderItem from './HeaderItem'
import React from 'react'
import { HomeIcon,CollectionIcon, LightningBoltIcon , PuzzleIcon , ShoppingBagIcon , HashtagIcon} from '@heroicons/react/solid'


const HeaderNoSearch = () => {

  return (
    <header className = "flex flex-col md:flex-row mx-5 justify-between items-center h-auto">
        <Link href= {'/'} passHref>
          <div className = "cursor-pointer flex justify-evenly mt-3 md:my-3">
            <div>
              <Image width={40} height={40} src={'/LogoOutlineColor.png'} alt="Candid Logo" layout = 'fixed'/>
            </div>
            <div className = "hidden md:inline-flex md:w-2"/>
            <div className = "hidden md:inline-flex">
              <Image width={110} height={40} src={'/NameLogoColorWhiteSolid.png'} alt="Candid Name"layout = 'fixed' />
            </div>
            </div>
        </Link>


      <div className = "flex justify-evenly max-w-2xl mt-3 md:mt-9">
        <HeaderItem title = "HOME" Icon = {HomeIcon} page = "/" />
        <HeaderItem title = "TRENDING" Icon = {LightningBoltIcon} page = "/trending" />
        <HeaderItem title = "BRANDS" Icon = {ShoppingBagIcon} page = "/brands"/>
        <HeaderItem title = "CATEGORIES" Icon = {CollectionIcon} page = "/categories"/>
      </div>
      
    </header>
  )
}

export default HeaderNoSearch
