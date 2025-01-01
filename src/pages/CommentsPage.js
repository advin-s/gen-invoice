import CommentsIcon from "../assets/icons/CommentsIcon"
import Card from "../lib/Card"

const CommentsPage = () =>{

  const commentsDetails = {
    heading:'comments',
    icon:<CommentsIcon/>
  }

  return <Card {...commentsDetails}/>
}

export default CommentsPage