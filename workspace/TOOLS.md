# TOOLS.md — Environment Notes

## Stack

- **Runtime:** Node.js + npm
- **Framework:** React 19 + TypeScript + React Router
- **Bundler:** Vite
- **Port:** 5173 (forwarded at `/app`)

## Project Location

Projects live under `workspace/projects/`. The default starter is `workspace/projects/react-app/`.

## Serving

- The dev server starts automatically on agent boot via `scripts.start`
- Vite binds to `0.0.0.0:5173` — required for port forwarding inside the container
- HMR is disabled — doesn't work through the gateway. Changes take effect on page reload.
- The route path is `/app` — Vite's `base` must match this
- `allowedHosts: true` in vite config — required to accept requests from the proxy hostname
- `strictPort: true` — fail if port 5173 is taken rather than picking a random one

## Port Forwarding

The container runs behind a reverse proxy. The `path` in `manifest.json` routes is preserved (not stripped) when forwarded. So if the route path is `/app`, the request arrives at the container as `/app/...` — Vite's `base` must match.

## Skills

This agent includes the `react-performance` ClawHub skill for frontend performance guidance.
