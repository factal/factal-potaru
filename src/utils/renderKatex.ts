import renderMathInElement from "katex/dist/contrib/auto-render"

 const renderKatex = () => {
  renderMathInElement(document.body, {
    delimiters: [
      {left: "$$", right: "$$", display: true},
      {left: "$", right: "$", display: false}
    ],
    ignoredTags: [
      "script",
      "noscript",
      "style",
      "textarea",
      "pre",
      "code"
    ]
  })
}

export default renderKatex