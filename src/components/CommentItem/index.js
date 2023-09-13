// Write your code here
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {lis, lik, del, key} = props
  const {name, comment, like, id} = lis
  let date = new Date()
  date = formatDistanceToNow(date)
  const likeurl = like
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const dele = () => {
    del(id)
  }

  const temp = () => {
    lik(id)
    console.log('enterd delete request')
  }

  return (
    <li key={lis.id}>
      <div>
        <div className="comentn">
          <p>{name}</p>
          <p>{date}</p>
          <p>{comment}</p>
          <button data-testid="delete" onClick={dele}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
          <img src={likeurl} alt="like" />
          <button onClick={temp}>Like</button>
        </div>
      </div>
    </li>
  )
}
export default CommentItem
