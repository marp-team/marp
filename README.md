<div align="center">
  <p>
    <img src="marp.png" alt="Marp" width="500" />
  </p>
  <p>
    <strong>Marp</strong>: Markdown Presentation Ecosystem
  </p>
</div>

**Marp** is the ecosystem to write your presentation with plain Markdown.

## Marp family

Our projects have consisted of manyrepos in order to focus limited scope per repository. Active projects are shown as emphasized in following list.

This repo (**[@marp-team/marp][marp]**) is an entrance to Marp family, and places [our website](https://marp.app/).

### Framework / Core

|                       Name | Description                                                                        | Release                                                   |
| -------------------------: | :--------------------------------------------------------------------------------- | :-------------------------------------------------------- |
|               **[Marpit]** | The skinny framework for creating slide deck from Markdown. ([marpit.marp.app])    | [![@marp-team/marpit][badge-marpit]][marpit-npm]          |
| **[Marp Core][marp-core]** | The core of Marp converter with practical features and [themes][marp-core-themes]. | [![@marp-team/marp-core][badge-marp-core]][marp-core-npm] |

### Apps

|                     Name | Description                                                                                      | Release                                                |
| -----------------------: | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| **[Marp CLI][marp-cli]** | [Marp Core][marp-core] / [Marpit]'s CLI interface to convert into HTML, PDF, PPTX, and image(s). | [![@marp-team/marp-cli][badge-marp-cli]][marp-cli-npm] |
|     [Marp Web][marp-web] | The main interface of Marp based on [PWA] and [Preact] framework.                                | [![tech demo][badge-marp-web]][marp-web-site]          |
|             Marp Desktop | The desktop client for [Marp Web][marp-web-site] for replacing [yhatt/marp].                     | ![PLANNED][badge-planned]                              |

### Integrations

|                           Name | Description                                                                       | Release                                                      |
| -----------------------------: | :-------------------------------------------------------------------------------- | :----------------------------------------------------------- |
| **[Marp VSCode][marp-vscode]** | A [VS Code][vscode] extension to preview the slide deck written in Marp Markdown. | [![VS Marketplace][badge-marp-vscode]][marp-vscode-release]  |
|       [Marp React][marp-react] | Marp renderer component for [React].                                              | [![@marp-team/marp-react][badge-marp-react]][marp-react-npm] |
|           [Marp Vue][marp-vue] | Marp renderer component for [Vue].                                                | [![@marp-team/marp-vue][badge-marp-vue]][marp-vue-npm]       |

[yhatt/marp]: https://github.com/yhatt/marp
[marp]: https://github.com/marp-team/marp
[marpit]: https://github.com/marp-team/marpit
[marp-core]: https://github.com/marp-team/marp-core
[marp-core-themes]: https://github.com/marp-team/marp-core/tree/master/themes
[marp-cli]: https://github.com/marp-team/marp-cli
[marp-web]: https://github.com/marp-team/marp-web
[marp-vscode]: https://github.com/marp-team/marp-vscode
[marp-react]: https://github.com/marp-team/marp-react
[marp-vue]: https://github.com/marp-team/marp-vue
[pwa]: https://en.wikipedia.org/wiki/Progressive_Web_Apps
[preact]: https://preactjs.com/
[electron]: https://electronjs.org/
[vscode]: https://code.visualstudio.com/
[react]: https://reactjs.org/
[vue]: https://vuejs.org/
[marpit.marp.app]: https://marpit.marp.app/
[marpit-npm]: https://www.npmjs.com/package/@marp-team/marpit
[marp-core-npm]: https://www.npmjs.com/package/@marp-team/marp-core
[marp-cli-npm]: https://www.npmjs.com/package/@marp-team/marp-cli
[marp-web-site]: https://web.marp.app/
[marp-vscode-release]: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode
[marp-react-npm]: https://www.npmjs.com/package/@marp-team/marp-react
[marp-vue-npm]: https://www.npmjs.com/package/@marp-team/marp-vue
[badge-marpit]: https://img.shields.io/npm/v/@marp-team/marpit.svg?style=flat-square&logo=npm
[badge-marp-core]: https://img.shields.io/npm/v/@marp-team/marp-core.svg?style=flat-square&logo=npm
[badge-marp-cli]: https://img.shields.io/npm/v/@marp-team/marp-cli.svg?style=flat-square&logo=npm
[badge-marp-web]: https://img.shields.io/badge/%E2%80%8B-tech%20demo-%230288d1.svg?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAUUlEQVQokWNgGD6AqePif3Sx9B2PMcQwNKFrTN/x+D9ejTBNyBphmnBqRNYE04isCatGdE1MHRf/o2vC0IhNE1PaXPwacWnCqxGfJoI2Dn4AAN0ZrMM1VUFvAAAAAElFTkSuQmCC
[badge-marp-vscode]: https://img.shields.io/visual-studio-marketplace/v/marp-team.marp-vscode.svg?style=flat-square&logo=visual-studio-code&label=Marketplace
[badge-marp-react]: https://img.shields.io/npm/v/@marp-team/marp-react.svg?style=flat-square&logo=npm
[badge-marp-vue]: https://img.shields.io/npm/v/@marp-team/marp-vue.svg?style=flat-square&logo=npm
[badge-planned]: https://img.shields.io/badge/-PLANNED-lightgrey.svg?style=flat-square
[badge-wip]: https://img.shields.io/badge/-Work%20in%20progress-lightgrey.svg?style=flat-square

## Examples

### Starter

- **[Marp CLI example](https://yhatt-marp-cli-example.netlify.com/)** by [@yhatt](https://github.com/yhatt) - A good starter to write and host Marp slide with [GitPitch](https://gitpitch.com/) style powered by [Netlify](https://www.netlify.com/). (https://github.com/yhatt/marp-cli-example)

### Community

- [Reflection in Qt and Beyond](https://github.com/tomisaacson/reflection-in-Qt) by [@tomisaacson](https://github.com/tomisaacson)
- [Marp GitHub Pages Action](https://alexsci.com/test-marp-action) by [@ralexander-phi](https://github.com/ralexander-phi)
- [Teaching theme for Marp](https://github.com/eyssette/teaching-theme-for-marp) by [@eyssette](https://github.com/eyssette)

<!-- - [Title](https://example.com/) by [@username](https://github.com/username) -->

Let us know if you have created an awesome slide deck with Marp ecosystem! [Edit README.md and send pull request.](https://github.com/marp-team/marp/edit/master/README.md)

<!-- NOTE: The slide deck created by outdated yhatt/marp desktop app cannot add to examples. -->

## Contributing

Marp and sub-projects are following the [contributing guideline of marp-team][contributing]. Please read this before starting work in our projects.

[contributing]: https://github.com/marp-team/.github/blob/master/CONTRIBUTING.md

## Author

Managed by [@marp-team](https://github.com/marp-team).

- <img src="https://github.com/yhatt.png" width="16" height="16"/> Yuki Hattori ([@yhatt](https://github.com/yhatt))

## Sponsors

We are supported by them! Thanks for our sponsors! :heart:

<!-- Name and icons (Top-tier sponsors) -->
<table>
  <tr align="center">
    <td>
      <a href="https://github.com/junta-m"><img src="https://github.com/junta-m.png" width="64" height="64" alt="junta-m is sponsored yhatt" valign="middle"/></a>
    </td>
  </tr>
  <tr>
    <th><a href="https://github.com/junta-m">junta-m</a></th>
  </tr>
</table>

<!-- Small icons (Mid-tier sponsors) -->
<p>
  <a href="https://github.com/pataiji"><img src="https://github.com/pataiji.png" width="32" height="32" alt="pataiji is sponsored yhatt" /></a>
  <a href="https://github.com/miyachik"><img src="https://github.com/miyachik.png" width="32" height="32" alt="miyachik is sponsored yhatt" /></a>
  <a href="https://github.com/tsuemura"><img src="https://github.com/tsuemura.png" width="32" height="32" alt="tsuemura is sponsored yhatt" /></a>
  <a href="https://github.com/mrkn"><img src="https://github.com/mrkn.png" width="32" height="32" alt="mrkn is sponsored yhatt" /></a>
</p>

> Do you want to sponsor [the member of Marp team](https://github.com/orgs/marp-team/people)? See [GitHub Sponsors](https://github.com/sponsors) profile(s) from "♥︎ Sponsor" button [at the top of repository](https://github.com/marp-team/marp).

## License

[MIT License](LICENSE)
