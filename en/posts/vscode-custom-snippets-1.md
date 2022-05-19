---
title: "VSCode Custom Snippets: Powerful Yet Handy Tool For Boosted Productivity (Part1)"
date: "2022-05-18"
tags: ["#vscode", "#tips&tricks"]
description: "VSCode is powerful but would not be so powerful without its custom snippets feature."
---

VSCode is powerful but would not be so powerful without its custom snippets feature. I got to know it 2 years ago by watching an amazing introduction on [YouTube](https://www.youtube.com/watch?v=WPqXP_kLzpo&t=3528s) by [James Q Quick](https://www.jamesqquick.com/). After that, I tried and defined many snippets that made made me multiple times more productive.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [What Is a Snippet](#what-is-a-snippet)
- [Why You Need Snippets](#why-you-need-snippets)
- [How to Define a Custom Snippet?](#how-to-define-a-custom-snippet)
  - [Example 1: The Basics](#example-1-the-basics)
  - [Example 2: For Loop Snippet](#example-2-for-loop-snippet)
- [Takeaways](#takeaways)

---

## What Is a Snippet

According to [VSCode's official documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets),

> Code snippets are templates that make it easier to enter repeating code patterns, such as loops or conditional-statements.

Imagine writing a for loop in Javascript. One of the frequently used syntax is this,

```js
for (let i = 0; i < 10; i++) {
  // some code
}
```

Instead of writing this code every time by hand, we can leverage VSCode's custom snippets feature by defining one ourselves (details on how to do it are explained later).

With the snippet, we can just input `f` or `for` then press `Tab` key, the code above will be entered automatically for us.

## Why You Need Snippets

The above is just one tiny example. We can make snippets for virtually EVERY piece of code that is repeated frequently enough.

What's more, VSCode's snippets feature also allows you to set scopes for your snippets, to define variables, to transform those variable values before inserting and so on.

---

## How to Define a Custom Snippet?

Without further ado, let's look at a few examples so you get an idea on how to actually define your own custom snippets.

### Example 1: The Basics

Follow these steps to define a snippet for Javascript's `console.log` method.

1. Open VSCode
2. Press `Command + Shift + P`
3. Enter something like `snippet` and choose `Preferences: Configure User Snippets` from the dropdown
4. From the updated dropdown, find and select `javascript.json`
5. The file opens and you can find a `Print to console` example that is commented out
6. Uncomment the example or copy and paste it below the comment
7. Save and close the file
8. Create a Javascript file of arbitrary name
9. Enter `log` and a popup with that snippet should appear (in some cases, you might need to wait a second)
10. Press `Tab`. `console.log()` should be automatically entered and cursor should stops between the parenthesis.
11. Input something to log and then press `Tab`. Cursor should move to a new line.

Now you made a custom snippet for an extremly frequently used piece of Javascript code (If it does not work, check your snippets for any typos.)!

### Example 2: For Loop Snippet

At the end of `javascript.json` file, add the following code.

```json
"My For Loop": {
  "prefix": "for",
  "body": [
   "for(let ${1:index}; ${1:index} < ${2:value}; ${1:index}++) {",
   "\t$3",
   "}",
    "$0"
  ],
  "description": "This is my for loop snippet"
 }
```

`prefix` is the code that triggers the snippet. Here, we set it to `for` so that when we type `for`, the for loop snippet suggestion will pop up and we can select it. Note that you are not limited to provide just one prefix. Instead, you can provide **an array of prefixes**, any of which will trigger the snippet.

`body` is the code that we trigger and that is automatically entered. We can pass a single string or an array of strings to it, each of which represents a line of code. There are a couple of concepts here we want to understand.

- `$1`, `$2`, etc. represent the order of tab stops with `$1` being the first position of cursor when the snippet is inserted, `$2` being the seconde and so on. `$0` represents the *final* position.
- Tab stops can have *placeholders* which are displayed at cursor positions so that instead of seeing only a cursor blinking, user sees temporary variables or values at the positions.
- We can have duplicated tab stops which can be modified all at once. In the example above, we can edit all positions with `${1:index}` at once.

`description` shows a useful message informing the user what this snippet does. It is optional but is recommended.

Here is a live demo of how the for loop snippet we created is used.

![use for loop snippet](/images/post-images/for-loop-snippet.gif)

## Takeaways

Today, we learned,

- What snippets are in VSCode and why we need them.
- How to create simple snippets
- How to create more advanced snippets with multiple lines and placeholders.

In [Part2](/posts/vscode-custom-snippets-2), we will look at a more sophisticated example which leverages *placeholder-transform* feature.
