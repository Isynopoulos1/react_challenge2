import styled from "styled-components";

export const LoginMain = styled.main`
  çposition: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #eaeced;
  border-radius: 10px;
  height: 600px;
  width: 460px;
  margin-top: 130px;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const LoginForm = styled.form`
  position: relative;
  align-items: center;
  margin-top: 30px;
  color: blue;
  width: 80%;
  padding: 30px 10% 50px;
  display: flex;
  flex-direction: column;
`;

export const LoginLink = styled.a`
  position: relative;
  font-family: sans-serif;
  display: flex;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  color: rgb(0, 112, 186);
  margin-bottom: 10px;
  justify-content: flex-start;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
