---
title: "hachyderm.general Ansible Collection v1.0.0 Released"
linkTitle: "hachyderm.general Ansible Released"
date: 2026-01-31
author: Preston Doster ([@esk@hachyderm.io](https://hachyderm.io/@esk))
---

[Hachyderm](https://hachyderm.io) is open sourcing the [Ansible](https://docs.ansible.com/) code is uses to run Hachyderm's infrastructure, starting with a series of [postgresql](https://www.postgresql.org/) related roles. These roles help install and configure postgresql in both standalone and multi-node layouts using proven practices demonstrated to reliably and safely run one of the Fediverse's larger [Mastodon](https://joinmastodon.org/) sites.

Included in [this collection](https://galaxy.ansible.com/ui/repo/published/hachyderm/general/docs/) are roles to configure:

- [postgresql](https://www.postgresql.org/)
- pgbackrest for backup management and pgbackrest_exporter for metrics
- pgbouncer for connection management and pgbouncer_exporter for metrics

The collection comes with a battery of molecule tests to validate the collection's functionality and is part of Hachyderm's automated continous integration release pipeline.
