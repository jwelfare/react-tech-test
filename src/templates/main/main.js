import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const main = (props) => {
  return (
    <>
      <header>
        <Container className="mb-5">
          <Row>
            <Col>
              <h1>PartsTrader Lookup</h1>
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <Container>
          {props.children}
        </Container>
      </main>

      <footer>
        <Container className="mt-5">
          <Row>
            <Col>
              <ul className="list-inline">
                { [
                    { target: "#blah", label: "Link 1" },
                    { target: "#blah", label: "Link 2" },
                    { target: "#blah", label: "Link 3" },
                  ].map((curr, key) => (
                  <li key={key} className="list-inline-item">
                    <a href={curr.target} alt={`Find out more about ${curr.label}`}>
                      {curr.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default main
