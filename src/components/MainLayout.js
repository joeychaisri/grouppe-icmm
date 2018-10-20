import React from "react";
import { Layout, Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import grouppe from'./../static/grouppe.png';
import iyaHeader from'./../static/header.png';
import iyaLogo from'./../static/iyaLogo.jpg';
const { Header, Content, Footer } = Layout;


const MainLayout = ({ confirmData, set, history, children, delData, editData }) => (
  <Layout style={{ minHeight: "100vh" }}>
    <Header style={{ backgroundColor: "#FFF", textAlign: "center", height: 'auto' }}>
      {/* <h2 style={{ color: "white", marginTop: '15px' }}>CHANGE</h2> */}
    
     <img  src={iyaHeader} width="50%" style={{ margin: "0 auto", maxWidth: "350px"}}/>
    </Header>
    {/* <Header style={{ backgroundColor: "white"}}>
        <img  src={icmmBanner} style={{ margin: "0 auto" , maxWidth: "100%" , height : "200%" }}/>
    </Header> */}
    <Content className="container" style={{ padding: "10px 10px 0 10px" , marginBottom: "10px" }}>
      <Row type="flex" justify="center">
        {/* {["series", "register", "information"].includes(
          history.location.pathname.split("/")[1]
        ) &&
          confirmData.length > 0 && (
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 24, order: 2 }}
              md={{ span: 24, order: 2 }}
              lg={{ span: 9, order: 1 }}
              xl={{ span: 7, order: 1 }}
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
                          style={{ float: "right" , paddingLeft : "2vh"}}
                          onClick={() => {
                            alert("คุณทำการลบข้อมูลของบุคคลที่  " + parseInt(idx+1,10))
                            delData(idx)
                          }}
                          type="close"
                        />
                        <Icon
                          type="edit"
                          style={{ float: "right"  }}
                          onClick={() => {
                            set(item)
                            history.push(`/edit/${idx}`)
                          }}
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
          )} */}
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 24, order: 1 }}
          lg={{ span: 24, order: 1 }}
          xl={{ span: 24, order: 1 }}
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
    <Footer  style={{ backgroundColor: "white", textAlign: "center", padding: 0 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}  >
      <p style={{ margin: 0}}> powered by </p>
       <img src={grouppe} alt="grouppe" style={{ width: "120px" }}/>
       <img src={iyaLogo} alt="iyaLogos" style={{ width: "120px" }}/>
    </div>
    </Footer>
  </Layout>
);

export default withRouter(MainLayout);
