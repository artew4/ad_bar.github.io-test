import React, { Component } from 'react'
import Typical from 'react-typical'

class Example extends React.Component {
  render () {
    return (
      <Typical
        steps={['Здравствуйте! Меня зовут Артем Дмитриевич', 5000,
            'Это моя образовательная платформа', 5000,
            'Hello world!', 5000,
            'Fт = mg', 5000]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}

export default Example;