# 每周总结可以写在这里
#### Range Api
```
var range=new Range()
range.setStart(element,9)
range.setEnd(element,4)
var range=document.getSelection().getRangeAt(0)

var fragment=range.extractContents()
range.insertNode(document.createTextNode("aaa"))
```

- range.setStartBefore
- range.setEndBefore
- range.setStartAfter
- range.setEndAfter
- range.selectNode
- range.selectNodeContens

#### CSSOM
##### document.styleSheets
```
document.styleSheets[0].cssRules
document.styleSheets[0].insertRule("p{color:pink;}",0})
document.styleSheets[0].removeRule(0)
```

##### getComputedStyle
```
window.getComputedStyle(elt,pseudoElt)
```