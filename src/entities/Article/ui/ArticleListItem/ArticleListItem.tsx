import React from 'react'
import { useTranslation } from 'react-i18next'
import EyeIcon from 'shared/assets/icons/eye_icon.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { Card } from 'shared/ui/Card/Card'
import Icon from 'shared/ui/Icon/Icon'
import { Text } from 'shared/ui/Text/Text'
import { Article, ArticleBlockText, ArticleBlockType, ArticleView } from '../../model/types/article'
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import styles from './ArticleListItem.module.scss'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: React.HTMLAttributeAnchorTarget
}

const ArticleListItem: React.FC<ArticleListItemProps> = ({ className, article, view, target }) => {
  const { t } = useTranslation()

  const types = (
    <Text className={styles.types}>
      {article.type.join(', ')}
    </Text>
  )

  const views = (
    <>
      <Text className={styles.views}>
        {article.views}
      </Text>
      <Icon
        Svg={EyeIcon}
        className={styles.icon}
      />
    </>
  )

  const image = (
    <img
      src={article.image}
      alt={article.title}
      className={styles.image}
    />
  )

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleBlockText

    return (
      <div className={classNames([styles[view], className])}>
        <Card>
          <div className={styles.header}>
            <Avatar
              size={30}
              src={article.user.avatar}
            />
            <Text className={styles.username}>
              {article.user.username}
            </Text>
            <Text className={styles.date}>
              {article.createdAt}
            </Text>
          </div>
          <Text
            title={article.title}
            className={styles.title}
          />
          {types}
          {image}
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={styles.textBlock}
            />
          )}
          <div className={styles.footer}>
            <AppLink
              to={RoutePath.article_details + article.id}
              target={target}
            >
              <Button>
                {t('Read more...')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      className={classNames([styles[view], className])}
      to={RoutePath.article_details + article.id}
      target={target}
    >
      <Card>
        <div className={styles.imageWrapper}>
          {image}
          <Text className={styles.date}>
            {article.createdAt}
          </Text>
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text className={styles.title}>
          {article.title}
        </Text>
      </Card>
    </AppLink>
  )
}

export default ArticleListItem
