import React, { Component } from 'react'
import axios from 'axios';
import Summary from './Summary';
import Loader from './Loader';
export default class Details extends Component {
    state = {
        active: [],
        confirm:[],
        death:[],
        state:[],
        loading: true
    }
    async componentDidMount(){
        const res = await axios.get('https://api.covid19india.org/data.json')
        console.log(res.data);
        this.setState({state: res.data.statewise})
        console.log(this.state.state)
        this.setState({loading: false})
       
    }
    render() {
        if(this.state.loading){
            return <div><Loader/></div>
        }
        return (
            <div className="ui container">
             <Summary summary={this.state.state}/>
            </div>
        )
    }
}
