---
title: 'Marp for VS Code v1: IntelliSense for Marp directives'
date: 2021-05-20
description: I'm happy to announce Marp for VS Code has reached to the stable release v1! This release includes IntelliSense for Marp directives and getting more affinity with VS Code features to get better writing experience.
author: Yuki Hattori
github: yhatt
image: /og-images/marp-for-vs-code-v1.jpg
---

We are continuing development to make stable Marp tools. And today, I'm happy to announce [Marp for VS Code] has reached to the stable release v1!

Tools of Marp ecosystem are made for potentially covering various situations, and especially Marp for VS Code is made for the daily use for the most of users.

This extension can change the familiar Markdown preview into slides preview during editing Marp Markdown. You can write and edit slides by text rapidly together with checking the appearance of slides, and export into PDF/PPTX easily. [Custom theme support](https://github.com/marp-team/marp-vscode#use-custom-theme-css-shield) is useful to create your own theme with CSS.

In this release, we have added IntelliSense extension for Marp directives and got more affinity with [VS Code] features. It provides better experience as integrated environment to write the presentation.

[vs code]: https://code.visualstudio.com/
[marp for vs code]: https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode

<!-- more -->

[**➡️ Go to Visual Studio Marketplace to get Marp for VS Code**][marp for vs code]

# History

[![Marp for VS Code](https://raw.githubusercontent.com/marp-team/marp-vscode/main/docs/screenshot.png ' ')][marp for vs code]

Marp for VS Code has started development since 2019, to replace GUI interface from [the classic Marp app](https://yhatt.github.io/marp). It is focusing to provide better experience for writing Marp presentation.

[We had also thought making another Web app as a primary project at that time](/blog/the-story-of-marp-next#marp-web-tech-demo), but VS Code has drastically grown as time goes by. It is covering Web and mobile devices through [GitHub Codespaces](https://visualstudio.microsoft.com/services/github-codespaces/). Thus, we are still continuing development VS Code extension as an official Marp integration for GUI.

# New features

## IntelliSense for Marp directives 🤓

[Directives](https://marpit.marp.app/directives), the inherited feature from [Marpit framework](https://marpit.marp.app/), is an important syntax to write the deck in Marp.

Our extension is depending on 3 different Marp projects that have unique directives. User had been hard to know all of supported directives because the guidance of them has scattered into each tools.

So we have extended [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) to cover all of supported Marp directives! Marp for VS Code is now providing powerful editing features for directives: Auto completion, syntax highlight, hover help, and diagnostics.

### Auto completion

Hit `Ctrl` + `Space` within [the front-matter](https://marpit.marp.app/directives?id=front-matter) or [HTML comment](https://marpit.marp.app/directives?id=html-comment) to show the list of directives. You can peek the help of selected directive by hitting `Ctrl` + `Space` again.

![Auto completion](/assets/marp-for-vs-code-v1/auto-completion.png 'We remember all, you may forget them 😛')

I worked hard into refactor of a parser for Marp Markdown to get this improvement. This change would make easier to add new language feature like auto-completion for [the extended image syntax](https://marpit.marp.app/image-syntax) in the future.

### Syntax highlight and hover help

When enabled Marp feature, recognized directives are highlighted by the different color from around. It's useful for finding out meaningless definitions.

And you can peek the help of directive when hovering the cursor.

![Syntax highlight and hover help](/assets/marp-for-vs-code-v1/hover-help.png 'Point at the directive if you were lost 👆')

### Diagnostics

It is accurately not new feature but I'm sure the most of users have not seen because it had used just for migrating outdated syntax.

In this update, we have added some helpful diagnostics for Marp directives. For example, Marp for VS Code can notify not recognized theme name that is specified by `theme` directive.

![Diagnostics](/assets/marp-for-vs-code-v1/diagnostics.png 'Detected diagnostics will be listed in "Problems"')

## Virtual workspace support 🌐

VS Code is still evolving to cover various situations: [Editing remote files](https://code.visualstudio.com/docs/remote/remote-overview), [collaborating with others](https://code.visualstudio.com/learn/collaboration/live-share), and something usefuls provided by [a lot of third-party extension](https://marketplace.visualstudio.com/vscode). Marp for VS Code is also making an effort to cover them as far as possible.

In the recent update, we have improved the export command and custom theme support within a virtual workspace by followed [the call to action from VS Code team](https://code.visualstudio.com/updates/v1_56#_define-whether-your-extension-supports-a-virtual-workspace).

No problem even if you don't know the virtual workspace! In short, Marp features will become to work correctly in various situation.

### Details

Previously an export command had assumed to deal only local files. So the result of command might miss some resources that have not located in local file system.

We are dealing with this by internally serving resources located in a virtual workspace via HTTP while processing of export ([marp-team/marp-vscode#225](https://github.com/marp-team/marp-vscode/pull/225)). By doing this, the result of export command within [a remote repository](https://code.visualstudio.com/updates/v1_56#_remote-repositories-remotehub), a coming feature of VS Code to edit the content of GitHub repository without clone/download, can include resources correctlly.

This behavior is under verifying and may fail to resolve resources in some cases (e.g. [marp-team/marp-vscode#238](https://github.com/marp-team/marp-vscode/issues/238)). We are welcome more feedbacks about the export command in a virtual workspace!

## Workspace Trust 🛡️

[Workspace Trust](https://github.com/microsoft/vscode/issues/106488) is a unified security model for the whole of VS Code. Currently it's an opt-in feature (VS Code 1.56) but it's going to be enabled by default soon. [VS Code team is calling to action into extension authors also for this.](https://code.visualstudio.com/updates/v1_56#_workspace-trust-extension-api)

Based on reflection of [the outdated Marp app](https://yhatt.github.io/marp), Marp team is thinking about users security first. Actually we were passive for supporting a feature that have potentially security concerns (e.g. [marp-team/marp-vscode#123](https://github.com/marp-team/marp-vscode/pull/123)). Making ready for Workspace Trust will become available to contain more advanced features.

Marp for VS Code v1 is supporting Workspace Trust. If the current workspace is not trusted, you can only use basic Marp features (Markdown preview and IntelliSense).

### Restricted features in untrusted workspace

- Export command
- Using custom themes configured in workspace: `markdown.marp.themes`
- Enabling HTML tags in Markdown: `markdown.marp.enableHtml`

# Conclusion

Marp for VS Code is focusing into providing the great experience to write presentation. IntelliSense for Marp directives is a big improvement for that. We are going to continue making an effort to cover update of VS Code.

And Marp team is always thinking about security. Supporting VS Code's Workspace Trust is an important thing to save you from maliciouses.

In addition, a way of thinking about the trusted workspace would open the door to more useful features that were prevented by security concerns: Custom Marp CLI configuration, playing presentation, and so on.

## What's next?

There are no determined things. But supporting Workspace Trust has taken a step toward some advanced features.

We are planning some well-known features in the other presentation software to reduce friction of moving from familiar tools: the sidebar with slide thumbnails ([marp-team/marp#42](https://github.com/marp-team/marp/discussions/42)), presentation button in lower-right, and so on.

![Sidebar in development](/assets/marp-for-vs-code-v1/plan-sidebar.gif 'Sidebar in development')

Enjoy writing presentation with our extension! And join to [our discussion forum](https://github.com/marp-team/marp/discussions) if you want more Marp tips.

[**➡️ Go to Visual Studio Marketplace to get Marp for VS Code**][marp for vs code]
