/**
 * @filename main.ts
 * @description 実行ファイル
 * @author kazuma.oie
 */


import { GroupsController } from "./controllers/GroupsController";
import { MEMBER, SEARCH_TARGET_NAME, DOMAIN, MAX_RESULT } from "./config/SettingConfig";

/**
 * @name main
 * @description メイン実行関数
 * @param void
 * @return void
 */
function main(): void {

  const GoogleGroupsController = new GroupsController();

// 対象のメーリスの操作
  const operationGoogleGroups: any = GoogleGroupsController
    .operationOfGoogleGroupsManagement(
      MEMBER,
      SEARCH_TARGET_NAME,
      DOMAIN,
      MAX_RESULT
    );
}