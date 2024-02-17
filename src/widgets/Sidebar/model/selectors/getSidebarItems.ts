import { getAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about_icon.svg'
import ArticlesIcon from '@/shared/assets/icons/articles_icon.svg'
import HomeIcon from '@/shared/assets/icons/home_icon.svg'
import ProfileIcon from '@/shared/assets/icons/profile_icon.svg'
import { RoutePath } from '@/shared/constants/router'
import { createSelector } from '@reduxjs/toolkit'
import { SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(
  getAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: 'Main Page',
        Icon: HomeIcon
      },
      {
        path: RoutePath.about,
        text: 'About Page',
        Icon: AboutIcon
      }
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          text: 'Profile Page',
          Icon: ProfileIcon,
          authOnly: true
        },
        {
          path: RoutePath.articles,
          text: 'Articles Page',
          Icon: ArticlesIcon,
          authOnly: true
        }
      )
    }

    return sidebarItemsList
  }
)
