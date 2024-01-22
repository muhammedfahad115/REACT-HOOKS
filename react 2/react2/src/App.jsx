import { useEffect, useState } from 'react'
import Child from './components/child'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [initial, setInitial] = useState(true)
  const [bg, setBg] = useState('cyan')
  const [child, setChild] = useState(false)
  const color = ['yellow', 'red', 'blue', 'green', 'pink', 'orange', 'black']
  const showChild = () => {
    setChild(!child)
  }

  useEffect(() => {
    console.log('-------mounting')
    if(initial === true){
      setInitial(false)
    }else{
      const newColor = color[parseInt(Math.random() * color.length)]
      setBg(newColor)
    }
    return ()=>{
      console.log('------unmounting')
    }
  }, [count])
  useEffect(()=>{
    console.log('mounting')
    return ()=>{
      console.log('unmounting')
    }
  })
  return (
    <>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100" style={{ backgroundColor: bg }}>
        <div className="bg-white rounded-lg shadow-md p-6 text-center mb-8">
          <h2 className="text-2xl mb-4">Counter</h2>
          <p className="text-2xl text-blue-500 mb-4">{count}</p>
          <div className="flex justify-center gap-5">
            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md w-14" onClick={() => setCount(count + 1)}> + </button>
            <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md w-14" onClick={() => setCount(count - 1)}> - </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" onClick={showChild}>{child ? "hide " : "show"}</button>
          </div>
          <div>{child ? <Child /> : null}</div>
        </div>
      </div>
    </>
  )
}

export default App
