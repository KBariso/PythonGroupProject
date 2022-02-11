import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editComment, getAllComments } from "../../store/comments";
import { NavLink } from "react-router-dom";


const EditComment = ({info,commentsProp, hideForm}) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const commentId = info.id
  // const projectId = commentsProp.project_id
  // console.log(commentId, "I AM THE COMMENT ID!!!!!!!!!!")
  // console.log(projectId, "I AM THE PROJECTID!!!!")
  // console.log(commentsProp, "I AM THE COMMENT!!!!")


      const [comment, setComment] = useState(info.comment);
    //   const [errors, setErrors] = useState([]);

      // const updateComment = (e) => setComment(e.target.value);


      useEffect(() => {
        dispatch(getAllComments());
    }, [dispatch]);



      // useEffect(() => {

      //   if (commentsProp) {
      //       setComment(commentsProp.comment);
      //   }
      // }, [commentsProp])




  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (errors.length > 0) return;

    const updatedPayload = {
      comment_id:commentId,
        comment

    };

    let updatedComment = await dispatch(editComment(updatedPayload));

    if (updatedComment) {
      dispatch(getAllComments())
        // history.push(`/projects/${projectId}`)
        hideForm()
        // window.location.reload();

    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {/* {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )} */}
        <textarea
          className="commentInput"
          placeholder="Comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditComment;
