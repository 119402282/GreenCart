# Green Cart Docs

Secret and publishable keys
All accounts have a total of four API keys by default – two for test mode and two for live mode:

Test mode secret key: Use this key to authenticate requests on your server when in test mode. By default, you can use this key to perform any API request without restriction.
Test mode publishable key: Use this key for testing purposes in your web or mobile app’s client-side code.
Live mode secret key: Use this key to authenticate requests on your server when in live mode. By default, you can use this key to perform any API request without restriction.
Live mode publishable key: Use this key, when you’re ready to launch your app, in your web or mobile app’s client-side code.

// for chrome extension
<https://youtu.be/eknDtkl_98c>

## Setup for project

 new build tool turbopack , must be changed in the package.json

 New routing system
 app/ => directory based .. page.tsx is the on;y thing that can be accessed externally
 page.tsx, layout.tsx, loading.tsx, error.tsx, head.tsx  
 [id] => dynamic route
 (about) => can create directories but url would be one level above the current
 eg home/(view)/shop/page.js => home/shop

 Old routing system

 Data Fetching now:

 react server components... ie SSR, rendered on server.. must be async await
 By default a site is staically generated.. not SSR or Incremental
 we provide options as follows: fetch("https://www.google.com/", {cache: 'no-store'})
 options is an object we pass in.
 SSR => {cache: 'no-store'}
 ISR => {next: {revalidate: 420}}
 we can do incremental rendering (time based) by using
 loading js file can show content while loading in items from a db
 we can use fetch and async await.

 api routes in the new next?

 we were using getServerSideProps...

 ---------
`npx create-next-app@latest --ts greencart`
 download pocketbase.exe and run in the root directory of the project with the following command:
./pocketbase serve

```bash
npm i -g prisma
npx prisma init
```

 a collection is a new table that requires certain feilds.. sqlite based solution.

 in package.json change the dev script to be: "dev": "next dev --turbo"

 global.css file applies to everything.. maybe tailwinds instead.

 next13 has variables it exports from each page that describes the caching behaviour.
 These are useful to use if we are not using fetch but do need to change caching behavior

 if we add 'use client'; at the top of our app, it will be a normal client side react component.

## Todo list

// feature add.. interactivity etc. for fyp
add numbers of trees into the logo .. or number of leaves based on actual number>>
