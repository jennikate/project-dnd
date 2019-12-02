import { useState, useEffect } from 'react'

function useFetch(url, initialState = []) {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(resp => setData(resp.results)) //need results here for Open5e API, figure out how to make this a param
      .catch(err => console.log(err))
    return () => console.log('Route changed')
  }, [])
  return data
}

export default useFetch