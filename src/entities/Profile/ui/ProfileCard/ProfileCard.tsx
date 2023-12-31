import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import styles from './ProfileCard.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from '../../../../pages/ProfilePage/model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from '../../../../entities/Currency'
import { Country, CountrySelect } from '../../../../entities/Country'

interface ProfileCardProps {
  formData?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  handleFirstNameChange?: (value?: string) => void
  handleLastNameChange?: (value?: string) => void
  handleAgeChange?: (value?: string) => void
  handleCityChange?: (value?: string) => void
  handleUsernameChange?: (value?: string) => void
  handleAvatarChange?: (value?: string) => void
  handleCurrencyChange?: (value?: Currency) => void
  handleCountryChange?: (value?: Country) => void
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  formData,
  error,
  isLoading,
  readonly,
  handleFirstNameChange,
  handleLastNameChange,
  handleAgeChange,
  handleCityChange,
  handleUsernameChange,
  handleAvatarChange,
  handleCurrencyChange,
  handleCountryChange
}) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames([styles.profileCard, styles.loadingContainer])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames([styles.profileCard, styles.errorContainer])}>
        <Text
          title={t('An unknown error happened')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        >
          {t('Try to refresh the page')}
        </Text>
      </div>
    )
  }

  return (
    <div className={classNames([styles.profileCard], { [styles.editing]: !readonly })}>
      {formData?.avatar && (
        <div className={styles.avatarWrapper}>
          <Avatar
            src={formData?.avatar}
            alt="Avatar"
          />
        </div>
      )}
      <Input
        value={formData?.firstName}
        placeholder="Your First Name"
        className={styles.input}
        readonly={readonly}
        onChange={handleFirstNameChange}
      />
      <Input
        value={formData?.lastName}
        placeholder="Your Last Name"
        className={styles.input}
        readonly={readonly}
        onChange={handleLastNameChange}
      />
      <Input
        value={formData?.age}
        placeholder="Your Age"
        className={styles.input}
        readonly={readonly}
        onChange={handleAgeChange}
      />
      <Input
        value={formData?.city}
        placeholder="Your City"
        className={styles.input}
        readonly={readonly}
        onChange={handleCityChange}
      />
      <Input
        value={formData?.username}
        placeholder="Your Username"
        className={styles.input}
        readonly={readonly}
        onChange={handleUsernameChange}
      />
      <Input
        value={formData?.avatar}
        placeholder="Your Avatar"
        className={styles.input}
        readonly={readonly}
        onChange={handleAvatarChange}
      />
      <CurrencySelect
        value={formData?.currency}
        onChange={handleCurrencyChange}
        readonly={readonly}
        className={styles.input}
      />
      <CountrySelect
        value={formData?.country}
        onChange={handleCountryChange}
        readonly={readonly}
        className={styles.input}
      />
    </div>
  )
}
