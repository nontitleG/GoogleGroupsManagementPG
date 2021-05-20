/**
 * @filename FetchGroups.ts
 * @description GoogleGoupsを取得する
 * @author kazuma.oie
 */


export class FetchGroups {
  // constructor(parameters) {
  // }

  /**
   * @name fetchGroups
   * @description 全体のGoogle Groupsを取得
   * @param string searchWord
   * @param string domain
   * @param number maxResult
   */
  public fetchGroups(searchWord: string, domain: string, maxResults: number) :string[]{

    const query: string = searchWord;
    let endFlag: boolean = false;
    let token: string = "";
    let arrayMailingLists: string[] = [];

    // 全部取得するまでループ
    while (endFlag === false) {

      try {
        // リストの取得
        let fetchGroupsLists: any = AdminDirectory.Groups.list({
          domain: domain,
          maxResults: maxResults,
          pageToken: token,
          query: query
        });

        // mailアドレスだけ抽出
        arrayMailingLists = fetchGroupsLists.groups.map(GroupsList => GroupsList.email);

        // 対象グループが200件以上ある場合はそれ以上も取得する
        if (fetchGroupsLists.nextPageToken == null) {
          console.log("nextPageToken null: " + fetchGroupsLists["nextPageToken"])
          endFlag = true;
        } else {
          token = fetchGroupsLists.nextPageToken;
        }

      } catch (error) {
        console.log(error);
      }
    }
    return arrayMailingLists;
  }
}