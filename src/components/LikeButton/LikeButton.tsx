import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import style from "./LikeButton.module.css";
import { FaHeart } from "react-icons/fa";

interface props{
    onClick: ()=>void
}


function LikeButton({onClick}:props) {
  const [isLiked, setIsLiked] = useState(false);
    
  return (
    <>
      {isLiked ? (
        <FaHeart
        size={40}
          className={style.dislike}
          onClick={() => {setIsLiked(!isLiked); onClick();}}
        />
      ) : (
        <CiHeart
        size={40}
          className={style.dislike}
          onClick={() => {setIsLiked(!isLiked); onClick();}}
        />
      )}
    </>
  );
}

export default LikeButton;
