---
title: "Tame the event.Target and event.currentTarget Beasts"
date: "2022-03-10"
tags: ["#javascript", "#tips&tricks"]
description: "The Event interface represents an event which takes place in the DOM."
---

The Event interface represents an event which takes place in the DOM ([mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/Event)). It has a `target` and a `currentTarget` read-ony property. It can be confusing what the difference is between the two so in this post, let's take a closer look at both and find out the difference.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [What Are Target & CurrentTarget](#what-are-target--currenttarget)
  - [event.target](#eventtarget)
  - [event.currentTarget](#eventcurrenttarget)
- [An event.target Example](#an-eventtarget-example)
- [An event.currentTarget Example](#an-eventcurrenttarget-example)

---

## What Are Target & CurrentTarget

### event.target

It refers to **the element that triggered the event**.

### event.currentTarget

It refers to **the element that a handler for the event is attached to (and not necessarily the one which triggered the event)**.

---

## An event.target Example

Examples are the easiest way to understand an abstract concept. Here is a simple html snippet that I will use across the post.

```html
<body>
  <form>FORM
    <div>DIV
      <p>P</p>
    </div>
  </form>
  <script>
    const form = document.querySelector("form")
    const div = document.querySelector("div")
    const p = document.querySelector("p")

    form.onclick = function(event) {
      // do something
    }
    div.onclick = function(event) {
      // do something
    }
    p.onclick = function(event) {
      // do something
    }
  </script>
</body>
```

I made the code above look like this (I left out the CSS code).

![rendered image of example code](/images/post-images/understanding-target-and-currenttarget-rendered-image.PNG)

Now, I add `target` logs to the onclick handlers to see what happens when clicking an element.

```javascript
form.onclick = function(event) {
  console.log("form: ", event.target)
}
div.onclick = function(event) {
  console.log("div: ", event.target)
}
p.onclick = function(event) {
  console.log("p: ", event.target)
}
```

Clicking the `p` element logs the following.

![result of logging when content of console.log is set to event.target and p is clicked](/images/post-images/understanding-target-and-currenttarget-log-1.PNG)

When you try to figure out why this result is logged, take these steps.

1. Decide the `target` of the clicking event.
2. Realize that events bubble.

The `target` of the clicking event here is the `p` element (the element that triggered the event), which explains the `<p>P</p>`s. And events, by default, bubble. Bubbling means upper elements (`div` and `form` here), which have a click event handler, will also invoke their handler functions. This explains why there are three lines of logs.

Likewise, clicking the `div` element logs the following.

![result of logging when content of console.log is set to event.target and div is clicked](/images/post-images/understanding-target-and-currenttarget-log-2.PNG)

And clicking the `form` element produces this log.

![result of logging when content of console.log is set to event.target and form is clicked](/images/post-images/understanding-target-and-currenttarget-log-3.PNG)

If you take the steps to think of the `target` and event bubbling, you will not have any problem understading the log results above.

---

## An event.currentTarget Example

Now, I change `event.target` to `event.currentTarget` in the logs.

```javascript
form.onclick = function(event) {
  console.log("form: ", event.currentTarget)
}
div.onclick = function(event) {
  console.log("div: ", event.currentTarget)
}
p.onclick = function(event) {
  console.log("p: ", event.currentTarget)
}
```

And clicking `p`, `div` and `form` elements produce the following results.

![result of logging when content of console.log is set to event.currentTarget and p is clicked](/images/post-images/understanding-target-and-currenttarget-log-4.PNG)
*Clicking p*

![result of logging when content of console.log is set to event.currentTarget and div is clicked](/images/post-images/understanding-target-and-currenttarget-log-5.PNG)
*Clicking div*

![result of logging when content of console.log is set to event.currentTarget and form is clicked](/images/post-images/understanding-target-and-currenttarget-log-6.PNG)
*Clicking form*

Every element from the one, which triggered the event, and above qualifies as an `event.currentTarget` if it has a handler that can handle the event. Here, each of the three elements has *a proper handler* attached to it, so when click event fires on an element, every element from the one and above invokes its own handler and logs itself as `event.currentTarget`.

To get a deeper understanding of what *a proper handler* means, I change the name of the handler attached to `p` from `onclick` to `ondrop`.

```javascript
...
p.ondrop = function(event) {
  console.log("p: ", event.currentTarget)
}
```

Now, clicking `p` again and it produces the following log.

![result of logging when handler of p is ondrop and p is clicked](/images/post-images/understanding-target-and-currenttarget-log-5.PNG)
*Clicking p*

The reason for this is that the type of handler is different than what is expected. In other words, `ondrop` does NOT handle click event. This is why only handlers attached to `div` and `form` were invoked.