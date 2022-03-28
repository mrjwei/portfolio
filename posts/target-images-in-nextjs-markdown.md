---
title: "Target Images in NextJS Markdown"
date: "2022-03-02"
tags: ["#nextjs", "#tips&tricks"]
description: "It can be challenging to target specific elements in markdown in NextJS projects."
---

It can be challenging to target specific elements in markdown in NextJS projects. In this post, however, I want to show you an easy way to target image elements in specific, so that we can style them using CSS.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [The Magic](#the-magic)
- [Style the Images](#style-the-images)

---

## The Magic

Without further ado, let's take a look at an example in which specific images are targeted.

```markdown
![my cool image: 1](/path/to/image1.png#float)
![my cool image: 2](/path/to/image2.png#float)
```

In this example, we **added `#float` to the end of path of each image**. This is the trick and it's as simple as that. Just note that,

1. `#` is required and the string that follows it can be arbitrary.
2. the `#something` must be put to the end of the image path.

---

## Style the Images

Most likely, the reason that you want to target images is that you want to style them differently than other images in the markdown file. Once you targeted the images, you can do the styling.

```CSS
img[src$="#float"] {
  with: 48%;
  float: left;
}
img[src$="#float"]:last-child {
  margin-left: 4%;
}
img[src$="#float"]:last-child::after {
  clear: both;
}
```

Here, I want the two images to float but you can add any styles to them where you see necessary.