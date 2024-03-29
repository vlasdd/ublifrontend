import { Page } from '@/widgets/Page'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const Main = memo(() => {
  const { t } = useTranslation()

  return (
    <Page data-testid="MainPage">
      <p>{t('Main Page')}</p>
    </Page>
  )
})

export default Main
