import React from "react"

import MainTemplate from "../../templates/main/main"
import PartsInputForm from "../../components/partsInputForm/partsInputForm"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const PartLookup = () => {
  return (
    <MainTemplate>
      <Row>
        <Col>
          <p>
            You can use this form to look up compatible parts, parts entered in
            your exclusion list won't be included
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

PartLookup.propTypes = {}

export default PartLookup
