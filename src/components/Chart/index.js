import './Chart.css'
import React, { useEffect, useState, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const convertOptions = (data) => {
    return {
        chart: {
            type: 'spline'
        },
        title: {
            text: '人口チャート'
        },
        xAxis: {
            categories: [1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025, 2030, 2035, 2040, 2045]
        },
        series: data
    }
}


function Chart({ data }) {
    const chartComponent = useRef(null);
    const [options, setOptions] = useState({})
    useEffect(() => {
        setOptions(
            {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: '人口チャート'
                },
                xAxis: {
                    categories: [1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025, 2030, 2035, 2040, 2045]
                },
                series: data
            })
        console.log(data)
    }, [data])

    return (<div className="content" >
        <HighchartsReact options={options} highcharts={Highcharts} ref={chartComponent} isPureConfig={true} />
    </div>);
}

export default Chart;