import React from "react";
import { Layout, List, Card, Icon, Row, Col } from "antd";
import { withRouter } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const MainLayout = ({ confirmData, history, children, delData, editData }) => (
  <Layout style={{ minHeight: "100vh" }}>
    <Header style={{ backgroundColor: "#c43a43", textAlign: "center" }}>
      <h1 style={{ color: "white", marginTop: '7px' }}>ICMM 2019</h1>
    </Header>
    <Content className="container" style={{ padding: "10px 10px 0 10px" }}>
      <Row type="flex">
        {["series", "register", "information"].includes(
          history.location.pathname.split("/")[1]
        ) &&
          confirmData.length > 0 && (
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 24, order: 2 }}
              md={{ span: 24, order: 2 }}
              lg={{ span: 6, order: 1 }}
              xl={{ span: 5, order: 1 }}
              style={{
                backgroundColor: "#FFF",
                padding: 16,
                minHeight: "calc(100vh - 144px)"
              }}
            >
              <div>
                <p>Ticket Summary</p>
                <List
                  grid={{ gutter: 8, column: 1 }}
                  dataSource={confirmData}
                  renderItem={(item, idx) => (
                    <List.Item>
                      <Card>
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
            </Col>
          )}
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 24, order: 1 }}
          lg={{ span: 18, order: 2 }}
          xl={{ span: 19, order: 2 }}
        >
          {/* <Content> */}
          <div
            style={{
              background: "#fff",
              padding: 16,
              minHeight: "calc(100vh - 144px)"
            }}
          >
            {children}
          </div>
          {/* </Content> */}
        </Col>
      </Row>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      © ICMM 2019 Powered by Grouppe.co
    </Footer>
  </Layout>
);

export default withRouter(MainLayout);
