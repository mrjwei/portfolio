---
title: "User Management Platform: A Full-stack App"
tags: ["#app", "#ui/ux", "#productivity"]
description: "This is a user management platform developed for Tryze Odori, the social welfare facility I worked for."
image: "/images/work-images/user-management-cover.png"
date: "2020-05-30"
---

![top page of user management platform](/images/work-images/user-management-cover.png)

This is a user management platform developed for Tryze Odori, the social welfare facility I worked for. The goal was to create a secure while accessible and user-friendly tool that streamlines workflow and improve productivity for both staff and service users. (To comply with my non-disclosure agreement, I omitted and obfuscated confidential information. All of the views and opinions in this post are my own and does not necessarily reflect those of Yokazu,Inc.)

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [My Roles](#my-roles)
- [Technologies & Tools](#technologies--tools)
- [Context](#context)
- [Early Insights](#early-insights)
- [Reframing The Problems](#reframing-the-problems)
  - [Case Studies](#case-studies)
    - [Case 1: Google Sites](#case-1-google-sites)
    - [Case 2: Current Information Website Built With Google Sites](#case-2-current-information-website-built-with-google-sites)
- [Defining The Goal](#defining-the-goal)
- [Prototyping](#prototyping)
- [The Final App](#the-final-app)
- [The Impact](#the-impact)

---

## My Roles

I took charge of the entire user research, planning and developing process.

---

## Technologies & Tools

- UX research methods
  - UCD (user-centered design or contextual design)
  - case study
  - interviews
  - storyboarding
  - prototyping
  - usability testing
- Adobe XD
- Django
- AWS S3

---

## Context

When I joined the social welfare facility, Tryze Odori, in 2020, they were using a Google Sites to share information, which should only be accessible by staff and service users, about latest news, job openings, and service guides.

![the website built with Google Sites](/images/work-images/user-management-old.png)
*The website built with Google Sites*

The reason for using Google Sites, as a member told me, was that it was **the simplest tool they could find to build a site quickly**, given they had no staff member who could design or develop. But the website had some restrictions they asked me if I could help overcome.

---

## Early Insights

In order to understand the problems and expectations better, I did 5 interview sessions with 5 staff members. The *perceive problems* were as follows.

- **It was not secure**. Because anyone, inside or outside the facility, could access it, information that was intended only for internal memebers could not be published on the site and this was inconvenient.
- **Creating and maintaining the site was a bit of pain**. Although Google Sites is a handy tool with a pretty intuitive site builder, it still takes some time to get your head around for those who have very limited IT literacy.
- **Staff could not collect daily reports and feedback from service users**. But this was something they really wanted to be able to do, as it could help improve the quality of the service they provided.
- **The site was not functional enough to take care of all facets of daily operation**. They were using the Google Sites along with Kintone, Google Sheets and a few other business management tools to manage the daily operation of the facility. So they wanted an all-in-one solution that could allow them to get rid of all of the other tools.
- **Other facilities under the same corporation were using Google Sites to do the job as well**. So these facilities were faced with pretty much the same problems as they were and they wondered if I could create an all-in-one solution to help those other facilities as well.

---

## Reframing The Problems

The early research data was not organized and I had to do more research to reframe the problems and understand the requirements for the potential project.

I started by doing case studies on the Google Sites tool and the website my co-workers were using.

### Case Studies

#### Case 1: Google Sites

Google Sites is a structured wiki and web page creation tool included as part of the free, web-based Google Docs Editors suite offered by Google. As the successor of Google Page, it was launched in 2008 and completely rebuilt and renamed as the New Google Sites in 2016 ([Wikipedia](https://en.wikipedia.org/wiki/Google_Sites)).

The new version of Google Sites is a no-code tool that is easy to use and can help users with no programming literacy to build a website instantly. However, it also comes with some cons.

Pros:

- No coding skill is required and its intuitive UI allows any user to build a website quickly.
- It has good documentation to help users smooth their site-build experience further.
- It's free of charge and users do not need to acquire a domain name,  which lowers the hurdle for entry even further.
- It supports multiple editors and is particularly fit for websites that are managed by teams.
- It supports basic access control so that a site can be published to everyone or to specified people only.

![Google Sites templates](/images/work-images/user-management-google-sites-templates.png)
*Templates speed up site-building*
![Google Sites template: portfolio](/images/work-images/user-management-google-sites-sample.png)
*Templates can be customized easily with site-builder tools*
![Google Sites: basic access control](/images/work-images/user-management-google-sites-basic-access-control.png)
*Google Sites support basic access control*

Cons:

- Tweaking the design and layouts of a Google Sites is still a bit of pain for non-programmers, despite the site builder tools.
- The overall design is opinionated and while customizable, it is hard to customize it to fit the corporate image and is especially challenging for non-designers and non-programmers.
- It has only very basic support for access control and no authentication is supported.
- Interactivity is very limited without plugins.

![Google Sites: customizable but effortful](/images/work-images/user-management-google-sites-customization.png)
*Design is prebaked and customization is effortful*
![Google Sites: no support for layered access control](/images/work-images/user-management-google-sites-no-support-for-layered-access-control.png)
*No support for layered access control*

#### Case 2: Current Information Website Built With Google Sites

Considering our limited resources, at first, I tried to figure out if I could improve the current website instead of building a new one. I explored the website, played with it and identified some key problems that would potentially post dangers to users' data and undermine workplace productivity.

- Due to the lack of a proper authentication functionality, all information was accessible by anyone and everyone.
- Editing design and content took more time than expected.
- Tweaking the design to match the corporation image and the nuanced needs was too hard and time-consuming.
- There was no way for staff to collect users' daily reports via the website.
- There seemed no way to build or integrate other business operation management tools into the website.

![some problems of current information website](/images/work-images/user-management-old-problems.png)
*Some problems of current information website*

---

## Defining The Goal

With all of the research data in place, I defined the **requirements** of the project.

- There should be an **authentication** functionality that supports layered access control.
- **Information management** (viewing, creating, updating and deleting) should be more intuitive without pain.
- Design should match the **visual identity of the company**.
- Service users should be able to send their **daily reports** and staff should be able to collect and manage this data.

For other expectations, such as support for multiple facilities and operation management integration, I decided **not to fulfill at this time due to the aforementioned time and resource limitations**.

Based on these requirements, I found building a new platform would be more effective than building on top of the current website. Therefore, my goal was set to **development a full-stack web application that meets all of the listed requirements**.

---

## Prototyping

With the goal defined, I set out to design and develop prototypes for my co-workers to interact with and give feedback on.

For example, when presenting the first wireframe of the top page to them, they felt some important information was missed on it. Users would have to navigate pages to find it, which would compromise user experience. So I added the information to the top page in a clear and easy to find manner.

![added information on top page](/images/work-images/user-management-top-wire.png)
*Important information add to top page*

As for authentication, a key feature of the app, we worked together to identify contents where layered access control was needed.

![layered accessibilities](/images/work-images/user-management-with-authorization.png)
*Layered accessibilities: only staff can access user data*

And service users could now send daily reports using the app and staff could collect and manage the data.

![management of users' data](/images/work-images/user-management-with-authorization-2.png)
*Management of users' data: service users can only send reports while staff can view and manage them*

---

## The Final App

The final app is featured by the same clean layout as the previous Google Sites, but with distinct features such as more user-friendly UI and effortless on-site data management.

![new app vs. previous website](/images/work-images/user-management-new-vs-old.png)
*The new app vs. previous website: overview*
![new app vs. previous site: difference in managing data](/images/work-images/user-management-new-vs-old-manage-data.png)
The new app vs. previous website: managing data

The new app supports report form validation, submission and data retrieving. The implementation of authentication ensures its good security.

![authentication features of the final app](/images/work-images/user-management-new-features-2.png)
*Features of the new app: authentication*
![new features of the final app](/images/work-images/user-management-new-features.png)
*Features of the new app: users' data*

---

## The Impact

- With the new app, all information intended exclusively for service users and staff is kept safe. When new service users or staff members join in, we just grant them the proper permissions and when they leave, we just revoke the permissions. Easy and efficient enough.
- With the new app, important information is delivered to service users and their data is collected more effectively. This way, we know which user has what concern that we can help with, which contributes to higher service quality.
- With the new app, staff have become happier and more productive because they can manage information more easily and on the go.

The company worked very hard to improve employees' job satisfication and workplace productivity and this app served as a major step to that goal and laid the foundation for future digital transformation projects.
