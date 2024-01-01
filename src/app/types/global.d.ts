declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import type React from 'react'
  const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const IS_DEV: boolean
declare const API: string
declare const PROJECT: 'frontend' | 'storybook' | 'jest'

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
}
