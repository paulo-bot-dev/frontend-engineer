# Frontend Engineer — OpenClaw Agent Template

A frontend engineer agent that builds React + TypeScript apps with Vite and serves them live through Pinata port forwarding.

## What You Get

- **React 19 + TypeScript + Vite + React Router** — ships with a working starter app at `/app`
- **Live preview** — port 5173 forwarded so you can see what the agent builds in your browser
- **ClawHub skills** — includes `react-performance` for frontend performance guidance
- **Bootstrap flow** — on first run, the agent gets to know you and your preferences
- **Memory system** — daily logs + curated long-term memory across sessions

## Structure

```
manifest.json                # Agent config, routes, scripts, skills
workspace/
  projects/
    react-app/               # Vite + React 19 + TS + React Router starter
  BOOTSTRAP.md               # First-run conversation guide
  SOUL.md                    # Agent personality and engineering principles
  AGENTS.md                  # Workspace conventions, memory system, safety rules
  IDENTITY.md                # Agent identity
  USER.md                    # Notes about the human
  TOOLS.md                   # Environment and stack notes
  HEARTBEAT.md               # Periodic tasks
```

## Usage

Import this repo when creating an agent on [Pinata Agents](https://agents.pinata.cloud). On boot, the agent installs deps (`scripts.build`) and starts the Vite dev server (`scripts.start`) on port 5173, accessible at `/app`.

The starter app includes React Router with client-side navigation (Home + Dashboard routes) and is pre-configured for Pinata's reverse proxy (correct `base` path, host binding, and port settings).
