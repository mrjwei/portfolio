---
title: "Moneyforward Cloud For HR Management: Frontend Development"
tags: ["#app"]
description: "Development of the Moneyforward Cloud For HR Management app."
image: "/images/work-images/moneyforward-cloud-hr.png"
date: "2021-12-03"
---

![image of one of moneyforward cloud products, the hr management app](/images/work-images/moneyforward-cloud-hr.png)

Money Forward,Inc. is one of the dominant player in the cloud accounting market in Japan. I joined their HR Management product team in July 2021 and worked on the development of the [app](https://biz.moneyforward.com/employee/).

## Table of Contents

- [Table of Contents](#table-of-contents)
- [My Responsibilities](#my-responsibilities)
- [Major Projects I Contributed to](#major-projects-i-contributed-to)
  - [Data Management Extension](#data-management-extension)
    - [Data Management Extension: Context](#data-management-extension-context)
    - [Data Management Extension: What I Did](#data-management-extension-what-i-did)
  - [Development of Custom Categories](#development-of-custom-categories)
    - [Development of Custom Categories: Context](#development-of-custom-categories-context)
    - [Development of Custom Categories: Challenges](#development-of-custom-categories-challenges)
    - [Development of Custom Categories: What I Did](#development-of-custom-categories-what-i-did)
  - [Navigation Optimization](#navigation-optimization)
    - [Navigation Optimization: Context](#navigation-optimization-context)
    - [Navigation Optimization: Challenges](#navigation-optimization-challenges)
    - [Navigation Optimization: What I Did](#navigation-optimization-what-i-did)
- [What I Learned Along the Journey](#what-i-learned-along-the-journey)

___

## My Responsibilities

1. Frontend development of the functionality that supports custom categories.
2. UI optimization of navigations, alerts, forms and more.
3. Design and implementing unit tests, functional tests and E2E tests.

___

## Major Projects I Contributed to

### Data Management Extension

#### Data Management Extension: Context

Information about tax payment of employees is an important part in HR management. Up until the project, our product did not support the input and storage of tax-related data and we felt it urgent to develop the support to make the HR management process smoother for our customers.

#### Data Management Extension: What I Did

- Created tests for the project, taking regression into consideration.
- Created the tax data input components and updated graphql schemas.
- Ran tests to ensure expected behaviour and existing functionalities were intact.

### Development of Custom Categories

#### Development of Custom Categories: Context

The app only supported pre-built categories such as Applications and Employee Data by the time we embarked on the development of support for custom categories.
Users had very limited customizability to tweak the app for their individualized needs, which significantly affected custom success and user experience that we cared so much.

#### Development of Custom Categories: Challenges

But shifting the established category models to add customization was not easy at all. We faced tough decisions on various implementation levels to make. For example,

- Should we just add another type of categories (custom categories) to the existing ones or should we make all categories behave the same?
- What about existing data users have already stored in existing categories?
- How many custom categories can users create?

#### Development of Custom Categories: What I Did

- Worked with UI/UX designers in our team to generate several frontend implementation plans.
- Worked with team's backend developers to decide on the implementation that was most viable, maintainable and user-friendly. We finally landed on the plan to implement all categories, existing and custom ones, in the same way and provide a fixed number of custom fields that were readily available for customers to use.
- Designed unit tests, integration tests and E2E tests for the new functionality extension.

### Navigation Optimization

#### Navigation Optimization: Context

Before I proposed a plan to streanline and optimize the navigation flow of the app, unnecessary intermediate pages got in the way after user had performed an operation, instead of redirecting to the initial page where user could start to perform another operation immediately. This seemed like a trivial problem but we were a team that treated **user experience as a priority**. So I took the charge and delivered the optimization.

#### Navigation Optimization: Challenges

- To separate unnecessary intermediate pages from necessary ones. For example, pages informing guest users that their operations were completed should not be dropped as the navigation flow was one-way and there was no such thing as the initial page to redirect to.
- To ensure irrelevant pages were not affected by my tweak. As almost every operation had a complete page involved, the impact of the changes was expected to be wide.

#### Navigation Optimization: What I Did

- Deleted all unnecessary intermediate pages and left necessary ones intact.
- Ran comprehensive E2E tests to ensure the changes took effect and no regression occurred.

---

## What I Learned Along the Journey

I'm proud of being able to work with some of the amazing designers and developers in Japan. Although my stay in Money Forward,Inc. was not very long, I learned so much from my teammates, other designers and developers in our department and even members who had no intersection with me in work. Some of the most important things I learned include:

- **Quality of code is as important as quality of product** and more often than not, quality of the former affects that of the latter.
- Always start a programming task by **defining its scope and thinking about the tests**.
- Always **think in terms of the team**. Always take the responsibility to be the first to act and make positive changes to the team, our product and our approaches to working.
