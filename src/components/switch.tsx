import { ReactComponentElement } from "react"

import Case from "./case"
import Default from "./default"
import { StateValue } from "xstate"

type Props = {
  className: string
  value: StateValue
  children: Array<ReactComponentElement<any, { value?: string }>>
}

export default function Switch({ children, value }: Props) {
  const match = children.find(
    child =>
      child.props.value === value &&
      child.type.componentName === Case.componentName
  )

  if (!match) {
    const defaultCase = children.find(child => {
      return child.type.componentName === Default.componentName
    })

    return defaultCase || null
  }

  return match
}
