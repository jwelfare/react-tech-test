import React from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Spinner from "react-bootstrap/Spinner"

import PartsResultsTable from "../../components/partsResultsTable/partsResultsTable"

import MainTemplate from "../../templates/main/main"

import "./partsResults.scss"

const PartResults = () => {
  const results = useSelector((state) => state.userPartsList)

  return (
    <MainTemplate>
      {results.pending && (
        <div className="overlay d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status" size="lg">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}

      {!results.pending && results.partsResults.length === 0 && (
        <Redirect to="/" />
      )}

      {!results.pending && results.partsResults && (
        <Row>
          <Col>
            <PartsResultsTable partsResults={results.partsResults} />
          </Col>
        </Row>
      )}
    </MainTemplate>
  )
}

PartResults.propTypes = {}

export default PartResults
