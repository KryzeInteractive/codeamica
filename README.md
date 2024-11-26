## Getting Started

```bash
bun dev
bun run lint
```

# Build app

For web

```bash
bun run build
```

For mobile app Android

```bash
bun run build
bun cap sync
bun cap open android
```

## commit

- fetch update form main branch before create new branch.
- when update code on a branch that is merged, merge main branch into the branch you are working on to receive latest update before working.
- rerun bun install everytime you fetch or merge main into your branch

create branch name:
feature/feature-name
EX: feature/add-nav-bar

bugfix/bug-name
EX: bugfix/navbar-dont-show-up

update/update-name
EX: update/navbar

when finish task, create pull request and select pm(me) as the reviewer
