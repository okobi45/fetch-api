import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1>PAGE NOT FOUND 404</h1>
      <Link to="/">click here to go back</Link>
    </div>
  )
}

export default Error