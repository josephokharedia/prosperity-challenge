# React Refactor Interview Challenge

Welcome to our refactoring repo.
Here you will find a [Next.js](https://nextjs.org/) app, written with [TypeScript](https://www.typescriptlang.org/), using [styled-components](https://styled-components.com/) and an [API Route](https://nextjs.org/docs/api-routes/introduction).

The app itself is a very basic counter, which is connected to a backend (the API Route).

The app generally works as expected, but nonetheless there are a bunch of stylistic, semantic and accessibility issues, as well as broken edge cases and design flaws.

## Exercise

### Part 1

How would you improve this?

### Part 2

Imagine you and a colleague are tasked to implement a new feature, that allows multiple clients to use the counter app.

Currently, with two clients interacting with the counter at the same time, we see the following behaviour:

1. Client A increments by 1 (Count is now **1**)
2. Client B: increments by 1 (Count is now **1**)

As you can see, the Count is not correct, it should be **2**.

The expected behaviour would look something like this:

1. Client A increments by 1 (Count is now **1**)
2. Client B: increments by 1 (Count is now **2**)

Pairing with your colleague (someone from the current interview, sharing their screen) that will write the code (drive), give instructions (navigate) to explore, debug and implement the requested behaviour.

## Getting started

This is a standard Next.js setup.

```sh
npm install
npm run dev
```

The only two files really relevant for this exercise are [`pages/index.tsx`](pages/index.tsx) and [`pages/api/count.tsx`](pages/api/count.tsx).
