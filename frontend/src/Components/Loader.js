import React from 'react'
import {Spinner} from 'react-bootstrap'
function Loader() {
  return (
      <>
    <Spinner animation="border" variant="success" style={{margin:"200px",}} />
    </>
  )
}

export default Loader;