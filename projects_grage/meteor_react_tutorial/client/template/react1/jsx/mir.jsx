//switch (this.state.nav) {
//  case 'ReceivedRequestsList':
//    var listItem = this.state.profiles.profiles.map(function (profile) {
//      return (
//          <ReceivedRequestsList email={profile.email} nation={profile.profile.nation}
//                                profile_id={profile.profile.id} user_id={profile.id} intro={profile.profile.intro}
//                                imageUrl={profile.profile.user_image} url={profile.profile.url} key={profile.id}/>
//      );
//    });
//    break;
//  case 'FriendsList':
//    var listItem = this.state.profiles.profiles.map(function (profile) {
//      return (
//          <FriendsList email={profile.email} nation={profile.profile.nation}
//                       profile_id={profile.profile.id} user_id={profile.id} intro={profile.profile.intro}
//                       imageUrl={profile.profile.user_image} url={profile.profile.url} key={profile.id}/>
//      );
//    });
//    break;
//  case 'SendedRequestsList':
//    var listItem = this.state.profiles.profiles.map(function (profile) {
//      return (
//          <SendedRequestsList email={profile.email} nation={profile.profile.nation}
//                              profile_id={profile.profile.id} user_id={profile.id} intro={profile.profile.intro}
//                              imageUrl={profile.profile.user_image} url={profile.profile.url} key={profile.id}/>
//      );
//    });
//    break;
//  default:
//    var listItem = this.state.profiles.profiles.map(function (profile) {
//      return (
//          <ProfileListItem email={profile.email} nation={profile.profile.nation}
//                           profile_id={profile.profile.id} user_id={profile.id} intro={profile.profile.intro}
//                           imageUrl={profile.profile.user_image} url={profile.profile.url} key={profile.id}/>
//      );
//    });
//    break;
//}