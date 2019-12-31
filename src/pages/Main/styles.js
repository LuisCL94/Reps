import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: "submit" //eu posso passa passar os atributos direto por aqui
})`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navbar = styled.ul`
  list-style-type: none;
  overflow: hidden;
  background-color: #29088a;
  display: flex;
  justify-content: space-around;

  li {
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: -20px;
    }
  }

  h5,
  h2 {
    display: inline-block;
    color: white;
    /* text-align: center; */
    padding: 25px;
    text-decoration: none;
  }

  /* li a:hover,
  .dropdown:hover .dropbtn {
    background-color: red;
  } */
`;

export const Boxes = styled.div`
  justify-content: center;

  padding-left: 5px;
  padding-right: 5px;

  display: flex;
  flex-wrap: wrap;

  div {
    max-width: 215px;
    padding: 70px;

    margin: 15px;
    padding-bottom: 10px;

    background: #fff;
    border-radius: 10px;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 190px;
      height: 190px;
      margin-top: -70px;
    }

    h5 {
      font-size: 17px;
      color: #473eac;
    }
    h2 {
      margin-top: 15px;
      width: 150px;
      text-align: center;
    }

    button {
      /* color: #fff !important; */
      /* text-transform: uppercase; */
      /* text-decoration: none; */
      background: #473eac;
      padding: 10px;
      border-radius: 20px;
      width: 200%;
      color: white;
      margin-top: 20px; /*aqui aumenta verticalmente pra baixo */
      margin-left: -30px;
      /* display: inline-block; */
      /* border: none; */
      /* transition: all 0.4s ease 0s; */
    }
  }
`;

export const Tabs = styled.ul`
  list-style-type: none;
  margin: auto;
  margin-top: 30px;

  max-width: auto;
  background: #000;

  display: flex;
  justify-content: center;
  border-radius: 10px;
  padding: 2px 2px;

  li {
    /* float: left; */
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-right: 10px;
  }

  button {
    color: #7159c1;
    background: black;
    text-align: center;
    padding: 15px 15px;
    border: 1px solid black;

    margin: auto 30px;
  }

  button:hover {
    /* background: #fff; */
    color: orange;
    border-radius: 10px;
    border: 1px solid orange;
  }
`;
