import './CountrySelector.css'
function CountrySelector({ country, handleOnChange, handleOnClick }) {

    return (<div className="country">
        <ul className='list-country'>
            {
                country && country.map((e) => {
                    return (
                        <li className='item' key={e.prefCode}>
                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value={e.prefCode} aria-label="..." onChange={handleOnChange} ></input> {e.prefName}
                        </li>
                    )
                })
            }
        </ul>
        <button onClick={handleOnClick}>Clean</button>
    </div>);
}

export default CountrySelector;