import React from 'react'
import Test from '../../components/Test'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <h1>About</h1>
      <Test />
      <Link to="/">Go to Home</Link>
    </>
  )
}

export default About
