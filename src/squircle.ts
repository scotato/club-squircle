export enum SquircleMode {
  Simple = 'simple',
  Relative = 'relative',
  Fixed = 'fixed',
}

export type SquircleImage = {
  filename: string
  src: string
  clip: boolean
  scale: number
}

export type SquircleStyle =  {
  fillColor: string
  strokeWidth: number
  strokeColor: string
}

export type SquircleShape =  {
  mode: SquircleMode
  c: number
  r1: number
  r2: number
  p1: number
  p2: number
  width: number
  height:number
}

export type SquircleProps =  {
  shape: SquircleShape
  style: SquircleStyle
  image: SquircleImage
}

export const SquircleShapeInitialState = { 
  mode: SquircleMode.Simple,
  c: 5, 
  r1: 0.059, 
  r2: 0.332, 
  p1: 8, 
  p2: 32,
  width: 1024,
  height: 1024
}

export const SquircleStyleInitialState = { 
  fillColor: 'hsl(189, 89%, 72%)',
  strokeWidth: 0,
  strokeColor: 'hsl(190, 100%, 42%)',
}

export const SquircleImageInitialState = { 
  filename: "",
  src: "",
  scale: 100,
  clip: true
}

export type InitialState = {
  shape: SquircleShape,
  style: SquircleStyle,
  image: SquircleImage
}

export const initialState = { 
  shape: SquircleShapeInitialState,
  style: SquircleStyleInitialState,
  image: SquircleImageInitialState
}

const RATIO = 0.1765

function radiusFromC (c?: number) {
  const byRatio = (val: number) => ({ r1: val * RATIO, r2: val })

  switch (Number(c)) {
    case 1:
      return byRatio(0.0375)
    case 2:
      return byRatio(0.0750)
    case 3:
      return byRatio(0.1500)
    case 4:
      return byRatio(0.2984)
    case 5:
      return byRatio(0.3320)
    case 6:
      return byRatio(0.3656)
    case 7:
      return byRatio(0.3992)
    case 8:
      return byRatio(0.4328)
    case 9:
      return byRatio(0.4664)
    case 10:
      return byRatio(0.500)
    default:
      return byRatio(0.3320)
  }
}

export function createSquirclePath(props: SquircleProps = initialState) {
  const { mode, c, r1, r2, p1, p2, width, height } = props.shape
  const isSimple = mode === SquircleMode.Simple
  const isFixed = mode === SquircleMode.Fixed
  const radius = Math.min(width, height)
  const normalized1 = isFixed ? p1 : r1 * radius
  const normalized2 = isFixed ? p2 : r2 * radius
  const radius1 = isSimple ? radiusFromC(c).r1 * radius : Math.min(normalized1, normalized2)
  const radius2 = isSimple ? radiusFromC(c).r2 * radius : normalized2

  return `
    M 0, ${radius2}
    C 0, ${radius1} ${radius1}, 0 ${radius2}, 0
    L ${width - radius2}, 0
    C ${width - radius1}, 0 ${width}, ${radius1} ${width}, ${radius2}
    L ${width}, ${height - radius2}
    C ${width}, ${height - radius1} ${width - radius1}, ${height} ${width - radius2}, ${height}
    L ${radius2}, ${height}
    C ${radius1}, ${height} 0, ${height - radius1} 0, ${height - radius2}
    L 0, ${radius2}`
}
