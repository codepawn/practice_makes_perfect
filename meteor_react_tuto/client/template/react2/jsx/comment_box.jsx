var data = [
  {author: "Pete Hunt", text: "댓글입니다"},
  {author: "Jordan Walke", text: "*또 다른* 댓글입니다"}
];

CommentBox = React.createClass({
  render: function () {
    return (
        <div className='commentBox'>
          <h1>댓글</h1>
          <CommentList data={this.props.data}/>
          <CommentForm/>
        </div>
    )
  }
});
CommentList = React.createClass({
  render: function () {
    return (
        <div className='commentList'>
          <Comment author="Pete Hunt">댓글입니다</Comment>
          <Comment author="Jordan Walke">*또 다른* 댓글입니다</Comment>
        </div>
    )
  }
});
CommentForm = React.createClass({
  render: function () {
    return (
        <div className='commentForm'>
          안녕! 난 댓글 폼이야.
        </div>
    )
  }
});
Comment = React.createClass({
  render: function () {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
        <div className='comment'>
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML={{__html: rawMarkup}}/>
        </div>
    )
  }

});