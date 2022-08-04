const { default: styled } = require("styled-components");

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  input {
    background: #282c34;
    color: white;
    padding: 25px;
    border: 0.5px solid gray;
    border-radius: 4px;
  }
  button {
    background: rgba(6, 5, 111, 1);
    border-radius: 8px;
    padding: 15px;
    cursor: pointer;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;
export default FormContainer;
