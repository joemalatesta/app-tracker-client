// css
import { useState } from 'react'
import styles from './Landing.module.css'
import AppList from '../AppList/AppList'
const Landing = ({ user }) => {
  const [appList, setAppList] = useState([])
  return (
    <main className={styles.container}>
      { user?.name 
      ? 
        <AppList appList={appList} setAppList={setAppList}/>
      :  
        <h1>Please log in</h1>
    }
    </main>
  )
}

export default Landing
