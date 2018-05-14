import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bin from './Bin';

export default class BinNav extends Component {
  render() {
    const { name, price, img } = this.props.data
    const { bin, shelf } = this.props
    console.log(this.props)
    return (
      <div className="Bin-container">
        {
          name === null
            ?
            <div className="Bin-empty-content">
              <Link to={`/products/${shelf}/${bin}`}>
                <span>+ Add to Inventory</span>
              </Link>
            </div>
            :
            <div className="Bin-content">
              <Link to={`/shelfs/${shelf}/bin/${bin}`}>
                <span>Bin {bin}</span>
              </Link>
            </div>
        }
      </div>
    )
  }
}