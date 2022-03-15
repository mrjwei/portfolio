---
title: "User Management Platform: A Full-stack App"
tags: ["#app", "#ui/ux", "#productivity"]
description: "This is a user management platform developed for Tryze Odori, the social welfare facility I worked for."
image: "/images/work-images/user-management-cover.png"
date: "2020-05-30"
---

![top page of user management platform](/images/work-images/user-management-cover.png)

This is a user management platform developed for Tryze Odori, the social welfare facility I worked for. The goal was to create a secure while accessible and user-friendly tool that streamlines workflow and improve productivity for both staff and service users.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [My Roles](#my-roles)
- [Problem Identification](#problem-identification)
- [Planning & Design](#planning--design)
- [The Final App](#the-final-app)

## My Roles

- Problem identification
- Planning & Design
- Coding & Deploying

___

## Problem Identification

Prior to this newly developed platform, the staff were using a Google Site to share information about latest news, job openings, and service guides. The problems and restrictions of the site were as follows:

- **It was not secure**. Because anyone, inside or outside the facility, could access it, information that was intended only for internal memebers could not be published on the site and this was inconvenient.
- **Creating and maintaining the site was a bit of pain**. Although Google Site is a handy tool with a pretty intuitive site builder, it still takes some time to get your head around for those who have very limited IT literacy.
- **Staff could not collect daily reports and feedback from service users**. But this was something they really wanted to be able to do, as it could help improve the quality of the service they provided.

The previous site built with Google Site.

![previous site built with Google Site](/images/work-images/user-management-old-problems.png)

---

## Planning & Design

With the existing problems in mind, I defined the scope and key features of the new platform as the following.

- **Authentication**. The app's targeted users were authenticated staff members and service users. Unauthenticated users should not be able to access it.
- **On-site content creation and management**. This would allow any staff members with various IT literacy to access and use the platform effortlessly.
- **Report form & data management**. Service users could fill up the daily report form and send itdirectly from the platform, and could get a copy of his/her own report. But for security and privacy reasons, they should not be able to access other users' reports. Staff, on the other hand, should have full control over the form and users' report data.

Then, I adopted an iterative wireframing & prototyping approach to design the application based on staff's and user' feedback.

For example, when presenting the first wireframe of the top page my fellow colleagues, they felt some important information was missed on it. Users would have to navigate the pages to find it, which would compromise user experience. So I made a change and added the information in question to the top page in a clear and easy to find manner.

![added information on top page](/images/work-images/user-management-top-wire.png)

Then, for **authenticated staff members**, we wanted to grant them full control over all of the data. They could view, create, edit and delete data entries on-site. This made the new application much more user-frienly than the previous Google Site version. For **authenticated service users**, we wanted them to be able to view all of the data, except other users' report data.

![staff and service users with different accessibilities to data](/images/work-images/user-management-with-authorization.png)
![staff and service users with different accessibilities to data 2](/images/work-images/user-management-with-authorization-2.png)

---

## The Final App

The final app is featured by the same clean layout as the previous Google Site, but with distinct features such as more user-friendly UI and effortless on-site data management.

![new app vs. previous site](/images/work-images/user-management-new-vs-old.png)
![new app vs. previous site: difference in managing data](/images/work-images/user-management-new-vs-old-manage-data.png)

The new app supports report form validation, submission and data retrieving. The implementation of authentication ensures its good security.

![new features of the final app](/images/work-images/user-management-new-features.png)
![authentication features of the final app](/images/work-images/user-management-new-features-2.png)