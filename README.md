# magpie-remove-usage-extenstion

Magpie gateway middleware that removes every OpenAI compatible streaming chunk where `choices` is an empty array.

This handles responses like:

```json
{"choices": [], "usage": {"completion_tokens": 178}}
```

The middleware returns `null` for every event whose `choices` field is an empty array, which tells Magpie to omit it. All other streamed events, including `data: [DONE]`, pass through unchanged.

## Install from GitHub

```sh
magpie plugin add github:waymedev/magpie-remove-usage-extenstion
```

You can also add `waymedev/magpie-remove-usage-extenstion` from Magpie's plugin UI.

## Update or remove

```sh
magpie plugin update
magpie plugin off magpie-remove-usage-extenstion
magpie plugin rm magpie-remove-usage-extenstion
```

## Development

```sh
npm test
```

The repository name intentionally preserves the requested spelling: `extenstion`.
