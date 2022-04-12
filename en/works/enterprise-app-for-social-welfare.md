---
title: "EA for the Social Welfare Domain: Full-stack Development"
tags: ["#app", "#wip"]
description: "Omnibiz is an Enterprise Application (EA) designed specifically for companies in the social welfare industry."
image: "/images/work-images/omnibiz.png"
date: "2022-03-14"
---

![image of omnibiz app design](/images/work-images/omnibiz.png)

Omnibiz is an [Enterprise Application (EA)](https://en.wikipedia.org/wiki/Enterprise_software) designed specifically for companies in the **social welfare industry**. We want to accelerate digital transformation in the social welfare domain with this app.

*Note: To comply with my non-disclosure agreement, I omitted and obfuscated confidential information and Omnibizis a fictitious name that is made for description purpose. All of the views and opinions in this post are my own and does not necessarily reflect those of Yokazu,Inc.*

## Table of Contents

- [Table of Contents](#table-of-contents)
- [My Roles](#my-roles)
- [An Aging Population & Inadequate Workforce](#an-aging-population--inadequate-workforce)
- [The Pandemic: Crisis and Opportunity](#the-pandemic-crisis-and-opportunity)
  - [Where Users Were Training Now](#where-users-were-training-now)
  - [New Challenges](#new-challenges)
  - [How The Challeges Were Handled](#how-the-challeges-were-handled)
- [The Goal](#the-goal)
- [Case Studies](#case-studies)
  - [Case 1: Kintone](#case-1-kintone)
  - [Case 2: Knowbe](#case-2-knowbe)
- [Building an App From The Ground up](#building-an-app-from-the-ground-up)
- [The Challenges](#the-challenges)
  - [Defining the Scope](#defining-the-scope)
  - [Planning Release Phases](#planning-release-phases)
  - [Getting Everybody on the Same Page](#getting-everybody-on-the-same-page)
- [Design & Prototyping](#design--prototyping)

---

## My Roles

- **Designer & developer**. I initiated the project and led the research, design and development of the app from Sep 2020 to Jun 2021.
- **Project manager**. We outsourced the engineering tasks in Jun 2021 and I took the PM position and have led the coordinating team within Yokazu, Inc. and the collaborating engineering team since then.

---

## An Aging Population & Inadequate Workforce

> ...one of the major reasons for the closing of social welfare facilities is **the universal shortage of workforce** in the industry.

According to [National Institute of Population and Social Security Research (2019)](https://www.ipss.go.jp/s-info/e/pssj/pssj2019.pdf), the proportion of Japanese population **aged 65 years and over exceeded 27%** in 2017, the highest in the world. And apart from an aging population, there were **over 6 million people in Japan certified for long-term care** in 2016 and many more receiving supports from other social security schemes.

A key scheme that supports the aged and the less-abled was the social welfare network. *National Institute of Population and Social Security Research* indicated that long-term care providers always suffer shortages of long-term care human resources as the demand for services increases. [東京商工リサーチ (2019)](https://www.ipss.go.jp/s-info/e/pssj/pssj2019.pdf) revealed that over 100 social welfare service providers went bankrupt or closed business in 2019 and one of the major reasons for this is **the universal shortage of workforce** in the industry.

![graphs of social welfare facilities going bankruptcy](/images/work-images/omnibiz-social-welfare-facilities-graph.png)
*東京商工リサーチ <https://www.tsr-net.co.jp/news/analysis/20200130_02.html>*

It is expected to see even severe shortage of workers in the near future. This poses a major challenge that we must come up with ways to provide services of the same or higher quality with fewer service providers. One of the potential solutions would be workflow optimization by technologies.

---

## The Pandemic: Crisis and Opportunity

> Service users now had to train at home but we did not have an established approach to handling the new situation.

Having worked in the industry for 3 years, I experienced some of the common problems, such as inefficient workflow, which many facilities share. I made great effort to alleviate the situation by developing multiple task automation programs for our facility (see [Automating Google Sheets tasks](/works/sheets-master) and [Automating Kintone tasks](/works/kintone-master)).

But the paper-based management did not change and digitized documents were still stored in an unorganized manner on multiple storage services such as Google Drive and Dropbox.

In 2020, **the covid-19 pandemic** hit many social welfare facilities hard and we were no exception. Service users now had to train at home but we did not have an established approach to handling the new situation.

![storyboard: 1](/images/work-images/omnibiz-social-welfare-facilities-storyboard-1.png)
*Left: users used to train at our facility and we used to keep their records on paper before the pandemic*
*Right: users now had to train at home and paperwork had to be done differently amid the pandemic*

To understand the scale of the impact the pandemic had on social welfare facilities and specific problems they were facing, I conducted user research across 12 facilities.

The main pieces of information I wanted to collect included,

- Where users were training now (at home vs. at facility).
- New challenges due to the pandemic.
- How each facility was handling the new challenges.

### Where Users Were Training Now

Among the 12 facilities, 9 had their users switch to training-from-home completely while the other 3 mixed training-from-home with training-at-facility.

![training-from-home vs. training-at-facility](/images/work-images/omnibiz-social-welfare-facilities-research-1-en.png)

### New Challenges

I interviewed a total number of 28 facility employees from the 12 facilities about what new challenges the pandemic had posed to them. The result showed these main challenges,

- Tracking users' training hours and training progresses was hard when they were training at home.
- Traditional paperwork became difficult when users were not present at the facility.
- Managing users who trained from home required additional documents specified by regulatory authorities, which increased staff's workload.

![new challenges facing facilities](/images/work-images/omnibiz-social-welfare-facilities-research-2-en.png)

### How The Challeges Were Handled

Facilities improvised ways to handle the new challenges. These included,

- Making use of Google Hangout, which requires zero orientation and is free of charge, to connect users with staff.
- Having users report their training hours via Google Hangout or other chat tools.
- Having users visit the facility once per month to complete the paperwork at one time.
- Having users send their traning records via Google Hangout or other chat tools so that staff could transcribe the data on their behalf.

All of these approaches require high level of human interference, which places increased burden on staff and compromises their productivity. In order for a solution, there needs to be a tool that integrates all of these tasks and data for efficient management.

---

## The Goal

Base on what I found in my research, I set the goal of the project as creating an integrated groupware that helps with efficient user and data management and streamlined workflow (Note that we had not explored options, making use of existing apps or developing an original one, for the solution up until that point).

---

## Case Studies

To achieve the goal, we had two options: making use of existing apps and developing a new one from ground up. As making use of existing apps is often the more cost-efficient way, I did a couple of case studies on available apps to see if we could avoid having to develop a new one from scratch.

### Case 1: Kintone

[Kintone](https://kintone.cybozu.co.jp/) is a cloud groupware that is designed particularly for small- to middle-scale companies to manage their daily operations. It's functionally powerful and can serve companies of any industy.

The features of kintone include:

- Well-organized contents and one-click to add apps.

![image of kintone: 1](/images/work-images/omnibiz-social-welfare-facilities-case-study-kintone-1.png)

- A large number of pre-built apps that are ready to use.

![image of kintone: 2](/images/work-images/omnibiz-social-welfare-facilities-case-study-kintone-2.png)

- Advanced customization is supported via kintone API.

![image of kintone: 3](/images/work-images/omnibiz-social-welfare-facilities-case-study-kintone-3.png)

However, it comes with some downsides that led us to crossing it off.

- Being general-purpose compromises its ability to meet nuanced needs in a particular industry.
- Customizing it to adapt to those nuanced needs might be possible, but too costly and time-consuming to be justified as a viable approach.

### Case 2: Knowbe

[Knowbe](https://knowbe.jp/) is a management optimization solution provided by Recruit Co., Ltd. It is designed **exclusively for social welfare facilities**. In a sense, it is very close to what we envisioned for the new application because it had many of the core functionalities that we expected but that kintone does not provide, such as:

- Detailed records of users.

![image of knowbe: 1](/images/work-images/omnibiz-social-welfare-facilities-case-study-knowbe-1.png)

- Automatic document generation.

![image of knowbe: 2](/images/work-images/omnibiz-social-welfare-facilities-case-study-knowbe-2.png)

- User management.

![image of knowbe: 3](/images/work-images/omnibiz-social-welfare-facilities-case-study-knowbe-3.png)

Unfortunately, it has some serious problems that make it an unpromising candidate.

- It is not a fully integrated solution with some important documents not being handled. These documents would have to be processed manually or with extra tools, which is inconvinient and inefficient.
- It has no customizability or extensibility.

---

## Building an App From The Ground up

My case studies indicated that available tools all had significant weaknesses that could not be overcome cost-efficiently. So it left us with no option but to build an app from the ground up.

![storyboard: 2](/images/work-images/omnibiz-social-welfare-facilities-storyboard-2.png)

---

## The Challenges

We have been faced with multiple challenges since the start of the project and we have always tried to solve them as a team.

### Defining the Scope

One of the first questions we had to answer was "How far should we go?". Creating an *all-in-one* solution does not mean without trade-off. We just cannot throw every functionality people want into the app. So we had to decide what to include, what not to and what to do first.

We had a couple of brainstorming sessions and created a "wish list" where all features that team members could possibly come up with were included. We crossed off features that we would not implement and prioritized the rest.

An important point here was we did not spend too much time trying to work out all of the details, becasue we understood that things would change as development started and we wanted a bit of flexibility.

### Planning Release Phases

After defining the scope, we had to define a timeline. As the number of features to be implemented would be large, we prioritized them to be released at two different phases.

Our criteria for prioritizing features:

- **User experience**. Is this one of the core features that every user would expect to be shipped?
- **Implementation**. Will the absence of this feature prevent other features from doing their jobs?

Two *yeses* got a feature into phase 1 and otherwise phase 2.

### Getting Everybody on the Same Page

The team initially consisted of internal members only. Then, in Jun 2021, as we outsourced the development work, external developers joined us. All of us have very different areas of expertise and knowledge. As PM, who has experience in both software engineering and the social welfare industry, my job is to facilitate communication between members. My effort includes,

- I separated materials with information relevant to the project from those that was not. This way, I reduced noise and important information got communicated more efficiently.
- Research have shown that visual medium facilitates more effective communication ([Dewan, P. (2015). Words Versus Pictures: Leveraging the Research on Visual Communication.](chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://journal.lib.uoguelph.ca/index.php/perj/article/download/3137/3473/0)). In the description of the bulletin board feature, for example, I made use of the wireframes I created and the bulletin board UI of Kintone to highlight some key concepts that we wanted to incorporate into the new app. Similar discussion took 30 minutes to 1 hour before, but this time, we got the message through in just 10 minutes.

---

## Design & Prototyping

The application is still under development. Here are some images showing the wireframes, UI design and first prototype.

![wireframe sample 1](/images/work-images/omnibiz-wire-1.png)
![wireframe sample 2](/images/work-images/omnibiz-wire-2.png)
![ui sample 1](/images/work-images/omnibiz-ui-1.png)
![ui sample 2](/images/work-images/omnibiz-ui-2.png)
![first prototype sample](/images/work-images/omnibiz-mockup.gif)
