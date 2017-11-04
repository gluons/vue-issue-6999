# Vue + TypeScript export issue

A repo to repro an export error on [Vue](https://vuejs.org/) 2.5 and [TypeScript](https://www.typescriptlang.org/).

```
Default export of the module has or is using private name 'VueConstructor'
```

**A Question on Forum:** https://forum.vuejs.org/t/default-export-of-the-module-has-or-is-using-private-name-vueconstructor/

## Step to repro

Change `compilerOptions` -> `declaration` config in [**`tsconfig.json`**](./tsconfig.json) between `true` and `false`.  
Then `yarn build` or `yarn dev`.

Error will happen when `declaration` is `true`.

> Thanks [**bbuchanan**](https://forum.vuejs.org/u/bbuchanan) for the cause.

## An issue on Vue

[vuejs/vue#6999](https://github.com/vuejs/vue/issues/6999)
