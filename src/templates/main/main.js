import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

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
        <Container>{props.children}</Container>
      </main>

      <footer>
        <Container className="mt-5">
          <Row>
            <Col>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/jwelfare"
              >
                GitHub
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default main
