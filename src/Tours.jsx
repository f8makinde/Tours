import React from 'react'

const Tours = ({tour, removeBtn}) => {
    return (
      <div>
          {tour.map((tours) => { 
            const {id, name, image, price, info} = tours
              return (
                <div key={id}>
                <img src={image} alt={name} />
                <div>
                    <h4>{name}</h4>
                    <h4>${price}</h4>
                </div>
                <p>{info}</p>
                <button onClick={() => removeBtn(id)}>Not Interested</button>
            </div>
              )
          })}
      </div>
       
    )
}

export default Tours

         