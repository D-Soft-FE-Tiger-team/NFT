# nft-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Commit code

```sh
npm run cm
```
Sellect commit type
```sh
All lines except first will be wrapped after 100 characters.
? ***************** 🎼🎧🎉 Select the type of change that you're committing *****************: 
  👷 build:     Add or update regards to build process 
  🐎 ci:        Add or update regards to CI process 
  ✨ feat:      Adding a new feature 
❯ 🐛 fix:       Fixing a bug 
  🚧 wip:       Work in progress 
  💄 style:     Add or update styles, ui or ux 
  🔨 refactor:  Code change that neither fixes a bug nor adds a feature 

```
Viết mô tả ngắn cho commit:
```sh
? 🔖 Subject - Write a SHORT, IMPERATIVE tense description of the change:
 setup eslint & prettier & commitlint

```
Viết mô tả dài cho commit (optional)
```sh
? 📝 Body - Provide a LONGER description of the change (optional). Use "|" to break new line:
 // này thì tuỳ chọn nếu bạn nào muốn viết chi tiết thì ghi ở đây

```
Viết số issue trong task của mình (optional)
```sh
? 🔚 List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:
  #Issue-1

```

Confirm your commit
```sh

###--------------------------------------------------------###
:bug: fix(all platforms): setup eslint \& prettier \& commitlint
###--------------------------------------------------------###

? 😄 Are you sure you want to proceed with the commit above? (Yneh) 

```
