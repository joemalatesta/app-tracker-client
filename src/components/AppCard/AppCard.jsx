// services
import { useState, useEffect } from 'react'
import * as appService from '../../services/applicationList'


const AppCard = (props) => {
  const [app, setApp] = useState([])

  const handleDeleteApp = async id => {
    console.log(id);
    const deletedApp = await appService.deleteOne(id)
    setApp(app.filter(sheet => sheet._id !== deletedApp._id))
  }

  useEffect(() =>{
    const fetchApps = async (id) => {
      const appData = await appService.getAll(id)
      setApp(appData)
    }
    fetchApps()
  },[])

  return ( 
    <>
      {props.app.type}
      {props.app.companyName}
      {props.app.contactPerson}
      {props.app.websiteLink}
      {props.app.status}
      {props.app.dateApplied}
      {props.app.resumeSent}
      {props.app.portfolioSent}
      <button  onClick={()=> handleDeleteApp(props.app._id)}>delete</button>
      <br/>
    </>
   );
}
 
export default AppCard;