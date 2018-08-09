<div align="center">
  <p>
    <img src="marp.png" alt="Marp" width="500" />
  </p>
  <p>
    <strong>Marp</strong>: Markdown Presentation Writer
  </p>
</div>

> This repository is the entrance of **_next version of Marp_ (Marp Next)**.
>
> Refer to **[yhatt/marp]** when you are looking for pre-released desktop app. However, keep in your mind that _it has no longer been developed_.

---

**Marp** is the simplest presentation writer with Markdown.

### :warning: Marp Next is under construction and not ready to use.

## [PLANNING] Marp family

|              Package | Description                                                                                                                             |
| -------------------: | :-------------------------------------------------------------------------------------------------------------------------------------- |
|     **[Marp][marp]** | 🚪 The entrance repository of Marp family. In future we would host website.                                                             |
| **[Marpit][marpit]** | The skinny framework for creating slide deck from Markdown.                                                                             |
|          [marp-core] | The core of Marp family based on [Marpit][marpit]. It provides a parser, renderer, and theme set.                                       |
|           [marp-cli] | A CLI interface for [marp-core] and any Marpit based framework. It can convert Markdown to static HTML / CSS, that is printable as PDF. |
|           _marp-web_ | The main interface of Marp. It is going to be able to work on the both of online / offline by using [Progressive Web App (PWA)][pwa].   |
|      _marp-electron_ | The desktop client of marp-web wrapped in [Electron]. It would replace [yhatt/marp], and support local files.                           |

[yhatt/marp]: https://github.com/yhatt/marp
[marp]: https://github.com/marp-team/marp
[marpit]: https://github.com/marp-team/marpit
[marp-core]: https://github.com/marp-team/marp-core
[marp-cli]: https://github.com/marp-team/marp-cli
[pwa]: https://en.wikipedia.org/wiki/Progressive_Web_Apps
[electron]: https://electronjs.org/

## Contributing

We are sorry but currently we are not ready to accept your contribute because it is under developing for proof of concept.

## Author

Managed by [@marp-team](https://github.com/marp-team).

- <img src="https://github.com/yhatt.png" width="16" height="16"/> Yuki Hattori ([@yhatt](https://github.com/yhatt))

## License

[MIT License](LICENSE)
