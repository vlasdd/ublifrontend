import { ArticleBlockText } from '../../model/types/article'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import styles from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleBlockText
}

const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = memo(({
  className,
  block
}) => {
  return (
    <div className={className}>
      {block.title && (
        <Text
          title={block.title}
          className={styles.title}
        />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text
          key={paragraph}
          className={styles.paragraph}
        >
          {paragraph}
        </Text>
      ))}
    </div>
  )
})

export default ArticleTextBlockComponent
