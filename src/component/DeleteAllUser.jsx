import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deleteAllUsers } from '../store/userSlice'
const DeleteAllUser = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <button
        className="btn clear-btn"
        onClick={() => dispatch(deleteAllUsers())}
      >
        clear users
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`

export default DeleteAllUser
