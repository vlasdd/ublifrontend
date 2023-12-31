import { Comment } from '../../model/types/comment'
import { memo } from 'react'
import styles from './CommentCard.module.scss'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { classNames } from 'shared/lib/classNames/classNames'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

const CommentCard: React.FC<CommentCardProps> = memo(({ className, comment, isLoading }) => {
  if (isLoading) {
    return (
      <div className={classNames([styles.commentCard, className])}>
        <div className={styles.header}>
          <Skeleton
            width={30}
            height={30}
            border="50%"
          />
          <Skeleton
            width={100}
            height={20}
          />
        </div>
        <Skeleton
          className={styles.text}
          width="100%"
          height={50}
        />
      </div>
    )
  }

  return (
    <div className={classNames([styles.commentCard, className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={styles.header}>
        {comment.user.avatar && (
          <Avatar
            size={30}
            src={comment.user.avatar}
            alt="Avatar"
          />
        )}
        <Text>
          {comment.user.username}
        </Text>
      </AppLink>
      <Text className={styles.text}>
        {comment.text}
      </Text>
    </div>
  )
})

export default CommentCard
