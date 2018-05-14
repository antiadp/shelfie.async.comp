import React, { Component} from 'react';
import '../../App.css';
import axios from 'axios';



export default class Bin extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            price: '',
            img: '',
            shelf: '',
            bin: '',
            readOnly: true
        }
        this.handleEditable = this.handleEditable.bind(this)
        this.handleUpdateProd = this.handleUpdateProd.bind(this)
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEditable() {
        this.setState({readOnly: false})
    }
    handleName(e) {
        this.setState({name: e})
    }
    handlePrice(e) {
        this.setState({price: e})
    }
    handleDelete(){
        axios.put(`/api/products/${this.props.match.params.shelfnum}/${this.props.match.params.binnum}`,
        this.setState({name: null, price: null, img: null}))
    }

    handleUpdateProd() {
        axios.put(`/api/products/${this.props.match.params.shelfnum}/${this.props.match.params.binnum}`, 
            {name: this.state.name, 
            price: this.state.price, 
            img: this.state.img 
            }).then(res =>{
            console.log('the put res: ', res.data)
            this.setState({readOnly: true})

        })
    }

    componentDidMount() {
        const { shelfnum, binnum } = this.props.match.params
        console.log("this b3 " + shelfnum, binnum)
        axios.get(`/api/products/${shelfnum}/${binnum}`).then( res => {
            console.log('resData ', res.data)
            this.setState({
                name: res.data.name,
                price: res.data.price,
                img: res.data.img,
                bin: res.data.binnum,
                shelf: res.data.shelf
            })
        })
        

    }


    render() {
        return( 
            <div>
                <span>Bin {this.state.bin} </span>
            <div>
                <div className='bin-box' >
                    <div>
                        <div>
                            <img 
                                src={this.state.img} 
                                alt="this pic" 
                                width="200px"/>
                        </div>
                        <div>
                            Name 
                            <br/>
                            <input 
                                className='bin-input' 
                                placeholder={this.state.name} 
                                readOnly ={this.state.readOnly} 
                                onChange = {e => this.handleName(e.target.value)} 
                                />
                        </div>
                        <div>
                            Price
                            <br/>
                            <input 
                                className='bin-input' 
                                placeholder={`$ ${this.state.price}.00`} 
                                readOnly={this.state.readOnly} 
                                onChange= {e => this.handlePrice(e.target.value)} 
                                />
                        </div>
                    </div>
                    <br/>
                </div>
                {this.state.readOnly ? (
                    <button 
                        className='button' 
                        onClick = {this.handleEditable} > 
                            Edit 
                    </button>)
                    :
                    (<button 
                        className='alt-button' 
                        onClick = {this.handleUpdateProd}> 
                            Save 
                    </button>)
                }
                <button 
                    className='button'
                    onClick= {this.handleDelete}> 
                    Delete 
                </button>
            </div>
            </div>
        )
    }
    
}



