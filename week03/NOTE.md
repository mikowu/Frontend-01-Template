
#### expression
- memberExpression
  - a.b
  - a[b]
  - foo\`string\`
  - super.b
  - super['b']
  - new.target:可用于判断函数是否是被new出来的
  - new Foo()

- New
  - new Foo

- Call
  - foo()
  - super()
  - foo()['b']、foo().b ：后面的member调用优先级会降下来
  - foo()\`abc\`
  
#### statement
- 简单语句
  - ExpressionStatement
  - EmptyStatement
  - DebuggerStatement
  - ThrowStatement
  - ContinueStatement
  - BreakStatement
  - ReturnStatement  
- 复合语句
  - BlockStatement
     大括号开头的是BlockStatement，不是对象
  ```
  {
  statementList//当有语句是非normal的，则会中断语句执行
  }
  ```
  - Iteration
    - while()
    - do while()
    - for()
    - for( in )
    - for( of )
  - try{}catch(e){}finally{}
  
- 声明
  - FunctionDeclaration
  ```
  funciton foo(){...}
  ```
  - GeneratorDeclaration 特殊的function
   ```
  funciton* foo(){
     yield 1;
     yield 2;
  }
  ```
  - AsyncFuncitonDeclaration
  - AsyncGeneratorDeclaration
  - VariableDeclaration
  - ClassDeclaration
  - LexicalDeclaration
