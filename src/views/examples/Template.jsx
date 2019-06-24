import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormText,
  CustomInput,
  FormFeedback,
   Label,
   Input,
    Button,
  UncontrolledTooltip
} from "reactstrap";
// core components
import HeaderEmsa from "components/Headers/HeaderEmsa.jsx";

class Template extends React.Component {
  state = {};
  render() {
    return (
      <>
        <HeaderEmsa />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h2 className=" mb-0">Emsa Template Project Generator</h2>
                    <p></p>
                   <p></p>
                  <h4 className="alert-heading">Tell Us About What Microservice Template Project You Want to Generate !!!!!</h4>
                </CardHeader>
                <CardBody >

                    <Form className="form">

            <Row>
                 <Col xs="6">

                                    <FormGroup>
                                              <Label  for="exampleCheckbox">Project Build</Label>
                                              <div>
                                                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Gradle" />

                                              </div>

                                     </FormGroup>
                                     </Col>
                  <Col xs="6">
                                      <FormGroup >
                                                <Label  for="exampleCheckbox">Language</Label>
                                                <div>
                                                  <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Java" />
                                                  <CustomInput type="switch" id="exampleCustomSwitch4" label="Kotlin [Coming Soon...] " htmlFor="exampleCustomSwitch4_X" disabled />
                                                </div>
                                       </FormGroup>
                   </Col>

                </Row>

                 <Row>
                  <Col >
                 <FormGroup>
                           <Label for="exampleCustomSelect">Spring</Label>
                           <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                             <option value="">Select</option>
                             <option>2.1.0</option>
                             <option>2.2.0</option>

                           </CustomInput>
                           <FormText>Spring Version</FormText>
                     </FormGroup>
                     </Col>

                  </Row>
                  <Row>

                   <Col xs="6">
                                      <FormGroup>
                                                <Label for="exampleEmail">Package Name</Label>
                                                <Input placeholder="com.wellsfargo"/>
                                                <FormFeedback>You will not be able to see this</FormFeedback>
                                                <FormText>Artifact ID</FormText>
                                      </FormGroup>
                      </Col>
                      <Col xs="6">
                       <FormGroup>
                                 <Label for="exampleEmail">Name</Label>
                                 <Input placeholder="emsa-template"/>
                                 <FormFeedback>You will not be able to see this</FormFeedback>
                                 <FormText>Java Project Name</FormText>
                       </FormGroup>
                     </Col>
                     <Col xs="6">
                         <FormGroup>
                                   <Label for="exampleEmail">Artifact ID</Label>
                                   <Input
                                   placeholder="com.wellsfargo.emsatemplate"/>
                                   <FormFeedback>You will not be able to see this</FormFeedback>
                                   <FormText>Used to build jar for project</FormText>
                         </FormGroup>
                       </Col>
                    </Row>
                     <Row>
                     <Col>
                    <FormGroup>
                              <Label for="exampleCustomMutlipleSelect">Depedencies</Label>
                              <CustomInput type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>

                                <option value="">SEARJ [Default]</option>
                                <option>wf-connectors</option>
                                <option>wf-retrofit</option>
                              </CustomInput>
                     </FormGroup>
                     </Col>
                     </Row>
                  <Button color="warning">Generate Project</Button>
                </Form>

                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Template;
