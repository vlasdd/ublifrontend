import { getAuthData } from '../../../../entities/User'
import { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: ReactNode
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = useSelector(getAuthData)
  const location = useLocation()

  if (!auth) {
    return (
      <Navigate to={RoutePath.main} state={{ from: location }} replace />
    )
  }

  return (
    <>
      {children}
    </>
  )
}

export default RequireAuth
