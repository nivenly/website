---
title: "hachyderm.general Ansible Collection v1.0.0 Released"
linkTitle: "hachyderm.general Ansible Released"
date: 2026-01-31
author: Hachyderm Team ([@hachyderm@hachyderm.io](https://hachyderm.io/@hachyderm))
---

[Hachyderm](https://hachyderm.io/about), as part of its committment to furthering the open source community, is open sourcing the [Ansible](https://docs.ansible.com/) code is uses to run Hachyderm's infrastructure, starting with a series of [postgresql](https://www.postgresql.org/) related roles. 

One of the biggest challenges facing larger Mastodon instances is proper caretaking of its database(s). Databases as a Service (DBaaS) can be prohibitively expensive for many organizations, pushing these teams toward self-hosting. Self-hosting successfully, especially at scale, requires getting many small details right or risking poor performance -- or worse -- lost data. 

Hachyderm has been through it all: we've gone from a tiny server in Kris Nova's basement -- hi, `alice`! -- to one of the largest Fediverse instances today. Along the way, we've broken postgres in countless ways, lost data, and restored data. We've learned **a lot**, and we've baked in what we've learned about reliably and safely running one of the Fediverse's larger [Mastodon](https://joinmastodon.org/) sites into these roles.

The roles in this collection install and configure postgresql in both standalone and multi-node layouts (primary + replicas). They also configure regular backups, a key component of the [Mastodon Server Covenant](https://joinmastodon.org/covenant).

Included in [this collection](https://galaxy.ansible.com/ui/repo/published/hachyderm/general/docs/) are roles to configure:

- [postgresql](https://www.postgresql.org/)
- [pgbackrest](https://pgbackrest.org/) for backup management and [pgbackrest_exporter](https://github.com/woblerr/pgbackrest_exporter) for metrics
- [pgbouncer](https://www.pgbouncer.org/) for connection management and [pgbouncer_exporter](https://github.com/prometheus-community/pgbouncer_exporter) for metrics

Hachyderm has already replaced its internal use of these roles with the publicly published collection. Furthermore, the collection comes with a battery of [molecule](https://docs.ansible.com/projects/molecule/) tests to validate the collection's functionality and is part of Hachyderm's continous integration release pipeline.

In the future, we plan to release additional Ansible roles, including:

- Basic VM setup and hardening
- Mastodon on VM installation and configuration (web, streaming, sidekiq)
- Hachyderm's edge CDN reference architecture

You can read more here about [Hachyderm](https://hachyderm.io/about) and the [Nivenly Foundation](https://nivenly.org/about/).
