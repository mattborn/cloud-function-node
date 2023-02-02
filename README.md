## Dev locally

```
npm i && npx functions-framework --target=hello
```

## Deploy

```
gcloud functions deploy hello --allow-unauthenticated --runtime=nodejs18 --trigger-http
```

## Lessons learned

There were quite a few gotchas doing something as simple as building a Cloud Function that uses an asyncronous `fetch`, so I’ll share two of them here:

- I thought I could deploy since it’s fast and just use the Google Cloud logs to work out any issues. Nope, Google’s logs are largely unhelpful so rely on `npx functions-framework --target=hello` to debug locally.
- The function name declared in `functions.http('hello',` must match `gcloud functions deploy hello` or the deployment will fail with no meaningful error message.
- `node-fetch-commonjs` worked and `node-fetch` didn’t.
- My deployments were failing with a user code error. After a dozen attempts to deploy and going line-by-line in a new function, I learned I just needed to delete and deploy before it was successful. ¯\\\_(ツ)\_/¯
