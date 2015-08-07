//var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
//var SearchBox = React.createClass({
//  handleSubmitClick: function (data) {
//    $.ajax({
//      url: this.props.url,
//      dataType: 'json',
//      data: data,
//      success: function (results) {
//        this.setState({results: results});
//      }.bind(this),
//      error: function () {
//        alert("데이터를 불러오는데 실패하였습니다!");
//      }
//    });
//  },
//  getInitialState: function () {
//    return {isloading: true, results: []};
//  },
//  componentDidMount: function () {
//    $.ajax({
//      url: this.props.url,
//      dataType: 'json',
//      success: function (results) {
//        this.setState({results: results, isloading: false});
//      }.bind(this),
//      error: function () {
//        alert("데이터를 불러오는데 실패하였습니다!");
//      }
//    });
//  },
//  render: function () {
//    var initialResult = this.state.results;
//    var results;
//    if (this.state.isloading) {
//      results = <h2>Now Loading...</h2>;
//    }
//    else {
//      results = <SearchContent results={initialResult}/>;
//    }
//    return (
//        <div className="searchBox">
//          <div className="row">
//            <div className="col-md-6 col-sm-6">
//              <div className="map" id="map"></div>
//            </div>
//            <div className="col-md-6 col-sm-6">
//              <h3>지금 바로 친구를 검색해보세요</h3>
//
//              <p>지명을 바로 검색하셔도 되고, 지도를 클릭해서 원하시는 지명으로 검색하셔도 됩니다.</p>
//              <SearchForm handleClickLink={this.handleSubmitClick}/>
//            </div>
//          </div>
//          {results}
//        </div>
//    );
//  }
//});
////검색창, 다음지도 API에서 id값으로 인풋에 value 집어넣음
//var SearchForm = React.createClass({
//  handleSubmit: function (e) {
//    e.preventDefault();
//    var searchInput = React.findDOMNode(this.refs.searchInput).value.trim();
//    this.props.handleClickLink({query: searchInput});
//    React.findDOMNode(this.refs.searchInput).value = '';
//  },
//  render: function () {
//    return (
//        <form className="searchForm" onSubmit={this.handleSubmit}>
//          <div className="row">
//            <div className="col-sm-10 md-margin-bottom-10">
//              <input className="form-control" id="mapValue" placeholder="친구와 만나고 싶은 장소를 선택하세요"
//                     ref="searchInput"/>
//            </div>
//            <div className="col-sm-2">
//              <button type="submit" className="btn-u btn-brd rounded-2x btn-u-blue">Search!</button>
//            </div>
//          </div>
//        </form>
//    );
//  }
//});
//var SearchContent = React.createClass({
//  render: function () {
//    var resultNodes = this.props.results.map(function (result) {
//      return (
//          <ResultBox username={result.username} key={result.url} introduction={result.introduction}
//                     rating={result.rating}
//                     region={result.region} userimage={result.userimage} url={result.url}/>
//      );
//    });
//    return (
//        <div className="row">
//          <ReactCSSTransitionGroup transitionName="card-trasition">
//            {resultNodes}
//          </ReactCSSTransitionGroup>
//        </div>
//    );
//  }
//});
//
//var ResultBox = React.createClass({
//  render: function () {
//    return (
//        <div className="col-md-3 col-sm-6">
//          <div className="team-v2">
//            <div className="inner-team">
//              <img src={this.props.userimage} className="img-responsive"/>
//
//              <h3><a href={this.props.url}>{this.props.username}</a></h3>
//              <small className="color-light-grey"> 등급: {this.props.rating}</small>
//              <p>{this.props.introduction}</p>
//              <hr/>
//              <p>{this.props.region}</p>
//            </div>
//          </div>
//        </div>
//    );
//  }
//});