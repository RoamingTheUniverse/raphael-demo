import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import ContentLayout from "./containers/ContentLayout";

const headerHeight = 56;
const footerHeight = 64;
const Header = styled(Layout.Header)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: ${headerHeight}px;
  padding: 8px 162px;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  h1 {
    margin: 0;
    font-size: 1.5em;
  }
`;
const Content = styled(Layout.Content)`
  box-sizing: border-box;
  height: calc(100vh - ${headerHeight + footerHeight}px);
  padding: 20px 162px;
`;
const Footer = styled(Layout.Footer)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${footerHeight}px;
  background-color: #fff;
  span {
  }
`;

function App() {
  return (
    <Layout>
      <Header>
        <h1>Raphael Demo</h1>
      </Header>
      <Content>
        <ContentLayout />
      </Content>
      <Footer>
        Made with&nbsp;
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/heavy-black-heart_2764.png"
          alt="Red Heart on Apple iOS 13.3"
          width="12"
          height="12"
        />
        &nbsp;by&nbsp;
        <a href="https://github.com/RoamingTheUniverse" target="_blank">
          RoamingTheUniverse
        </a>
      </Footer>
    </Layout>
  );
}

export default App;
