
import './App.css';
import Chart from './components/Chart';
import CountrySelector from './components/CountrySelector';
import { useEffect, useState } from 'react'
import { getAllCountry, getPopulationOfTheCountry } from './api';
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([])
  const [options, setOptions] = useState()
  const [data, setData] = useState()

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
    let arr = []
    selectedCountry.forEach((e) => {

      getPopulationOfTheCountry(e).then(
        (res) => {
          const pop = res.data.result.data[0].data

          const countrySelected = countries.find(
            (country) => country.prefCode == e
          );
          console.log('cooo', countries)
          const value2 = {
            data: pop.map((ele) => ele.value),
            name: countrySelected.prefName
          }
          arr.push(value2)
        }

      )
    })
    setOptions(arr)
  }, [selectedCountry])



  const handleOnChange = (e) => {
    console.log('0-', options);
    console.log(e);
    const value = e.target.value
    console.log('1->', selectedCountry);
    if (e.target.checked === true) {
      setSelectedCountry([...selectedCountry, value])
    } else {
      setSelectedCountry(selectedCountry.filter(item => item !== value))
    }
    console.log('2->', selectedCountry);
  }

  const handleOnClick = () => {
    setSelectedCountry([])
  }



  return (
    <div className="App">
      <CountrySelector country={countries} handleOnChange={handleOnChange} handleOnClick={handleOnClick} />
      <Chart data={options} />
    </div>
  );
}

export default App;
