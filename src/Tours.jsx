import React, { useState } from 'react'

const Tours = ({tour, removeBtn}) => {
    const [readMore, setReadMore] = useState(true)
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
                <p>{readMore ? `${info.substring(0, 200)}...` : info}
                <button onClick={() => setReadMore(!readMore)}>{readMore ? 'Read More' : 'Show Less'}</button>
                </p>
                <button onClick={() => removeBtn(id)}>Not Interested</button>
            </div>
              )
          })}
      </div>
       
    )
}

export default Tours

         