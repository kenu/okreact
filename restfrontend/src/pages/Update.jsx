import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Update = () => {
  const { id } = useParams()
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_SERVER + "/people/" + id).then((res) => {
      setFirst(res.data.firstName || "")
      setLast(res.data.lastName || "")
    })
  }, [])

  function handleSubmit(_e) {
    const params = { firstName: first, lastName: last }
    axios
      .put(import.meta.env.VITE_API_SERVER + "/people/" + id, params)
      .then((res) => {
        console.log(res.data)
      })
  }

  function handleFirst(e) {
    console.log(e.target.value)
    setFirst(e.target.value)
  }

  function handleLast(e) {
    console.log(e.target.value)
    setLast(e.target.value)
  }

  return (
    <>
      <h1>Update</h1>
      <input type="text" value={first} onChange={handleFirst} />
      <input type="text" value={last} onChange={handleLast} />
      <button type="submit" onClick={handleSubmit}>
        Update
      </button>
    </>
  )
}

export default Update
