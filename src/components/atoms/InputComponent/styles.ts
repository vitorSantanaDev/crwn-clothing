import styled from 'styled-components'

export const InputWrapper = styled.div`
  .input {
    background: none;
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;

    &:focus {
      outline: none;
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`
