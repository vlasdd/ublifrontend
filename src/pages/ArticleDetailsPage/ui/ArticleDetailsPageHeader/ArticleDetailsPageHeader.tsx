import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button } from 'shared/ui/Button/Button'
import { getArticleDetailsData } from '../../../../entities/Article'
import styles from './ArticleDetailsPageHeader.module.scss'

const ArticleDetailsPageHeader = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const handleBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const handleEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`)
  }, [navigate, article?.id])

  return (
    <div className={styles.container}>
      <Button onClick={handleBackToList}>
        {t('Back to list')}
      </Button>
      {canEdit && (
        <Button onClick={handleEditArticle}>
          {t('Edit')}
        </Button>
      )}
    </div>
  )
}

export default ArticleDetailsPageHeader
