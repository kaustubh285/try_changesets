# try_changesets

A project demonstrating Changesets configuration and workflow patterns for monorepo version management.

## Configuration Options

### Changeset configuration improvements to currect implementation

Configure your monorepo versioning behavior in [config.json](.changeset/config.json):

#### Linked Packages

Ensure packages always bump together, even if only one changes:

```json
{
  "linked": [["@try-changesets/user-app", "@try-changesets/internal-dashboard"]]
}
```

#### Fixed Packages

Automatically bump dependent packages when core packages change:

```json
{
  "fixed": [["@try-changesets/api", "@try-changesets/user-app"]]
}
```

#### Ignore Patterns

Skip versioning for specific folders:

```json
{
  "ignore": ["@try-changesets/docs", "@try-changesets/examples"]
}
```

### Package Configuration

#### Private Packages

Track versions for internal apps without publishing:

```json
{
  "name": "@try-changesets/internal-dashboard",
  "version": "1.2.0",
  "private": true
}
```

## Workflow Integration

### Git Tagging

Add automated tagging to your CI/CD workflow:

```yaml
- name: Create git tags
    run: |
        # After versioning
        bun run version-packages

        # Create tags for each package
        for dir in packages/*; do
            PKG_NAME=$(node -p "require('./$dir/package.json').name")
            PKG_VERSION=$(node -p "require('./$dir/package.json').version")
            git tag "${PKG_NAME}@${PKG_VERSION}"
        done

        git push --tags
```
