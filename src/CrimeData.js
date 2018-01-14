import React, { Component, Fragment } from 'react';
class CrimeData extends Component {

    constructor() {
        super();
        this.state = {
           crime: {
               Category: '',
               arrest_count : ''
           },
           hasCrime: false
        }
        this.END_POINT = "http://NflArrest.com/api/v1/crime"
    }


    getCrimeData = event => {
        fetch(this.END_POINT)
        .then(response => response.json())
        .then(data => {
            console.log(data)
          if(data[0].Category && data[0].arrest_count){
            let { crime } = this.state;
            let crimeData = data[0];
           crime.Category =  crimeData.Category;
             crime.arrest_count =  crimeData.arrest_count;
         
            this.setState({ crime }, () => {
        if (this.state.hasCrime === false ) {
            this.setState ({ hasCrime : true})
        }})}
         else{
            return console.error(" no crime has been found 404")
        } 
        })
            }
    renderCrime = () => {
        const { Category,  arrest_count, link} = this.state.crime;
        return (
           
                <a href={link} target="_blank">
                <h1>Top NFL Player Crimes</h1>
                <p>{Category}</p>
                <p>{arrest_count}</p>
                </a>

        )
    }
       
    

    render() {
         const { hasCrime} = this.state;
        console.log(this.state);
        return (
            <Fragment>
            <img src="https://images-na.ssl-images-amazon.com/images/I/91OLSNrc6nL._SL1500_.jpg"></img>

                <h1> NFL Crime Data </h1>
                <button onClick={this.getCrimeData}>
                    Click Me to Display NFL Crime Data
                </button>
                <br />
                 {hasCrime === true ?
                  this.renderCrime():
                   ''} 
                <h3>Statistics are in real-time from nflarrest.com </h3>
                </Fragment>

        )

    }

}
export default CrimeData;