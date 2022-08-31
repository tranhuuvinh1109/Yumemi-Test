import axios from "axios";


export const getAllCountry = async () => {
    return await axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: {
            'X-API-KEY': 'Tdy8b2OH1iN6c6z4yJRdxeE0LrYpm8pqWhHqyIvj'
        }
    })
}

export const getPopulationOfTheCountry = async (prefCode) => {
    return await axios.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=${prefCode}`, {
        headers: {
            'X-API-KEY': 'Tdy8b2OH1iN6c6z4yJRdxeE0LrYpm8pqWhHqyIvj'
        }
    })
}