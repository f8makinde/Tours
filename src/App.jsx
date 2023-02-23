import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeBtn = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async() => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setIsLoading(false)
      setTours(data)
 
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
      fetchTours()
  }, [])

  if(isLoading){
   return (
    <Loading text={'Loading...'}/>
   )
  }
 if(tours.length === 0){
  return <section>
          <h1>No Tours Left</h1>
          <button>Refresh</button>
    </section>
 }
  return (
    <div>
      <h2>Our Tours</h2>
       <Tours tour={tours} removeBtn= {removeBtn}/>
    </div>
  )
}

export default App



