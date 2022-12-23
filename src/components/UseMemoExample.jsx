import { useState, useEffect, useMemo, useRef } from "react"
function UseMemoExample() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  const renders = useRef(1)

  // const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number), [number])

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1)
      return prevState + 1
    })
  }

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} 
      className="form-control w-25" />
      <h2 className='my-3'>Square root of {number} is: {sqrt}</h2>
      <button onClick={onClick} className='btn btn-primary'>Re Render</button>
      Renders: {renders.current}
    </div>
  )
}

function getSqrt(n) {
  for (let i = 0; i < 1000; i++) {
    console.log(i)
  }
  console.log('Expensive function')
  return Math.sqrt(n)
}
export default UseMemoExample