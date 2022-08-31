
import './App.css';
import Chart from './components/Chart';
import CountrySelector from './components/CountrySelector';
import { useEffect, useState } from 'react'
import { getAllCountry, getPopulationOfTheCountry } from './api';
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState()
  const [options, setOptions] = useState()

  useEffect(() => {
    getAllCountry()
      .then(
        (res) => {
          console.log(res);
          setCountries(res.data.result);
        })
      .catch(
        (err) => {
          console.log(err);
        })



  }, [])

  useEffect(() => {
    if (selectedCountry) {

      getPopulationOfTheCountry(selectedCountry).then(
        (res) => {
          if (res) {
            console.log(res);
            const pop = res.data.result.data[0].data

            const countrySelected = countries.find(
              (country) => country.prefCode == selectedCountry
            );
            console.log('cooo', countries)
            const value2 = {
              data: pop.map((ele) => ele.value),
              name: countrySelected.prefName
            }
            setOptions(value2)
          }
        }
      )
    }

  }, [selectedCountry])



  const handleOnChange = (e) => {
    // const value = e.target.value
    if (e.target.checked === true) {
      // setSelectedCountry([...selectedCountry, value])
      setSelectedCountry(e.target.value)
    } else {
      // setSelectedCountry(selectedCountry.filter(item => item !== value))
    }
  }

  const handleOnClick = () => {
    setSelectedCountry([])
  }



  return (
    <div className="App">
      <CountrySelector country={countries} selectedCountry={selectedCountry} handleOnChange={handleOnChange} handleOnClick={handleOnClick} />
      <Chart data={options} />
    </div>
  );
}

export default App;
