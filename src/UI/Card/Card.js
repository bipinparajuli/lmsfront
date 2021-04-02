import React from 'react'
import {FaUser} from 'react-icons/fa'


export const Card = ({totalbook,title}) => {
    return (
        <div>
            <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title"><FaUser /></h5>
    <h6 class="card-subtitle mb-2">{title}</h6>
    <p class="card-text">{totalbook}</p>
  </div>
</div>
        </div>
    )
}
