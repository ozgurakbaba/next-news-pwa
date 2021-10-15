import CountryList from '../public/assets/country-iso.json'

function CountryPicker() {

    // console.log(CountryList) // -- testing
    
    return(
        <div>
            <h3>Country Picker</h3>
            <select>
                {CountryList.map((country, i) => {
                    return <option key={i} onSelect={console.log(country.name)}>{country.name}</option>
                })}
            </select>
        </div>
    )
}

export default CountryPicker