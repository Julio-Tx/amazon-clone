import styled from 'styled-components';

export const Container = styled.div`
  display: column;
  margin-left: auto;

  img {
    width: 100px;

    margin: 15px auto 0px 47%;
  }
`;

export const Form = styled.form`
  width: 300px;
  border: 1px solid #ddd;
  margin: 15px auto 0px auto;
  padding: 15px 20px 15px 20px;
  border-radius: 5px;
  .title {
    font-size: 20pt;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 0;
  }

  input,
  label {
    display: block;
  }
  label {
    font-weight: 700;
    font-size: 9pt;
  }

  input {
    width: 97%;
    height: 25px;
    padding-left: 5px;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 3px;
    border: 1px solid #949494;
  }
  input:focus {
    border: 1px solid #ff9f00;
    box-shadow: 0 0 0.5em #ff9f00;
  }
  button {
    height: 30px;
    width: 100%;
    border: 1px solid #949494;
    background-image: linear-gradient(#f6db99, #f1c351);
    border-radius: 3px;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(0.95);
  }
  .privacy {
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 9pt;
  }
`;

export const FakeLink = styled.span`
  cursor: pointer;
  color: #007199;
  :hover {
    color: orange;
    text-decoration: underline;
  }
`;
