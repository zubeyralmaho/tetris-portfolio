# nomos

**GitHub:** [github.com/zubeyralmaho/nomos](https://github.com/zubeyralmaho/nomos)  
**License:** MIT | **Commits:** 46 | **Status:** Open source  
**Stack:** Rust, eBPF/XDP, WASM, NLP, SIMD (AVX2/SSE2/NEON)

---

## Problem

APIs change. Field names get renamed. Types shift. Nesting structures evolve. In any system with multiple services or external API dependencies, schema drift is inevitable — and every drift breaks downstream consumers.

The standard response is painful: detect the breakage, file a ticket, update the consumer code, redeploy. Each incident costs developer time, causes downtime, and creates a coordination problem across teams.

The question nobody had answered: *what if the proxy could just fix it automatically, at runtime, without any code changes or redeployments?*

---

## Solution

**nomos** is a transparent reverse proxy that **auto-heals JSON API schema drift at runtime** — with no code changes and no redeployments required.

nomos sits in front of your API. When a response comes back with a renamed field, a changed type, or a restructured object, nomos detects the drift, heals it to match the expected schema, and passes the corrected response to the consumer — transparently, in under a millisecond.

---

## Technical Architecture

### NLP Ensemble — Schema Drift Detection

nomos uses a **5-algorithm NLP ensemble** to detect and resolve field renames and schema changes:

| Algorithm | Role |
|-----------|------|
| Jaro-Winkler | String similarity for short field names |
| Levenshtein distance | Edit distance for typo-style renames |
| TF-IDF N-grams | Frequency-weighted semantic matching |
| Synonym dictionary | Domain-aware field name equivalence |
| Trigram embeddings | Subword-level semantic similarity |

The ensemble combines these signals with a confidence scoring model to decide whether to heal, flag, or pass through.

### Performance Engineering

- **eBPF/XDP kernel-level packet classification** — fast-path bypass for requests that don't need healing, processed at kernel level before reaching userspace
- **SIMD-accelerated JSON parsing** — AVX2, SSE2, and NEON intrinsics for vectorized byte scanning
- **Zero-copy hot path** — healing runs without unnecessary memory allocation
- **Arena allocation** — memory pooling for the healing pipeline to minimize GC pressure
- **WASM healer hot-swap** — healing logic compiled to WebAssembly, hot-swappable without service restart

### Benchmarks

| Metric | Result |
|--------|--------|
| p99 latency | **0.22ms** |
| Throughput | **5,146 RPS** |

### Test Suite

- 46 unit tests
- Chaos suite (fault injection, malformed inputs)
- Stress tests (sustained high-throughput load)

---

## Why It Matters

nomos pushes into territory that most engineers never touch:

- **Kernel-level networking** — eBPF/XDP lets nomos make routing decisions before packets even reach the application layer
- **SIMD programming** — hand-tuned vectorized operations for JSON parsing, the kind of optimization typically reserved for databases and runtimes
- **Applied NLP in a systems context** — a 5-algorithm ensemble running at sub-millisecond latency is not a typical ML use case; it's NLP as infrastructure
- **Zero-downtime schema evolution** — solving a real DevOps problem (API breakage) at the infrastructure layer instead of the application layer

---

## Use Cases

- Microservice architectures with frequent API version changes
- Third-party API consumers where the upstream schema is not under your control
- Legacy system modernization where old and new schemas must coexist
- Any environment where schema drift causes downstream failures
