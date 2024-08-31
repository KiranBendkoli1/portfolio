import { twMerge } from 'tw-merge'

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export const mergeClass = (...classes: string[]): string => {
  return twMerge(classNames(...classes))
}
