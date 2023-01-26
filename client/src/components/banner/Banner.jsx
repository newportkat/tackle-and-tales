import React, { useEffect, useState } from "react"
import "./banner.scss"

const Banner = () => {
  const [ad, setAd] = useState(
    <p>
      Don't Miss The Bite<span> - Shop Now!</span>
    </p>
  )

  const ads = [
    <p>
      Don't Miss The Bite<span> - Shop Now!</span>
    </p>,
    <p>
      Free Delivery<span> - Hook Up With Our Gear!</span>
    </p>,
    <p>
      Click & Collect<span> - Find Your Perfect Catch!</span>
    </p>,
  ]

  let adIndex = 0

  const carousel = () => {
    if (adIndex !== ads.length - 1) {
      adIndex += 1
    } else {
      adIndex = 0
    }
    setAd(ads[adIndex])
  }

  useEffect(() => {
    const intervalID = setInterval(carousel, 3000)
    return () => clearInterval(intervalID)
  }, [adIndex])

  return (
    <div className="banner">
      <div className="ad" style={{ display: "block" }}>
        {ad}
      </div>
      {/* 
      <div className="ad" style={{ display: "block" }}>
        <p>
          Free Delivery<span> - On All Dragon Type Pokémon</span>
        </p>
      </div>

      <div className="ad" style={{ display: "block" }}>
        <p>
          Click & Collect<span> - Ready in 2 Hours</span>
        </p>
      </div> */}
    </div>
  )
}

export default Banner
