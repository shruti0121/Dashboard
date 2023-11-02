import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle, CardText,CardLink, Button, Row, Col } from "reactstrap";


function Cards() {

  return(
    
    <Row xs="4">
      <Col xs="4">
      <Card style={{width: "350px",height : "100px" ,backgroundColor:'white'}}>
        <CardBody>
          <Button style={{ width:"20px", height:"20px", borderRadius:"30px",backgroundColor:'white', borderColor:'white',Shadow:"5px"}}>
            <i className="bx bx-folder"></i>
          </Button>
          
          <CardText>
            <h3>100</h3>
            Uploded files 
          </CardText>
        </CardBody>
      </Card>
      </Col>
      <Col xs="4">
      <Card style={{width: "350px",height : "100px" ,backgroundColor:'white'}}>
        <CardBody>
          <Button style={{ width:"20px", height:"20px", borderRadius:"30px",backgroundColor:'white', borderColor:'white',Shadow:"5px"}}>
            <i className="bx bx-folder"></i>
          </Button>
          
          <CardText>
            <h3>50</h3>
            Transcribed
          </CardText>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card style={{width: "350px",height : "100px" ,backgroundColor:'white'}}>
        <CardBody>
          <Button style={{ width:"20px", height:"20px", borderRadius:"30px",backgroundColor:'white', borderColor:'white',Shadow:"5px"}}>
            <i className="bx bx-bookmark"></i>
          </Button>
          
          <CardText>
            <h3>20</h3>
            Saved
          </CardText>
        </CardBody>
      </Card>
      </Col>
    </Row>
    
    
  )

}

export default Cards;