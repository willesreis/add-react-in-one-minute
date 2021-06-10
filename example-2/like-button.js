'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// Find all DOM containers with same css class
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the commentID from a data-* attribute
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(e(LikeButton, { commentID: commentID }), domContainer);
  });