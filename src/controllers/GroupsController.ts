/**
 * @filename GroupsController.ts
 * @description GoogleGoups関連のコントローラー
 * @author kazuma.oie
 */

import { FetchGroups } from "../models/fetch/FetchGroups";
import { AddUser } from "../models/add/AddUser";
import { DeleteUser } from "../models/delete/DeleteUser";

export class GroupsController {
  // constructor() {
  // }

  /**
   * @name operationOfGoogleGroupsManagement
   * @description 対象のGoogleグループのリスト取得
   * @param string DOMAIN
   * @param number maxResult
   * @return string[][]
   */
  public operationOfGoogleGroupsManagement(
    MEMBER: { email: string, role: string },
    searchWord: string,
    domain: string,
    maxResult: number
  ): any{

    const fetch = new FetchGroups();
    const add = new AddUser();

    // 対象のグループのみ抽出
    const fetchGroupsListsAll: string[] = fetch.fetchGroups(searchWord, domain, maxResult);

    // 対象グループにユーザー追加
    const addUserToGoogleGroups: void = add.addUserToGoogleGroups(MEMBER, fetchGroupsListsAll);

    // 対象グループのユーザー削除
  }
}