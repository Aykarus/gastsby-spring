import React from "react"
import Styles from "../components/css-moudules/hero.module.css"
import Image from "react-bootstrap/Image"
import hero from "../images/HeroImage.jpg"

export default function Hero() {
  return (
    <div className={Styles.container}>{/* <Image src={hero}></Image> */}</div>
  )
}
