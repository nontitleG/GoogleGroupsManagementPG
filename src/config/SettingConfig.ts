/**
 * @filename SettingConfig.ts
 * @description 実行時に必要なパラメーターの設定ファイル
 * @author kazuma.oie
 */

export { MEMBER, SEARCH_TARGET_NAME, DOMAIN, MAX_RESULT };

// 追加するメールアドレスと権限
const MEMBER: { email: string; role: string } = {
  email: "hogehoge.com",
  role: "OWNER",
};
// 検索ワード
const SEARCH_TARGET_NAME: string = "email:fugafuga*";
// 対象ドメイン
const DOMAIN: string = "fugafuga.jp";
// 取得できる最大件数
const MAX_RESULT: number = 200;
