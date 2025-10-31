---
title: "Haidra - Nivenly Application"
weight: 40
type: docs
linkTitle: "Haidra"
description: >
   Nivenly application for Haidra, the generative AI project.
---

Title: Haidra - Nivenly Application<br />
Submitted by: db0<br />
Project site: [haidra.net](https://haidra.net) and [stablehorde.net](https://stablehorde.net)<br />
Project GitHub: [github.com/Haidra-Org/](https://github.com/Haidra-Org)

**Table of Contents**
- [AI Horde Nivenly Application](#ai-horde-nivenly-application)
  - [Abstract](#abstract)
  - [Project Description](#project-description)
  - [Project Scope](#project-scope)
    - [Intended Use](#intended-use)
    - [Anticipated Misuse](#anticipated-misuse)
    - [Countermeasures](#countermeasures)
  - [Needs](#needs)

# AI Horde Nivenly Application

## Abstract

The AI Horde is a Free/Libre, Open Source, Crowdsourced, cluster of Generative AI.
Like a mix between Bittorrent and Folding@Home.

As Generative AI is becoming more and more developed and important in our day to
day lives, it is also becoming more centralized in the hands of a few corporations.
While there are a few FOSS projects aimed at providing tools to use AI locally,
they all rely on the user having a powerful PC and GPU, which puts it out of reach
of most humans on earth.

I believe this technology and its potential should not be only for the privileged
and the powerful, so I set out to create a service which allows it to be used by
anyone, free and without any strings attached.

The horde initially started as the **KoboldAI Horde**, then forked to the 
**Stable Horde**. Lately the two have been merged back into a single unified
**AI Horde**.

## Project Description

The AI Horde has effectively 3 components

* The Worker Inference Backend
* The AI Horde middleware
* The Frontends

The part that I developed from scratch is the 
**[AI Horde middleware](https://github.com/db0/AI-Horde)**.
It’s a custom-built smart-queuing system built on a stack of
HAproxy/Python/Postgresql that simply provides a REST API (https://aihorde.net/api)
that anyone can integrate with without any requirements, even anonymously. 

It is optimized to scale horizontally with multiple cheap VMs in a way a single
person can handle. Currently it has around 10 VMs for the whole service, all
configured using Ansible and running on multiple VPS providers.

The AI Horde is crowdsourced, which is where the **Worker Inference Backends** come
in. These are client software running on people’s PCs which pick up jobs from the AI
Horde, process them and submit them back. We have multiple for different workloads
such as Stable Diffusion and LLM, but the core one is the
[AI Horde Worker](https://github.com/db0/AI-Horde-Worker).
As I am not a ML developer, I rely on other libraries to perform this task. Currently
we’re in the process of switching to a new ML inference library. This is the only area where
[I have other python developers helping me](https://pypi.org/project/hordelib/),
which is really helping.

Finally, as I mentioned, the AI Horde only provides a REST API. As such, I rely
on third parties to develop **Frontends and integrations.** While I have developed
[my own frontend](https://dbzer0.itch.io/lucid-creations/) using the Godot Engine,
I absolutely do not have enough time to keep it up to date. Fortunately a lot of
people are seeing the value of the AI Horde and have developed multiple frontends
to it. Examples include (see https://aihorde.net frontpage for more):

* [Stable UI](https://aqualxx.github.io/stable-ui/dashboard)
* [ArtBot](https://tinybots.net/artbot)
* [KoboldAI Lite](https://lite.koboldai.net)
* [Silly Tavern](https://github.com/Cohee1207/SillyTavern)
* [Mastodon Bot](https://sigmoid.social/@stablehorde_generator)
* [Discord Bot](https://github.com/ZeldaFan0225/Stable_Horde_Discord)

All these together are serving thousands of users per day currently.

Also check the [FAQ](https://github.com/db0/AI-Horde/blob/main/FAQ.md).

## Project Scope

I am trying to democratize access to generative AI. I wish to prevent the
monopoly of this powerful technology by allowing the more optimal sharing
of resources and therefore the cooperation of human talent.

I did this project as Free/Libre and Open Source so that it can survive any
challenges, even from myself.  

I also want to create a community of AI Enthusiasts which is explicitly
**ethical and positive**. The Kudos system I developed is aimed to not only
reward people with access to GPUs, but also just good behavior all around.
This is why people consistently gift kudos (i.e. priority) to others for things
like sharing their artwork, or answering questions, or doing development.

One big positive result to come out of the AI Horde, is the improving of the
commons through [rewarding the rating of images](https://laion.ai/blog/laion-stable-horde/),
for the training of new open GenAI models.

### Intended Use

The AI Horde is built to provide the central location where those who have the
resources can share them with those who do not, in a secure and safe manner. As
the AI horde is handling everything through REST API,it is meant to be compatible
with everything and easy to build around.

The intended use is that 

1. People with spare GPU resources will share them
1. People with a development background will create new integrations based on
   the AI Horde. (Frontends, Bots, Games etc)
1. People with no GPU, or with bigger demands than their own GPU can handle
   (e.g. text2video) will use the shared resources on the horde to utilize
   generative AI for any purpose.

### Anticipated Misuse

1. For-profit or scammy services integrating into the horde and charging
   their users for something available for free, effectively exploiting
   the shared resources of the community for their own benefit
1. Pedophiles using the AI Horde anonymously to generate CSAM images.
1. Actors hating the ability for everyone to access generative AI for free,
   and using attacks like DDOS or other vectors, to take down the service.

### Countermeasures

1. [The Kudos system](https://dbzer0.com/blog/the-kudos-based-economy-for-the-koboldai-horde/)
   is built to prioritize people who are contributing back
   to the horde. People trying to generate without contributing anything back,
   will quickly find themselves at the back of the queue. As such, for-profit
   leechers will quickly frustrate their users. On top of that, when we discover
   any such services, we quickly steal their users by informing them they can
   do the same on our free frontends, and faster.
1. This is an area that I’ve put work-weeks of work into, to prevent and
   discourage. I have even developed a ground-breaking technology of my own which
   is being picked up to evaluate by researchers right now. You can read about
   it [on my devlog](https://dbzer0.com/blog/ai-powered-anti-csam-filter-for-stable-diffusion/).
1. This is an area that we are still potentially very vulnerable to. I have no
   security background and I am sure I have plenty of attack vectors open. I have
   secured things through reverse proxies and cloudflare etc. I have also developed
   automated countermeasures to detect and block malicious actors on the worker
   side. I also have many frontends and regular DB backups.

## Needs

The AI Horde has grown meterotically since I started it as a side-project to
support my game development. I have a community in the thousands, with dozens
of third party web services relying on the uptime of the AI Horde to serve their
own communities! While I have a few volunteers helping me with moderation and
development, we have no formal governance or other structure. 

**Governance**: I started developing AI Horde on my own, as a side project,
and I’m still working on it only in my spare time. Currently I am a de-facto
“benevolent dictator”, which is not a dynamic I enjoy, and any conflicts usually
require me to step in. As far as governance is concerned, I can at best react.
I just don’t have the mental bandwidth to build anything, nevermind the knowledge.
For the record, I am running my community according to anarchist principles.

**Infrastructure**: I’ve built the AI Horde to be able to be handled by one
person on a shoestring budget. Fortunately I’m an infrastructure automation
expert so that allowed me to scale to serve millions of HTTP requests per day,
in a budget of less than 200$ per month. However I’m slowly reaching the limits
of my own abilities to scale efficiently. For example, while I self-taught myself
enough DBA skills to set up and maintain a postgresql DB, I have very little
capacity to harden it as a cluster and ensure best practices. I could really use
specialists in areas that I am myself not an expert in, such as Database
administration, HAproxy etc. I could also use guidance on how to onboard other
SysAdmins, due to the potential risk of other people having access to the servers.

**Optimization**: Likewise, I do not have enough advanced programming knowledge
(I’m self-taught and never programmed professionally) to fine-tune the code to a
great degree. While I do make improvements on DB calls as I learn and improve myself,
I can only do so much in my spare time. As such, I still have issues with things
like race-conditions, or handling heavy operations. I could use people who can help
or guide on these matters in python.

**Funding**: I am still developing this service in my own spare time. This is slowly
becoming more and more untenable as the popularity of the AI Horde increases. Currently
I am doing all the below:

* middleware development
* backend development
* frontend and bot development
* infrastructure deployment and automation
* public relations
* community management
* security and countermeasures research

I am spread beyond thin and just have [one patreon](https://www.patreon.com/db0/) to help with my infrastructure costs.

Ultimately, I would like the AI Horde to be a publicly funded project, where I can work
on it full-time. 

I have no idea how to achieve this and the challenges I face with even simple attempts
at financing myself have left me permanently stressed out.

**Trademarks**: I have no trademarks or knowledge on how to handle this sort of thing,
which sooner or later I think I need to think about 

**Legal**: AI Development is a very rapidly advancing technology and there’s going to
be legal concerns. I have not clue where to even start. I tried finding some lawyers
about such matters in my home country, but I mostly failed. I also cannot really afford it.

**Machine-Learning Development**: While we have python developers helping with the backend,
we do not have anyone with an explicit machine learning skill set. We could use help onboarding
some who share our project goals.

**Community Managers and PR**: While I have a very positive AI enthusiasts community in
my discord server, they’re mostly technical people. As such all promotion from AI Horde
comes from word-of-mouth and my own attempts at spreading it on reddit, mastodon and
twitter. I could use help in both promoting the AI Horde, and in managing its growing
community in an ethical manner.