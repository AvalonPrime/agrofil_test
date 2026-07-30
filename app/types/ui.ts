export type AppButtonVariant = 'green' | 'base'

export interface AppButtonProps {
  label: string
  to?: string
  href?: string
  variant?: AppButtonVariant
  /** Preserve Webflow IX2 id when needed for hover animation. */
  interactionId?: string
  iconSrc?: string
  ariaLabel?: string
}

export interface AppImageProps {
  src: string
  alt?: string
  class?: string
  width?: string | number
  height?: string | number
  loading?: 'lazy' | 'eager'
  sizes?: string
  srcset?: string
}

export interface AppInputProps {
  modelValue?: string
  name: string
  id?: string
  type?: string
  placeholder?: string
  required?: boolean
  maxlength?: number | string
  dataName?: string
  class?: string
}

export interface AppSelectOption {
  label: string
  value: string
}

export interface AppBadgeProps {
  label: string
  colorClass?: string
}

export interface AppTagProps {
  label: string
}

export interface AppAccordionItem {
  id: string
  title: string
  body: string
}
