import { StateSchema } from '@/app/providers/StoreProvider'
import { getScrollByPath, scrollRestorationActions } from '@/features/ScrollRestoration'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { TestProps } from '@/shared/types/testing'
import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styles from './Page.module.scss'

interface PageProps extends TestProps {
  className?: string
  children: ReactNode
  handleEndScroll?: () => void
}

export const Page: FC<PageProps> = ({
  className,
  children,
  handleEndScroll,
  'data-testid': dataTestId = 'Page'
}) => {
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname))

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: handleEndScroll
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollRestorationActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname
    }))
  }, 2000)

  return (
    <main
      className={classNames([styles.container, className])}
      ref={wrapperRef}
      onScroll={onScroll}
      data-testid={dataTestId}
    >
      {children}
      {handleEndScroll
        ? (
          <div
            ref={triggerRef}
            className={styles.trigger}
          />
        )
        : null
      }
    </main>
  )
}
