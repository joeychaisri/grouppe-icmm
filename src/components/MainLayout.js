import React from "react";
import { Layout, List, Card, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = ({ showSider, confirmData, children, delData, editData }) => (
  <Layout style={{ minHeight: "100vh" }}>
    <Header style={{ backgroundColor: "#c43a43", textAlign: "center" }}>
      <h1 style={{ color: "white" }}>ICMM 2019</h1>
    </Header>
    <Layout style={{ padding: "10px 10px 0 10px" }}>
      {showSider &&  <Sider width={300} style={{ background: "#fff", padding: 16 }}>
        {confirmData.length > 0 && (
          <div>
            <p>Ticket Summary</p>
            <List
              grid={{ gutter: 8, column: 1 }}
              dataSource={confirmData}
              renderItem={(item, idx) => (
                <List.Item>
                  <Card>
                    {console.log(idx)}

                    <Icon
                      style={{ float: "right" }}
                      onClick={() => delData(idx)}
                      type="close"
                    />
                    <Icon
                      type="edit"
                      style={{ float: "right" }}
                      onClick={() => editData(idx)}
                    />
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
      </Sider>}
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
