# Vue + TypeScript export issue

A repo to repro an export error on [Vue](https://vuejs.org/) 2.5 and [TypeScript](https://www.typescriptlang.org/).

```
Default export of the module has or is using private name 'VueConstructor'
```

**A Question on Forum:** https://forum.vuejs.org/t/default-export-of-the-module-has-or-is-using-private-name-vueconstructor/

## Step to repro

Change `compilerOptions` -> `declaration` value between `true` and `false`, then `yarn build` or `yarn dev`

Error will happen when `declaration` is `true`.

> Thanks [**bbuchanan**](https://forum.vuejs.org/u/bbuchanan) for the cause.
