import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'

function Boton({ label = "", ariaLabel = "" , callback=null}) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={callback}
    >
      {label}
    </button>
  )
}

export function Counter() {
  const count = useSelector((state) => state.contador.value)
  const dispatch = useDispatch()

  return (
    <div>
      Contador 
      <span>{count}</span>
      <div>
        <Boton label='Subir' ariaLabel='Incrementar' callback={() => dispatch(increment())}/>
        <Boton label='Bajar' ariaLabel='Decrementar' callback={() => dispatch(decrement())}/>
      </div>
    </div>
  )
}

export default Counter;