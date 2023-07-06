import { createStitches } from '@stitches/react'

export const {
  config,
  styled, 
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      gray900:'#121214',
      gray800:'#202024',
      gray700:'#8D8D99',
      gray400:'#C4C4CC',
      gray100:'#E1E1E6', 

      green500:'#00875F',
      green300:'#00B37E'

    }
  }
})