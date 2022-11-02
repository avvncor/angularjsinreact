import React, {useState, useEffect, Component } from 'react'
import propTypes from 'prop-types'

function Todo({props}) {
    

    console.log(props)
  return (
    <div>
      {props}
    </div>
  )
}

Todo.propTypes = {
    props: propTypes.string
}

export default Todo