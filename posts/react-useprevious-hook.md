---
title: "React: Create a Custom usePrevious Hook to Track Previous State"
date: "2021-07-12"
tags: ["#tips&tricks"]
description: "React has no built-in support for tracking previous state. However, by creating a custom hook using useRef, we can achieve that."
---

React has no built-in support for tracking previous state. However, by creating a custom hook using useRef, we can achieve that. Let's look at an example and think about how it works.

## An Official Example

The official site of Reactjs shows [an example of creating and using a `usePrevious` custom hook](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state) to track previous state.

![An official example of usePrevious hook](/images/post-images/react-useprevious.png)

## How It Works

The trick is `useEffect` runs **after** component mounts. When a state updates, it triggers the component to rerender with the new state value (current state), but untile the component finishes mounting, the value obtained from `usePrevious`, which has a `useEffect` that is yet to run, does not update.

![graph describing how current state and previous state change](/images/post-images/react-useprevious-graph.png)