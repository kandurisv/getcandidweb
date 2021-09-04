import Image from 'next/image'
import Link from 'next/link'
import HeaderItem from './HeaderItem'
import React from 'react'
import { FaFacebook, FaInstagram, FaRegCopyright, FaTwitter } from 'react-icons/fa'
import {FcPrivacy} from 'react-icons/fc'
import {SiGmail} from 'react-icons/si'



const Footer = () => {

  
  return (
    <div>
      <div className = " flex flex-row justify-start mx-3 my-2 justify-center">
        <div className = "flex flex-col flex-1 justify-start mx-3 my-2">
          <div className = " flex flex-row justify-start mx-3 my-2">
            <h3 className = "font-bold" >CONTACT US</h3>
          </div>
          <div className = "flex flex-col justify-start bg-white ">
            <div className = "mx-3 my-1 flex flex-row">
            <div className = "items-center mx-1 self-center"><SiGmail /> </div>
              <p className = "items-center mx-1 text-sm ">hello@getcandid.app</p>
            </div>
         
          </div>
          <div className = " flex flex-row justify-start mx-3 my-2">
            <h3 className = "font-bold" >LEGAL</h3>
          </div>
          <div className = "flex flex-col justify-start bg-white ">
            <Link href={"https://www.getcandid.app/privacypolicy"} passHref> 
              <div className = "cursor-pointer mx-3 my-1 flex flex-row">
                <div className = "items-center mx-1 self-center"><FcPrivacy /> </div> 
                <p className = "items-center mx-1 text-sm ">Privacy Policy</p>
              </div>
            </Link>
          </div>
        </div>
        <div className = "flex flex-col flex-1 justify-start mx-3 my-2">
          <div className = " flex flex-row  justify-start mx-3 my-2">
            <h3 className = "font-bold" >DOWNLOAD</h3>
          </div>
          <div className = "flex flex-col justify-start bg-white ">
            <a 
            href='https://play.google.com/store/apps/details?id=com.candid.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
            target="_blank"
            rel="noreferrer"
            className = "cursor-pointer "
            >
            <Image  
              alt='Get it on Google Play' 
              src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
              width = {160}
              height = {60}
              />
            </a>
          </div>
        </div>
        <div className = "flex flex-col flex-1 justify-start mx-3 my-2">
          <div className = " flex flex-row items-center  justify-start mx-3 my-2">
            <h3 className = "font-bold" >CONNECT</h3>
          </div>
          <div className = "flex flex-col justify-start bg-white ">
            <Link href={"https://www.facebook.com/getcandidapp/"} passHref> 
              <div className = "cursor-pointer mx-3 my-1 flex flex-row">
                <div className = "items-center mx-1 self-center"><FaFacebook /> </div> 
                <p className = "items-center mx-1 text-sm ">Facebook</p>
              </div>
            </Link>
            <Link href={"https://www.instagram.com/getcandidapp/"} passHref>
            <div className = "cursor-pointer mx-3 my-1 flex flex-row">
                <div className = "items-center mx-1 self-center"><FaInstagram /> </div> 
                <p className = "items-center mx-1 text-sm ">Instagram</p>
              </div>
            </Link>
            <Link href={"https://www.twitter.com/getcandidapp/"} passHref> 
            <div className = "cursor-pointer mx-3 my-1 flex flex-row">
                <div className = "items-center mx-1 self-center"><FaTwitter /> </div> 
                <p className = "items-center mx-1 text-sm ">Twitter</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className = "mx-2 my-2 flex flex-row">
        <div className = "items-center mx-1 self-center"><FaRegCopyright /> </div>
        <p className = "text-xs">2021 Candid - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
