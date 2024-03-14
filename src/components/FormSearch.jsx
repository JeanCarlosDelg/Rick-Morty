import { useRef } from "react"
import './styles/FormSearch.css'

const FormSearch = ({ setLocationSelected }) => {

  const inputSearch = useRef()

  const handledSubmit = e => {
    e.preventDefault()
    setLocationSelected(inputSearch.current.value.trim())
    inputSearch.current.value = ''
  }

  return (
    <form className="form" onSubmit={handledSubmit}>
      <input className="form__input" ref={inputSearch} type="text" />
      <button className="form__btn">Search</button>
    </form>
  )
}

export default FormSearch