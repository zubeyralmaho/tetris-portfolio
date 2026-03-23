# spatiad

**GitHub:** [github.com/zubeyralmaho/spatiad](https://github.com/zubeyralmaho/spatiad)  
**npm:** [@spatiad/sdk](https://www.npmjs.com/package/@spatiad/sdk)  
**License:** MIT | **Commits:** 64 | **Status:** Open source, production-grade  
**Stack:** Rust, TypeScript, WebSocket, Uber H3, Docker, Kubernetes, GitHub Actions

---

## Problem

Real-time dispatch systems — the kind that match a driver to a job the moment a request comes in — are notoriously complex to build and even harder to deploy. Most implementations depend on a heavy stack: external databases, Redis for pub/sub, message brokers, and multiple coordinating services. Each dependency adds latency, operational overhead, and potential failure points.

There was no lightweight, self-contained, production-ready spatial dispatch engine that teams could drop into their infrastructure without managing that complexity.

---

## Solution

**spatiad** is a production-grade open-source spatial dispatch engine that matches drivers (or any mobile agents) to jobs in real-time using Uber's H3 hexagonal geospatial indexing — shipped as a **single Rust binary with zero external dependencies**.

No database. No Redis. No message broker. One binary.

---

## Technical Architecture

### Core Engine
- **Geospatial indexing:** Uber's H3 hexagonal grid — nearest-neighbor search with configurable radius expansion, enabling efficient spatial queries at scale
- **Real-time sessions:** WebSocket-based driver sessions — persistent connections for live location updates and job offer delivery
- **State machine:** Full offer lifecycle management — pending → accepted / rejected / expired, with correct concurrency handling

### Performance & Reliability
- **Zero external dependencies** — entire system ships as a single compiled Rust binary
- **HMAC-SHA256 signed webhooks** — tamper-proof event delivery with exponential backoff retry
- **Sliding-window rate limiting** — built-in abuse protection
- **Cursor-paginated event timeline** — efficient audit log for all dispatch events

### Deployment
- Docker, Kubernetes, and systemd deployment configurations included
- GitHub Actions CI/CD pipeline
- Full architecture documentation

---

## Multi-Language SDK

spatiad ships with first-class SDK support across 6 languages:

| Language | Package |
|----------|---------|
| TypeScript | `@spatiad/sdk` on npm |
| Go | Native SDK |
| Java | Native SDK |
| Kotlin | Native SDK |
| Python | Native SDK |
| Swift | Native SDK |

The TypeScript SDK is published to npm and production-ready. All SDKs follow the same API contract, enabling polyglot teams to integrate without friction.

---

## Why It Matters

spatiad demonstrates what's possible when systems-level thinking meets product engineering:

- **API design at scale** — A dispatch protocol designed to be consumed across 6 language ecosystems
- **Performance engineering** — Rust's ownership model and zero-copy patterns used to eliminate allocation overhead in the hot path
- **Open-source ownership** — MIT licensed, contribution guide, CI/CD, and deployment docs — not a toy project, but something teams can actually run in production

---

## Use Cases

- Ride-hailing and on-demand driver apps
- Delivery and logistics dispatch
- Field service agent routing
- Any real-time spatial matching problem
