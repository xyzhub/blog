// Direction
export const DIRECTION = [
  'vertical',
  'horizontal',
  'reverseVertical',
  'reverseHorizontal',
] as const
export type SpaceDirection = (typeof DIRECTION)[number]

// Align
const _align = ['start', 'end', 'center'] as const
export const ALIGN = [..._align, 'baseline'] as const
export type SpaceAlign = (typeof ALIGN)[number]

// Justify
export const JUSTIFY = [..._align, 'spaceAround', 'spaceBetween'] as const
export type Justify = (typeof JUSTIFY)[number]

// SpaceSize
export const SPACE_SIZE = ['ss', 's', 'm', 'l', 'xl'] as const
export type SpaceSize = (typeof SPACE_SIZE)[number]

// SpaceProps
export interface SpaceProps {
  inline?: boolean
  dir?: SpaceDirection
  align?: SpaceAlign
  justify?: Justify
  wrap?: boolean | 'reverse'
  overflow?: SpaceOverflow | SpaceOverflow[]
  /**
   * @description 间距
   * @default m
   * @type Size | number
   */
  size?: SpaceSize | number | string | (number | string)[]
}
