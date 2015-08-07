//var ProfileIndexBox = React.createClass({
//  getInitialState: function() {
//    return {
//      profiles: {
//        profiles: [],
//        meta: {}
//      },
//      nav: 'all'
//    }
//  },
//  componentDidMount: function() {
//    $.ajax({
//      url: this.props.url,
//      dataType: 'json',
//      success: function(profiles) {
//        this.setState({
//          profiles: profiles
//        });
//      }.bind(this),
//      error: function() {
//        alert("서버와의 통신에 실패했습니다.");
//      }
//    });
//  },
//  fireOwnList: function() {
//    $.ajax({
//      url: '/profiles/ownlist',
//      dataType: 'json',
//      success: function(profiles) {
//        this.setState({
//          profiles: profiles,
//          nav: 'FriendsList'
//        });
//      }.bind(this),
//      error: function() {
//        alert("서버와의 통신에 실패했습니다.");
//      }
//    });
//  },
//  fireEntireList: function() {
//    $.ajax({
//      url: this.props.url,
//      dataType: 'json',
//      success: function(profiles) {
//        this.setState({
//          profiles: profiles,
//          nav: 'all'
//        });
//      }.bind(this),
//      error: function() {
//        alert("서버와의 통신에 실패했습니다.");
//      }
//    });
//  },
//  fireRequestList: function() {
//    $.ajax({
//      url: '/requests',
//      dataType: 'json',
//      success: function(profiles) {
//        this.setState({
//          profiles: profiles,
//          nav: 'ReceivedRequestsList'
//        });
//      }.bind(this),
//      error: function() {
//        alert("서버와의 통신에 실패했습니다.");
//      }
//    });
//  },
//  fireMyRequest: function() {
//    $.ajax({
//      url: '/requests/ownlist',
//      dataType: 'json',
//      success: function(profiles) {
//        this.setState({
//          profiles: profiles,
//          nav: 'SendedRequestsList'
//        });
//      }.bind(this),
//      error: function() {
//        alert("서버와의 통신에 실패했습니다.");
//      }
//    });
//  },
//  render: function() {
//    console.log(this.state.nav);
//    if(this.state.profiles.profiles.length == 0) {
//      var listItem =
//          <div>
//            <h4>회원님께 만남 신청을 한 친구가 없습니다 ㅜㅜ</h4>
//          </div>
//    }
//    else {
//      switch (this.state.nav) {
//        case 'ReceivedRequestsList':
//          var listItem = this.state.profiles.profiles.map(function(profile) {
//            return (
//                <ReceivedRequestsList email={profile.email} nation={profile.profile.nation}
//                                      profile_id={profile.profile.id} user_id={profile.id} intro={profile.profile.intro}
//                                      imageUrl={profile.profile.user_image} url={profile.profile.url} key={profile.id} />
//            );
//          });
//          break;
//        case 'FriendsList':
//          var listItem = this.state.profiles.profiles.map(function(profile) {
//            return (
//                <FriendsList email={profile.email} nation={profile.profile.nation}
//                             profile_id={profile.profile.id} user_id={profile.id} intro={profile.profile.intro}
//                             imageUrl={profile.profile.user_image} url={profile.profile.url} key={profile.id} />
//            );
//          });
//          break;
//        case 'SendedRequestsList':
//          var listItem = this.state.profiles.profiles.map(function(profile) {
//            return (
//                <SendedRequestsList email={profile.email} nation={profile.profile.nation}
//                                    profile_id={profile.profile.id} user_id={profile.id} intro={profile.profile.intro}
//                                    imageUrl={profile.profile.user_image} url={profile.profile.url} key={profile.id} />
//            );
//          });
//          break;
//        default:
//          var listItem = this.state.profiles.profiles.map(function(profile) {
//            return (
//                <ProfileListItem email={profile.email} nation={profile.profile.nation}
//                                 profile_id={profile.profile.id} user_id={profile.id} intro={profile.profile.intro}
//                                 imageUrl={profile.profile.user_image} url={profile.profile.url} key={profile.id} />
//            );
//          });
//          break;
//      }
//    }
//    return(
//        <div className="user-list-box">
//          <ListNav fireOwnList={this.fireOwnList}
//                   fireEntireList={this.fireEntireList}
//                   fireRequestList={this.fireRequestList}
//                   fireMyRequest={this.fireMyRequest}
//                   signIn={this.state.profiles.meta.signIn} />
//          {listItem}
//        </div>
//    );
//  }
//});
//
//var ListNav = React.createClass({
//  fireOwnList: function () {
//    this.props.fireOwnList();
//  },
//  fireEntireList: function () {
//    this.props.fireEntireList();
//  },
//  fireRequestList: function () {
//    this.props.fireRequestList();
//  },
//  fireMyRequest: function () {
//    this.props.fireMyRequest();
//  },
//  render: function() {
//    if(this.props.signIn) {
//      return (
//          <div className="listNav clearfix">
//            <button className="mdl-button mdl-js-button mdl-button--primary"
//                    onClick={this.fireMyRequest}>
//              내 만남신청
//            </button>
//            <button className="mdl-button mdl-js-button mdl-button--primary"
//                    onClick={this.fireRequestList}>
//              받은 만남신청
//            </button>
//            <button className="mdl-button mdl-js-button mdl-button--primary"
//                    onClick={this.fireOwnList}>
//              관심친구 보기
//            </button>
//            <button className="mdl-button mdl-js-button mdl-button--primary"
//                    onClick={this.fireEntireList}>
//              전체친구 보기
//            </button>
//          </div>
//      );
//    }
//    else {
//      return (
//          <div className="listNav clearfix">
//            <button className="mdl-button mdl-js-button mdl-button--primary"
//                    onClick={this.fireEntireList}>
//              전체친구 보기
//            </button>
//          </div>
//      );
//    }
//  }
//});
//
//var ProfileListItem = React.createClass({
//  render: function() {
//    return (
//        <div className="user-list clearfix">
//          <a className="user-image"><img src={this.props.imageUrl} width="50" height="50" />
//            <p className="user-nation">{this.props.nation}</p>
//          </a>
//          <div className="user-spec">
//            <a href={this.props.url}>{this.props.email}</a>
//            <div className="user-intro clearfix">{this.props.intro}</div>
//            <div className="user-btn-group">
//              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
//                쪽지보내기
//              </button>
//              <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
//                관심친구 등록
//              </button>
//            </div>
//          </div>
//        </div>
//    );
//  }
//});
//
//var ReceivedRequestsList = React.createClass({
//  render: function() {
//    return (
//        <div className="user-list clearfix">
//          <a className="user-image"><img src={this.props.imageUrl} width="50" height="50" />
//            <p className="user-nation">{this.props.nation}</p>
//          </a>
//          <div className="user-spec">
//            <a href={this.props.url}>{this.props.email}</a>
//            <div className="user-intro clearfix">{this.props.intro}</div>
//            <div className="user-btn-group">
//              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
//                상세정보
//              </button>
//              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
//                거절하기
//              </button>
//              <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
//                수락하기
//              </button>
//            </div>
//          </div>
//        </div>
//    );
//  }
//});
//
//var FriendsList = React.createClass({
//  render: function() {
//    return (
//        <div className="user-list clearfix">
//          <a className="user-image"><img src={this.props.imageUrl} width="50" height="50" />
//            <p className="user-nation">{this.props.nation}</p>
//          </a>
//          <div className="user-spec">
//            <a href={this.props.url}>{this.props.email}</a>
//            <div className="user-intro clearfix">{this.props.intro}</div>
//            <div className="user-btn-group">
//              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
//                쪽지보내기
//              </button>
//              <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
//                만남신청
//              </button>
//            </div>
//          </div>
//        </div>
//    );
//  }
//});
//
//var SendedRequestsList = React.createClass({
//  render: function() {
//    return (
//        <div className="user-list clearfix">
//          <a className="user-image"><img src={this.props.imageUrl} width="50" height="50" />
//            <p className="user-nation">{this.props.nation}</p>
//          </a>
//          <div className="user-spec">
//            <a href={this.props.url}>{this.props.email}</a>
//            <div className="user-intro clearfix">{this.props.intro}</div>
//            <div className="user-btn-group">
//              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
//                쪽지보내기
//              </button>
//              <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
//                신청취소
//              </button>
//            </div>
//          </div>
//        </div>
//    );
//  }
//});