  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const VARIANT = ['first' , 'second', 'ghost' ] as const
    type variant = (typeof VARIANT)[number]

    type badge = {
        lable:string;
        variant?: variant
    }
    
function Asconst({lable, variant = 'first'}:badge) {
  const style : Record<variant, React.CSSProperties> = {
    first:{
        color:'red'
    },
    second:{
        color:'blue'
    },
    ghost:{
        color:'green'
    }
  }
  return (
    <div>
       <span style={style[variant]}>{lable}</span>
    </div>
  )
}

export default Asconst
