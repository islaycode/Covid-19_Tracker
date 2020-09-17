import React, { Component } from 'react'

export class summary extends Component {
    render() {
        const { summary } = this.props;

        const covid = summary.map(item => {
            return (

                <div key={item.state} className="ui grid segment">

                    <h3 className="ui attached header">
                        {item.state}
                        <span>  <i className="location arrow icon"></i></span>
                    </h3>
                    <div className="ui four column row">

                        <div className="olive column"><h4 className="ui header">Active Cases:</h4><i className="large heartbeat icon"></i><h4 className="sub header">{item.active}</h4></div>
                        <div className="red column"><h4 className="ui header">Total Deaths:</h4><i className="ambulance icon large"></i><h4 className="sub header">{item.deaths}</h4></div>
                        <div className="grey column"><h4 className="ui header">Recovered:</h4><i className="medkit icon large"></i><h4 className="sub header">{item.recovered}</h4></div>
                        {/* <div className="orange column"><h4 className="ui header">Confirmed:</h4><h4 className="sub header">{item.confirmed}</h4></div> */}
                        <div className="blue column"><h4 className="ui header">Last Updated:</h4><i className="clock outline icon large"></i><h4 className="sub header">{item.lastupdatedtime}</h4></div>

                    </div>


                </div> 
            )
        })
        return (
            <>
            <div className="ui inverted segment">
                <h2 className="ui center aligned header">
                    Covid-19 India's Statistical Report 
                    <div>
                    <span><i className="hospital outline icon"></i></span>
                    </div>
                    </h2>
                   
                    </div>
                {covid
                }
            </>
        )
    }
}

export default summary
