# AGENTS.md

## Project overview

- This is a personal portfolio built with Next.js App Router, React,
  TypeScript, next-intl, SCSS Modules, HeroUI, and Storybook.
- Keep route files under `src/app` thin. Page composition belongs in
  `src/2_pages`.
- Preserve the existing numbered, Feature-Sliced-style source structure.

## Architecture

- Keep the existing layer direction:
  pages -> widgets -> features -> entities -> shared.
- Do not import from higher-level layers into lower-level layers.
- Import slices through their public `index.ts` exports when available.
- Prefer Server Components. Add `"use client"` only when browser APIs,
  state, effects, or interactive hooks require it.
- Reuse components from `src/6_shared/ui` before introducing new primitives.

## Internationalization

- Supported locales are English (`en`), Russian (`ru`), and Japanese (`ja`).
- When adding or changing user-facing text, update all corresponding
  `local.en.json`, `local.ru.json`, and `local.ja.json` files.
- Keep translation files colocated with their component.
- Use the namespace convention produced by `src/i18n/parse-locale-path.ts`.

## UI and styling

- Use colocated `*.module.scss` files for component styles.
- Follow the existing BEM-like class naming convention.
- Preserve accessibility labels and semantic HTML.
- Add or update Storybook stories when reusable component behavior changes.
- Do not add a production dependency without explicit user approval.

## Commands

- Start containers: `make up`
- Install dependencies in the container: `make install-ui`
- Start the application: `make run-ui`

## Verification

- Never run code verification commands. This includes, but is not limited to,
  builds, linters, type checks, tests, format checks, Storybook, and development
  servers used for verification.
- Do not perform manual runtime or browser verification.
- The user will review the changes and report any errors.
- Do not claim that checks passed or describe skipped checks in the final
  response.

## Code comments

- Never add comments to code, including explanatory comments, TODOs,
  documentation comments, commented-out code, and comments in example snippets.
- Write code that is understandable without comments. If an explanation is
  needed, provide it outside the code block.
- Preserve pre-existing comments unless removing or changing them is explicitly
  part of the task.

## Git safety

- Agents may run read-only Git commands for inspection, such as `git status`,
  `git diff`, `git log`, `git show`, and `git branch --show-current`.
- Do not run any Git command that changes the worktree, index, refs, branches,
  tags, or history unless the user explicitly requests that operation.
- A request to edit, fix, refactor, or implement code does not authorize
  staging files, creating commits, changing branches, or advancing an
  in-progress Git operation.
- In particular, do not run `git add`, `git commit`, `git commit --amend`,
  `git reset`, `git restore`, `git checkout`, `git switch`, `git stash`,
  `git clean`, `git merge`, `git rebase`, `git cherry-pick`, `git revert`,
  `git tag`, `git branch -d`, `git branch -D`, `git pull`, `git push`, or
  force-push variants without explicit user authorization.
- If a merge, rebase, or cherry-pick is already in progress, only inspect and
  report its state. Do not run `--continue`, `--abort`, or `--skip` unless the
  user explicitly asks for that exact action.
- Do not bypass these restrictions with Git plumbing commands or equivalent
  filesystem operations.
- When authorization is ambiguous, stop and ask before changing Git state.

## Change discipline

- Keep changes focused on the requested task.
- Preserve unrelated user changes.
- Do not edit generated directories such as `.next`, `out`, or Storybook build
  output.
