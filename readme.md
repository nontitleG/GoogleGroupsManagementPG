## Google Groups の一括操作 PG

### 目的

- Google Groups の複数・個のグループに対して操作を行う
  - ここでの「操作」とは下記の操作内容について行われることとする
    <br><br>

### 操作内容

- 登録：ユーザーの追加
- 削除：ユーザーの削除
- 更新：ユーザーの権限変更
  <br><br>

### 言語・ツール

- TypeScript 4.0.2
- clasp 2.3.0
- npm 6.14.7
  <br><br>

### 実行方法

1. 操作したいユーザーを設定する

```ts
src / config / SettingConfig.ts;
// 追加するメールアドレスと権限
const MEMBER: { email: string; role: string } = {
  email: "hoge@fuga.com",
  role: "OWNER",
};

// 検索ワード
const SEARCH_TARGET_NAME: string = "email:fugafuga*";

// 対象ドメイン(旧ドメインで作成されたものは旧ドメイン名で検索しないとヒットしない)
const DOMAIN: string = "hogehoge.jp";

// 一度に取得する最大件数
const MAX_RESULT: number = 200;
```

<br>
2. 設定ファイルを修正後、下記のコマンドでgasに反映する

```
clasp push
```

<br>
3. GAS管理画面上でmain.gsを実行
<br><br>

### 実行フロー

1. ログインしているアカウントで把握しているグループで検索ワードを基に検索
2. ヒットしたグループだけを配列に詰める
3. グループ毎に追加するユーザーの存在判定を行う
4. ユーザーが存在の有無によって操作を実行
   <br><br>

### TODO

- 削除機能の実装
- 更新機能の実装
- 複数ユーザーの一括操作処理の実装
