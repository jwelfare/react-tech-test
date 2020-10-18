import React from "react"
import PropTypes from "prop-types"

import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"

import "./partsResultsTable.scss"

const PartsResults = (props) => {
  const { partsResults } = props

  return (
    <Accordion defaultActiveKey="0">
      {partsResults.map((part, index) => (
        <Card key={index}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey={`${index}`}
            className={`${part.wasExcluded ? "excluded" : ""}`}
          >
            {part.PartNumber}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={`${index}`}>
            <Card.Body>
              {!part.wasExcluded && (
                <Table striped bordered>
                  <thead>
                    <tr>
                      <td colSpan="2">Alternative parts</td>
                    </tr>
                  </thead>
                  <tbody>
                    {part.AlternativeParts.map((alternative, altIndex) => (
                      <tr key={altIndex}>
                        <td>{alternative.PartNumber}</td>
                        <td>{alternative.Description}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
              {part.wasExcluded && <p>This part was excluded</p>}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  )
}

PartsResults.propTypes = {
  partsResults: PropTypes.arrayOf(
    PropTypes.shape({
      PartNumber: PropTypes.string,
      AlternativeParts: PropTypes.array,
      wasExcluded: PropTypes.bool,
    })
  ),
}

export default PartsResults
