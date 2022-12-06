const _ = require('underscore')
const plugin = require('tailwindcss/plugin')

const colors = require('./tailwind/colors')
const percentages = require('./tailwind/percentages')
const rems100 = require('./tailwind/rems100')

module.exports = {
  theme: {
    screens: {
      'phone': { 'max': '600px' },
      'tablet-portrait': { 'raw': '(orientation: portrait) and (min-width: 601px) and (max-width: 900px)' },
      'tablet-landscape': { 'raw': '(orientation: landscape) and (min-width: 901px) and (max-width: 1200px)' },
      'desktop': { 'min': '1201px', 'max': '1800px' },
      'desktop-big': { 'min': '1801px', 'max': '1920px' },
      'desktop-wide': { 'min': '1920px' }, // same as 'wide'
      'y': { 'raw': '(orientation: portrait), (max-width: 900px)' },
      'x': { 'raw': '(orientation: landscape) and (min-width: 901px)' },
    },
    // fontFamily: { 'fontname': ['FontName', 'sans-serif'] },
    extend: {
      /* Typography */
      lineHeight: {
        double: '2',
        nine: '1.9',
        eight: '1.8',
        seven: '1.7',
        six: '1.6',
        five: '1.5',
        four: '1.4',
        three: '1.3',
        normal: '1.25',
        two: '1.2',
        oneplus: '1.15',
        one: '1.1',
        none: '1',
        uppercase: '0.9',
        half: '0.5',
      },
      letterSpacing: {
        20: '0.02em',
        30: '0.03em',
        50: '0.05em',
        75: '0.075em',
        90: '0.09em',
        150: '0.15em',
        200: '0.2em',
        '200r': '0.2rem',
      },
      fontSize: { ...rems100 },

      /* Sizing */
      width: { ...rems100 },
      height: { ...rems100 },

      minWidth: { ...rems100 },
      maxWidth: { ...rems100 },
      minHeight: { ...rems100 },
      maxHeight: { ...rems100 },

      /* Layout, Spacing */
      inset: { ...rems100 },
      gap: { ...rems100 },
      spacing: { ...rems100 },
      space: {},

      /* Generic, Miscellaneous */
      zIndex: { '100': 100, },
      colors: { ...colors },
      fill: { ...colors },
      stroke: { ...colors },
      strokeWidth: {},
      opacity: { ...percentages },
      backgroundOpacity: { ...percentages },
      boxShadow: {},
      borderRadius: { ...rems100 },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '0.4rem',
        '5': '0.5rem',
        '8': '0.8rem',
        '10': '1rem',
        '15': '1.5rem',
        '20': '2rem',
        '30': '3rem',
      },
      flex: {},

      /* Transforms / Transitions */
      rotate: {},
      translate: {},
      transitionProperty: {},
      transitionDuration: {
        '1000': '1000ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      }
    },
  },
  variants: {
    lineClamp: ['responsive', 'hover']
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
    plugin(function({ addUtilities }) {
      let styles = {}

      /* Drop Shadows */
      let blurs = [1, 2, 3, 4, 5],
          opacities = [20, 25, 30, 40, 50, 75, 100]
      _.each(blurs, (blur) => {
        _.each(opacities, (opacity) => {
          _.extend(styles, {
            [`.drop-shadow-${blur}-${opacity}`]: { filter: `drop-shadow(0 0 0.${blur}rem rgba(0, 0, 0, ${opacity / 100}))` }
          })
        })
      })

      addUtilities(styles)
    })
  ],
  // corePlugins: { preflight: false },
  content: ['./pages/**/*.{js,jsx,ts,tsx,mdx}', './app/**/*.{js,jsx,ts,tsx,mdx}'],
  // safelist: ['text-red-500', { pattern: /text-(red|blue|indigo)-(200|500|800)/ }], // example
}
