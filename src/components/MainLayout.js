import React from "react";
import { Layout, List, Card } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = ({ confirmData, children }) => (
  <Layout style={{ minHeight: "100vh" }}>
    <Header style={{ backgroundColor: "#c43a43", textAlign: "center" }}>
      <h1 style={{ color: "white" }}>ICMM 2019</h1>
    </Header>
    <Layout style={{ padding: "10px 10px 0 10px" }}>
      <Sider width={300} style={{ background: "#fff", padding: 16 }}>
        {confirmData.length > 0 && (
          <div>
            <p>Ticket Summary</p>
            <List
              grid={{ gutter: 8, column: 1 }}
              dataSource={confirmData}
              renderItem={item => (
                <List.Item>
                  <Card>
                    <p>
                      {item.name} {item.lastname} <br />
                      Email: {item.email} <br />
                      Tel: {item.phone}
                      <br />
                      Shirt Size: {item.shirtSize}
                      <br />
                      Type: {item.type}
                    </p>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        )}
      </Sider>
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
