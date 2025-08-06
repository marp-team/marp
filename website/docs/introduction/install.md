# Install

### This is a stub page!

There are two ways to use Marp, through a command-line interface (**[Marp CLI][marp cli]**) or through a graphical user interface (**[VS Code extension][marp for vs code]**). To start authoring presentations, you must install either the CLI or the VS Code extension.

## Should I use the Marp CLI or Marp for VS Code?

### Basic Comparison

|                   | Marp for VS Code |   Marp CLI   |
| ----------------: | :--------------: | :----------: |
|            Editor |     VS Code      |  Any editor  |
|      Live Preview |       Yes        |     Yes      |
|     Export Method | Click to export  | Command Line |
| Use Marp plugins? |        No        |     Yes      |

### Marp for VS Code

If you are not familiar with the command line, use the VS Code extension without hesitation! All of the basic Marp features are available in Marp for VS Code.

Even if you are CLI savvy, you may prefer to author presentations through Marp for VS Code. VS Code has many convenient features for authoring a slide deck, including Marp syntax completion and live preview.

### Marp CLI

Using Marp CLI is suited for following:

- Authoring Markdown and theme CSS with your favorite editor (such as vim)
- Batch processing
- Combination with other tools (through piping and redirection)
- Continuous Integration (CI)
- Server-side conversion
- Set advanced configuration of Marp
- Use Marp in Node.js project
- Use Marp / Marpit / markdown-it plugins
- Use the other Marpit flavored engine

## Installing [Marp for VS Code]

1. Install [Visual Studio Code].
2. Install the [Marp for VS Code] extension.
3. Create and open a new Markdown file (with `.md` extension).
4. Select the `Toggle Marp feature for current Markdown` command from the Marp icon in editor actions (toolbar). This command will add Marp to the front-matter of your Markdown file:
   ```markdown
   ---
   marp: true
   ---
   ```
5. Open VS Code Markdown preview, and start writing your presentation!

[visual studio code]: https://code.visualstudio.com/
[marp for vs code]: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode

## Installing [Marp CLI]

[marp cli]: https://github.com/marp-team/marp-cli

### [Homebrew](https://brew.sh/) (macOS)

```bash
brew install marp-cli
```

### [Scoop](https://scoop.sh/) (Windows)

```bash
scoop install marp
```

### [Node.js](https://nodejs.org/)

If you have installed Node.js >= 12, you can try one-shot conversion without installing powered by `npx` (`npm exec`).

```bash
npx @marp-team/marp-cli@latest markdown.md
```

#### Install to Node project

```bash
npm install --save-dev @marp-team/marp-cli
npx marp markdown.md
```

```bash
yarn add --dev @marp-team/marp-cli
yarn exec markdown.md
```

[You can also install the `marp` command globally](https://github.com/marp-team/marp-cli#global-installation), but it is _not recommended_.

#### Standalone binary

[➡️ Download the latest standalone binary from the GitHub release page...][standalone binary]

[standalone binary]: https://github.com/marp-team/marp-cli/releases

#### Docker

[➡️ Check out the overview of an official container in Docker Hub...][docker]

[docker]: https://hub.docker.com/r/marpteam/marp-cli/
