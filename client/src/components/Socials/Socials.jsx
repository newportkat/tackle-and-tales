import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"
import React from "react"
import "./socials.scss"

const Socials = () => {
  return (
    <div className="socials">
      <p>Connect with us!</p>
      <div className="icons">
        <InstagramIcon className="icon" />
        <TwitterIcon className="icon" />
        <FacebookIcon className="icon" />
        <YouTubeIcon className="icon" />
      </div>
    </div>
  )
}

export default Socials
