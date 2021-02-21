import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'

const Search = () => {
    let textInput = React.createRef();

    const handleClick = () => {
        let inputValue = textInput.current.value
        inputValue === '' ? console.log('vacio') : console.log('algo')
    }
    return (
        <>
            <section className="search__hero">
                <h1 className="search__title">Busca en GiffyTown</h1>
                <p className="search__subtitle">Tus gif favoritos en un solo lugar</p>
            </section>
            <div className="search__input-container">
                <input ref={textInput} placeholder="Buscar..." className="search__input" type="text"/>
                <button onClick={handleClick} className="search__button" >Enviar</button>
            </div>
            {/* <div className="search__suggested">
                <p>Sugerencias:</p>
                <nav>
                    <ul className="search__suggested-container">
                        <li className="search__suggested__item">
                            Tendencias
                        </li>
                        <li className="search__suggested__item">
                            Pandas
                        </li>
                        <li className="search__suggested__item">
                            Perros
                        </li>
                    </ul>
                </nav>
            </div> */}
        </>
    )
}

export default Search