import styled from 'styled-components';

export const AmazonFashion = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: solid 1px #ddd;

  font-size: 9pt;
  .list {
    display: flex;
    justify-content: space-evenly;
  }
  .nav-item {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 6px;
    padding: 0 10%;
    color: white;
    text-decoration: none;
    color: black;
    width: 50px;
  }
  img {
    height: 50px;
    object-fit: contain;
    cursor: pointer;
  }
  .fashion {
    margin: 1px 350px 0px 30px;
  }
  a {
    padding: 0 10%;
    text-decoration: none;
    color: black;
  }
  .nav-item:hover {
    p {
      border-bottom: solid 2px #ff9f00;
    }
  }
`;

export const Container = styled.div`
  padding: 0 0;
  margin-top: 10px;
  .category {
    margin: 5px 0px 20px 30px;
    font-size: 9pt;
  }
  .div-main {
    display: flex;
  }
  .div-left {
    position: relative;
    width: 40%;
    margin-right: 20px;

    p {
      margin-top: 5px;
      text-align: center;
    }
  }
  .div-right {
    width: 45%;
    height: 800px;

    .div-right-top {
      border-bottom: 1px solid #ddd;
    }

    a {
      text-decoration: none;
      font-size: 11pt;
      color: #007199;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .description {
    margin-top: 0px;
    font-size: 20pt;
    font-weight: 450;
  }
  .rating {
    display: flex;
    margin-top: -20px;
    p {
      margin-top: -2px;
      color: #007199;
    }
    span {
      margin-top: -2px;
      padding: 0px 10px;
    }
  }

  .div-addToCart {
    width: 15%;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
`;
