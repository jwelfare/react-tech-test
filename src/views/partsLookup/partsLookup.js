import React from "react"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import MainTemplate from "../../templates/main/main"
import PartsInputForm from "../../components/partsInputForm/partsInputForm"

const PartLookup = () => {
  return (
    <MainTemplate>
      <Row>
        <Col>
          <p>
            {`You can use this form to look up compatible parts, parts entered in your exclusion list won't be included`}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <PartsInputForm />
        </Col>
      </Row>
    </MainTemplate>
  )
}

export default PartLookup
