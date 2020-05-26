import React from 'react'

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css';
import {fetchData} from './api';//while importing anything from index.js no need to specify index.js in path
import coronaimage from './images/COVID-19.jpg'
class App extends React.Component{
//we can directly declare the state and the constructor will be created in the back by React
    state={
        data:{},
        country:''
    }

    handleCountryChange=async(country)=>{
        const data= await fetchData(country)
        this.setState({data,country:country}) 
    }

    async componentDidMount(){
        const fetchedData=await fetchData();
        console.log(fetchedData)
        this.setState({data:fetchedData})
    }

    render(){
        const{data,country}=this.state
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaimage} alt="COVID-19"/>
                <h1>{country}</h1>
                <Cards data={this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App