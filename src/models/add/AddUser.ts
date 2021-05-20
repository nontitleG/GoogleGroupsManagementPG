/**
 * @filename AddUser.ts
 * @description グループにユーザーを追加する
 * @author kazuma.oie
 */

export class AddUser {
  // constructor() {
  // }

  /**
   * @name addUserToGoogleGroups
   * @description Groupsにユーザーを追加する
   * @param string TARGET_EMAIL_ADDRESS
   * @param string[] fetchGroupsListsAll
   */
  public addUserToGoogleGroups(
    MEMBER: {email: string, role: string },
    fetchGroupsListsAll: string[]
  ): void{

    for (let index = 0; index < fetchGroupsListsAll.length; index++) {

      // グループに所属しているかチェック
      const element = AdminDirectory.Members
        .hasMember(fetchGroupsListsAll[index], MEMBER.email);

      // 所属していなかったらユーザー追加
      if (element.isMember === false) {
        AdminDirectory.Members.insert(MEMBER, fetchGroupsListsAll[index]);

        Logger.log('User added as a member of group %s.', fetchGroupsListsAll[index]);
      }
  }
}