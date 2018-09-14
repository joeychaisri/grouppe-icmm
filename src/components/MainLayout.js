import React from "react";
// import { Layout } from "antd";
import { NavBar, Card, WhiteSpace, WingBlank } from "antd-mobile";

// const { Footer, Content } = Layout;

const MainLayout = ({ children }) => (
  <div>
    <NavBar mode="dark">ICMM 2019</NavBar>
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <Card>
        <Card.Body>
          <div>{children}</div>
        </Card.Body>
      </Card>
      <WhiteSpace size="lg" />
    </WingBlank>
  </div>
  //     <Content style={{ padding: "0 50px", marginTop: 96 }}>
  //       <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
  //         {children}
  //       </div>
  //     </Content>
  //     <Footer style={{ textAlign: "center" }}>
  //       © 2018 grouppe.co, All Rights Reserved.
  //     </Footer>
  //   </Layout>
);

export default MainLayout;
