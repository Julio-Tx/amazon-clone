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
    margin-top: 20px;
    padding: 0 10%;
    color: white;
  }
  img {
    height: 60px;
    object-fit: contain;
  }
  .fashion {
    margin-left: 10px;
    margin-right: 350px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .nav-item:hover {
    a {
      border-bottom: solid 2px #ff9f00;
    }
  }
`;

export const Container = styled.div`
  width: 1000px;
  height: 1200px;
  background-color: white;
`;
