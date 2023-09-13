import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
export default class Comments extends Component {
  state = {comments: 0, list: [], islike: false, name: '', comment: ''}

  like = ido => {
    this.setState(prev => ({
      list: prev.list.map(each => {
        if (ido === each.id) {
          return {...each, islike: !each.islike}
        }
        return each
      }),
    }))
  }

  del = id => {
    this.setState(prev => ({
      list: prev.list.map(each => (each.id !== id ? each : '')),
      comments: prev.comments - 1,
    }))
  }

  butst = event => {
    event.preventDefault()
    const {name, comment, list} = this.state

    const temlis = {
      id: v4(),
      name,
      comment,
      like: false,
    }
    console.log(temlis.id)
    console.log(temlis)
    this.setState(prev => ({
      list: [...prev.list, temlis],
      name: '',
      comment: '',
      comments: prev.comments + 1,
    }))
  }

  namec = event => {
    this.setState(prev => ({
      name: event.target.value,
    }))
  }

  onc = event => {
    this.setState(prev => ({
      comment: event.target.value,
    }))
  }

  like = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, like: !eachComment.like}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {comments, list, name, comment} = this.state
    console.log(list)
    return (
      <div className="main">
        <div>
          <h1>Comments</h1>
        </div>
        <form className="comment-and-image" onSubmit={this.butst}>
          <div className="inpu">
            <p className="pad">Say Something about 4.0 Technologies</p>
            <br />
            <input
              id="input"
              type="text"
              className="pad"
              placeholder="Your Name"
              value={name}
              onChange={this.namec}
            />
            <br />
            <textarea
              rows="20"
              cols="70"
              className="pad"
              placeholder="Your Comment"
              value={comment}
              onChange={this.onc}
            />
            <button type="submit" className="btn">
              Add Comment
            </button>
          </div>
          <div className="img1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </form>
        <div className="comment">
          <p>
            <span className="ftr">{comments}</span> Comments
          </p>
          <ul>
            {list.map(each => (
              <CommentItem
                key={each.id}
                lis={each}
                lik={this.like}
                del={this.del}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
