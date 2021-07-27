import Image from 'next/image'
import Link from 'next/link'
import HeaderItem from './HeaderItem'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


const Footer = () => {

  
  return (
      <div className = "flex flex-row items-center  justify-start bg-white ">
        <Link href={"https://www.facebook.com/getcandidapp/"} passHref> 
            <div className = "cursor-pointer mx-3"><FaFacebook /></div> 
        </Link>
        <Link href={"https://www.instagram.com/getcandidapp/"} passHref>
            <div className = "cursor-pointer mx-3"> <FaInstagram /> </div>
        </Link>
        <Link href={"https://www.twitter.com/getcandidapp/"} passHref> 
            <div className = "cursor-pointer mx-3"> <FaTwitter /> </div>
        </Link>
      </div>
  )
}

export default Footer
