import React from "react"
import { Player } from '@lottiefiles/react-lottie-player';

function Animation () {
    return (
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_vEfHlN.json"
        style={{ height: '400px', width: '400px' }}
      />
    )
}

export default Animation;