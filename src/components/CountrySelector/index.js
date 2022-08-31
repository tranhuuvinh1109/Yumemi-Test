import './CountrySelector.css'
function CountrySelector({ country, selectedCountry, handleOnChange, handleOnClick }) {

    return (<div className="country">
        <ul className='list-country'>
            {
                country && country.map((e) => {
                    return (
                        <li className='item' key={e.prefCode}>
                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value={e.prefCode} aria-label="..." onChange={(e) => {
                                handleOnChange(e, e.prefCode)
                            }} checked={selectedCountry == e.prefCode}></input> {e.prefName}
                        </li>
                    )
                })
            }
        </ul>
        <button onClick={handleOnClick} className="btn">Clean</button>
    </div>);
}

export default CountrySelector;