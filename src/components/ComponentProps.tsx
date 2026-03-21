import type { ComponentProps, CSSProperties } from "react"
type ButtonBaseProps =  ComponentProps<'button'>
type ButtonProps = ButtonBaseProps & {variant? : "primary" | 'secondary'}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ComponentProps({variant = 'primary', style, ...rest}:ButtonProps) {
    const base : CSSProperties = {
        padding : `10px`
    }
  return (
    <div >
      <button style={{...base, ...style}}{...rest}>click</button>
    </div>
  )
}

export default ComponentProps
