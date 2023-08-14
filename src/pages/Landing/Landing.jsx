// css
import styles from './Landing.module.css'
import AppList from '../AppList/AppList'
const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      { user?.name 
      ? 
        <AppList />
      :  
        <h1>Please log in</h1>
    }
    </main>
  )
}

export default Landing
