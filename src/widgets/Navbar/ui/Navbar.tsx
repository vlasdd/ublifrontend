import { getAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationButton } from '@/features/NotificationButton'
import { getRouteArticleCreate } from '@/shared/constants/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { HStack } from '@/shared/ui/Stack'
import { Text, TextTheme } from '@/shared/ui/Text'
import { FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false)
  const authData = useSelector(getAuthData)

  const handleModalOpen = useCallback(() => {
    setIsAuthModalOpen(true)
  }, [])

  const handleAuthModalClose = useCallback(() => {
    setIsAuthModalOpen(false)
  }, [])

  if (authData) {
    return (
      <header className={classNames([styles.navbar, className])}>
        <HStack className={styles.contentContainer}>
          <Text
            title="My App"
            className={styles.appName}
            theme={TextTheme.INVERTED}
          />
          <AppLink
            to={getRouteArticleCreate()}
            theme={AppLinkTheme.INVERTED}
          >
            {t('Create New Article')}
          </AppLink>
        </HStack>
        <HStack
          gap="16px"
          className={styles.actions}
        >
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    )
  }

  return (
    <header className={classNames([styles.navbar, className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={handleModalOpen}
      >
        {t('Enter')}
      </Button>
      {isAuthModalOpen && <LoginModal
        isOpen={isAuthModalOpen}
        onClose={handleAuthModalClose}
      />}
    </header>
  )
})
