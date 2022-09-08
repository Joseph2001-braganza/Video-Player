import React from "react"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const LikeDislike=(props)=>{
    const {likes,dislikes}=props
    console.log(likes)
    const [isliked,setisLiked]=React.useState(false)
    const [like , setlike]=React.useState(likes)
    const [dislike,setdislike]=React.useState(dislikes)
    const bad=()=>{
        if(!isliked){
            setdislike(dislike-1);
            setisLiked(true)
        }else if(isliked){
            setdislike(dislike+1);
            setisLiked(false)
        }
    }
    const good=()=>{
        if(!isliked){
            setlike(like+1);
            setisLiked(true)
        }else if(isliked){
            setlike(like-1);
            setisLiked(false)
        }
    }
    return(
        <>
        <div className="row">
            <div className="col">
            <Button variant="primary" onClick={good}>
                Like <Badge bg="secondary">{like}</Badge>
            </Button>
            </div>
            <div className="col">
            <Button variant="danger" onClick={bad}>
                Dislike <Badge bg="secondary">{dislike}</Badge>
            </Button>
            </div>
        </div>
            
        </>
    )
}

export default LikeDislike;