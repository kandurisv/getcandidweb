import Image from 'next/image'
import React from 'react'
import { API } from '../utils/exports'


const LandingScreen2 = ({brands}) => {
    
    React.useEffect(()=>{
        console.log("landing screen 2", brands.data[0])
    },[])

    return (
        <div>
            <div>
                <a href={'https://www.getcandid.app/brands'} target="_blank" rel="noreferrer" className = "cursor-pointer ">
                    <h1 className = "font-semibold text-3xl text-center my-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#d83c51] to-[#efb0b8] cursor-pointer">100s OF YOUR FAVORITE BRANDS</h1>
                </a>
            </div>
            
            <div className = "flex flex-col">
                <div className = "flex flex-row items-center w-full mt-10">
                    <div className = "flex flex-1 mx-5 justify-between ">
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[0].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer ">
                                <img alt= {"Brands Logo" + brands.data[0].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[0].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[1].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer ">
                                <img alt= {"Brands Logo" + brands.data[1].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[1].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[2].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer">
                                <img alt= {"Brands Logo" + brands.data[2].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[2].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[3].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer">
                                <img alt= {"Brands Logo" + brands.data[3].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[3].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[4].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer">
                                <img alt= {"Brands Logo" + brands.data[4].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[4].brand_image_logo}/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className = "flex flex-row items-center w-full mt-10">
                    <div className = "flex flex-1 mx-5 justify-between ">
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[5].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer ">
                                <img alt= {"Brands Logo" + brands.data[5].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[5].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[6].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer ">
                                <img alt= {"Brands Logo" + brands.data[6].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[6].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[7].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer">
                                <img alt= {"Brands Logo" + brands.data[7].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[7].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[8].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer">
                                <img alt= {"Brands Logo" + brands.data[8].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[8].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[9].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer">
                                <img alt= {"Brands Logo" + brands.data[9].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[9].brand_image_logo}/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className = "flex flex-row items-center w-full mt-10">
                    <div className = "flex flex-1 mx-5 justify-between ">
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[10].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer ">
                                <img alt= {"Brands Logo" + brands.data[10].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[10].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[11].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer ">
                                <img alt= {"Brands Logo" + brands.data[11].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[11].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[12].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer">
                                <img alt= {"Brands Logo" + brands.data[12].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[12].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[13].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer">
                                <img alt= {"Brands Logo" + brands.data[13].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[13].brand_image_logo}/>
                            </a>
                        </div>
                        <div className = "flex flex-1 mx-auto justify-between">
                            <a href={'www.getcandid.app/' + brands.data[14].brand_name} target="_blank" rel="noreferrer" className = "cursor-pointer">
                                <img alt= {"Brands Logo" + brands.data[14].brand_name} className = "w-40 h-auto" 
                                src= {brands.data[14].brand_image_logo}/>
                            </a>
                        </div>
                    </div>
                </div>
           
            </div>

        </div>
    )
}

export default LandingScreen2

export async function getServerSideProps() {

  

    // Fetch data from external API
    const res = await fetch(API + 'brands/top')
    const data = await res.json()
    
    // Pass data to the page via props
    return { props:  data }
  }
