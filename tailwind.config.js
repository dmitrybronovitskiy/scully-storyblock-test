const plugin = require('tailwindcss/plugin');

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
    }
  })
});

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
});

const transformStyle = plugin(function ({ addUtilities }) {
  addUtilities({
    '.transform-preserve-3d': {
      'transform-style': 'preserve-3d',
    },
  })
});

const perspectiveStyle = plugin(function ({ addUtilities }) {
  addUtilities({
    '.perspective-1000': {
      perspective: '1000px',
    },
  })
});

module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#f97316'
        },
        slate: {
          50: '#f8fafc',
        },
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      boxShadow: {
        'base': '0 0 20px 0 rgb(0, 0, 0, 0.3)',
        'circle-medium': '0 9px 30px -6px rgb(0, 0, 0, 0.3)',
        'box-medium': '0 5px 25px 0 rgb(0, 0, 0, 0.3)'
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },
      spacing: {
        '128': '32rem',
        '500px': '500px',
        '600px': '600px',
        '768px': '768px',
        '1000px': '1000px',
        '1280px': '1280px',
        '7xl': '80rem',
      },
      minWidth: {
        '16': '4rem'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    backfaceVisibility,
    rotateY,
    transformStyle,
    perspectiveStyle
  ],
};
