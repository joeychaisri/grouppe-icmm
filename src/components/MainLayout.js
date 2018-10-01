import React from "react";
import { Layout, List, Card, Icon } from "antd";


const { Header, Content, Footer, Sider } = Layout;


const MainLayout = ({ confirmData,children,delData , editData}) => (
  <Layout style={{ minHeight: "100vh" }}>
    <Header style={{ backgroundColor: "#c43a43", textAlign: "center" }}>
      <h1 style={{ color: "white" }}>ICMM 2019</h1>
    </Header>
    <Layout style={{ padding: "10px 10px 0 10px" }}>

      <Content>
        <div
          style={{
            background: "#fff",
            padding: 16,
            minHeight: "calc(100vh - 144px)"
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
    <Footer style={{ textAlign: "center" }}>
      © ICMM 2019 Powered by Grouppe.co
    </Footer>
  </Layout>
);

export default MainLayout;
