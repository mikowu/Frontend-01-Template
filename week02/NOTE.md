
### JS词法

#### InputElement
- whiteSpace
  - TAB：制表符
  - VT：纵向制表符
  - FF: FormFeed
  - SP: Space
  - NBSP: NO-BREAK SPACE（和 SP 的区别在于不会断开、不会合并）
  - ZWNBSP:ZERO WIDTH　NO-BREAK SPACE
  - USP
- LineTerminator："\r" "\n" 
- Comment
  - 单行 /**/
  - 多行 //
- Token：//词 有效的部分
  - Punctuator：+ = ()　//帮助程序形成结构
  - IdentifierName ：以英文字符（大小写都可以）、$、——　开头，后续可为数字
  - Keywords
  - Identifier
    - 变量名:不能与关键字重合
    - 属性名:可以与关键字重合
  - future reserved keywords：enum
  
#### 类型
- Number
- String
- Boolean:true false
- Null
- Undefined
- Object
- symbol


