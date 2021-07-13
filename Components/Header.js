import Image from 'next/image'
import HeaderItem from './HeaderItem'
import SearchBar from './SearchBar'
import React from 'react'
import { HomeIcon, BadgeCheckIcon,CollectionIcon, SearchIcon, UserIcon, LightningBoltIcon , PuzzleIcon , ShoppingBagIcon , HashtagIcon} from '@heroicons/react/solid'

function Header() {

  const [keyword,setKeyword] = React.useState()
  const onSearchClick = (keyword) => {
    console.log(keyword)
  }

  return (
    <header className = "flex flex-col md:flex-row mt-2 mx-5 justify-between items-center h-auto">
      <div className = "flex justify-evenly">
        <div>
          <Image width={40} height={40} src={'/LogoOutlineWhite.png'} layout = 'fixed'/>
        </div>
        <div className = "hidden md:inline-flex md:w-2"/>
        <div className = "hidden md:inline-flex">
          <Image width={110} height={40} src={'/CandidLogoWhiteTransparent.png'} layout = 'fixed' />
        </div>
      </div>
      <div className = "flex justify-evenly bg-white w-2/3 md:w-1/4 xl:w-3/5  ">
        <SearchBar keyword = {keyword} setKeyword = {setKeyword} onClick = {(keyword) => onSearchClick(keyword)}/>
      </div>
      <div className = "flex justify-evenly max-w-2xl mt-3">
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
