// npm modules
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as appListService from '../../services/applicationList'
import AppCard from '../../components/AppCard/AppCard'
// services


// css

const AppList = ({appList, setAppList}) => {

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
          <Link className='card' to='/createForm'>Create a New Application</Link>
        </div>
      </div>
      <div>
        {appList?.length ?
          appList.map((app) =>
              <AppCard 
                key={app._id} 
                app={app} 
              />
            ) 
            :
            <h3>No Applications to display</h3>
        }
      </div>
    </>
   )
}
 
export default AppList