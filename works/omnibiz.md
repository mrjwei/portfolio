---
title: "EA for the Social Welfare Domain: Full-stack Development"
tags: ["#app", "#wip"]
description: "Omnibiz is an Enterprise Application (EA) designed to reduce workload and streamline workflows for social welfare companies."
image: "/images/work-images/omnibiz.png"
date: "2022-02-25"
---

![image of omnibiz app design](/images/work-images/omnibiz.png)

Omnibiz is an [Enterprise Application (EA)](https://en.wikipedia.org/wiki/Enterprise_software) designed for social welfare companies to streamline workflows and improve production.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [My Roles](#my-roles)
- [Background](#background)
- [User Research](#user-research)
- [Case Studies](#case-studies)
  - [Case 1: Kintone](#case-1-kintone)
  - [Case 2: Knowbe](#case-2-knowbe)
- [Project Goal](#project-goal)
- [Work in Progress](#work-in-progress)

## My Roles

- Problem identification and goal setting.
- Scope definition and project planning.
- User research and concept generation.
- Design and coding.
- Project management.

___

## Background

According to [National Institute of Population and Social Security Research (2019)](https://www.ipss.go.jp/s-info/e/pssj/pssj2019.pdf), the proportion of population aged 65 years and over was 27.6% in 2017, the highest in the world. And apart from an aging population, there were over 6 million people in Japan certified for long-term care in 2016 and many more receiving supports from other social security schemes. *National Institute of Population and Social Security Research* also revealed that in 2016, the spend of social benefit exceeded 116 trillion JPY.

There is a universal shortage of workforce in social welfare sector facilities. When I was working in a social welfare facility, there were only 5 full-time employees who served over 20 service users a day and managed all of their documents manually. It was not only unproductive but could significantly affect workers' health and service quality as well.

---

## User Research

I conducted a survey with 36 employees from 7 welfare facilities. They the following questions.

1. To what extend are you happy with your workload (with 1 very unhappy and 5 very happy)?
2. For participants who answerd 1, 2, or 3, which parts of your work do you think take you more time and effort than needed?
3. If you could delegate part of you tasks, what do you want to delegate most?

Here are the results.

![image of survey summery 1](/images/work-images/q-1.png)
![image of survey summery 2](/images/work-images/q-2.png)
![image of survey summery 3](/images/work-images/q-3.png)

From the results, I noticed that managing documents was the major cause for unhappiness among participants and it should be addressed immediately.

With further observations and interviews, I found some specific challenges we were facing:

- There was a great number of documents and they had to be handled differently.
- Only staff members who dealt with all of those documents enough times knew how to managed them properly.
- Documents that needed to be submitted to regulatory authorities had to be checked with care and this added to the burden on staff.
- Documents were scattered instead of being stored in one place.
- Doing all of these manually could lead to long-term overwork and compromise workers' health and their productivity.

---

## Case Studies

In order to get a deeper insight on enterprise application design and development, I picked Kintone, a major enterprise application platform, and Knowbe, a management application designed exclusively for social welfare facilities.

### Case 1: Kintone

![image of a page of knowbe](/images/work-images/kintone.png)
**pros:**

- It has rich functionalities that allow the app to cover the needs for companies across a wide range of industries.
- It is highly customizable which provides flexibilities.
- UI is clean and mostly intuitive.

**cons:**

- It's not specialized in a particular industry like the social welfare industry where companies need more fine-grained management.
- It does not support querying third-parties timecard apps so it cannot read in users' and employees' work time automatically.
- It's not ideal for storing large amounts of documents.
- Comments cannot be editted.

### Case 2: Knowbe

![image of a page of knowbe](/images/work-images/knowbe.png)
**pros:**

- It's designed exclusively for the social welfare industry.
- It supports many document managing functionalities out of the box.
- It comes with a timecard app whose data is synced with that displayed on the parent app.
- UI is clean and mostly intuitive.

**cons:**

- It has very limited customizability, which makes it not very handy.
- Not ideal for storing large amounts of documents.
- It's expensive.

---

## Project Goal

Base on what I found in research, I felt it urgent to develop a web service that meets the following criteria.

1. It keeps all document data in one place and data is synced across the application.
2. It displays the most important documents in the most noticeable place and reminds users of task deadlines.
3. It can be integrated with third-party APIs such as timecard APIs.
4. Its functionalities and UI can be customized to fit specific needs.
5. It has clean and intuitive UI.

___

## Work in Progress

This app is currently on the protyping stage and here are some samples of the UI design.

![image 1 of Omnibiz app UI design](/images/work-images/omnibiz-ui-1.png)
![image 2 of Omnibiz app UI design](/images/work-images/omnibiz-ui-2.png)
![image 3 of Omnibiz app UI design](/images/work-images/omnibiz-ui-3.png)

And here is the initial prototype (the brand name is fake).

![image of the first prototype of the Omnibiz app](/images/work-images/omnibiz-mockup.gif)