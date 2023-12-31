import { profileActions } from '../../model/slice/profileSlice'
import { getProfileReadonly } from 'pages/ProfilePage/model/selectors/getProfileReadonly/getProfileReadonly'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import styles from './ProfilePageHeader.module.scss'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { getAuthData } from '../../../../entities/User'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'

const ProfilePageHeader = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useSelector(getAuthData)
  const profileData = useSelector(getProfileData)
  const readonly = useSelector(getProfileReadonly)

  const canEdit = useMemo(() => authData?.id === profileData?.id, [authData?.id, profileData?.id])

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const handleCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const handleSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={styles.header}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div className={styles.buttonsWrapper}>
          {readonly
            ? (
              <Button
                theme={ButtonTheme.OUTLINED}
                className={styles.editButton}
                onClick={handleEdit}
              >
                {t('Edit')}
              </Button>
            )
            : (
              <div className={styles.editActionsButtonsContainer}>
                <Button
                  theme={ButtonTheme.OUTLINED}
                  className={styles.editButton}
                  onClick={handleSave}
                >
                  {t('Save')}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINED_RED}
                  className={styles.editButton}
                  onClick={handleCancel}
                >
                  {t('Cancel')}
                </Button>
              </div>
            )}
        </div>
      )}
    </div>
  )
}

export default ProfilePageHeader
