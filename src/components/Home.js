import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default function Home() {
    return(

      <div>  
        <div className= "shelfs">
          <div className="each-shelf" >
            <Link to="/Shelfs/A"> Shelf A </Link>
          </div>
          <div className="each-shelf" >
            <Link to="/Shelfs/B"> Shelf B </Link>
          </div>
          <div className="each-shelf" >
            <Link to="/Shelfs/C"> Shelf C </Link>
          </div>
          <div className="each-shelf" >
            <Link to="/Shelfs/D"> Shelf D </Link>
          </div>
        </div>
      </div>
    )
  }
  
  
  
  
  
  
  /* <div className= "shelfs">
    <div className="each-shelf" >
      <Shelfs />
    </div>
    <div className="each-shelf">
      <ShelfB />
    </div>
    <div className="each-shelf">
      <ShelfC />
    </div>
    <div className="each-shelf">
      <ShelfD />
    </div>
  </div> */