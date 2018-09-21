import React from "react";
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;


const MainLayout = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
  <Header style={{ backgroundColor: '#c43a43', textAlign: 'center'}}>
    <h1 style={{ color: 'white'  }}>ICMM 2019</h1>
  </Header>
  <Content style={{ padding: '10px 10px 0 10px' }}>
    <div style={{ background: '#fff', padding: 16, minHeight: 280 }}>{ children }</div>
  </Content>
  <Footer style={{ textAlign: 'center' }}>
    © ICMM 2019 Powered by Grouppe.co
  </Footer>
</Layout>
);

export default MainLayout;
