import Image from 'next/image'
import React from 'react'

const LandingScreen3 = () => {
    return (
        <div className = "pt-20">
            <div>
                <h1 className = "font-bold text-lg text-center my-4 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#d83c51] to-[#efb0b8]">WHAT IS CANDID? </h1>
            </div>
            <div className = "flex flex-col lg:flex-row mt-10">
                <div className = "flex flex-1 flex-col mx-4 items-center pt-10 lg:pt-0">
                    <Image width={300} height={533} src={'/Social.png'} alt="Candid Logo" layout = 'fixed'/>
                    <h2 className = "flex flex-wrap font-bold text-2xl mt-5">SOCIAL PRODUCT JOURNEY</h2>
                    <h4 className = "flex flex-wrap text-center	text-sm px-5 mt-3 ">Read various product journeys posted by people from your community</h4>
                </div>
                <div className = "flex flex-1 flex-col mx-4 items-center pt-10 lg:pt-0">
                    <Image width={300} height={533} src={'/Contextual.png'} alt="Candid Logo" layout = 'fixed'/>
                    <h2 className = "flex flex-wrap font-bold text-2xl mt-5">CONTEXTUAL REVIEWS</h2>
                    <h4 className = "flex flex-wrap text-center	text-sm px-5 mt-3">Get personalized product recommendations according to your skin and hair type</h4>
                </div>
                <div className = "flex flex-1 flex-col mx-4 items-center pt-10 lg:pt-0">
                    <Image width={300} height={533} src={'/Brands.png'} alt="Candid Logo" layout = 'fixed'/>
                    <h2 className = "flex flex-wrap font-bold text-2xl mt-5">BRAND WATCH</h2>
                    <h4 className = "flex flex-wrap text-center	text-sm px-5 mt-3">Follow your favourite Indian D2C brands to get updates</h4>
                </div>
            </div> 
        </div>
    )
}

export default LandingScreen3
