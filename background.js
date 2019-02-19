
console.log("background running...")


browser.runtime.onMessage.addListener((message) => {
  if (message.command === "insertCss") {
    browser.tabs.insertCSS(
      null,
      {
        "file": "/lib/diff2html.css"
      }
    )
  } else {
    console.log(message)
  }
  return {"asd": "bsd"}
});
