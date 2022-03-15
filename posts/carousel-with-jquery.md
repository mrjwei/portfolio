---
title: "Build a Carousel With jQuery in 10 minutes"
date: "2021-05-03"
tags: ["#frontend", "#tutorial"]
description: "In this tutorial, I want to show you that you can build a fully functional carousel in just 10 minutes."
---

You may have built carousels using [Slick](https://kenwheeler.github.io/slick/), [Bootstrap](https://getbootstrap.com/docs/5.1/components/carousel/) or other libraries. But sometimes you may want to build one from scratch, because you want full control over it or you just want to learn how to code one by yourself.

In this tutorial, we're going to build a carousel with jQuery and you will get an idea of the mechanism of a carousel and get more familiar with some useful jQuery methods along the way.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Create Files](#create-files)
- [HTML Boilerplate](#html-boilerplate)
- [Reference Style & JS Files](#reference-style--js-files)
  - [Link to Style File](#link-to-style-file)
  - [Reference JQuery](#reference-jquery)
  - [Reference Custom Javascript](#reference-custom-javascript)
- [Basic Styles](#basic-styles)
- [Make It Move](#make-it-move)
- [Fix a Tiny Bug](#fix-a-tiny-bug)
- [More Styles (optional)](#more-styles-optional)
- [Conclusion & Challenges](#conclusion--challenges)

___

## Prerequisites

I will be using MacOS. For Windows and Linux users, you will need to reference other resources to complete some of the steps.

This tutorial assumes the following.

- You have a computer connected to the Internet.
- You have basic understanding of HTML, CSS and Javascript.
- You are familiar with terminal.

That's all and let's get started!
___

## Create Files

Open your terminal, create a directory as the root directory of our project and ```cd``` into it

```
$ mkdir carousel
$ cd carousel
```

Then run the following command to create our files.

`$ touch index.html style.css script.js`

___

## HTML Boilerplate

Open the newly created `index.html` file in a code editor of your choice and paste the following code in it.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Carousel with jQuery</title>
</head>
<body>
  <div class="carousel-wrapper">
    <ul class="carousel">
      <li class="carousel-item">Jack</li>
      <li class="carousel-item">Richard</li>
      <li class="carousel-item">Paul</li>
    </ul>
    <div>
      <button id="prev">prev</button>
      <button id="next">next</button>
    </div>
  </div>
</body>
</html>
```

___

## Reference Style & JS Files

### Link to Style File

First, we need to link our `style.css` file. Add the following code to `index.html`, under `<title>`.

```html
<title>Slider with jQuery</title>
<!-- add this line -->
<link rel="stylesheet" href="./style.css">
```

### Reference JQuery

Because we will use jQuery, we need a way to reference it. You can either download it or reference a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) where jQuery code is hosted.

In this tutorial, I'm going to use the CDN option as it's the easier option. If you choose to download it, check out the **Downloading jQuery** section of [this] guide and once you've done the setup, jump to [Reference Custom Javascript](#reference-custom-javascript).

Add the following line above `<title>`.

```html
<head>
  ...
  <!-- add this line to reference jQuery CDN -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <title>Slider with jQuery</title>
</head>
```

### Reference Custom Javascript

Then add our custom `script.js` file to `<head>` below the jQuery script tags.

```html
<head>
  ...
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <!-- add this line -->
  <script src="./script.js"></script>
  ...
</head>
```

___

## Basic Styles

Open the `index.html` file in browser of your choice. Up until this point, our carousel should look like this.

![carousel in progress](/images/post-images/carousel-in-progress.png)

We need some styles to make it look better. Add the following code to your `style.css` file.

```css
.carousel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.carousel {
  list-style: none;
  width: 100px;
  height: 100px;
  padding: 0;
  position: relative;
}
.carousel-item {
  width: 100%;
  height: 100%;
  background: pink;
  text-align: center;
  position: absolute;
  left: 100%;
  top: 0;
}
```

Now open `index.html` in your browser again. It looks a little better now.

![carousel in progress 2](/images/post-images/carousel-in-progress-2.png)

___

## Make It Move

We've coded the tags. We've coded some styles. But we still don't get a real buzz out of what we have built, because it doesn't move!

This is where jQuery comes into play. Add the following code to our `script.js` file.

```javascript
$(function() {
  var $items = $(".carousel-item")
  var $prev = $("#prev")
  var $next = $("#next")
  var currentIndex = 0
  var nextIndex
  var $currentItem = $items.eq(currentIndex)

  // display the the first carousel item
  when window loads for the first time
  $currentItem.css("left", 0)

  // as we'll need to get prev index at multiple places,
  // it's a good practice to extract the operations into a function for reuse
  // same reason for defining the getNextIndex function
  // this function is called when user clicked the prev button
  function getPrevIndex(initialIndex, currentIndex, maxIndex) {
    if (currentIndex === initialIndex) {
      return maxIndex
    } else {
      return currentIndex - 1
    }
  }

  // called when user clicked the next button
  function getNextIndex(initialIndex, currentIndex, maxIndex) {
    if (currentIndex === maxIndex) {
      return initialIndex
    } else {
      return currentIndex + 1
    }
  }

  // the core function that handles carousel movement
  // depending on the value of the optional direction argument, the carousel moves forward or backward
  function moveCarousel(direction = "normal") {
    if (direction == "normal") {
      nextIndex = getNextIndex(0, currentIndex, $items.length - 1)
      $items.eq(currentIndex).animate({
        left: "-100%"
      }, 500, function() {
        $(this).css("left", "100%")
      })
      $items.eq(nextIndex).animate({
        left: 0
      }, 500)
    } else {
      nextIndex = getPrevIndex(0, currentIndex, $items.length - 1)
      $items.eq(nextIndex).css("left", "-100%")
      $items.eq(nextIndex).animate({
        left: 0
      }, 500)
      $items.eq(currentIndex).animate({
        left: "100%"
      }, 500)
    }

    currentIndex = nextIndex
  }

  // the carousel moves every 2 seconds automatically
  var interval = setInterval(function() {
    moveCarousel()
  }, 2000)

  // but when user clicked a button, prev or next, clear the interval and handle the click event by moving carousel forward or backward.
  // after the event is handled, get the interval back and the carousel moves automatically again
  $prev.click(function() {
    clearInterval(interval)
    moveCarousel(direction = "reverse")

    interval = setInterval(function() {
    moveCarousel()
  }, 2000)
  })

  $next.click(function() {
    clearInterval(interval)
    moveCarousel()

    interval = setInterval(function() {
    moveCarousel()
  }, 2000)
  })
})
```

Now, open `index.html` in brower again and the carousel should be moving automatically with a 2-second interval.

Try clicking prev and next button, it should make the carousel move instantly, forward or backward.

![carousel in progress 3](/images/post-images/carousel-in-progress-3.gif)

___

## Fix a Tiny Bug

But the movement of the carousel seems awkward with all items being visible when there should be only one being displayed at a time.

We can fix this easily by adding `overflow: hidden` to the `.carousel` element in `style.css`.

```css
.carousel {
  ...
  overflow: hidden;
}
```

Check the behaviour of the carousel again and everything should be working properly.

![carousel in progress 4](/images/post-images/carousel-in-progress-4.gif)

___

## More Styles (optional)

Finally, we'll add more styles to make the carousel look really cool and profesional. As we'll make many changes, it takes some time. So feel free to skip this section if you don't care stying too much at this time or you know how to do it yourself.

First, we need to make some changes to `index.html`. Replace the current `body` with the following.

```html
<body>
  <div class="carousel-wrapper">
    <ul class="carousel">
      <li class="carousel-item">
        <h2 class="carousel-title">Detailed User Research to Empathize</h2>
        <img class="carousel-img" src="./undraw_user_flow_re_bvfx.svg" alt="carousel image 1">
      </li>
      <li class="carousel-item">
        <h2 class="carousel-title">Iterative Design For the Best Idea</h2>
        <img class="carousel-img" src="./undraw_design_process_re_0dhf.svg" alt="carousel image 2">
      </li>
      <li class="carousel-item">
        <h2 class="carousel-title">Experienced Team You Can Trust</h2>
        <img class="carousel-img" src="./undraw_designer_life_re_6ywf.svg" alt="carousel image 3">
      </li>
      <li class="carousel-item">
        <h2 class="carousel-title">User Experience Is Our NO.1 Priority</h2>
        <img class="carousel-img" src="./undraw_experience_design_eq-3-j.svg" alt="carousel image 4">
      </li>
      <li class="carousel-item">
        <h2 class="carousel-title">Every Solution Follows the Best Design Practics</h2>
        <img class="carousel-img" src="./undraw_modern_design_v-3-wv.svg" alt="carousel image 5">
      </li>
    </ul>
    <ul class="indicator-wrapper">
      <!-- we will generate indicator buttons here with jQuery -->
    </ul>
    <button id="prev" class="arrow-btn" value="prev"></button>
    <button id="next" class="arrow-btn" value="next"></button>
  </div>
</body>
```

Because we want the number of indicators to be dynamic, here we avoid hardcoding them in `.indicator-wrapper`. Instead, we generate them with jQuery by referencing the number of carousel items.

Then, open `style.css` and replace everything with the following.

```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap');

ul {
  list-style: none;
  padding: 0;
}
button {
  border: none;
}
.carousel-wrapper {
  width: 800px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.carousel-title {
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  height: 20%;
  margin: 0 auto 5%;
  text-align: center;
}
.carousel-img {
  height: 75%;
  object-fit: contain;
}
.arrow-btn {
  display: block;
  width: 30px;
  height: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;
  transition: all 0.2s ease-in-out;
}
.arrow-btn:hover {
  background-color: #DFDFF5;
}
.arrow-btn#prev {
  left: 0;
}
.arrow-btn#next {
  right: 0;
}
.arrow-btn#prev::after, .arrow-btn#next::after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-top: 3px solid #6C63FF;
  border-left: 3px solid #6C63FF;
  position: absolute;
  top: 50%;
}
.arrow-btn#prev::after {
  left: 50%;
  transform: rotate(-45deg)  translate(calc(-50% / 1.414), calc(-50% / 1.414)) /* 1.414 comes from square root 2 */;
}
.arrow-btn#next::after {
  right: 50%;
  transform: rotate(135deg) translate(calc(-50% / 1.414), calc(-50% / 1.414));
}
.indicator-wrapper {
  display: flex;
}
.indicator:not(:last-child) {
  margin-right: 15px;
}
.indicator-btn {
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #DFDFF5;
  transition: all 0.2s ease-in-out;
}
.indicator-btn.active {
  background-color: #6C63FF;
}
```

We also have to update `script.js` for the newly added indicators. Start by adding a new variable for `.indicator-wrapper`.

```javascript
$(function() {
  ...
  var $currentItem = $items.eq(currentIndex)
  // add this line
  var $indicatorWrapper = $(".indicator-wrapper")
  ...
})
```

Then add the code to generate indicators right below.

```javascript
$(function() {
  ...
  var $indicatorWrapper = $(".indicator-wrapper")

  // add this block to generate indicators
  $items.each(function() {
    $indicatorWrapper.append("<li class='indicator'><button class='indicator-btn'></button></li>")
  })
  // add these 2 lines to make the first indicator active at first load
  var $indicators = $(".indicator-btn")
  $indicators.eq(currentIndex).addClass("active")
  ...
})
```

After indicators are generated, when need to add code to update the status of each indicator when carousel items move. At the bottom of `script.js`, just above the outmost closing `}`.

```javascript
$(function() {
  ...
  $indicators.each(function(index) {
    $(this).click(function() {
      clearInterval(interval)
      if (index > currentIndex) {
        moveCarousel()
      } else if (index < currentIndex) {
        moveCarousel(direction = "reverse")
      } else {
        return
      }
      interval = setInterval(function() {
        moveCarousel()
      }, 2000)
    })
  })
})
```

Finally, go to [undraw](https://undraw.co/), find a couple of cool illustrations you like and download it to your working directory to use as carousel images.

Your final carousel should look like this one.

![carousel](/images/post-images/carousel.gif)

___

## Conclusion & Challenges

Well done! You've just built a fully functioinal carousel with jQuery! You can now use it in your own projects. If you have any questions about this tutorial, feel free to contact me from [here](/contact).

If you want to challenge yourself and take what we've built further, you can try the following.

- Currently, when we click the prev or next button while carousel items are being animated, the current item and the next/previous one collides. This is not ideal in terms of user experience. Try to solve this.
- Currently, clicking the indicators does not trigger the carousel to move. Try and make it work as expected.

If you need help, ask Google. Good luck!
