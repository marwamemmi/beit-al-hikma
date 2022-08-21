import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    TabContent,
    TabPane,
    
    Col,
  } from "reactstrap";
function Image(image, path, description , namebook, reference ) {

const [pills, setPills] = React.useState("1");
  return (
    <div className="col-md-4 mt-4">
    <Col className="ml-auto mr-auto" md="10" xl="5">
            <Card>
              <CardHeader>
              <img
              alt="..."
              className="n-logo"
              src={require("assets/img/p20-504x224.jpg")}
            ></img>
             
              </CardHeader>
              <CardBody>
                <TabContent
                  className="text-center"
                  activeTab={"pills" + pills}
                >
                  <TabPane tabId="pills1">
                      <p>the name of the book : {namebook}
                      <br></br>
                      the ref: {reference}
                      <br></br>
                      Description :{description}
                      </p>
                    </TabPane>
                  
                </TabContent>
              </CardBody>
            </Card>
          </Col>


    </div>
  )
}

export default Image