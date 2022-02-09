import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewProject } from "../../store/singleProject";

const CreateNewProject = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const user = useSelector(state => state.session.user?.id)
    const userId= user;

    const [title, setTitle] = useState("");
    const [description, setTitle] = useState("");
    const [media, setMedia] = useState("");

    const updateTitle = (e) => setTitle(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updateMedia = (e) => setMedia(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {

        };

        let createdProject = await dispatch(createNewProject(payload));
        if (createdProject) {
          history.push(`/`)
        }
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>

            </form>

        </div>
    )
}
