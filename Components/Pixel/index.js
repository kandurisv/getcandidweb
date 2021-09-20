import React from 'react'
import Head  from 'next/head'

import Pixel1 from './facebook/pixel1'

const Pixel = ({name}) => {

  return(
    <Head>
      {name === 'FACEBOOK_PIXEL_1' && <Pixel1 />}
    </Head>
  )
}

export default Pixel