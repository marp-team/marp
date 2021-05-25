# How to use

Marp provides CLI and VS Code extension as the official toolset.

## [Marp for VS Code]

1. Install [Visual Studio Code].
2. Install [Marp for VS Code] extension.
3. Create and open new Markdown file (with `.md` extension).
4. Execute `Toggle Marp feature for current Markdown` command from Marp icon in editor actions (toolbar). This command will add the front-matter definition like this:
   ```markdown
   ---
   marp: true
   ---
   ```
5. Open VS Code Markdown preview, and get starting to write presentation!

[visual studio code]: https://code.visualstudio.com/
[marp for vs code]: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode

## [Marp CLI]

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

If you have installed Node.js >= 12, you can try one-shot conversion without install powered by `npx` (`npm exec`).

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

[You can also install `marp` command to globally](https://github.com/marp-team/marp-cli#global-installation) but _not recommended_.

#### Standalone binary

[➡️ Download the latest standalone binary from GitHub release page...][standalone binary]

[standalone binary]: https://github.com/marp-team/marp-cli/releases

#### Docker

[➡️ Check out the overview of an official container in Docker Hub...][docker]

[docker]: https://hub.docker.com/r/marpteam/marp-cli/

## Which one to choose

### Marp for VS Code

If you are not familiar with command line, choose VS Code extension without hesitation! You can use basic Marp features in GUI by just using Marp for VS Code.

Even if you are CLI savvy, authoring the presentation through Marp for VS Code would become a good choice. There are useful real-time preview and Marp Markdown language services, so you would get a great experience to create slide deck.

### Marp CLI

Using Marp CLI is suited for following:

- Authoring Markdown and theme CSS with your favorite editor (such as vim)
- Batch processing
- Combination with other tools (through piping and redirection)
- Continous integration (CI)
- Server-side conversion
- Set advanced configuration of Marp
- Use Marp in Node.js project
- Use Marp / Marpit / markdown-it plugins
- Use the other Marpit flavored engine
