---
title: "React: Be Careful of Return Syntax"
date: "2020-12-12"
tags: ["#frontend", "#tips&tricks"]
description: "React complains 'SomeComponent cannot be used as a JSX component' and your code looks perfect. If this happened to you, check the return expressions of your components."
---
React complains **"'SomeComponent' cannot be used as a JSX component"** and your code looks perfect. If this is the case, check the **return expressions** of your components.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [An Example](#an-example)
- [The Fix](#the-fix)
- [Best Practice](#best-practice)

---

## An Example

![reproduction of a react syntax error](/images/post-images/react-return-wrong.png)

This example shows the problem. It causes the error in question.

## The Fix

The point is, when you work with arrow function, you must make sure the code on the right hand of the arrow:

1. is wrapped with **curly brackets** and the `return` keyword is used to return the value. Take this example:

![react return with return keyword](/images/post-images/react-return-correct.png)

2. or is wrapped with **parentheses** and the `return` keyword **omitted** when you don't perform any other operations except returning a value like in this example:

![react return with parentheses](/images/post-images/react-return-correct-parentheses.png)

3. or is not wrapped with anything, just the value to return. This only applies to cases where **the return value does not split on multiple lines** (returned HTML of a component in React usually takes multiple lines), like in this example:

![react return without parentheses](/images/post-images/react-return-correct-no-parentheses.png)

Remember you **MUST** wrap a return value with parentheses which has curly brackets itself:

![react return with curly brackets and parentheses](/images/post-images/react-return-correct-curly-brackets.png)

## Best Practice

Personally, I **ALWAYS** use `return` keyword where possible, because this makes the code more readable and less error-prone (you do not have to think when to use `return` and when not to).