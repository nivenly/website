---
title: "Nivenly Fediverse Security Fund"
linkTitle: "Fediverse Security Fund"
description: |
  Security bounty fund to sponsor contributors who responsibly disclose security vulnerabilities in popular open source Fediverse software.
---

## Background

Software inevitably has security vulnerabilities, and software for the Fediverse is no exception. Closing these vulnerabilities provides a safer, more trustworthy experience for citizens of the Fediverse. To that end, Nivenly is launching a time-and-funds-limited experimental security bounty fund to sponsor contributors who close serious security flaws in popular open source Fediverse software. As a secondary goal, we want to use this fund to help project maintainers grow their circle of contributors.

## The Fund

Individual researchers or contributors who identify or contribute a patch for a high or critical [CVSS score](https://nvd.nist.gov/vuln-metrics/cvss) vulnerability in Fediverse software will receive a one-time sponsorship from the the Fund:

* High (7.0 \- 8.9) – $250 USD
* Critical (9.0+) – $500 USD

Since this is a new program and we want to gather data about how contributors will engage with it, the Fund will allocate a maximum of **$5,000 USD** between **April 1, 2025** and the end of **September 30, 2025**. Shortly before the conclusion of the experiment, Nivenly will hold a [member vote](/governance) to determine if we want to continue the program, and to establish a longer-term committee to steward and maintain the program.

During the experiment, a single contributor is limited to a **maximum payout of $1,000 USD**. Payment processing fees do not count towards an individual’s maximum payout.

## Terms

Since this is a time and funds limited experiment, and it’s the first time Nivenly has tried something like this, there are a few terms to keep things a bit simpler:

* Sponsorships will only be awarded to individuals, not teams or corporations. Furthermore, contributions must come from outside of the core maintainer team for the product.
* Contributors are responsible for providing Nivenly with evidence of a confidential security vulnerability report after the upstream project has publicly released a patch.
  * (preferred) a Github Security Advisory that is:
    * Linked to an eligible software project.
    * Linked to the contributor’s Github account with credit for the fix.
    * Sponsorship credit requested from the [@nivenly-foundation](https://github.com/nivenly-foundation) Github account.
  * or, if the project does not use Github:
    * Link to a vulnerability in an authoritative database like [NIST’s NVD](https://nvd.nist.gov/) or [EUVD](https://euvd.enisa.europa.eu/).
    * Link to a pull request, code change, or announcement that contains the fix and references the above CVE
    * Demonstrate ownership of accounts in both the project’s source control system and Github (e.g. create a gist/snippet and share it with Nivenly)
* The Fund is specifically for vulnerabilities found in Fediverse software and does not apply to live deployments of that software or misconfigurations thereof.
* Contributors are responsible for notifying Nivenly when the fix is merged.
* Sponsorship will be paid via a one-time Github Sponsors payment **no later than 10 business days** after the Fund has acknowledged a public, merged fix to the upstream repository.
  * We recognize that leveraging Github Sponsors for payouts will limit who can participate. As we execute the experiment, we will explore how to adjust these terms to widen how we receive and pay out bounties.
* Nivenly will be responsible for any fees associated with the Github sponsorship payment; however, the recipient is responsible for paying any associated taxes on received income.
* Contributors may receive sponsorships from other organizations for the same CVE, but we encourage contributors to make space for others if they have already received payment for a given vulnerability.
* Members of the Nivenly Board of Directors, Nivenly Employees, or the Fund Program Administrators are ineligible for payouts from the Fund.
* Researchers/contributors are expected to adhere to the [Nivenly Covenant](https://nivenly.org/covenant/) during discussions and publications regarding the vulnerability and bounty.
* Nivenly reserves the right to decline payment for any reason.

## Eligible Fediverse Software

Projects should have either:

* a [SECURITY.md](https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository) file present in their repository that documents the project’s vulnerability disclosure process, or
* a clearly documented and accessible process for responsibly disclosing vulnerabilities.

### Projects Currently Included

The following projects are currently included and meet the above minimum requirements for vulnerability disclosure:

* [Akkoma](https://akkoma.dev/AkkomaGang/akkoma/)
* [Bonfire](https://github.com/bonfire-networks/bonfire-app)
* [BotKit by Fedify](https://botkit.fedify.dev/)
* [Bookwyrm](https://github.com/bookwyrm-social/bookwyrm/)
* [Bridgy Fed](https://github.com/snarfed/bridgy-fed)
* [Diaspora Federation](https://github.com/diaspora/diaspora_federation)
* [Fedify](https://fedify.dev/)
* [Forgejo](https://forgejo.org/)
* [Funkwhale](https://dev.funkwhale.audio/funkwhale/funkwhale)
* [GoToSocial](https://gotosocial.org/)
* [Hollo](https://docs.hollo.social/)
* [Hubzilla](https://framagit.org/hubzilla/core)
* [Iceshrimp.NET](https://iceshrimp.dev/iceshrimp/Iceshrimp.NET)
* [Lemmy](https://github.com/LemmyNet/lemmy)
* [Manyfold](https://github.com/manyfold3d/manyfold)
* [Mastodon](https://github.com/mastodon/mastodon)
* [Misskey](https://github.com/misskey-dev/misskey)
* [NeoDB](https://github.com/neodb-social/neodb/)
* [NodeBB](https://nodebb.org/)
* [PeerTube](https://github.com/Chocobozzz/PeerTube)
* [Pixelfed](https://github.com/pixelfed/pixelfed)
* [Piefed](https://join.piefed.social/)
* [Pleroma](https://git.pleroma.social/pleroma/pleroma)
* [Owncast](https://github.com/owncast/owncast/)
* [Sharkey](https://activitypub.software/TransFem-org/Sharkey)
* [WriteFreely](https://github.com/writefreely/writefreely)
* [Wafrn](https://github.com/gabboman/wafrn)


Don’t see the project you were expecting? Raise a ticket at [nivenly/community](https://github.com/nivenly/community/issues) and let’s have a discussion about adding it – we want to include open source Fediverse projects of all sizes!

### Projects Provisionally Included

These projects are included within the Fund, however, their responsible security vulnerability disclosure practices need to be improved to continue to be considered eligible for the Fund beyond September 30, 2025.

* [Castopod](https://code.castopod.org/adaures/castopod)
* [Discourse ActivityPub Plugin](https://github.com/discourse/discourse-activity-pub)
* [Emissary](https://github.com/EmissarySocial/emissary)
* [Flohmarkt](https://codeberg.org/flohmarkt/flohmarkt)
* [Friendica](https://github.com/friendica/friendica)
* [Funkwhale](https://dev.funkwhale.audio/funkwhale/funkwhale)
* [Mitra](https://codeberg.org/silverpill/mitra)
* [Postmarks](https://github.com/ckolderup/postmarks)
* [Snac2](https://codeberg.org/grunfink/snac2)
* [Smithereen](https://github.com/grishka/Smithereen)
* [Vernissage (server)](https://github.com/VernissageApp/VernissageServer)


Projects can let us know of changes to their security practices via a ticket at [nivenly/community](https://github.com/nivenly/community/issues).

## Resources for Responsible Security Practices

- [Github on Coordinated Disclosure of Security Vulnerabilities](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/about-coordinated-disclosure-of-security-vulnerabilities)
- [OWASP Vulnerability Disclosure Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#commercial-and-open-source-software)
- [How to report a security issue in an open source project – Jacob Kaplan-Moss](https://jacobian.org/2025/mar/27/reporting-security-issues-in-oss/?utm_source=changelog-news)

## Donating to Nivenly & the Fund

Want to help support Nivenly projects and the Fediverse Security Fund? You can learn more about donating on the [Nivenly Open Collective](https://opencollective.com/nivenly-foundation).

## Fund Program Administrators

The Fund is currently administered by Preston Doster ([@esk](https://hachyderm.io/@esk)).

This fund was championed by Emelia Smith ([@thisismissem](https://hachyderm.io/@thisismissem)) and Preston Doster ([@esk](https://hachyderm.io/@esk)).

## Questions?

If you have any questions or requests to add new Fediverse software, let’s chat at [nivenly/community](https://github.com/nivenly/community/issues).
