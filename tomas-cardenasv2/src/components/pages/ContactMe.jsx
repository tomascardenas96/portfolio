import React from 'react'
import {PiEnvelopeSimpleThin} from "react-icons/pi"
import Bookmarker from '../Bookmarker'

function ContactMe() {
  return (
    <section>
        <Bookmarker icon={<PiEnvelopeSimpleThin/>} name="Contact me"/>
    </section>
  )
}

export default ContactMe