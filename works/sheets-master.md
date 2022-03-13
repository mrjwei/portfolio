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

- [My Roles](#my-roles)
- [User Research](#user-research)
  - [Observation](#observation)
  - [Interview](#interview)
- [Project Goal](#project-goal)
- [Planning & Design](#planning--design)
- [Final Work](#final-work)
  - [Before](#before)
  - [After](#after)
  - [Productivity Boost](#productivity-boost)

## My Roles

- User Research & Problem identification.
- Planning & Design.
- Coding.

___

## User Research

### Observation

In order to get first-hand information about the problem, I observed my colleagues doing Google Sheets tasks to discover the pain points.

Some of the pain points I noticed were:

- Time taken to locate a file in the directory system grew almost proportionly as directory level increased, with an average of about 12 seconds being taken to find a file 3 levels down in the directory.

![graph showing time consumed over directory level](/images/work-images/sheet-master-dir-navigation-graph.jpg)

- The reason that navigating the directories was time-consuming seemed to be that it involved many repetitive operations and when you got into a directory, only to find out the file you wanted was not there, it took even loner time.

![navigating directories involves repetitive operations and is time-consuming](/images/work-images/sheets-master-navigating-dirs.png)

- Forgetting to switch to the right language was common and it really really frustrated my subjects.

![forgetting to switch language before inputting](/images/work-images/sheets-master-input-pain.png)


### Interview

I found in the observation that the task involving creating and updating users' daily records took the longest time and seemed to have the most repetitive operations that could be automated. To confirm it, I did 5 casual interviews with my observation subjects, asking them which tasks they thought were the most time-consuming and boring and all mentioned the task I noticed.

---

## Project Goal

Based on the results from my research, I decided to automate the task involving creating and updating users' daily records with Google Drive and Google Sheets.

---

## Planning & Design

I explored extensively about user flow, which functionalities to include and which to exclude, the UI and how Google Drive and Sheets APIs work.

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
