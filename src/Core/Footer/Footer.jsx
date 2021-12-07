import React from 'react'
import { Footercss } from './Footer.style'

const Footer = () => {
    return (
        <Footercss>
            <div>
                <h3>{new Date().getFullYear()} © Sourav Prasad Sah</h3>
            </div>
            <div>
            <h4>Privacy</h4>
            </div>
        </Footercss>
    )
}

export default Footer
