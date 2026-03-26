# Frontend Engineer — OpenClaw Agent Template

A frontend engineer agent that builds React + TypeScript apps with Vite and serves them live through Pinata port forwarding.

## What You Get

- **React + TypeScript + Vite** — ships with a hello-world starter project ready to go
- **Live preview** — port 5173 forwarded so you can see what the agent builds in your browser
- **Bootstrap flow** — on first run, the agent gets to know you and your preferences
- **Memory system** — daily logs + curated long-term memory across sessions

## Structure

```
manifest.json                # Agent config, routes, scripts
workspace/
  projects/
    hello-world/             # Vite + React + TS starter project
  BOOTSTRAP.md               # First-run conversation guide
  SOUL.md                    # Agent personality and engineering principles
  AGENTS.md                  # Workspace conventions, memory system, safety rules
  IDENTITY.md                # Agent identity
  USER.md                    # Notes about the human
  TOOLS.md                   # Environment and stack notes
  HEARTBEAT.md               # Periodic tasks
```

## Usage

Import this repo when creating an agent on [Pinata Agents](https://agents.pinata.cloud). On boot, the agent installs deps (`scripts.build`) and starts the Vite dev server (`scripts.start`) with HMR on port 5173, accessible at `/app`.
