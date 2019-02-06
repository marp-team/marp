<div align="center">
  <p>
    <img src="marp.png" alt="Marp" width="500" />
  </p>
  <p>
    <strong>Marp</strong>: Markdown Presentation Ecosystem
  </p>
</div>

> This repository is the entrance of **_next version of Marp_ (Marp Next)**.
>
> Refer to **[yhatt/marp]** when you are looking for pre-released desktop app. However, keep in your mind that _it has no longer been developed_.

---

**Marp** is the ecosystem to write your presentation with plain Markdown.

## Marp family

Our projects have consisted of manyrepos in order to focus limited scope per repository.

This repo (**[@marp-team/marp][marp]**) is an entrance to Marp family. In the future, it will host [our website](https://marp.app/), and place project-wide utilities by the monorepo structure.

### Framework / Core

|                             Name | Description                                                                        | Release                                                   |
| -------------------------------: | :--------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| **[Marpit]** ([marpit.marp.app]) | The skinny framework for creating slide deck from Markdown.                        | [![@marp-team/marpit][badge-marpit]][marpit-npm]          |
|       **[Marp Core][marp-core]** | The core of Marp converter with practical features and [themes][marp-core-themes]. | [![@marp-team/marp-core][badge-marp-core]][marp-core-npm] |

### Apps

|                           Name | Description                                                                             | Release                                                     |
| -----------------------------: | :-------------------------------------------------------------------------------------- | :---------------------------------------------------------- |
|       **[Marp CLI][marp-cli]** | [Marp Core][marp-core] / [Marpit]'s CLI interface to convert into HTML, PDF, and image. | [![@marp-team/marp-cli][badge-marp-cli]][marp-cli-npm]      |
|       **[Marp Web][marp-web]** | The main interface of Marp based on [PWA] and [Preact] framework.                       | [![tech demo][badge-marp-web]][marp-web-site]               |
|                   Marp Desktop | The desktop client for [Marp Web][marp-web-site] for replacing [yhatt/marp].            | ![PLANNED][badge-planned]                                   |
| **[Marp VSCode][marp-vscode]** | A [VS Code][vscode] extension to preview the slide deck written in Marp Markdown.       | [![VS Marketplace][badge-marp-vscode]][marp-vscode-release] |

### Integrations

|       Name | Description                          | Release                                            |
| ---------: | :----------------------------------- | :------------------------------------------------- |
| Marp React | Marp renderer component for [React]. | [![badge-wip]](https://kkryjmyy75.codesandbox.io/) |
|   Marp Vue | Marp renderer component for [Vue].   | [![badge-wip]](https://2x994l3roj.codesandbox.io/) |

[yhatt/marp]: https://github.com/yhatt/marp
[marp]: https://github.com/marp-team/marp
[marpit]: https://github.com/marp-team/marpit
[marp-core]: https://github.com/marp-team/marp-core
[marp-core-themes]: https://github.com/marp-team/marp-core/tree/master/themes
[marp-cli]: https://github.com/marp-team/marp-cli
[marp-web]: https://github.com/marp-team/marp-web
[marp-vscode]: https://github.com/marp-team/marp-vscode
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
[badge-marpit]: https://img.shields.io/npm/v/@marp-team/marpit.svg?style=flat-square&logo=npm
[badge-marp-core]: https://img.shields.io/npm/v/@marp-team/marp-core.svg?style=flat-square&logo=npm
[badge-marp-cli]: https://img.shields.io/npm/v/@marp-team/marp-cli.svg?style=flat-square&logo=npm
[badge-marp-web]: https://img.shields.io/badge/%E2%80%8B-tech%20demo-%230288d1.svg?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAUUlEQVQokWNgGD6AqePif3Sx9B2PMcQwNKFrTN/x+D9ejTBNyBphmnBqRNYE04isCatGdE1MHRf/o2vC0IhNE1PaXPwacWnCqxGfJoI2Dn4AAN0ZrMM1VUFvAAAAAElFTkSuQmCC
[badge-marp-vscode]: https://img.shields.io/visual-studio-marketplace/v/marp-team.marp-vscode.svg?style=flat-square&logo=visual-studio-code&label=Marketplace
[badge-planned]: https://img.shields.io/badge/-PLANNED-lightgrey.svg?style=flat-square
[badge-wip]: https://img.shields.io/badge/-Work%20in%20progress-lightgrey.svg?style=flat-square

## Examples

### Starter

- **[Marp CLI example](https://yhatt-marp-cli-example.netlify.com/)** by [@yhatt](https://github.com/yhatt) - A good starter to write and host Marp slide with [GitPitch](https://gitpitch.com/) style powered by [Netlify](https://www.netlify.com/). (https://github.com/yhatt/marp-cli-example)

### Community

<!-- - **[Slide title](https://example.com/)** by [@username](https://github.com/username) -->

Let us know if you have created an awesome slide deck with Marp ecosystem! [Edit README.md and send pull request.](https://github.com/marp-team/marp/blob/master/README.md)

<!-- NOTE: The slide deck created by yhatt/marp  desktop app cannot add to examples. -->

## Contributing

Marp and sub-projects are following the [contributing guideline of marp-team][contributing] hosted in this repo. Please read this before starting work in our projects.

[contributing]: .github/CONTRIBUTING.md

## Author

Managed by [@marp-team](https://github.com/marp-team).

- <img src="https://github.com/yhatt.png" width="16" height="16"/> Yuki Hattori ([@yhatt](https://github.com/yhatt))

## License

[MIT License](LICENSE)
