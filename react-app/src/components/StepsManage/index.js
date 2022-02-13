import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import {deleteStep} from '../../store/step'
import './StepsManage.css'


const StepsManage = ({stepzId, projectId, projectUserId }) => {
    const history = useHistory();
    const dispatch= useDispatch()
    const user = useSelector(state => state.session.user);
    const userId = user?.id
    // const {stepId}= useParams()

    const stepId = useSelector((state) => {
       const stepsArray= Object.values(state.steps);
       const filtered= stepsArray.filter(step => step.id === stepzId)
       return filtered
    })

    // const stepIdArray= Object.values(stepId)



    // const steps = useSelector((state) => {
    //     const stepsArray= Object.values(state.steps);
    //     const filtered= stepsArray.filter(step => step.project_id === projectsId)

    //     return filtered

    //   });
console.log(projectUserId, "THIS IS ")

    const preSession= projectUserId

    const sessionId = userId === preSession

const handleDelete = (e) => {
    e.preventDefault();
  const deleteInfo =dispatch(deleteStep(stepzId))
  // if(deleteInfo && sessionId){
  //   history.push("/");
  // }

}


return (
    <div className='deleteStepContainer'>
      <div>
        { sessionId &&  <button className='deleteStepButton' onClick={handleDelete}>Delete Step</button>}
      </div>
    </div>
  );

          }
export default StepsManage;
