//SearchBox = React.createClass({
//  handleSubmitClick: function (data) {
//    $.ajax({
//      url: this.props.url,
//      dataType: 'json',
//      data: data,
//      success: function (results) {
//        this.setState({results: results});
//      }.bind(this),
//      error: function () {
//        alert("Silpeda!");
//      }
//    });
//  },
//  getInitialState: function () {
//    return {results: []}
//  },
//  componentDidMount: function () {
//    $.ajax({
//      url: this.props.url,
//      dataType: 'json',
//      success: function (results) {
//        this.setState({results: results});
//      }.bind(this),
//      error: function () {
//        alert("Silpeda!");
//      }
//    });
//  },
//  render: function () {
//    return (
//        <div className="searchBox">
//          <div className="col-md-3">
//            <FilterCard handleSubmitClick={this.handleSubmitClick}/>
//          </div>
//          <div className="col-md-9">
//            <SearchContent results={this.state.results}/>
//          </div>
//        </div>
//    );
//  }
//});
//FilterCard = React.createClass({
//  handleClickLink: function (data) {
//    this.props.handleSubmitClick({data: data})
//  },
//  render: function () {
//    return (
//        <div className="filterCard">
//          <FilterHeader />
//          <RegionCard handleClickLink={this.handleClickLink}/>
//        </div>
//    );
//  }
//});
//FilterHeader = React.createClass({
//  render: function () {
//    return (
//        <div className="filterHeader">
//          <dt>지금 바로 만나고 싶은 친구를 찾아보세요</dt>
//          <dd>원하는 지역을 선택하세요.</dd>
//        </div>
//    );
//  }
//});
//RegionCard = React.createClass({
//  handleClick: function () {
//    this.props.handleClickLink({query: "서울"})
//  },
//  render: function () {
//    return (
//        <div className="regionCard">
//          <ul>
//            <li onClick={this.handleClick}>서울</li>
//            <li>경기도</li>
//            <li>강원도</li>
//            <li>충청도</li>
//            <li>경상도</li>
//            <li>전라도</li>
//            <li>제주도</li>
//          </ul>
//        </div>
//    );
//  }
//});
//SearchContent = React.createClass({
//  render: function () {
//    var resultNodes = this.props.results.map(function (result) {
//      return (
//          <ResultBox username={result.username} introduction={result.introduction} region={result.region}
//                     userimage={result.userimage}/>
//      );
//    });
//    return (
//        <div className="searchContent transitions-enabled infinite-scroll clearfix" id="results">
//          <div id="page">
//            {resultNodes}
//          </div>
//        </div>
//    );
//  }
//});
//ResultBox = React.createClass({
//  render: function () {
//    return (
//        <div className="resultBox box col1">
//          <div className="panel panel-default">
//            <div className="panel-heading">
//              {this.props.username}
//            </div>
//            <div className="panel-body">
//              {this.props.region}
//            </div>
//            <div className="panel-footer">
//              {this.props.introduction}
//            </div>
//          </div>
//        </div>
//    );
//  }
//});
