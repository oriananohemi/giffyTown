import React from 'react'
import brand from '../assets/images/brand.png'
import { Link } from "wouter";

const Header = () => {
    return (
        <header className="header">
            <div className="header__brand-container">
                <img className="responsive-image" src={brand}/>
            </div>
            <Link href="/">
                <h1>GiffyTown</h1>
            </Link>
        </header>
    )
}

export default Header