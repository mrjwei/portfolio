---
title: "React: Be Careful of Return Syntax"
date: "2020-12-12"
tags: ["#Frontend", "#React", "#Tips & Tricks"]
description: "React complains 'SomeComponent cannot be used as a JSX component' and your code looks perfect. If this happened to you, check the return expressions of your components."
---
React complains **"'SomeComponent' cannot be used as a JSX component"** and your code looks perfect. If this happened to you, check the **return expressions** of your components.

### An Example

![reproduction of a react syntax error](/images/post-images/react-error.png)

When you work with arrow function, you must make sure the code on the right hand of the arrow:

1. is wrapped with **curly brackets** and the `return` keyword is used to return the value. Or:
2. is wrapped with **parentheses** and the `return` keyword **omitted** when you don't perform any other operations except returning a value. Or:
3. is not wrapped with anything, just the value to return. Remember you **MUST** wrap a return value, which has curly brackets itself, with parentheses.

### Best Practice

It's recommended that you **ALWAYS** use `return` keyword where possible. This makes the code more readable and less likely to introduce errors (if not avoid them completely).

