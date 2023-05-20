var r = document.querySelector(':root').style
var width = document.body.getBoundingClientRect().width

if (width < 1920) {
  r.setProperty('--curve-offset', (1920 - width) / 19.2 + '%')
}

console.log(r)
