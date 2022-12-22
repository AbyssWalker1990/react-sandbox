import { useRef } from "react"

function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    inputRef.current.value = 'Hello'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'CHANGED'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input className='form-control mb-2' ref={inputRef} id='name' type="text" />
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
      <p onClick={() => inputRef.current.focus()} ref={paraRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, adipisci?</p>
    </div>
  )
}

export default UseRefExample1