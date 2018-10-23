export default {
  toolBar: ['tab1', 'tab2'],
  formulas: {
    "fraction": { latex: "\\frac{}{}", tab: 'tab1', icon: '\\frac{□}{□}', style: {
        root: {
          'width': '33px'
        }
      }  },
    "sup": { latex: "\\^{}", tab: 'tab1', icon: '□\\^{□}' },
    "sub": { latex: "\\_{}^{}", tab: 'tab1', icon: '□\\_{□}^{□}' },
    "supsub": { latex: "\\_{}", tab: 'tab1', icon: '□\\_{□}' },
    "log": { latex: "\\log_{a}b", tab: 'tab1', icon: '\\log_{a}b', style: {
        root: {
          'font-size': '30%',
          'width': '38px'
        }
      } },
    "lg": { latex: "\\lg{}", tab: 'tab1', icon: '\\lg{□}'},
    "ln": { latex: "\\ln{}", tab: 'tab1', icon: '\\ln{□}'},
    "sqrt": { latex: "\\sqrt{}", tab: 'tab1', icon: '\\sqrt{□}' },
    "nsqrt": { latex: '\\sqrt[]{}', tab: 'tab1', icon: '\\sqrt[]{}'},

    "pi": { latex: "\\pi", tab: 'tab2' , icon: '\\pi' },
    "alpha": { latex: "\\alpha", tab: 'tab2' , icon: '\\alpha' },
    "beta": { latex: "\\beta", tab: 'tab2' , icon: '\\beta' },
    "gamma": { latex: "\\gamma", tab: 'tab2' , icon: '\\gamma' },
    "delta": { latex: "\\delta", tab: 'tab2' , icon: '\\delta' },
    "theta": { latex: "\\theta", tab: 'tab2' , icon: '\\theta' },
    "rho": { latex: "\\rho", tab: 'tab2' , icon: '\\rho' },
    "sigma": { latex: "\\sigma", tab: 'tab2' , icon: '\\sigma' },
    "varphi": { latex: "\\varphi", tab: 'tab2' , icon: '\\varphi' },
    "omega": { latex: "\\omega", tab: 'tab2' , icon: '\\omega' },
    "Delta": { latex: "\\Delta", tab: 'tab2' , icon: '\\Delta' },
    "epsilon": { latex: "\\epsilon", tab: 'tab2' , icon: '\\epsilon' },
    "Omega": { latex: "\\Omega", tab: 'tab2' , icon: '\\Omega' },
    "eta": { latex: "\\eta", tab: 'tab2' , icon: '\\eta' },
    "lambda": { latex: "\\lambda", tab: 'tab2' , icon: '\\lambda' },
    "mu": { latex: "\\mu", tab: 'tab2' , icon: '\\mu' },
    "phi": { latex: '\\phi', tab: 'tab2', icon: '\\phi' },
    "xi": { latex: '\\xi', tab: 'tab2', icon: '\\xi' },
    "psi": { latex: '\\xi', tab: 'tab2', icon: '\\psi' },
    "tau": { latex: '\\xi', tab: 'tab2', icon: '\\tau' },

    "e": { latex: "e", tab: 'tab1' , icon: 'e' },
    "infty": { latex: '\\infty{}', tab: 'tab1', icon: '\\infty{}' },
    "plus": { latex: '+', tab: 'tab1', icon: '+'},
    "des": { latex: '-', tab: 'tab1', icon: '-'},
    "times": { latex: '\\times', tab: 'tab1', icon: '\\times'},
    "div": { latex: '\\div', tab: 'tab1', icon: '\\div'},
    "pm": { latex: '\\pm', tab: 'tab1', icon: '\\pm' },
    "mp": { latex: '\\mp', tab: 'tab1', icon: '\\mp' },
    "percent": { latex: '\\%', tab: 'tab1', icon: '\\%'},
    "in": { latex: '\\in', tab: 'tab1', icon: '\\in' },
    "notin": { latex: '\\notin', tab: 'tab1', icon: '\\notin' },
    "ni": { latex: '\\ni', tab: 'tab1', icon: '\\ni' },
    "notni": { latex: '\\notni', tab: 'tab1', icon: '\\notni' },
    "subseteq": { latex: '\\subseteq', tab: 'tab1', icon: '\\subseteq' },
    "supseteq": { latex: '\\supseteq', tab: 'tab1', icon: '\\supseteq' },
    "supset": { latex: '\\supset', tab: 'tab1', icon: '\\supset'},
    "subset": { latex: '\\subset', tab: 'tab1', icon: '\\subset'},
    "notsubset": { latex: '\\not\\subset', tab: 'tab1', icon: '\\nsubset'},
    "subsetneqq": { latex: '\\subsetneqq', tab: 'tab1', icon: '\\subsetneqq'},
    "supsetneqq": { latex: '\\supsetneqq', tab: 'tab1', icon: '\\supsetneqq'},
    "neg": { latex: '\\neg', tab: 'tab1', icon: '\\neg'},
    "cap": { latex: '\\cap', tab: 'tab1', icon: '\\cap' },
    "cup": { latex: '\\cup', tab: 'tab1', icon: '\\cup' },
    "wedge": { latex: '\\wedge', tab: 'tab1', icon: '\\wedge'},
    "vee": { latex: '\\vee', tab: 'tab1', icon: '\\vee'},

    "eq": { latex: '=', tab: 'tab1', icon: '=' },
    "neq": { latex: '\\neq', tab: 'tab1', icon: '\\neq' },
    "le": { latex: '\\le', tab: 'tab1', icon: '\\le' },
    "ge": { latex: '\\ge', tab: 'tab1', icon: '\\ge' },
    "lt": { latex: '<', tab: 'tab1', icon: '<' },
    "gt": { latex: '>', tab: 'tab1', icon: '>' },
    "equiv": { latex: '\\equiv', tab: 'tab1', icon: '\\equiv'},
    "approx": { latex: '\\approx', tab: 'tab1', icon: '\\approx' },
    "cong": { latex: '\\cong', tab: 'tab1', icon: '\\cong' },
    "sim": { latex: '\\sim', tab: 'tab1', icon: '\\sim' },
    "dot": { latex: '\\dot{}', tab: 'tab1', icon: '\\dot{□}'},
    "degree": { latex: '\\^{\\circ}', tab: 'tab1', icon: '\\^{\\circ}'},
    "fenhao": { latex: ':', tab: 'tab1', icon: ':'},
    "emptyset": { latex: '\\emptyset', tab: 'tab1', icon: '\\emptyset'},
    "cu": { latex: 'C_U', tab: 'tab1', icon: 'C_U'},
    "c": { latex: 'C_{}', tab: 'tab1', icon: 'C_{□}'},
    "psubsup": { latex: 'P_{}^{}', tab: 'tab1', icon: 'P_{}^{}'},
    "asubsup": { latex: 'A_{}^{}', tab: 'tab1', icon: 'A_{}^{}'},
    "csubsup": { latex: 'C_{}^{}', tab: 'tab1', icon: 'C_{}^{}'},
    "overline": { latex: '\\overline{}', tab: 'tab1', icon: '\\overline{□}'},
    "cdots": { latex: '\\cdots', tab: 'tab1', icon: '\\cdots'},
    "because": { latex: '\\because', tab: 'tab1', icon: '\\because'},
    "therefore": { latex: '\\therefore', tab: 'tab1', icon: '\\therefore'},

    "Leftrightarrow": { latex: '\\Leftrightarrow', tab: 'tab1', icon: '\\Leftrightarrow'},
    "Rightarrow": { latex: '\\Rightarrow', tab: 'tab1', icon: '\\Rightarrow'},
    "Leftarrow": { latex: '\\Leftarrow', tab: 'tab1', icon: '\\Leftarrow'},
    "nRightarrow": { latex: '\\nRightarrow', tab: 'tab1', icon: '\\nRightarrow'},
    "nLeftarrow": { latex: '\\nLeftarrow', tab: 'tab1', icon: '\\nLeftarrow'},
    "nLeftrightarrow": { latex: '\\nLeftrightarrow', tab: 'tab1', icon: '\\nLeftrightarrow'},
    "leftrightharpoons": { latex: '\\leftrightharpoons', tab: 'tab1', icon: '\\leftrightharpoons'},
    "to": { latex: '\\to', tab: 'tab1', icon: '\\to'},
    "leftarrow": { latex: '\\leftarrow', tab: 'tab1', icon: '\\leftarrow'},
    "leftrightarrow": { latex: '\\leftrightarrow', tab: 'tab1', icon: '\\leftrightarrow'},

    "angle": { latex: '\\angle', tab: 'tab1', icon: '\\angle'},
    "perp": { latex: '\\perp', tab: 'tab1', icon: '\\perp'},
    "parallel": { latex: '\\parallel', tab: 'tab1', icon: '\\parallel'},
    "nparallel": { latex: '\\nparallel', tab: 'tab1', icon: '\\nparallel'},
    "triangle": { latex: '\\triangle', tab: 'tab1', icon: '\\triangle'},
    "square": { latex: '\\square', tab: 'tab1', icon: '\\square'},
    "bigodot": { latex: '\\bigodot', tab: 'tab1', icon: '\\bigodot'},
    "cdot": { latex: '\\cdot', tab: 'tab1', icon: '\\cdot'},
    "ast": { latex: '\\ast', tab: 'tab1', icon: '\\ast'},
    "otimes": { latex: '\\otimes', tab: 'tab1', icon: '\\otimes'},
    "oplus": { latex: '\\oplus', tab: 'tab1', icon: '\\oplus'},
    "forall": { latex: '\\forall', tab: 'tab1', icon: '\\forall'},
    "exists": { latex: '\\exists', tab: 'tab1', icon: '\\exists'},

    "hat": { latex: '\\hat{}', tab: 'tab1', icon: '\\hat{□}' },
    "vec": { latex: '\\vec{}', tab: 'tab1', icon: '\\vec{□}' },
    "leftrights": { latex: '\\left ( \\right )', tab: 'tab1', icon: '\\left ( □ \\right )'},
    "leftrightb": { latex: '\\left \\{ \\right \\}', tab: 'tab1', icon: '\\left \\{ □ \\right \\}'},
    "leftrightline": { latex: '\\left | \\right |', tab: 'tab1', icon: '\\left | □ \\right |'},
    "leftrightm": { latex: '\\left [ \\right ]', tab: 'tab1', icon: '\\left [ □ \\right ]'},
    "indefiniteintegral": { latex: '{}\\int_{}^{}', tab: 'tab1', icon: '{}\\int_{}^{}', style: {
        root: {
          'font-size': '30%'
        }
      } },
    "differential": { latex: "f^/(x)", tab: 'tab1', icon: "f^/(x)", style: {
        root: {
          'font-size': '30%'
        }
      }  },
    "sum": { latex: '\\sum_{}^{}', tab: 'tab1', icon: '\\sum_{□}^{□}', style: {
        root: {
          'font-size': '15%'
        }
      } },
    "prod": { latex: '\\prod_{}^{}', tab: 'tab1', icon: '\\prod_{□}^{□}', style: {
        root: {
          'font-size': '15%'
        }
      } },
    "huo": { latex: '或', tab: 'tab1', icon: '或'},
    "he": { latex: '和', tab: 'tab1', icon: '和'},
    "num1": { latex: '①', tab: 'tab1', icon: '①'},
    "num2": { latex: '②', tab: 'tab1', icon: '②'},
    "num3": { latex: '③', tab: 'tab1', icon: '③'},
    "num4": { latex: '④', tab: 'tab1', icon: '④'},
    "num5": { latex: '⑤', tab: 'tab1', icon: '⑤'},
    "num6": { latex: '⑥', tab: 'tab1', icon: '⑥'},
    "num7": { latex: '⑦', tab: 'tab1', icon: '⑦'},
    "t1": { latex: 'Ⅰ', tab: 'tab1', icon: 'I'},
    "t2": { latex: 'Ⅱ', tab: 'tab1', icon: 'Ⅱ'},
    "t3": { latex: 'Ⅲ', tab: 'tab1', icon: 'Ⅲ'},
    "t4": { latex: 'Ⅳ', tab: 'tab1', icon: 'Ⅳ'},
    "t5": { latex: 'Ⅴ', tab: 'tab1', icon: 'Ⅴ'},
    "t6": { latex: 'Ⅵ', tab: 'tab1', icon: 'Ⅵ'},
    "case": { latex: '\\begin{cases}\\end{cases}', tab: 'tab1', icon: '\\begin{cases}\\end{cases}'},
    "case1": { latex: '\\begin{cases}\\\\\\end{cases}', tab: 'tab1', icon: '\\begin{cases}\\\\\\end{cases}',style: {
        root: {
          'font-size': '15%'
        }
      } },
    "case2": { latex: '\\begin{cases}\\\\\\\\\\end{cases}', tab: 'tab1', icon: '\\begin{cases}\\\\\\\\\\end{cases}',style: {
        root: {
          'font-size': '10%'
        },
        matrix: {
          'margin-top': '-5px'
        }
      } },
    "case3": { latex: '\\begin{cases}\\\\\\\\\\\\\\end{cases}', tab: 'tab1', icon: '\\begin{cases}\\\\\\\\\\\\\\end{cases}',style: {
        root: {
          'font-size': '5%'
        },
        matrix: {
          'margin-top': '-12px'
        }
      } },
  }
}