import { NotificationList } from '@/entities/Notification'
import NotificationsIcon from '@/shared/assets/icons/notifications_icon.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Drawer } from '@/shared/ui/Drawer'
import { Icon } from '@/shared/ui/Icon'
import { Popover } from '@/shared/ui/Popups'
import { FC, memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import styles from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton: FC<NotificationButtonProps> = memo(({ className }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen((prevValue) => !prevValue)
  }, [])

  const trigger = (
    <Button onClick={toggleDrawer} theme={ButtonTheme.CLEAR}>
      <Icon
        Svg={NotificationsIcon}
        className={styles.notificationsIcon}
        inverted
      />
    </Button>
  )

  return (
    <>
      <BrowserView>
        <Popover
          direction='bottom-left'
          trigger={trigger}
          className={className}
        >
          <NotificationList className={styles.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer
          isOpen={isDrawerOpen}
          onClose={toggleDrawer}
        >
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  )
})
