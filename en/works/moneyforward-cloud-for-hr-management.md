---
title: "Moneyforward Cloud For HR Management: Frontend Development"
tags: ["#app"]
description: "Development of the Moneyforward Cloud For HR Management app."
image: "/images/work-images/moneyforward-cloud-hr.png"
date: "2021-12-03"
---

![image of one of moneyforward cloud products, the hr management app](/images/work-images/moneyforward-cloud-hr.png)

Money Forward,Inc. is one of the dominant player in the cloud accounting market in Japan. I joined their HR Management product team in July 2021 and worked on the development of the [app](https://biz.moneyforward.com/employee/).

*Note: To comply with my non-disclosure agreement, I omitted and obfuscated confidential information. All of the views and opinions in this post are my own and does not necessarily reflect those of Money Forward,Inc.*

## Table of Contents

- [Table of Contents](#table-of-contents)
- [My Roles](#my-roles)
- [Major Projects I Contributed to](#major-projects-i-contributed-to)
  - [Project: Support for Storing Tax-related Data](#project-support-for-storing-tax-related-data)
    - [Support for Storing Tax-related Data: Context](#support-for-storing-tax-related-data-context)
    - [Support for Storing Tax-related Data: Challenges](#support-for-storing-tax-related-data-challenges)
    - [Support for Storing Tax-related Data: What I Did](#support-for-storing-tax-related-data-what-i-did)
  - [Project: Navigation Optimization](#project-navigation-optimization)
    - [Navigation Optimization: Context](#navigation-optimization-context)
    - [Navigation Optimization: Challenges](#navigation-optimization-challenges)
    - [Navigation Optimization: What I Did](#navigation-optimization-what-i-did)
- [What I Learned Along the Journey](#what-i-learned-along-the-journey)

___

## My Roles

1. Frontend development. My major responsibilities included improvement of existing functionalities and development of new features.
2. UI/UX optimization. My major responsibilities included identifying pain points and designing ways to improve them.
3. Test design and running.

___

## Major Projects I Contributed to

### Project: Support for Storing Tax-related Data

#### Support for Storing Tax-related Data: Context

Information about tax payment of employees is important in HR management. Up until the project, our application did not support the input and storage of tax-related data, which compromised its usability.

#### Support for Storing Tax-related Data: Challenges

When I worked on the project, I was faced with a couple of challenges.

- I had little knowledge of tax. I did not know that there were different categories of tax payment. I did not know how people fit into each category. I had no idea what the new component would look like. So I spent time doing research before writing a single line of code.
- Communicating the complex idea of tax payment categories via component design was hard. The input component basically took in one of the tax payment categories as value, but how could a user know which category he/she belongs to? Explaining a complex idea like tax payment categories could take hundreds of words and packing that number of words as description under the input component would compromise its readability. The point was I did not have to show EVERYTHING to our users. Instead, I tried to only keep the minimum information that was enough to assist a user selecting the right category.

#### Support for Storing Tax-related Data: What I Did

- Defined requirements.
- Designed tests.
- Designed and coded components for tax payment.
- Adjusted queries and mutations for the newly added fields.
- Run tests and fixed bugs.

### Project: Navigation Optimization

#### Navigation Optimization: Context

Before the project, unnecessary pages got in the way of navigation, which affected the usability and user experience of the application. For example, when a user completed a task, a page would pop up saying the operation is successful. Then when he/she clicks the "Go Back" button on the page, it navigates back to the page where the operation started and a message appears saying the operation is successful. There was no point telling a user his/her operation is successful twice and the intermediate page showing the message should be removed.

#### Navigation Optimization: Challenges

- To separate unnecessary intermediate pages from necessary ones. For example, pages informing guest users of their successful operation should not be dropped. This was because pages a guest user could access did not show twice and thus there was no initial page to navigate back to. In such cases, the intermediate pages were the only way users could know their operation was successful.
- The scale of impact of the project was large. As many pages might be affected, I had to design thorough tests to ensure expected behaviours while preventing regression.

#### Navigation Optimization: What I Did

- Designed tests.
- Implemented the improvement and tested the result.
- Worked closely with PM and Customer Success members to deliver the best experience to our users.

---

## What I Learned Along the Journey

While it was a short period of time working for the company, I learned a lot from the various projects I worked on and the people I worked with. My personal top 3 takeaways are:

- Quality of code is as important as quality of product.
- Always approach a programming task by thinking of the tests it needs.
- Always think in terms of the team.
