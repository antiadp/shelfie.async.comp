import React, { Component } from 'react';
import axios from 'axios';

export default class EmptyBin extends Component {
    constructor() {
        super() 
        this.state = {
            name: '',
            price: '',
            img: ''
        }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key, value){
        this.setState({[key]: value})
    }


    handleClick() {
        axios.put(`/api/products/${this.props.match.params.shelfnum}/${this.props.match.params.binnum}`, 
            {name: this.state.name, 
            price: this.state.price, 
            img: this.state.img 
            }).then(res =>{
               
        })
    }



  render(){
      console.log(this.state.name, this.state.price)
    return (
        <div>
            <div style= {{
                "display": "flex", 
                "flexDirection": "column"
                }
            }>
                Name
                    <input 
                        placeholder='Product Name' 
                        onChange= {e => this.handleChange('name', e.target.value)}
                        />
                Price
                    <input 
                        placeholder='$ 0.00' 
                        onChange= {e => this.handleChange('price', e.target.value)}

                        />
                URL
                    <input 
                        placeholder='image link'
                        onChange= {e => this.handleChange('img', e.target.value)}
 
                        />

            <br/>
            
                <button style= {{
                    "font": "strong",
                    "backgroundColor": "#40F99B",
                    "borderRadius": "10px"
                    }}
                    onClick = {this.handleClick}> 
                    + Add To Inventory 
                </button>
            </div>
        </div>
        )
    }
}