import Image from 'next/image'
import HeaderItem from './HeaderItem'
import React from 'react'
import { HomeIcon,CollectionIcon, LightningBoltIcon , PuzzleIcon , ShoppingBagIcon , HashtagIcon} from '@heroicons/react/solid'

function Header() {

  const [keyword,setKeyword] = React.useState("")
 
  const onSearchClick = () => {
    console.log(keyword)
  }

  return (
    <header className = "flex flex-col md:flex-row mx-5 justify-between items-center h-auto">
      <div className = "flex justify-evenly mt-3 md:my-3">
        <div>
          <Image width={40} height={40} src={'/LogoOutlineColor.png'} alt="Candid Logo" layout = 'fixed'/>
        </div>
        <div className = "hidden md:inline-flex md:w-2"/>
        <div className = "hidden md:inline-flex">
          <Image width={110} height={40} src={'/NameLogoColorWhiteSolid.png'} alt="Candid Name"layout = 'fixed' />
        </div>
      </div>
      <div className = "flex w-2/3 md:w-1/4 xl:w-3/5 items-center rounded-lg border-2 bg-gray-300 mt-3 md:my-3 ">
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
      <div className = "flex justify-evenly max-w-2xl mt-3 md:mt-9">
        <HeaderItem title = "HOME" Icon = {HomeIcon} page = "/" />
        <HeaderItem title = "TRENDING" Icon = {LightningBoltIcon} page = "/trending" />
        <HeaderItem title = "INSTAGRAM" Icon = {HashtagIcon} page = "/instagram"/>
        <HeaderItem title = "BRANDS" Icon = {ShoppingBagIcon} page = "/brands"/>
        <HeaderItem title = "CATEGORIES" Icon = {CollectionIcon} page = "/categories"/>
        <HeaderItem title = "CONCERNS" Icon = {PuzzleIcon} page = "/concerns"/>
      </div>
      
    </header>
  )
}

export default Header
