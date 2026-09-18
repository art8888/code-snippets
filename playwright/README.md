# Playwright Helpers

A collection of reusable helper functions for Playwright tests.

The purpose of this project is to keep common Playwright actions in one place, so they can be reused across multiple tests instead of duplicating the same code.

## Helpers

### - `openLinkInNewTab`

checks if lnk launches a new browser tab and returns the new Playwright `Page` instance.

### - `logStep`

Wraps an action in a Playwright test step using `test.step()`.

This helper makes test reports easier to read by giving individual actions descriptive names. It can also return the result of the provided action, allowing it to be used with functions that return a value.

Example:
```ts
await logStep('Open Playwright link', async () => {
  await newTabLink.click();
});
```

### - `closeCookies`
Automatically checks if browser has cookies popup enabled notification and closes it's to avoid conflicting.

Runs before each tests

## Tests
- is open in new page
- is excel file downloads
