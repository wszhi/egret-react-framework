import React from 'react'
import imageIcon from '@/assets/flower.svg'
import './index.scss'

class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="test-width">Home</div>
        <img alt="logo" src={imageIcon} />
      </div>
    )
  }
}

export default HomePage
