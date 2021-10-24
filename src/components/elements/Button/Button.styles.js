import styled from "styled-components";

export const ButtonStyle = styled.button`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  font-family: helvetica;
  font-size: 15px;
  background-color: #0070ba;
  color: white;
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 15px;
  border-radius: 50px;
  width: 100%;
  margin: 20px 0;
  transition: background-color 0.5s;
  &:hover {
    background-color: #003087;
    color: white;
  }
  &:first-of-type::before {
    content: "o";
    position: absolute;
    color: #aaa;
    font-weight: normal;
    z-index: 3;
    background-color: white;
    padding: 5px;
    bottom: -30px;
    left: calc(50% - 10px);
  }
  &:first-of-type::after {
    content: "";
    position: absolute;
    color: black;
    z-index: 2;
    border-bottom: 1px solid #ccc;
    width: 100%;
    bottom: -20px;
    left: 0;
  }
  &:last-of-type {
    background-color: white;
    color: #0070ba;
    border: 1px solid #0070ba;
  }
  &:last-of-type:hover {
    border: 2px solid #0070ba;
  }
`;
