---
title: "An Introduction to CSS Counter"
date: "2020-09-30"
tags: ["#web", "#css", "#tutorial"]
description: "CSS counter generates automatically incrementing numbers for a group of HTML elements."
---
CSS counter generates **automatically incrementing numbers** for a group of HTML elements. This comes in handy when you have a list of recommended books, for example, and you want to add a number to each of them based on their order in the list(like 1, 2, 3...).

### A Basic Example

Let's get our hands dirty by building a simple CSS counter.

#### Final image

![an example of a CSS counter](/images/post-images/counter.png)

#### The code

![code of CSS counter example](/images/post-images/counter-code.png)

Code explanation:

1. Here we create a new counter by passing a counter name to `counter-reset` property.
2. We then pass the new counter name to `counter-increment` to increment counter value by 1 based on the order `.el` elements are stacked.
3. Finally we display the generated numbers on the `.el` elements.

### Nested Counters

You can even use multiple counters in a page. Check the example below.

#### Final image

![an example of nested CSS counters](/images/post-images/nested-counters.png)

#### HTML code

![HTML of CSS nested counters example](/images/post-images/nested-counters-styles.png)

#### Styles code

![styles of CSS nested counters example](/images/post-images/nested-counters-html.png)

Code explanation:

1. Here we create 2 counters: `recipe` and `ingredient`.
2. We increment the `recipe` counter value by 1 as the traverse the recipe elements.
3. We display the `recipe` counter value on recipe elements as first level list.
4. We increment the `ingredient` counter value by 1 as the traverse the ingredient elements.
5. We display the `ingredient` counter value on ingredient elements as second level list.

### Tips

1. Reset counters on parents of the elements which will be traversed and display counter values. For example, in the nested counters example, we reset both counters on `.containers` element which is parent of both `.recipe` and `.ingredient`. If, for example, we defined `counter-reset: recipe` on `.recipe` element, the counter value would have been reset every time we hit a `.recipe` when traversing and the displayed counter values would have been three "1"s instead of the correct "1", "2" and "3".
2. You can combine counter values with other strings or numbers to create more sophisticated tags. For example, in the basic example, we combined counter values with "0" and displayed "01", "02" and "03".

