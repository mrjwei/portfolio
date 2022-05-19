---
title: "VSCode Custom Snippets: Powerful Yet Handy Tool For Boosted Productivity (Part2)"
date: "2022-04-05"
tags: ["#vscode", "#tips&tricks"]
description: "Today, we will learn about *placeholder transform* and create a more sophisticated snippet using it."
---

In [Part1](vscode-custom-snippets-1.md) of this series, we learned,

- What snippets are in VSCode and why we need them.
- How to create simple snippets
- How to create more advanced snippets with multiple lines and placeholders.

Today, we will learn about *placeholder transform* and create a more sophisticated snippet using it.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Placeholder Transform](#placeholder-transform)
- [Variable Transform](#variable-transform)
- [Takeaways](#takeaways)

---

## Placeholder Transform

Sometimes when we replaced a placeholder with the target value, we want to make changes to it before it gets inserted to our code. For example, in Reactjs, we use the `useState` hook like this,

```js
const [name, setName] = useState("");
```

The state variable (`name`) and the noun part of its updater function (`Name`) are normally the same by convention except the latter is **capitalized**.

If we create a snippet as we've done before, we get `setname` rather than the desired `setName`.

```json
"My useState": {
  "prefix": "us",
  "body": "const [${1:state}, set${1:state}] = useState($0)",
  "description": "My useState snippet"
},
```

![not capitalized](/images/post-images/not-capitalized.gif#hasCaption)
*`name` in `setname` is not capitalized*

This is where *placeholder transform* comes in handy. In the example above, if we define the snippet like this instead, we can get the desired result.

```json
"My useState": {
  "prefix": "us",
  "body": "const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState($0)",
  "description": "My useState snippet"
}
```

But what is going on here? It can be hard to get your head around at first, but in fact, the code is pretty straightforward. Let's focus on `body`.

- First, we define a tab stop `$1` with a placeholder value `state`.
- We want `$1` to be used in the `set` part as well, only that the value of `$1` should be capitalized (here the value is string `state`).
- So we perform a transformation by matching the whole value of `$1` (string `state`) using a regular expression `(.*)`.
- Then we reference the first capture group (here is the whole matched string `state`) and capitalize it with `${1:/capitalize}`.

![capitalized](/images/post-images/capitalized.gif#hasCaption)
*Now we get the capitalized `setName`*

## Variable Transform

VScode snippets also support *variable transform*. It works just like *placeholder transform* and shares the same syntax as *placeholder transform* with the only difference being the target to be transformed is a variable instead of a placeholder.

The variables can be used, however, are pre-defined so the use cases of variables are somewhat limited but you may find yourself use it at certain point in your development.

For more information about variable transform, see [VSCode's official documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variable-transforms).

## Takeaways

Today, we learned,

- When we will want to transform a placeholder
- How to transform a placeholder
- Variable transform is very similar to placeholder transform with limited pre-defined variables that can be used.
