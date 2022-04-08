---
title: "An Introduction to CSS Counter"
date: "2020-09-30"
tags: ["#css", "#tutorial"]
description: "CSS counter generates automatically incrementing numbers for a group of HTML elements."
---
CSS counter generates **automatically incrementing numbers** for a group of HTML elements. This comes in handy when you have a list of recommended books, for example, and you want to add a number to each of them based on their order in the list(like 1, 2, 3...).

## Table of Contents

- [Table of Contents](#table-of-contents)
- [How to Get the Most Out of This Tutorial](#how-to-get-the-most-out-of-this-tutorial)
- [A Basic Example](#a-basic-example)
  - [Final Image](#final-image)
  - [HTML](#html)
  - [Styles](#styles)
- [Nested Counters](#nested-counters)
  - [Final Image](#final-image-1)
  - [HTML](#html-1)
  - [Styles](#styles-1)
- [Tips](#tips)

---

## How to Get the Most Out of This Tutorial

The complete code of this tutorial can be found at [the repo](https://github.com/mrjwei/css-counters).
There are 2 tags, `basic-example` and `advanced-example`, corresponding to the 2 examples respectively that we will see in the tutorial.

Feel free to skip between these tags and check to see if your code matches the final code of the specific example.

## A Basic Example

Let's get our hands dirty by building a simple CSS counter.

### Final Image

![an example of a CSS counter](/images/post-images/counter.png)

### HTML

```html
<body>
  <div class="container">
    <div></div>
    <div></div>
    <div></div>
  </div>
</body>
```

### Styles

```css
.container {
  width: 60%;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 50px;
  /* 1 */
  counter-reset: basic-example;
}
.container div {
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
  background-color: lightblue;
  color: coral;
  font-size: 50px;
  font-weight: bold;
  position: relative;
  /* 2 */
  counter-increment: basic-example;
}
.container div::before {
  content: "";
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50px;
  top: -50px;
  left: -50px;
}
.container div::after {
  /* 3 */
  content: "0"counter(basic-example);
  display: block;
  position: absolute;
  top: -35px;
  left: -35px;
}
```

Explanation of the code above:

1. Here we create a new counter by passing a counter name to `counter-reset` property.
2. We then pass the new counter name to `counter-increment` to increment counter value by 1 based on the order `.el` elements are stacked.
3. Finally we display the generated numbers on the `.el` elements.

---

## Nested Counters

You can even use multiple counters in a page. Check the example below.

### Final Image

![an example of nested CSS counters](/images/post-images/nested-counters.png)

### HTML

```html
<body>
  <div class="container">
    <ul class="recipes">
      <li>
        Veggie Burger
        <ul class="ingredients">
          <li>Hamburger buns</li>
          <li>Tomatoes</li>
          <li>Nuts</li>
          <li>Vegan sauces</li>
        </ul>
      </li>
      <li>
        Carbonara
        <ul class="ingredients">
          <li>Spaghetti</li>
          <li>Pancetta</li>
          <li>Cheese</li>
          <li>Eggs</li>
          <li>Black pepper</li>
        </ul>
      </li>
      <li>
        Peking Duck
        <ul class="ingredients">
          <li>Duck</li>
          <li>Green onions</li>
        </ul>
      </li>
    </ul>
  </div>
</body>
```

### Styles

```css
ul {
  list-style: none;
  line-height: 30px;
}
.container {
  width: 60%;
  max-width: 600px;
  padding-top: 50px;
  /* 1 */
  counter-reset: recipe ingredient;
}
.recipes li {
  /* 2 */
  counter-increment: recipe;
  position: relative;
  margin-left: 50px;
  margin-bottom: 20px;
}
.recipes li::after {
  /* 3 */
  content: counter(recipe);
  color: white;
  background-color: red;
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  text-align: center;
  position: absolute;
  top: 0;
  left: -50px;
}
.ingredients {
  margin-top: 10px;
}
.ingredients li {
  /* 4 */
  counter-increment: ingredient;
  position: relative;
  margin-left: 30px;
  margin-bottom: 10px;
}
.ingredients li::after {
  /* 5 */
  content: counter(ingredient);
  color: green;
  border: 2px solid green;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  text-align: center;
  display: block;
  position: absolute;
  top: 0;
  left: -50px;
}
```

Explanation of the code above:

1. Here we create 2 counters: `recipe` and `ingredient`.
2. We increment the `recipe` counter value by 1 as the traverse the recipe elements.
3. We display the `recipe` counter value on recipe elements as first level list.
4. We increment the `ingredient` counter value by 1 as the traverse the ingredient elements.
5. We display the `ingredient` counter value on ingredient elements as second level list.

---

## Tips

1. Reset counters on parents of the elements which will be traversed and display counter values. For example, in the nested counters example, we reset both counters on `.containers` element which is parent of both `.recipe` and `.ingredient`. If, for example, we defined `counter-reset: recipe` on `.recipe` element, the counter value would have been reset every time we hit a `.recipe` when traversing and the displayed counter values would have been three "1"s instead of the correct "1", "2" and "3".
2. You can combine counter values with other strings or numbers to create more sophisticated tags. For example, in the basic example, we combined counter values with "0" and displayed "01", "02" and "03".