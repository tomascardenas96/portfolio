import React from 'react'
import Bookmarker from '../Bookmarker'
import { CiUser } from "react-icons/ci";

function AboutMe() {
  return (
   <section>
    <Bookmarker icon={<CiUser />} name="About me"/>
   </section>
  )
}

export default AboutMe