import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { MdDeleteForever } from 'react-icons/all.js'
import { deleteSingleUser } from '../store/userSlice'

const DisplayUser = () => {
  const dispatch = useDispatch()
  const userName = useSelector((state) => state.user)
  return (
    <Wrapper>
      {userName.map((name, index) => {
        return (
          <li key={index}>
            {name}
            <button
              className=" btn-delete"
              onClick={() => dispatch(deleteSingleUser(name))}
            >
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  .btn-delete {
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`

export default DisplayUser
