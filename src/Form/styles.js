import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 90vh;

  h1 {
    color: #fff;    
  }

  form {
    border: 2px solid white;  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  margin: 10px;
  width: 238px;
  padding: 10px;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  border-radius: 5px;
  margin-top: 30px;
  border: 2px solid #fff;
  outline: none;
`;

export const Input = styled.input`
  margin: 10px;
  width: 212px;
  padding: 10px;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  border-radius: 5px;
  border: 2px solid #fff;
  outline: none;

  &::placeholder {
    color: #fff;
    opacity: 1;
  }
`;
