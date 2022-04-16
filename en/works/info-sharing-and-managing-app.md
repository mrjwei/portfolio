---
title: "Info-Sharing & -Managing Made Easy: A Full-stack App"
tags: ["#app", "#ui/ux", "#productivity"]
description: "This is a user management platform developed for Tryze Odori, the social welfare facility I worked for."
image: "/images/work-images/user-management-cover.png"
date: "2020-05-30"
---

![top page of user management platform](/images/work-images/user-management-cover.png)

This is a user management platform developed for Tryze Odori, the social welfare facility I worked for. The goal was to **create a secure while accessible and user-friendly tool that facilitates information-sharing and -managing** within our facility.

*Note: To comply with my non-disclosure agreement, I omitted and obfuscated confidential information. All of the views and opinions in this post are my own and does not necessarily reflect those of Yokazu,Inc.*

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [My Roles](#my-roles)
- [Technologies & Tools](#technologies--tools)
- [Context](#context)
- [Identify the Problems](#identify-the-problems)
  - [Interviews](#interviews)
  - [Case Studies](#case-studies)
    - [Case 1: Current Information-sharing Website Built With Google Sites](#case-1-current-information-sharing-website-built-with-google-sites)
    - [Case 2: Google Sites](#case-2-google-sites)
- [Gather Requirements](#gather-requirements)
- [Prototype & Get Feedback](#prototype--get-feedback)
- [The Final App](#the-final-app)
- [The Impact](#the-impact)

---

## My Roles

I took charge of the entire user research, planning and developing process.

---

## Technologies & Tools

- UX research methods, including
  - UCD (user-centered design or contextual design)
  - case study
  - interviews
- Adobe XD
- Django
- AWS S3

---

## Context

When I joined the social welfare facility, Tryze Odori, in 2020, they were using a website built with **Google Sites** to share information about latest news, job openings, and service guides.

![the website built with Google Sites](/images/work-images/user-management-old.png)
*The website built with Google Sites*

They chose Google Sites for its short learning curve for non-programmers to build a website quickly but it had some intrinsic problems that they wanted me to help fix.

---

## Identify the Problems

### Interviews

I did 5 one-to-one interview sessions with 5 staff members to collect perceived problems.

- **There were concerns around security**. As the website was publicly accessible, confidential information could not be shared on it.
- **Maintaining the website was a bit of pain**. Although Google Sites is handy, it still takes some time to get used to for non-programmers.
- **Higher functionality was expected**. For example, staff wanted to have user send their daily training reports via the website but they could not at that time.
- **They wanted a centralized operation/management tool**. They were using the website along with other business tools such as Kintone, Google Sheets and Dropbox. This was not convinient nor efficient and they wanted an one-stop solution.
- **The current website did not scale**. Other facilities under the same corporation all had their own versions of information-sharing websites which had similar problems.

### Case Studies

To interpret those problems and see if it was possible to improve on top of the current website so that I did not have to build a new one, I did case studies with the current website and Google Sites.

#### Case 1: Current Information-sharing Website Built With Google Sites

By playing with the current website in both editing and view modes, I found the following problems.

- All information was publicly accessible.
- Tweaking design and content took more time than expected.
- Matching the design with corporation VI was a major challenge.
- There was no obvious way to collection user reports.
- Third-party integration was impossible without plugins.

![some problems of current information website](/images/work-images/user-management-old-problems.png)
*Problems I found in current website*

A large proportion of these problems overlapped with those mentioned by the subjects of my interviews.

#### Case 2: Google Sites

Google Sites is a structured wiki and web page creation tool included as part of the free, web-based Google Docs Editors suite offered by Google. As the successor of Google Page, it was launched in 2008 and completely rebuilt and renamed as the New Google Sites in 2016 ([Wikipedia](https://en.wikipedia.org/wiki/Google_Sites)).

The new version of Google Sites is a no-code tool and is easy to use. It allows non-programmers to build a website quickly. Its features include,

- It has intuitive UI and requires no programming skills.
- It has informative and organized documentation.
- It is free of charge and domain name registration is not necessary.
- It supports team work.
- It supports basic access control.

![Google Sites templates](/images/work-images/user-management-google-sites-templates.png)
*Templates speed up site-building*
![Google Sites template: portfolio](/images/work-images/user-management-google-sites-sample.png)
*Templates can be customized to a certain extent*
![Google Sites: basic access control](/images/work-images/user-management-google-sites-basic-access-control.png)
*Basic access control is supported*

However, Google Sites also has some restrictions. These include,

- Getting used to its tools and workflow still takes some time for non-programmers.
- Customizability is limited.
- Fine-grained permissions are not supported.
- Interactivity is limited without plugins.

![Google Sites: customizable but effortful](/images/work-images/user-management-google-sites-customization.png)
*Advanced customizing is hard*
![Google Sites: no support for layered access control](/images/work-images/user-management-google-sites-no-support-for-layered-access-control.png)
*Fine-grained permissions are not supported*

Considering these limitations, improving the current website was unlikely to fix the identified problems.

---

## Gather Requirements

My user research indicated that improving on top of the existing website was not promising. This left me with the only option of building a new app from ground up.

I started by clarifying requirements and separating them into functional and non-functional ones.

Functional requirements:

1. Authentication
2. Intuitive content-editing and content-managing functionality
3. Functionality for users to send daily reports
4. Functionality for staff to view and manage those reports
5. Native support for facility, users and documents management or
6. Support for these functionalities via thire-party integration

Non-functional requirements:

1. Security
2. Usability
3. Scalability

Up until then, important information failed to reach users and tracking users' conditions and progresses was challenging. My colleagues wanted me to develop a solution fast which meant the timeframe for the project was tight from the outset.

We did not have another developer and I had to count pretty much on myself. Due to the tight timeframe and shortage of human resource, I had to define a feasible scope for the project otherwise I would be overwhelmed.

I thus prioritized functional requirements 1~4 because they were the minimum must and stood a chance to be implemented within the timeframe, and left the rest functional and non-functional requirement to be implemented in the future. (In fact, I realized later that functional requirements 5 and 6 were too big to be incorporated into this project. But they are part of the core functionalities of my [enterprise app](/en/works/enterprise-app-for-social-welfare.md)).

---

## Prototype & Get Feedback

To speed up development, I adopted a prototype → get user feedback → reflect user feedback to prototype process. And I got many pieces advice from my colleagues along the way that turned out to be very useful.

For example, when I showed the first prototype to them, one of them pointed out that important information was missing on the top page, but it should be readily noticeable. This was one of those precious insights that helped me improve the user experience of the app. I was grateful and made the change the next day.

![added information on top page](/images/work-images/user-management-top-wire.png)
*Important information added to top page*

I worked together with my colleagues on authentication and permission functionality because they knew far better than me about which piece of information should be accessible for which group of users.

![fine-grained permissions](/images/work-images/user-management-with-authorization.png)
*Fine-grained permissions: only staff can access user data*

And now users can send daily reports directly from the app and staff can collect and view them.

![sending/viewing/managing user reports](/images/work-images/user-management-with-authorization-2.png)
*users can send reports while staff can view and manage them*

---

## The Final App

The final app is featured by its simple UI, intuitive operations and richer functionalities.

![new app vs. previous website](/images/work-images/user-management-new-vs-old.png)
*The new app vs. previous website: overview*
![new app vs. previous site: difference in managing data](/images/work-images/user-management-new-vs-old-manage-data.png)
*The new app vs. previous website: creating/editing/deleting data*

![authentication features of the final app](/images/work-images/user-management-new-features-2.png)
*Features of the new app: authentication*
![new features of the final app](/images/work-images/user-management-new-features.png)
*Features of the new app: sending/viewing/managing user reports*

---

## The Impact

The new app soon became popular among our service users and staff. It made great differences to the following.

- Efficient and secure information-sharing became possible.
- Thanks to its user-friendly interface, we all knew how to use it and therefore workload was more balanced among staff.
- Higher usability led to information being updated more timely and thus had a better chance to be useful for our service users.
- The one-way information-sharing model was replaced by a two-way communication model where staff could get an idea how our service users felt on a daily basis. This could contribute to higher service quality.
