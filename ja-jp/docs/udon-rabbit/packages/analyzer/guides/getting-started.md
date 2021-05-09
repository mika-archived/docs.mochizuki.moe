---
title: Analyzer の導入方法
---

# Analyzer の導入方法

UdonSharp を書いているエディターによって、導入方法が異なります。

## Microsoft Visual Studio 2019

1. [GitHub Releases](https://github.com/mika-f/UdonRabbit.Analyzer/releases/latest)より、 `UdonRabbit.Analyzer.VisualStudio.vsix` をダウンロード
2. ダウンロードしたファイルを実行し、インストール
3. Visual Studio を再起動し、 UdonSharp を使用しているワークスペースを開く

## Visual Studio Code (VS Code)

1. [GitHub Releases](https://github.com/mika-f/UdonRabbit.Analyzer/releases/latest)より、 `UdonRabbit.Analyzer.VSCode.vsix` をダウンロード
2. VS Code にて、 <kbd>Ctrl + Shift + P</kbd> から、 `Extension: Install from VSIX...` を選択
3. ダウンロードしたファイルを選択し、インストール
4. VS Code をリロードし、 UdonSharp を使用しているワークスペースを開く

なお、Visual Studio Code では、2 通りのインストール方法があります。  
詳しくは、 `OmniSharp 対応エディター` の項目を参照ください。

<!-- prettier-ignore-start -->
!!! info
    後者の方法では、 Roslynator など他のアナライザーを使用している場合は不整合が起こる可能性があります。  
    そのため、なつねこらぼらとりーでは拡張機能経由での使用を推奨しています。
<!-- prettier-ignore-end -->

## JetBrains Rider

1. NuGet フィード新しく追加
    1. `Tools` → `NuGet` → `Manage NuGet Packages for Solution`
    1. `Sources` タブを開く
    1. 以下の設定で、新しいフィードを追加
        - Name: `Natsuneko@GitHub`
        - URL: `https://nuget.pkg.github.com/mika-f/index.json`
        - User: `自身の GitHub アカウント名`
        - Password: `自身の GitHub Personal Access Token`
        - Enabled: `✓`
1. `Packages` タブを開く
1. `UdonRabbit.Analyzer` を検索し、すべてのプロジェクトへ追加
1. Unity にてプロジェクトを開き、以下のファイルを追加
    1. [`SolutionHook.cs`](https://github.com/mika-f/UdonRabbit.Analyzer/blob/master/docs/getting-started/rider.md#example-of-solutionhookcs)
1. Unity から JetBrains Rider を開く

## OmniSharp 対応エディター (Visual Studio Code 除く)

1. [GitHub Releases](https://github.com/mika-f/UdonRabbit.Analyzer/releases/latest)より、 `UdonRabbit.Analyzer.vX.X.X.nupkg` をダウンロード
2. ダウンロードしたファイルを 7-Zip などのアプリで解凍し、 UdonSharp を使用しているワークスペースに展開
    - このとき、 **Unity から認識されない場所に設置してください**
    - Analyzer は Unity の使用している Mono とは互換性がないため、 Unity に読み込ませるとエラーが発生します
3. `omnisharp.json` を、プロジェクトのルートディレクトリ (`Assets` フォルダーがある場所) に作成
4. 以下の設定を追記
    - `RoslynExtensionsOptions.EnableAnalyzerSupport: true`
    - `RoslynExtensionsOptions.LocationPaths[0]: アナライザーを展開したところ/analyzers/dotnet/cs`
5. OmniSharp を再起動

### `omnisharp.json` 設定例

```json
{
    "RoslynExtensionsOptions": {
        "EnableAnalyzersSupport": true,
        "LocationPaths": ["./tools/UdonRabbit.Analyzer.0.3.0/analyzers/dotnet/cs"]
    }
}
```
