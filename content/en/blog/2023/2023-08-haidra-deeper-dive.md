---
title: "A Deeper Dive into Haidra"
linkTitle: "A Deeper Dive into Haidra"
date: 2023-08-14
author: db0 ([@db0](https://hachyderm.io/@db0))
description: A deeper dive into the new Haidra project, written by Haidra's lead developer.
---

_([For those who would like to read Building Nivenly: A letter from Quintessence, please click here](../building-nivenly-a-letter-from-quintessence/).)_

Hey everyone, db0 here. I’m the lead developer of the AI Horde and the public face of Haidra. I want to thank everyone who provided feedback in the past weeks. I am working hard with Nivenly to show that Haidra is an opportunity to improve the open commons.

I will say that the criticisms we received when we made the original announcement caught me by surprise. Therefore I was unprepared for the volume and passion displayed, and perhaps didn’t handle it the same as I should have in a different situation. As a neurodivergent, I will readily admit that I do not react well to such comments and for that I’d like to apologize and try again.

I want to tell you all about Haidra and the AI Horde, my hopes as its maintainer, and how collaboration with Nivenly is meant to improve the areas that we are lacking and help steward us to a place that is both much better than what we could achieve on our own and also satisfies the needs and concerns about data and Generative AI.


## What is Haidra

Haidra is the overarching organization for the ecosystem built around the AI Horde. Before we can explain what Haidra is, we need to talk about the AI Horde.


### What is the AI Horde

AI Horde is [a Free/Open Source Software](https://github.com/Haidra-Org/AI-Horde) allowing everyone to cluster compute for generative AI.

[https://aihorde.net](https://aihorde.net) is the public instance which is run by me, the developer, and is free and open for everyone to use based on crowdsourced compute from volunteers.

The AI Horde was started almost exactly a year ago. Around August 2022 I created the KoboldAI Horde, and in September I forked it into the Stable Horde. Eventually those two were merged back into a single unified AI Horde.


### Why was the AI Horde built

The AI Horde got started funnily enough, almost by accident because I was (technically,still am😀) making [a FOSS video game](https://github.com/db0/hypnagonia) and I could not find any volunteers for art and storytelling no matter how much I looked and begged. It just so happened that the onset of FOSS Generative AI happened during this time and I realized I could use my GPU to provide free Art and Story for my free game. As I was building the proof of concept that would become the AI Horde, I realized that if I could use my own PC to make an open API for a video game, I would also provide an open API that every PC could power.

I originally built AI Horde as a passion project, so the original use case was my own. As the project started to grow, I had the dream that I wanted to do more than just power my own video game. I wanted to power everyone’s video game and empower the open source community to do so.


### Why was Haidra created

The AI Horde is merely a middleware API. By itself it doesn’t provide enough functionality to be useful. It requires specialized machine learning expertise to provide the backend work, and it required 

fancy work on the frontend to have a use-case. While I did some basic work on these myself, a lot of these frontends, backends, libraries etc were created by the community who gathered around the promise of the AI Horde. I needed a way to provide a common umbrella for all of these, that does not get confused with the middleware.

This is the reason Haidra was born, to be able to talk about the whole ecosystem **around **the AI Horde and the contributors that comprise it. To be able to have things like orgs on github and huggingface which contains things like datasets, libraries, bots, and the AI Horde itself and be able to better arrange the collaboration between all of them, as well as to be able to recognise the people making this possible.

For me, it’s important that Haidra exists as the results of community effort for the open commons. A focus point, and a point of pride for everyone who is involved. Not just programmers, but other important members like community managers, generally helpful people and even just enthusiasts for what we’re trying to achieve.


# A quick recap of relevant concepts

To help understand how and why both AI Horde and Haidra are built the way they are, it is important to understand a bit about generative AI and distributed workload clusters, and how they apply to the projects.


## What is generative AI

Generative AI is a novel process that allows computers to generate text and images by predicting the results the human operator wants to have based on the input. Generative AI typically has two steps. 

First is the training of an AI model by using a pre-existing human-created content which one wants the Generative AI to mimic. This requires a massive amount of computing power and time, which corresponds to a massive cost which makes them prohibitive but the most well-founded companies to achieve. This results in a model, which ranges in size typically from a few gigabytes to a few hundred gigabytes.

The second step is the inference where the prompt is fed an input and and it spits out an output it predicts will approximate the result the human operator wants to achieve. The input is usually a “text prompt”. Sending that prompt to a text generative AI model will attempt a very fancy form of “autocomplete”, whereas sending that prompt to an image generative AI model will attempt to create an image that matches what the prompt describes. The inference step requires way less compute than training, and can by typically run on consumer GPU cards, but more power typically allows one to use bigger and more coherent AI models.

Keep in mind, the scope of this technology is way too large to adequately encompass in a short introduction like this. This is as short and succinct as possible.


### How Haidra uses generative AI

As a free and volunteer run project, Haidra does not have anywhere close to the budget required to train new AI models. Instead we provide a way to use pre-existing Generative AI models other parties have trained and released on the internet. Typically, we rely on open source models as the project doesn’t have the resources to train its own AI. Since Haidra relies on the current state of open source models to function, there is an amazing opportunity here. Since projects are in a state of growth, this also means that the community can work together to improve the open source models available in a manner which promotes the open commons instead of progressing towards a more profit-driven and enclosed future. And who knows, as this technology improves, it might be soon possible to even pivot the Haidra community to train new models from scratch in ways that authors, artists, and users of Generative AI would like to see.

Back to Haidra specifically, the lynchpin of the whole system is the AI Horde. It provides the central location, where requests to use AI models are sent. Sort of like an automated clearing house. The public AI Horde allows everyone to use and contribute to it.

The AI Models do not live on the AI Horde. Rather, volunteers download them on their own PC and plug them into the AI Horde using specialized software. Those volunteers take on all the costs such as the cost of the graphic card, and the electricity costs, to support the generations requested by anyone in the world. The reward they get is priority for their own generative AI requests. They become part of the distributed workload cluster that is the AI Horde.

Anyone in the world can request Generative AI generations via the AI horde. The request is sent to the AI Horde via one of the Haidra (i.e. community built) frontends, bots, or software plugins. The request is queued anonymously to one of the available workers and the result is sent back to the requestor. The AI Horde handles the smart queuing and priority. \


The AI Horde is agnostic about the needs and uses of the models being served. Effectively it is a dumb pipe which is meant to empower the use of Generative AI for all. As a young project, we also tried to accommodate different views and understanding about AI into the project. This is why the models provided are opt-in by both the crowdsourced workers and the users. 


## What is a distributed workload cluster

A distributed workload cluster is  a number of computers all working towards the same goal, by breaking a compute goal (i.e. a “workload”) into smaller tasks and providing a small piece of the whole. If you are familiar with projects like Seti@Home and Folding@Home, they are likewise distributed workload clusters. 

Effectively this approach allows one to create a supercomputer at a fraction of the cost, when speed is not as important.


### How does Haidra use distributed workloads

As mentioned above, the workers of the AI Horde are volunteers connecting their PCs to help generate for others, sometimes anonymously, for free. They are responsible for getting the Generative AI models they serve independently and doing inference on them. 

The public AI Horde provides a curated list for image and text models that match our shared guidelines, but anyone can also run their own AI Horde and serve any models they want, including private ones which are not available online.


## Overall what is the objective of the Haidra in regards to generative AI 

The main purpose of the Haidra is to allow access to the revolutionary technology that is Generative AI to everyone, regardless of power and wealth, using the practice of mutual aid via direct action. We wish to ensure that the most powerful and popular functionality belongs to humanity as a whole, instead of a few rich shareholders.

For this, we not only rely on the volunteer compute of our workers and the free development of our integrators, but also the free models released as open source by companies like stability.ai. Without them the only people who would be able to have access to this technology would be powerful companies like OpenAI and Adobe who would use it to ensure only those with wealth could even compete in the sectors generative AI accelerates.

That said, the Haidra cannot train Generative AI models. In fact, the AI Horde as an open source software is completely agnostic about the models that would be served through it. 

The public AI Horde, which is the flagship of Haidra, relies primarily on the models and finetunes created by the enthusiast community around Generative AI. It provides community driven curation to ensure that we do not provide illegal content and provides ways to protect the volunteer workers which make it possible.

Likewise, the AI Horde collaborates with non-profits like LAION to improve future AI models and the overall ecosystem through initiatives like crowdsourced aesthetic ratings. This is to ensure that the open commons can stay the most powerful player in the Generative AI space.


## AI and ethics in Haidra

I am cognizant of the controversy around Generative AI. I am aware that many authors and artists do not agree to the use of their works to train generative AI models. 

Many consider the wishes of the authors on how their art can be consumed is the end of the discussion. I think it is only part of the discussion. I think there are, of course, times when an artist only wants their art to be used a particular way. Maybe they are trying to teach something, or make a statement, although even that can be hotly debated as was done in the [death of the author](https://en.wikipedia.org/wiki/The_Death_of_the_Author).

That said, I think the main reason artists mostly care about who and how their art is utilized is because they need to be paid for their art in the economic systems under which we live. I understand this and I don't have any easy answers for that particular systemic problem.

What I can say is that I think AI is a rapidly emerging revolutionary technology that is here to stay, and that I want to ensure that it empowers everyone. I want to be in a world where artists don't have to worry about how their art is used for monetary reasons, only ideological ones that are open for discussion and compromise. I acknowledge that it’s not going to be an easy journey to get us there, but I want to build trust that all of my actions are driven by this objective.

Generative AI is here to stay. There’s no putting this genie back in the lamp. This means that it introduces ethical and legal challenges that we all need to work through and reconcile as we work with it or around it. There are models already out there, and what I’ve been taking the opportunity to learn is that even with elective choice, we can build something more complete. This means that there might be a wholly new opportunity for us to work together here, as we strive to build something that we can agree comes into alignment with the world we want to see**.**

I believe that in the absence of open source projects, then it is likely that corporate models will continue to dominate the AI space. They will have the funds and other resources to build AI as fits the corporate world. But I don’t want to see a future where generative AI only fits the corporate world. I want generative AI for everyone, and I want to do my best to learn and grow myself and the project so that we can build something much better.

Generative AI is a revolutionary technology, for sure. Like the automobile and the photograph before it. It will disrupt all existing business models, undeniably. It is what it is. But if the only options that remain is embrace it or be left behind, I want to give everyone the chance to embrace it, if they wish to.

The only ethical questions that remain, is “How do we ensure Generative AI remains accessible for everyone” and “How do we ensure the technology is not used for unethical purposes”


### How Haidra tries to encourage healthy interactions

Ensuring the Generative AI remains accessible to all who need it, is at the core of how the software works. We have designed the whole kudos priority system used by the AI Horde to facilitate rewarding those who support others outside of the monetary system by making the AI Horde priority, a utility to be used.

The more someone contributes to the health of Haidra, whether that is by providing volunteer compute, or by helping other members with tech support, or by making new FOSS tools for people to use, or by simply sharing art or making engaging games to play, we reward them with extra priority for their own generation. This creates a virtuous cycle where people are incentivized for helping the larger community around open Generative AI. 

Likewise those who want to simply leech, or exploit the common resources, are not only algorithmically deprioritized, but the community itself has an incentive to discover and drive them away or otherwise undermine them.

Haidra has had to not only discover a lot of lessons but also make up quite a few of the required solutions. Our kudos priority system follows a similar dynamic to timebanks but we had to figure out ways to ensure the system is not being gamed by leechers. 

It has been my experience that the best way to combat bad actors, is not simply to trust in algorithms, but to empower one’s own community to discover them, because hundreds of human eyes cannot be gamed, especially when they’re ideologically aligned.


## Haidra, AI Horde, and Moderation

AI Horde has also been in the forefront of making sure that our public resources on generative AI images do not facilitate the creation of CSAM which put risk onto everyone around Haidra and are generally nothing that we want to support. 

In this case we’ve had to put weeks of work into discovering and developing novel ways to detect CSAM content with the least impact to legitimate content. Our successes  were also released as open sourced code which can now be used by anyone to protect their users and services without having to rely on the proprietary secret “black box” technologies.

This is an actual concrete improvement in the world that would not have existed were it not for the needs of Haidra.

Likewise we have incentivized good behavior itself through the utility of our kudos priority system, with integrating it with our discord community itself to positively reinforce helpful, funny, sharing or otherwise beneficial content, along with it being a utilitarian reward to the moderators which help enforce our community rules. These approaches, such as non-monetary, yet utilitarian rewards to reinforce good deeds and behavior, is something that a universal tool like the AI horde can provide to any community, not just our own. What works for us,  we hope to prove can help everyone.


## Closing Statements

I wanted to thank everyone who provided feedback and took another look at Haidra and AI Horde. I’ve been hard at work for the past year as the project went from a hobby project to a passion project to something much much bigger than I ever anticipated, effectively taking over all my personal time. 

I came to Nivenly for help and support, hoping that I will find others to work with who are interested in helping to support access to Generative AI for all, and especially for the open commons via free software.

Although I have done a lot of work learning about the legal and ethical implications of this technology while building the AI Horde, I can see from the feedback that there are opportunities for me to improve as a maintainer as well as real possibilities for Haidra to become even better. I want to hear about your concerns around data providence that I might not have considered and utilize this knowledge to improve Haidra. I look forward to those future discussions where I can learn fr0om all of you. I want to offer an explicit welcome to anyone who would like to chat more with me and our existing community, or who would like to join our project as a contributor, and together build something that one day will set the example of how AI projects should be built and maintained.
