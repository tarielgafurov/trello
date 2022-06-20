import { AddTodo, ButtonDelete, Input } from './AddInput'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setDate } from '../userReducer/slisces'

const NewTodo = () => {

    const dispatch = useDispatch()
    

    const closeHandler = () => {
        dispatch(setDate())
    }

  return (
    <Div >
      <Input placeholder="Ввести зоголовок из списка" />
      <AddTodo>Добавить карточку</AddTodo>
      <ButtonDelete onClick={closeHandler} >❌</ButtonDelete>
    </Div>
  )
}


const Div = styled.div`
/* margin-left: 200px; */
`

export default NewTodo
