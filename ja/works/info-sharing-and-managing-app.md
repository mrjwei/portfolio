---
title: "社内情報共有・管理アプリ"
tags: ["#app", "#ui/ux", "#productivity"]
description: "私が勤めていた福祉事業所内専用情報共有・管理アプリです。"
image: "/images/work-images/user-management-cover.png"
date: "2020-05-30"
---

![top page of user management platform](/images/work-images/user-management-cover.png)

私が勤めていた福祉事業所内専用情報共有・管理アプリです。セキュリティが高く、使いやすいアプリで情報発信と情報管理を効率的にすることが目的でした。

*注:　機密情報保持を厳守しています。そのため、この記事に共有していない情報があります。*

---

## 目次

- [目次](#目次)
- [私の役割](#私の役割)
- [使用技術＆ツール](#使用技術ツール)
- [背景](#背景)
- [問題発見](#問題発見)
  - [インタービュー](#インタービュー)
  - [ケーススタディ](#ケーススタディ)
    - [ケース 1: Google Sitesで作られた既存の情報共有サイト](#ケース-1-google-sitesで作られた既存の情報共有サイト)
    - [ケース 2: Google Sites](#ケース-2-google-sites)
- [要件抽出](#要件抽出)
- [プロトタイピング＆FB](#プロトタイピングfb)
- [完成したアプリ](#完成したアプリ)
- [実績](#実績)

---

## 私の役割

ユーザーリサーチから要件定義、デザイン、開発までの全般を担当しました。

---

## 使用技術＆ツール

- ユーザーリサーチ手法
  - ユーザー中心デザイン
  - ケーススタディ
  - インタービューなど
- Adobe XD
- Django
- AWS S3

---

## 背景

該当事業所は、今回のアプリ開発まで、Google Sitesで作成した簡易な情報サイトを所内の情報共有ツールとして利用していました。

![the website built with Google Sites](/images/work-images/user-management-old.png)
*Google Sitesで作成したサイト*

スタッフによると、Google Sitesを選んだ理由は、Web開発の未経験者でも簡単にサイトを作成できることだそうでした。しかし、運用してみると、いくつか不便な点に気づき、私に改善して欲しいとの要望でした。

---

## 問題発見

### インタービュー

まず、スタッフにとって、何が問題なのか把握するため、合計5人との1-to-1インタービューを行い、以下のFBをもらいました。

- **セキュリティ面に不安を感じている**。社内外の全員がアクセス可能なため、社内情報など漏れてはいけない情報が共有できない。
- **サイトの保守・管理が少し面倒である**。Google Sitesは、使い勝手が良いとは言え、使い方に慣れるまである程度の時間がかかる。そのため、サイトの保守・管理は、属人化されてしまっており、担当スタッフが不在な時は困る。
- **機能性に物足りなささを感じている**。例えば、利用者の利用レポートを収集したいのに、上手く収集できていない。
- **一元管理できる業務管理ツールが欲しい**。Google Sitesの他、KintoneやGoogle Sheets、Dropboxなど複数のツールを利用しているため、不便を感じている。
- **既存の情報共有サイトはスケールできない**。同法人傘下の他の事業所も似たような課題を抱えている。合わせて改善できないか。

### ケーススタディ

上記の問題点に対する理解を深めるため、既存の情報共有サイトとGoogle Sitesを対象にケーススタディを行いました。

#### ケース 1: Google Sitesで作られた既存の情報共有サイト

編集モードと公開モードで調べたところ、下記の問題点に気付きました。

- アクセスコントロールも権限も設定されていなかったため、全ての情報が社内外に公開されてしまっていた。
- デザインの調整やコンテンツの編集が予想よりも時間がかかってしまった。
- 企業・事業所のVIに合ったデザインに調整することが大変そうだった。
- 利用レポートを収集する機能がなかった。
- サードパーティツールやサービスと連携していなかったです。

![some problems of current information website](/images/work-images/user-management-old-problems.png)
*私が気付いた問題点*

スタッフが言及した問題点と一致するものが多かったです。

#### ケース 2: Google Sites

Google Sitesは、Google社が提供しているサイト構築ツールです。無料のGoogle Editors suiteに含まれています。Google Pageの後継者として、2008年にリリースされ、2016年に完全に作り直され、名前もNew Google Sitesに変えられました（[Wikipedia](https://en.wikipedia.org/wiki/Google_Sites)）。

新しいGoogle Sitesは、ノーコードのツールとして、使いやすさに優れています。プログラミングの未経験者でも一瞬でサイトを作れます。具体的に、

- 直感的なUIでコーディングスキルが不要である。
- ドキュメントが整備されている。
- 完全無料でドメインネームの取得も不要である。
- チームでのサイト構築・編集・管理が可能である。
- 初歩的なアクセスコントロール機能がついている。

などの長所が挙げられます。

![Google Sites templates](/images/work-images/user-management-google-sites-templates.png)
*既製のテンプレが利用できる*
![Google Sites template: portfolio](/images/work-images/user-management-google-sites-sample.png)
*テンプレがカスタマイズできる*
![Google Sites: basic access control](/images/work-images/user-management-google-sites-basic-access-control.png)
*初歩的なアクセスコントロールができる*

しかし、Google Sitesはいくつかの短所もあります。

- いくら便利と言っても、プログラミング未経験なユーザーは、Google Sitesに慣れるのに時間が必要である。
- カスタマイズの余地が少ない。
- 初歩的なアクセスコントロール機能があるが、認証機能がない。
- プラグインなしでは、インタラクティビティが限定的である。

などが挙げられます。

![Google Sites: customizable but effortful](/images/work-images/user-management-google-sites-customization.png)
*カスタマイズは簡単なものに留まる*
![Google Sites: no support for layered access control](/images/work-images/user-management-google-sites-no-support-for-layered-access-control.png)
*もっときめ細かい権限設定ができない*

これらの制約により、既存の情報共有サイトを改善して、前述の問題点を解決できないことが分かりました。

---

## 要件抽出

ユーザーリサーチで、問題が把握でき、実装の方向性も見えてきました。既存のものの改善ではなく、新規アプリの開発に乗り出しました。

まず、要望から要件を抽出し、明確にする必要がありました。それから、機能要件と非機能要件に分けました。

機能要件：

1. 認証機能
2. 直感的な編集・管理機能
3. 利用者レポートを送信する機能
4. 利用者レポートを確認する機能
5. 情報共有以外に、事業所や利用者管理、書類管理などの機能を組み込む
6. 5、もしくは、サードパーディサービスと連携する機能を組み込む

非機能要件：

1. セキュリティ
2. 直感的なUI
3. 使いやすさ
4. 拡張性

既存の情報共有サイトの利用率が低下し、事業所からの情報が全ての利用者に行き渡っていない状況に、利用者の日々の訓練状況も上手く把握できていなかったです。一刻も早く改善して欲しいという声がありました。

しかし、当時開発者は私一人だけのため、プロジェクトのスコープを決めないと終わらない状況になってしまうリスクがありました。そのような状況に柔軟な対応が求められました。

具体的に、**時間内に実装可能かつ必須機能であった機能要件の1~4は優先して実装し、他の要件は後で段階的に実装していく**ようにしました。

---

## プロトタイピング＆FB

要件が明確になったら、早速開発に着手しました。プロトタイプ→ユーザーFB→改善というプロセスを繰り返して開発を進めていきました。この過程で、ユーザーからたくさんの意見をもらい、効率的な開発ができました。

例えば、最初のプロトタイプを事業所のスタッフに見せたところ、トップページに載せるべきある重要な情報が載っていないというFBをもらいました。このようなFBは、ユーザー体験の向上にも繋がります。

![added information on top page](/images/work-images/user-management-top-wire.png)
*重要な情報は目立つところへ*

認証・権限設定機能について、どのユーザーグループがどの内容にアクセスできるかスタッフの方が詳しいため、スタッフと一緒に考案しながら、プロトタイプを作成しました。

![layered accessibilities](/images/work-images/user-management-with-authorization.png)
*よりきめ細かいアクセス権限設定*

利用者がこのアプリで直接利用レポートを作成・送信できる＆スタッフがそれらのレポートをオンサイトで確認できる機能も組み込みました。

![management of users' data](/images/work-images/user-management-with-authorization-2.png)
*利用者がレポートを送信でき、スタッフがそれを確認できる*

---

## 完成したアプリ

完成したアプリは、シンプルなUIや直感的な操作、高い機能性などが特徴です。

![new app vs. previous website](/images/work-images/user-management-new-vs-old.png)
*新アプリ vs. 旧情報共有サイト: 全体図*

![new app vs. previous site: difference in managing data](/images/work-images/user-management-new-vs-old-manage-data.png)
*新アプリ vs. 旧情報共有サイト: データ作成・編集・削除*

![authentication features of the final app](/images/work-images/user-management-new-features-2.png)
*新アプリ: 認証*

![new features of the final app](/images/work-images/user-management-new-features.png)
*新アプリ: 利用レポート作成・送信・管理*

---

## 実績

新しいアプリを導入後、以下の効果がありました。

- 有効かつ安全な情報共有ができるようになった。
- 情報管理作業がスタッフの誰でも簡単にできるようになり、属人化も解消した。
- 作業が楽になったことで、より頻繁な情報更新が可能になり、利用者に適切な時に適切な情報を届けられるようになった。
- 利用者に一方的に情報を発信する形式から、利用者から利用レポートも回収・確認できる形に変わり、利用者の状況を把握しやすくなった。これは、より良質なサービス提供に繋がるとの見解もあった。
