const fontSize = 18

export default {
  builtinFonts: [
    {
      label: '衬线',
      value: 'serif',
      fonts:
        "Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
    },
    {
      label: '无衬线',
      value: 'sans-serif',
      fonts:
        "Roboto, Oxygen, Ubuntu, Cantarell, PingFangSC-light, PingFangTC-light, 'Open Sans', 'Helvetica Neue', sans-serif"
    }
  ],
  fonts: '',
  BASE: {
    'text-align': 'left',
    color: '#3f3f3f',
    'line-height': '1.5',
    'font-size': `${fontSize}px`
  },
  BASE_BLOCK: {
    margin: '20px 10px'
  },
  // block element
  block: {
    h2: {
      'font-size': '140%',
      'text-align': 'left',
      'font-weight': '800',
      margin: '40px 0'
    },
    h3: {
      'font-weight': '600',
      'font-size': '120%',
      margin: '20px 0'
    },
    p: {
      margin: `${fontSize}px`,
      'line-height': '1.5'
    },
    blockquote: {
      color: 'rgb(91, 91, 91)',
      padding: '1px 0 1px 10px',
      background: 'rgba(158, 158, 158, 0.1)',
      'border-left': '3px solid rgb(158,158,158)'
    },
    code: {
      'font-size': '80%',
      overflow: 'auto',
      color: '#333',
      background: 'rgb(247, 247, 247)',
      'border-radius': '2px',
      padding: '10px',
      'line-height': '1.3',
      border: '1px solid rgb(236,236,236)',
      margin: '20px 0'
    },
    image: {
      'border-radius': '4px',
      display: 'block',
      margin: '20px auto',
      width: '100%'
    },
    image_org: {
      'border-radius': '4px',
      display: 'block'
    },
    ol: {
      'margin-left': '0',
      'padding-left': '20px'
    },
    ul: {
      'margin-left': '0',
      'padding-left': '20px',
      'list-style': 'circle'
    },
    footnotes: {
      margin: '10px 10px',
      'font-size': '14px'
    }
  },
  inline: {
    // inline element
    listitem: {
      'text-indent': '-20px',
      display: 'block',
      margin: '10px 10px'
    },
    codespan: {
      'font-size': '90%',
      // 'font-family': FONT_FAMILY_MONO,
      color: '#ff3502',
      background: '#f8f5ec',
      padding: '3px 5px',
      'border-radius': '2px'
    },
    link: {
      color: '#ff3502'
    },
    strong: {
      color: '#ff3502'
    },
    table: {
      'border-collapse': 'collapse',
      margin: '20px 0'
    },
    thead: {
      background: 'rgba(0,0,0,0.05)'
    },
    td: {
      'font-size': '80%',
      border: '1px solid #dfdfdf',
      padding: '4px 8px'
    },
    footnote: {
      'font-size': '12px'
    }
  }
}
