---
title: "Sheets Master: A Python Program That Automates Google Sheets Tasks"
tags: ["#python", "#productivity"]
description: "This Python program helped my colleagues save as many as 19 hours/month that had been spent on working with Google Sheets."
image: "/images/work-images/sheets-master-cover.png"
date: "2019-02-20"
---

![image of Sheets Master UI](/images/work-images/sheets-master.png)

Social welfare facilities normally have huge amounts of documents to manage and it is usually done by hand. This is not just unproductive but is unsustainable in terms of employee health. This was the reason why I developed automation programs to improve the situation.

Sheets Master is a Python program that helped my colleagues save as many as **19 hours/month** that had been spent on working with Google Sheets. It has a simple UI and doing those tasks means just a couple of clicks.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [My Roles](#my-roles)
- [Context](#context)
- [User Research](#user-research)
  - [Observations](#observations)
  - [Interviews](#interviews)
- [Project Goal](#project-goal)
- [Planning & Design](#planning--design)
- [Final Work](#final-work)
  - [Before](#before)
  - [After](#after)
  - [Productivity Boost](#productivity-boost)

---

## My Roles

- User Research & Problem identification.
- Planning & Design.
- Coding.

___

## Context

Yokazu.inc. is a start-up specialized in providing high-quality social welfare services to its service users. It started with just 10 employees but in 2019 alone, it doubled its number of facilities and employees and has been growing fast ever since.
As the number of users who choose our services has soared over the past 3 years, facilities started to face a series of challenges including **short-handed staff and swelling documents to manage**.

When I joined one of their facilities in 2018, I found inefficiency prevailed over the workplace and it heavily compromised our ability to improve better service to our users. To make a change to the situation, I proposed a workflow-optimization plan to the manager and got a very positive response.

This project, Sheet Master, is part of the plan. Back then, many documents were managed with Google Sheets manually and these tasks took employees' a lot of time that otherwise could have been spent to make our service users happier. So this project kicked off in order to streamline those tasks.

---

## User Research

### Observations

I started by observing my colleagues doing Google Sheets tasks to discover the pain points.

Some of the pain points I noticed were:

- Time taken to locate a file in the directory system **grew almost proportionly as directory level increased**, with an average of about 12 seconds being taken to find a file 3 levels down in the directory.

![graph showing time consumed over directory level](/images/work-images/sheet-master-dir-navigation-graph.jpg)

- One of the reasons that navigating the directories was time-consuming seemed to be that many operations were repeated. Another reason seemed to be the repeated frustration that when you got into a directory, only to find you got into a wrong directory.

![navigating directories involves repetitive operations and is time-consuming](/images/work-images/sheets-master-navigating-dirs.png)
![You can get into a wrong directory where the file you are looking for does not exist](/images/work-images/sheets-master-wrong-dir.png)

- Forgetting to switch to the right language was common and it seemed frustrating.

![forgetting to switch language before inputting](/images/work-images/sheets-master-input-pain.png)

### Interviews

As the need for a solution was desperate and I did not have enough resource to conduct large-scale research, I did a couple of casual interviews following the observations to frame the problem and define a scope for the project.

Among all of the tasks performed with Google Sheets, creating and updatiing users' daily documents were the most time-consuming for my subjects. And with further research, I found these tasks fell into the ones that could be automated relatively easily.

---

## Project Goal

Based on what I found, I decided to automate the tasks involving creating and updating users' daily records. I would build a program with an intuitive user interface so that staff members would have no problem using it.

The technologies and tools I would use included:

- **Python & Google Sheets API**. I was most familiar with Python then and Google Sheets have a well-documented API for working with Python. This would help me achieve my goal.
- **Tkinter**. Instead of learning a new GUI library with which *beautiful interfaces* could be built, I chose to use Python's Tkinter package. With Tkinter, you could not build exciting user interfaces but you could simple and very useful ones. This was what I was looking for because usability was priotized over aesthetics for this project.
- **Pen & paper for sketching ideas**. Sketching is the quickest way to make low-fidelity prototypes and get feedback from potential users. As I had limited timeframe and resources, I thought this method was the most effective for the project.

---

## Planning & Design

I explored extensively about user flow, some potential trade-offs to make, the UI and Google Sheets API.

![image of Sheets Master sketch 2](/images/work-images/sheets-master-sketch2.jpg)
![image of Sheets Master sketch 3](/images/work-images/sheets-master-sketch3.jpg)
![image of Sheets Master sketch 1](/images/work-images/sheets-master-sketch1.jpg)

___

## Final Work

![image of Sheets Master UI](/images/work-images/sheets-master.png)

### Before

![workflow without sheets master](/images/work-images/sheets-master-workflow-before.png)

### After

![workflow with sheets master](/images/work-images/sheets-master-workflow-after.png)

### Productivity Boost

![work hours saved by sheets master](/images/work-images/sheets-master-time-saved.jpeg)
