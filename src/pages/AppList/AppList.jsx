// npm modules
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as appListService from '../../services/applicationList'
import AppCard from '../../components/AppCard/AppCard'
// services


// css

const AppList = () => {
  const [appList, setAppList] = useState([])

  const handleDeleteCharSheet = async id => {
    const deletedApp = await appListService.deleteOne(id)
    setAppList(appList.filter(sheet => sheet._id !== deletedApp._id))
  }

  useEffect(() =>{
    const fetchAllCharSheets = async () => {
      const appListData = await appListService.getAll()
      setAppList(appListData)
    }
    fetchAllCharSheets()
  },[])
  
  return ( 
    <>
      <div className='app lowerGridCard'>
        <div>
          <h1 className='card title'>Applications Page</h1>
          <Link className='card' to='/createChar'>Create a New Application</Link>
        </div>
      </div>
      <div>
        {appList.length ?
          appList.map((app) =>
            <AppCard key={app._id} handleDeleteCharSheet={handleDeleteCharSheet} app={app} />
            ) 
            :
            <h3>No Applications to display</h3>
        }
      </div>
    </>
   )
}
 
export default AppList