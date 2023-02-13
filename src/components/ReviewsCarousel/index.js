import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {currentId: 0}

  dec = () => {
    const {currentId} = this.state
    const x = currentId
    if (currentId === 0) {
      this.setState({currentId: 0})
    } else {
      this.setState({currentId: x - 1})
    }
  }

  inc = () => {
    const {currentId} = this.state
    const x = currentId
    if (currentId === 3) {
      this.setState({currentId: 3})
    } else {
      this.setState({currentId: x + 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currentId} = this.state
    const res = reviewsList[currentId]
    console.log(res)
    return (
      <div className="bg">
        <h1>Reviews</h1>
        <div className="card">
          <button type="button" onClick={this.dec} data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="details">
            <img src={res.imgUrl} alt={res.username} />
            <p>{res.username}</p>
            <p>{res.companyName}</p>
            <p>{res.description}</p>
          </div>
          <button type="button" onClick={this.inc} data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
