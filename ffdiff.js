var pre = document.body.childNodes[0]
var rawDiff = pre.textContent
document.body.removeChild(pre)
var result = document.createElement("div")
result.textContent = "loading..."
document.body.appendChild(result)

var diffHtml = Diff2Html.getPrettyHtml(rawDiff,
  {inputFormat: 'diff', showFiles: true, outputFormat: 'line-by-line'}
);

result.innerHTML = diffHtml;
