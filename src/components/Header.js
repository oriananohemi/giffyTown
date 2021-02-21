import React from 'react'
import brand from '../assets/images/brand.png'
const Header = () => {
    return (
        <header className="header">
            <div className="header__brand-container">
                <img className="responsive-image" src={brand}/>
            </div>
            <h1>GiffyTown</h1>
        </header>
    )
}

export default Header