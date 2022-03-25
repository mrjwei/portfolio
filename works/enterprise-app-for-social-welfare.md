---
title: "EA for the Social Welfare Domain: Full-stack Development"
tags: ["#app", "#wip"]
description: "Omnibiz is an Enterprise Application (EA) designed specifically for companies in the social welfare industry."
image: "/images/work-images/omnibiz.png"
date: "2022-03-14"
---

![image of omnibiz app design](/images/work-images/omnibiz.png)

Omnibiz is an [Enterprise Application (EA)](https://en.wikipedia.org/wiki/Enterprise_software) designed specifically for companies in the **social welfare industry**. We expect this app to play a significant role in **accelerating digital transformation** in the targeted companies and **trigger workplace revolution** across other industries in the future.

*Note: To comply with my non-disclosure agreement, I omitted and obfuscated confidential information and Omnibizis a fictitious name that is made for description purpose. All of the views and opinions in this post are my own and does not necessarily reflect those of Yokazu,Inc.*

## Table of Contents

- [Table of Contents](#table-of-contents)
- [My Roles](#my-roles)
- [Aging Population & Inadequate Workforce](#aging-population--inadequate-workforce)
- [The Pandemic: Crisis and Opportunity](#the-pandemic-crisis-and-opportunity)
- [The Available Options](#the-available-options)
  - [Case 1: Kintone](#case-1-kintone)
  - [Case 2: Knowbe](#case-2-knowbe)
- [The Goal: Building an App From The Ground up](#the-goal-building-an-app-from-the-ground-up)
- [The Challenges](#the-challenges)
  - [Defining the Scope](#defining-the-scope)
  - [Planning Release Phases](#planning-release-phases)
  - [Getting Everybody on the Same Page](#getting-everybody-on-the-same-page)
- [Work in Progress](#work-in-progress)

---

## My Roles

- **Project leader**. I initiated the project and led the research, design and development of the app from Sep 2020 to Jun 2021.
- **Project manager**. We outsourced the engineering tasks in Jun 2021 and I took the PM position and have led the coordinating team within Yokazu, Inc. and the collaborating engineering team since then.

---

## Aging Population & Inadequate Workforce

> ...one of the major reasons for the closing of social welfare facilities is **the universal shortage of workforce** in the industry.

According to [National Institute of Population and Social Security Research (2019)](https://www.ipss.go.jp/s-info/e/pssj/pssj2019.pdf), the proportion of Japanese population **aged 65 years and over exceeded 27%** in 2017, the highest in the world. And apart from an aging population, there were **over 6 million people in Japan certified for long-term care** in 2016 and many more receiving supports from other social security schemes.

A key scheme that supports the aged and the less-abled was the social welfare network. *National Institute of Population and Social Security Research* indicated that long-term care providers always suffer shortages of long-term care human resources as the demand for services increases. [東京商工リサーチ (2019)](https://www.ipss.go.jp/s-info/e/pssj/pssj2019.pdf) revealed that over 100 social welfare service providers went bankrupt or closed business in 2019 and one of the major reasons for this is **the universal shortage of workforce** in the industry.

![graphs of social welfare facilities going bankruptcy](/images/work-images/omnibiz-social-welfare-facilities-graph.png)
*東京商工リサーチ https://www.tsr-net.co.jp/news/analysis/20200130_02.html*

The implication is that **a fundamental revolution of the existing operation model of social welfare companies** is not just necessary but inevitable.

---

## The Pandemic: Crisis and Opportunity

> Facilities, including the one I was working for, struggled to adapt to the new normal, largely due to **the lack of technological resources** to support the shift.

Having worked in the industry for 3 years, I experienced the problems myself and had made great effort to alleviate the situation by developing multiple task automation programs for internal use.

But the paper-based management did not change and important documents were still stored in an unorganized manner on multiple storage services.

In 2020, **the covid-19 pandemic** hit many social welfare facilities hard and we were no exception. Service users now had to train at home and how could we possibly manage everything considering we did not even have an established workflow to do the managing?

![storyboard: 1](/images/work-images/omnibiz-social-welfare-facilities-storyboard-1.png)

It was crucial to realize that not just us, but many other facilities were in a similar quandary. The crisis actually presented us with an opportunity to reflect on the problems at an industry level and create solutions to solve them.

---

## The Available Options

So we wanted to develop a product that could help social welfare facilities become more productive. To avoid reinventing the wheel, I did extensive case studies on available tools and services that could potentially achieve the goal. Here are two of the studies.

### Case 1: Kintone

[Kintone](https://kintone.cybozu.co.jp/) is a cloud groupware that is designed particularly for small- to middle-scale companies to manage their daily operations. It's functionally powerful and can serve companies of any industy.

The features of kintone include:/

- Well-organized contents and one-click to add apps.

![image of kintone: 1](/images/work-images/omnibiz-social-welfare-facilities-case-study-kintone-1.png)

- A large number of pre-built apps that are ready to use.

![image of kintone: 2](/images/work-images/omnibiz-social-welfare-facilities-case-study-kintone-2.png)

- Advanced customization is supported via kintone API.

![image of kintone: 3](/images/work-images/omnibiz-social-welfare-facilities-case-study-kintone-3.png)

One of the downsides, however, is that as a general-purpose application, its targets are a bit *too general* and it struggles to meet specific needs in a certain industry. This left us with only one choice if we decided to go with kintone: extending it via its API.

However, we dropped the option for three reasons.

1. Workload of extending it would be heavy and potentially exceeding that of building one from scratch.
2. We had legal concerns about selling the extended product.
3. Selling an extended application with another brand would not help establishing our own brand.

### Case 2: Knowbe

[Knowbe](https://knowbe.jp/) is a management optimization solution provided by Recruit Co., Ltd. It is designed **exclusively for social welfare facilities**. In a sense, it is very close to what we envisioned for the new application because it had many of the core functionalities that we expected but that kintone does not provide, such as:

- Detailed records of users.

![image of knowbe: 1](/images/work-images/omnibiz-social-welfare-facilities-case-study-knowbe-1.png)

- Automatic document generation.

![image of knowbe: 2](/images/work-images/omnibiz-social-welfare-facilities-case-study-knowbe-2.png)

- User management.

![image of knowbe: 3](/images/work-images/omnibiz-social-welfare-facilities-case-study-knowbe-3.png)

However, the documents and data it handles are not exhaustive enough to make it truly useful for various types of social welfare facilities. It also has no support for managing facility- and employee-related data. And its zero customizability or extensibility means it's unlikely for us to sell an extended version.

---

## The Goal: Building an App From The Ground up

My case studies indicated that available tools all had significant weaknesses that could not be overcome cost-efficiently. So we decided to build an app from the ground up. It should be **an all-in-one solution and users should be able to customize it to fit their individual needs**.

![storyboard: 2](/images/work-images/omnibiz-social-welfare-facilities-storyboard-2.png)

---

## The Challenges

From the very beginning of the development stage, we've been faced with some major challenges.

### Defining the Scope

Creating an *all-in-one* solution does not mean without trade-off. We just cannot throw every functionality people want into the app. So our first challenge was to decide what should be included.

We managed to define a manageable scope by putting all of the features of the products I studied on paper, brainstorming other features, combining all of them to create a feature list and crossing all of the feature we decided not to include.

We defined the scope in a matter of just 2 days, understanding that it would change anyway as we progress. So leave it with a bit of flexibility and just move on.

### Planning Release Phases

After defining the scope, we had to define a timeline. As the number of features to be implemented would be large, we prioritized them to be released at two different phases.

Our criteria for prioritizing features:

- **User experience**. Is this one of the core features that every user would expect to be shipped?
- **Implementation**. Will the absence of this feature prevent other features from doing their jobs?

Two *yeses* got a feature into phase 1 and otherwise phase 2.

### Getting Everybody on the Same Page

The team initially consisted of a designer and developer (me), 3 staff members as supporters and our manager as PM. Then, in Jun 2021, 4 developers from a partner joined us and I assumed the PM position. All of us have different areas of expertise and different levels of knowledge of the social welfare industry. Above all, communicating the context of the project to the external developers turned out to be the biggest challenge.

In order to help everyone get onboard quickly,

- I separated materials that contained information relevant to the project from those that did not. This way, I reduced noise and important information got communicated more efficiently.
- Research have shown that visual medium facilitates more effective communication ([Dewan, P. (2015). Words Versus Pictures: Leveraging the Research on Visual Communication.](chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://journal.lib.uoguelph.ca/index.php/perj/article/download/3137/3473/0)). So I made full use of visual graphics at meetings and discussions. For example, I created and brought UI clean wireframes that communicated key features to the first meeting with the external developers. This helped them capture the big picture and they showed us the first prototype in just 4 weeks!

## Work in Progress

This app is currently on the protyping stage and I will update this post once there is new progress.