# CLI Command Surface Spec

## Purpose

Define the command-line interface for the agentic publishing workflow.

The CLI should expose a stable command surface through npm scripts while keeping orchestration logic in a typed internal tool rather than in dozens of ad hoc shell scripts.

## Command design principles

1. Use one primary CLI entry point.
2. Prefer noun-plus-action commands that map directly to workflow artifacts.
3. Support non-interactive execution for agents and CI.
4. Emit structured output when requested.
5. Keep commands deterministic and auditable.
6. Make release selection explicit.
7. Never hide mutable-versus-immutable transitions behind ambiguous command names.

## Recommended implementation shape

Use a single internal CLI, for example:

- `site`
- `site-cli`

Expose it through npm scripts such as:

- `npm run site -- ...`
- `npm run site:validate`
- `npm run site:build`

The CLI implementation should live in application code, not inside `package.json` script chains.

## Command groups

### Source commands

- `site source register <path>`
- `site source lint <source-id>`
- `site source list`

Purpose:

- track canonical research inputs
- validate source metadata

### Unit commands

- `site unit start <unit-id> --kind <kind> --recipe <recipe> --source <source-id>`
- `site unit freeze <unit-id>`
- `site unit request-review <unit-id> --version <version>`
- `site unit review <unit-id> --version <version> --role <role>`
- `site unit revise <unit-id> --from <version> --review <review-id>`
- `site unit approve <unit-id> --version <version>`
- `site unit retire <unit-id> --version <version>`
- `site unit show <unit-id> [--draft | --version <version>]`

Purpose:

- create and manage page-level educational unit drafts and immutable unit versions

### Visual commands

- `site visual start <visual-id> --kind <kind> --unit <unit-id>`
- `site visual freeze <visual-id>`
- `site visual generate <visual-id> --version <version>`
- `site visual request-review <visual-id> --version <version>`
- `site visual review <visual-id> --version <version> --role visual`
- `site visual revise <visual-id> --from <version> --review <review-id>`
- `site visual approve <visual-id> --version <version>`
- `site visual retire <visual-id> --version <version>`
- `site visual show <visual-id> [--draft | --version <version>]`

Purpose:

- manage image, diagram, and chart pipelines with explicit lineage and version boundaries

### Release commands

- `site release assemble <experience-id>`
- `site release review <release-id>`
- `site release approve <release-id>`
- `site release publish <release-id>`
- `site release diff <old-release> <new-release>`
- `site release list <experience-id>`

Purpose:

- create reproducible site builds from approved artifacts

### Build commands

- `site build experience <experience-id> --release <release-id>`
- `site build unit <unit-id> --version <version>`
- `site build visuals <experience-id> --release <release-id>`

Purpose:

- support partial and full rebuilds without bypassing the release model

### Validation commands

- `site validate schema`
- `site validate workflow`
- `site validate recipe <unit-id> --version <version>`
- `site validate release <release-id>`
- `site validate visuals <experience-id> --release <release-id>`

Purpose:

- catch broken references, invalid states, recipe violations, and export-hostile artifacts before publish

## Recommended npm script surface

```json
{
  "scripts": {
    "site": "tsx scripts/site.ts",
    "site:validate": "npm run site -- validate schema && npm run site -- validate workflow",
    "site:build": "npm run site -- build experience enterprise-ai-degree --release release-2026-04-12",
    "site:publish": "npm run site -- release publish release-2026-04-12"
  }
}
```

The exact runtime may vary, but the public script surface should stay small and memorable.

If convenience aliases are later introduced, they should resolve through explicit checked-in alias files or environment variables. They should not silently mean "latest approved release" unless that alias is itself a documented artifact.

## Output conventions

Commands should support:

- readable terminal output for humans
- `--json` for agents and CI
- exit codes aligned to success, validation failure, or blocked workflow state

## Failure modes to prevent

- package.json scripts becoming the workflow engine
- ambiguous commands that mutate multiple artifact types at once
- publish commands that skip validation
- draft commands that overwrite prior versions instead of creating new immutable snapshots
- convenience shortcuts that silently publish or build an unspecified release

## Acceptance criteria

- The CLI covers sources, units, visuals, releases, builds, and validation.
- The command model aligns directly with the repaired workflow state machine.
- The npm surface remains small while the internal CLI remains expressive.
- Agents can run the workflow non-interactively.
- Every build and publish command identifies an explicit release target.