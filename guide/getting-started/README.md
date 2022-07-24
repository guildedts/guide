# Preparation

## Installing Node.JS

If not already, install [Node.JS](https://nodejs.org). This is a **required step** to be able to use **Guilded.TS** as we will be using node's **package manager** to install **Guilded.TS**.

::: tip
To check if you already have Node.JS installed on your machine, run `node -v` in your terminal. If it shows a version, then you're good to go (around **v16** is a recommended version of **Node.JS** at the moment since we do not know a specific version quite yet).
:::

## Initiating a project

:::: code-group
::: code-group-item NPM

```sh:no-line-numbers
npm init
```

:::
::: code-group-item Yarn

```sh:no-line-numbers
yarn init
```

:::
::: code-group-item PNPM

```sh:no-line-numbers
pnpm init
```

:::
::::

## Installing required dependencies

After you have setup your project, you can now finally install **Guilded.TS** along with the **Guilded.TS framework**. We will be using the framework for its built-in command and event handling.

:::: code-group
::: code-group-item NPM

```sh:no-line-numbers
npm install guilded.ts @guildedts/framework
```

:::
::: code-group-item Yarn

```sh:no-line-numbers
yarn add guilded.ts @guildedts/framework
```

:::
::: code-group-item PNPM

```sh:no-line-numbers
pnpm add guilded.ts @guildedts/framework
```

:::
::::
