import { Loader } from '@/shared/ui/Loader'
import styles from './PageLoader.module.scss'

export const PageLoader = () => {
  return (
    <div className={styles.pageLoader}>
      <Loader />
    </div>
  )
}
