<div align="center">
  <p>
    <img src="marp.png#gh-light-mode-only" alt="Marp" width="450" />
    <img src="marp-dark.png#gh-dark-mode-only" alt="Marp" width="450" />
  </p>
  <p>
    <strong>Marp</strong>: Markdown Presentation Ecosystem
  </p>
</div>

**Marp** is the ecosystem to write your presentation with plain Markdown.

<div align="center">

### [🌐 Website ▶︎](https://marp.app)&emsp;|&emsp;[💬 Discussion forum ▶︎](https://github.com/marp-team/marp/discussions)&emsp;|&emsp;[😎 Awesome list ▶︎](https://github.com/marp-team/awesome-marp)

</div>

## Marp family

Our project is spread over many repos in order to focus on a limited scope per repository.

This repo (**[marp-team/marp][marp]**) is an entrance to the Marp family, and places [our website](https://marp.app/) in `/website`.

### Framework / Core

|                       Name | Description                                                                                 | Release                                                   |
| -------------------------: | :------------------------------------------------------------------------------------------ | :-------------------------------------------------------- |
|               **[Marpit]** | The skinny framework for creating slide deck from Markdown. ([marpit.marp.app])             | [![@marp-team/marpit][badge-marpit]][marpit-npm]          |
| **[Marp Core][marp-core]** | The core of Marp converter with practical features and [built-in themes][marp-core-themes]. | [![@marp-team/marp-core][badge-marp-core]][marp-core-npm] |

### Apps

|                     Name | Description                                                                                      | Release                                                |
| -----------------------: | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| **[Marp CLI][marp-cli]** | [Marp Core][marp-core] / [Marpit]'s CLI interface to convert into HTML, PDF, PPTX, and image(s). | [![@marp-team/marp-cli][badge-marp-cli]][marp-cli-npm] |

### Integrations

|                                Name | Description                                                                       | Release                                                     |
| ----------------------------------: | :-------------------------------------------------------------------------------- | :---------------------------------------------------------- |
| **[Marp for VS Code][marp-vscode]** | A [VS Code][vscode] extension to preview the slide deck written in Marp Markdown. | [![VS Marketplace][badge-marp-vscode]][marp-vscode-release] |

<details>
<summary>See outdated/inactive projects...</summary><br />

|                     Name | Description                                                      | Release                                                      |
| -----------------------: | :--------------------------------------------------------------- | :----------------------------------------------------------- |
|     [Marp Web][marp-web] | The Web interface of Marp based on [PWA] and [Preact] framework. | [![tech demo][badge-marp-web]][marp-web-site]                |
| [Marp React][marp-react] | Marp renderer component for [React].                             | [![@marp-team/marp-react][badge-marp-react]][marp-react-npm] |
|     [Marp Vue][marp-vue] | Marp renderer component for [Vue].                               | [![@marp-team/marp-vue][badge-marp-vue]][marp-vue-npm]       |

And there is a gravesite of classic Marp app in https://github.com/yhatt/marp. :ghost:

[marp-web]: https://github.com/marp-team/marp-web
[marp-react]: https://github.com/marp-team/marp-react
[marp-vue]: https://github.com/marp-team/marp-vue
[pwa]: https://en.wikipedia.org/wiki/Progressive_Web_Apps
[preact]: https://preactjs.com/
[react]: https://reactjs.org/
[vue]: https://vuejs.org/
[marp-web-site]: https://web.marp.app/
[marp-react-npm]: https://www.npmjs.com/package/@marp-team/marp-react
[marp-vue-npm]: https://www.npmjs.com/package/@marp-team/marp-vue
[badge-marp-web]: https://img.shields.io/badge/%E2%80%8B-tech%20demo-%230288d1.svg?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAUUlEQVQokWNgGD6AqePif3Sx9B2PMcQwNKFrTN/x+D9ejTBNyBphmnBqRNYE04isCatGdE1MHRf/o2vC0IhNE1PaXPwacWnCqxGfJoI2Dn4AAN0ZrMM1VUFvAAAAAElFTkSuQmCC
[badge-marp-react]: https://img.shields.io/npm/v/@marp-team/marp-react.svg?style=flat-square&logo=npm
[badge-marp-vue]: https://img.shields.io/npm/v/@marp-team/marp-vue.svg?style=flat-square&logo=npm

</details>

[yhatt/marp]: https://github.com/yhatt/marp
[marp]: https://github.com/marp-team/marp
[marpit]: https://github.com/marp-team/marpit
[marp-core]: https://github.com/marp-team/marp-core
[marp-core-themes]: https://github.com/marp-team/marp-core/tree/main/themes
[marp-cli]: https://github.com/marp-team/marp-cli
[marp-vscode]: https://github.com/marp-team/marp-vscode
[vscode]: https://code.visualstudio.com/
[marpit.marp.app]: https://marpit.marp.app/
[marpit-npm]: https://www.npmjs.com/package/@marp-team/marpit
[marp-core-npm]: https://www.npmjs.com/package/@marp-team/marp-core
[marp-cli-npm]: https://www.npmjs.com/package/@marp-team/marp-cli
[marp-vscode-release]: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode
[badge-marpit]: https://img.shields.io/npm/v/@marp-team/marpit.svg?style=flat-square&logo=npm
[badge-marp-core]: https://img.shields.io/npm/v/@marp-team/marp-core.svg?style=flat-square&logo=npm
[badge-marp-cli]: https://img.shields.io/npm/v/@marp-team/marp-cli.svg?style=flat-square&logo=npm
[badge-marp-vscode]: https://img.shields.io/visual-studio-marketplace/v/marp-team.marp-vscode.svg?style=flat-square&logo=visual-studio-code&label=Marketplace

## Ecosystem

Marp ecosystem has a lot of cool stuffs for making awesome presentation. Check out **[the awesome list of Marp](https://github.com/marp-team/awesome-marp)**. 😎

## Contributing

Marp and sub-projects are following the [contributing guideline of marp-team][contributing]. Please read this before starting work in our projects.

[contributing]: https://github.com/marp-team/.github/blob/master/CONTRIBUTING.md

## Author

Managed by [@marp-team](https://github.com/marp-team).

- <img src="https://github.com/yhatt.png" width="16" height="16"/> Yuki Hattori ([@yhatt](https://github.com/yhatt))

## Sponsors

We are supported by them! Thanks for our sponsors! :heart:

<!-- [NOTE] Sort sponsors by name when modify. -->

### Organization sponsors

<!-- Logo and links for top-tier sponsors (The image should be up to 400px on a side) -->

<p align="center">
  <a href="https://github.com/markslides"><img src="https://github.com/markslides.png" width="64" height="64" alt="@markslides" valign="middle" hspace="4" /></a>
</p>

<!-- [TODO] For mid-tier sponsors: As the same format as personal sponsors, add small icons and links to GitHub organization. -->
<!--
<p>
  <a href="https://github.com/xxxxxx"><img src="https://github.com/xxxxxx.png" width="32" height="32" alt="xxxxxx" /></a>
</p>
-->

### Personal sponsors

<!-- [TODO] Currently shows maintainer's sponsors. We should show sponsors for all Marp team members in future. -->

<p align="center">
  <img alt="Personal sponsors" src="https://yhatt.github.io/yhatt/sponsors.svg" />
</p>

> Do you want to sponsor [the member of Marp team](https://github.com/orgs/marp-team/people)? See [GitHub Sponsors](https://github.com/sponsors) profile(s) from "♥︎ Sponsor" button [at the top of repository](https://github.com/marp-team/marp).

## License

[MIT License](LICENSE)
