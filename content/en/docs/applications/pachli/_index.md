---
title: "Pachli - Nivenly Application"
weight: 40
type: docs
linkTitle: "Pachli"
description: >
   Pachli is an Android native application. It is a fork of the Tusky project.
---

Title: Pachli - Nivenly Application<br />
Submitted by: Nik Clayton<br />
Project site: [pachli.app](https://pachli.app)<br />
Project GitHub: [github.com/pachli/](https://github.com/pachli/)

**Table of Contents**

- [Abstract](#abstract)
- [Project Description](#project-description)
  - [Project Scope](#project-scope)
  - [Intended Use](#intended-use)
  - [Anticipated Misuse](#anticipated-misuse)
  - [Countermeasures](#countermeasures)
  - [Accessibility](#accessibility)
- [Needs](#needs)

# Abstract

The Pachli project exists to create best-in-class software for users of the Mastodon social network, and servers that implement the Mastodon API.

The first application is an Android-native Mastodon client, suitable for use by anyone with an Android device and a Mastodon account.

This is needed because the official Mastodon Android app is a second-class citizen to the iOS app, and both apps are missing features supported by the web client, as explained in[ GitHub - mastodon/mastodon-android: Official Android app for Mastodon](https://github.com/mastodon/mastodon-android).

Other Android apps exist (including[ Tusky](https://tusky.app/),[ Megalodon](https://github.com/sk22/megalodon),[ Moshidon](https://github.com/LucasGGamerM/moshidon),[ Husky](https://f-droid.org/packages/su.xash.husky/),[ Yuito](https://github.com/accelforce/Yuito),[ Trunks](https://play.google.com/store/apps/details?id=com.decad3nce.trunks),[ Ivory](https://play.google.com/store/apps/details?id=com.askonomm.ivory),[ Fedilab](https://fedilab.app),[ Tooot](https://tooot.app)) but are problematic for one or more of the following reasons.

* Managed by a solo developer, with no continuity plan
* Not open source
* No project governance model
* Development has stagnated

# Project Description

As noted, the app is Android-native and is a fork of a project that has existed for ~ 7 years. As is to be expected there is quite a lot of cruft in the codebase.

* Most of it is Kotlin, some key functionality is still implemented in Java
    * Kotlin compiles to JVM bytecode, but as an implementation language is more concise than Java, supports more convenient higher-order programming concepts, has a sensible coroutine model, and distinguishes between null/non-null at the type level instead of requiring annotations.
* The code is a mix of programming styles. In particular, the most “modern” Android architecture patterns ([https://developer.android.com/topic/architecture](https://developer.android.com/topic/architecture)) are only followed in some places in the app. This complicates adding new features, and can make onboarding new developers onto the product more difficult.
    * I’m actively working on improving this at the moment. It’s not a public roadmap item because the effects aren’t user visible
    * This includes automating as much of the review process as possible using / writing decent linting tools.
* The UX is inconsistent. There’s no design system for the UI, different screens have slightly different layouts, margins, etc. Some areas of the app (drafts, scheduled posts, and announcements in particular) have a very bare-bones UI compared to the rest of the app.
    * Fixing this is challenging because there are currently no real UI tests, so changes currently require a lot of manual testing. I intend to incrementally build out a suite of UI tests (chiefly, screenshot tests) over the next four to five months so that large scale UX work can be undertaken confidently, without worrying about breaking a key corner case somewhere.
* There are a number of outstanding issues that have been caught by lint scanning tools. A baseline has been put in place to ensure that no new issues make it into the code, and refactorings and other changes are slowly driving down the number of open lint issues in the baseline.

Current effort is spent in a roughly 50/50 split between implementing new features and fixing these issues.

The project’s code is hosted on GitHub ([https://github.com/pachli/pachli-android](https://github.com/pachli/pachli-android)), and uses additional GitHub infrastructure:

* Runners for CI
* Pull request workflow for managing contributions
    * Managing CLA signatures
    * Automated tests and linting
* Issues for tracking problems
* Discussions for non-ephemeral discussions
* Project Management tools
* [https://pachli.app](https://pachli.app) is hosted on GitHub Pages (https://github.com/pachli/website)

The project deliberately does not use real-time chat (Discord, etc) for project communication; I think it’s too ephemeral, favours people who can be online more than others, and is a poor archive of previous discussions and decisions.

The code and related material is licensed under GPL 3.0.

## Project Scope

**For users**:

Right now the project’s single application is a native Android client, usable by any Mastodon user.

Pachli-the-application started as a fork of Tusky, and new features / bug fixes are rapidly being implemented to improve the user experience compared to both Tusky and other client apps, including:

* Seamless loading of content from the timeline (most other apps require the user to regularly tap a “Load more” button)
* A range of accessible fonts can be chosen in-app
* Support additional Mastodon features, like “trending posts”, and marking lists as exclusive.

There’s a tentative roadmap for user-visible future development at [https://github.com/orgs/pachli/projects/1](https://github.com/orgs/pachli/projects/1), key goals include:

* Support for translation (off-device, using the Mastodon API, and on-device using translation libraries)
* Work around Mastodon federation issues and allow the user to fetch content from servers other than their “home” server
* Improve the UX for users with larger devices (tablets, foldables, etc)
* Extend the application to support Mastodon-like services – servers that are similar to Mastodon and provide a close-enough API. Features that are now in stock-Mastodon often appear in these other services first (e.g., support for bookmarking posts)

There are related Fediverse services, like Lemmy or KBin, PeerTube, Pixelfed, etc, that would also benefit from a polished native Android app.

Pachli-the-app does not support those (and probably won’t in the future, as the user interaction model can be quite different), but if this project is successful I would welcome others who want to develop apps for those platforms under the Pachli brand. There is definitely scope for collaboration and sharing code.

**For contributors (developers and non-developers):**

* Be an exemplar of good, idiomatic Android code, demonstrating appropriate best practices
* Make it easy for new contributors to onboard
    * Clearly describe project norms
    * Provide an onramp for new contributors to make their first contribution
    * Encourage appropriate tooling to simplify and speed up the contributor experience
* Encourage a culture of ownership, where contributors can report, propose fixes, and implement fixes to issues whatever their focus
* Encourage a culture of quality work
    * Provide thoughtful, actionable feedback on PRs that helps developers grow their skills
* Enable rapid feedback on developer contributions
    * Set clear expectations on how long a PR review cycle should take
    * Release on a regular schedule, so developers get real-world feedback on their work, and the satisfaction of seeing users benefiting from their contributions

As the Pachli codebase is rewritten to be more modular it might also make sense to spin off some of those modules into separate libraries so that other applications can benefit from them.

I also want the Pachli developer community to participate in the broader Mastodon-and-related-services developer community, e.g., through membership of the Mastodon developer-only Discord groups to provide feedback on current and future API direction, assist developers of other apps, and so on.

**For members:**

Pachli-the-association is intended to provide a first class organisation to manage the development of the application under the [7 cooperative principles](https://www.ica.coop/en/cooperatives/cooperative-identity):

1. Voluntary and open membership
2. Democratic member control
3. Member economic participation
4. Autonomy and independence
5. Education, Training, and Information
6. Cooperation among Cooperatives
7. Concern for Community

## Intended Use

Install from their app store of choice (currently served from Google Play and F-Droid, adding others is possible if there is demand), login, and get started.

Ideally Pachli would be usable to onboard new users who don’t have an account, but the Mastodon API does not permit deleting an account, and upcoming changes to Google Play policies require that if an app allows the user to create an account in-app then they must also be able to delete the account from the same app.

## Anticipated Misuse

As a client app that interacts with the user’s server through the Mastodon API there’s little scope for misuse of the software by the account owner.

As currently written the app assumes that the user maintains control of their device. If a user would be comfortable staying logged in to a Mastodon server in their device’s browser, **and** have the browser remember their username and password then Pachli provides roughly equivalent security while the user is logged in to their account.

The user can log out of their account in Pachli, which removes the account metadata, cached timelines, and authentication tokens from the user’s device.

## Countermeasures

A hypothetical “secure” mode of operation is possible. If toggled through the settings this might:

* Require the user to reauthenticate (e.g., face lock, pin, passcode) whenever returning to the app, before any content is displayed
* Use the relevant Android API to mark the app as sensitive, disabling screenshots
* Obfuscate / anonymise the names of accounts the app is signed in to until the user reauthenticates
    * Note that this would hide the account details, but it would not prevent disclosure that the app is signed in with multiple accounts.

None of this stops a determined adversary with access to the target’s device. For example, they could:

* Root the device, and copy the Pachli databases
* Build a trojaned version of the app from the open source code, and deploy it to the device

So these are offered up as examples rather than specific things to do in the future; either way they’d need to be written with a specific threat model in mind.


## Accessibility

For maintainers and contributors, honestly, that’s not something I’ve given much thought to. Recommendations for best practices would be welcome.

For users the app integrates with Android’s screen reader (“Talkback”) and gesture navigation support. I also implemented features to allow the user to choose from a range of different accessible fonts, increase the font size through the app, and use colour schemes with greater contrast.

Maintaining the quality of that coverage is a challenge. It’s not something there are currently Pachli-specific UX tests for. The standard Android tooling provides some support – warning that a UX element is missing content for a screen reader, or that a UX affordance is too small.


# Needs

Broadly:

* A legal entity that can sign contracts for resources the project needs. Things like:
    * Domain names; I’ve already bought a range, including pachli.app, pachli.org, pachli.ch (I’m based in Switzerland), pach.li.
    * CI infrastructure; as noted earlier the project currently uses the free tier of GitHub workflows. That’s fine at the moment, but I expect that will become a problem once screenshot tests are introduced. And even before then, GitHub CI can take 10-12 minutes to run a series of tests that take less than two minutes locally.
    * Trademarks; Pachli is not currently trademarked.
    * Artwork; for use within the app and app store listings
* Fiscal host; Pachli is not currently accepting any funding until there’s a governance model in place. Once there is, and there’s members paying fees that money will have to be handled transparently.
* A governance model; [https://pachli.app/about/](https://pachli.app/about/) sets out the goal of an organisation run along the 7 cooperative principles. The ideas I’m considering are very similar to how Nivenly already works.
    * If Pachli moves to become part of the Nivenly Foundation I wouldn’t expect there to be different “Nivenly members” and “Pachli members”, there would just be “Nivenly members”, who would have a stake in Pachli project governance. \
 \
(Broadly, I’m trying to sidestep having to form a separate Pachli Association)
    * Infrastructure to help implement that governance model; mechanisms and tools for signing up new members, processing payments, votes, capturing proposals from the membership, recording decisions, helping to ensure the membership remains engaged with the project.
    * Relevant training for the people that will be doing the work
* A grants policy; it’s not there yet, but once there’s fee paying members I hope to be able to use some of that money to offer grants to people who have the skills to contribute to an open source project but need financial support to do so. This doesn’t have to be writing code, it could be project management, or a detailed UX review, or committing to a certain number of hours of user support per week.
    * Exactly how this would work would be decided by the membership, but maybe through something like https://www.outreachy.org/