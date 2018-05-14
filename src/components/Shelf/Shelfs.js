import React, { Component } from 'react';
import BinNav from "../Bins/BinNav";
import axios from 'axios';



export default class Shelfs extends Component {
    constructor() {
        super() 
        this.state = {
            
            binProds: []
        }
    }

    componentDidMount() {
        axios.get(`/api/getshelves/${this.props.match.params.shelfnum}`).then(response => {
            console.log('Bin Content:', response.data)
            this.setState({binProds: response.data})
        })
    }

    render() {
            let shelfProds = this.state.binProds.map((e, i) => {
               return (
                <BinNav
                    key={e.id}
                    data={e}
                    bin={i + 1}
                    shelf={this.props.match.params.shelfnum}
                />
               )
            })
        return(
            <div>
                Shelf {this.props.match.params.shelfnum}
               {shelfProds}
               
            </div>
        )
    }
}