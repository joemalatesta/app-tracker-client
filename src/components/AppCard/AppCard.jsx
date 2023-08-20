
import { Link } from 'react-router-dom'

const AppCard = ({ app }) => {
  return ( 
    <>
      <div className='grid'>
        <p>{app?.type}</p>
        <p>{app?.companyName}</p>
        <p>{app?.contactPerson}</p>
        <p>{app?.websiteLink}</p>
        <p>{app?.status}</p>
        <p>{app?.dateApplied}</p>
        <Link
          to='/EditForm'
          state={{app}}
        >
        EDIT
        </Link>
      </div>
      <br/>
    </>
   );
}
 
export default AppCard;