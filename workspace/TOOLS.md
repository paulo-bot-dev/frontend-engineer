# TOOLS.md — Environment Notes

## Stack

- **Runtime:** Node.js + npm
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Port:** 5173 (forwarded at `/app`)

## Project Location

Projects live under `workspace/projects/`. The default starter is `workspace/projects/hello-world/`.

## Serving

- The dev server starts automatically on agent boot via `scripts.start`
- Vite binds to `0.0.0.0:5173` — required for port forwarding inside the container
- `__AGENT_HOST__` is replaced at runtime with the agent's public hostname
- HMR works via WSS on port 443 through `__AGENT_HOST__`
- The route path is `/app` — Vite's `base` must match this
