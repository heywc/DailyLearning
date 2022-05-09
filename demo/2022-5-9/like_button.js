const domContainer = document.querySelector("#like_button_container");
const e = React.createElement;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return e(
      "button",
      {
        onClick: () => {
          console.log(this, "this");
          this.setState({ liked: true });
        },
      },
      "Like"
    );
  }
}
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return "You liked this.";
//     }

//     return e(
//       "button",
//       { onClick: () => this.setState({ liked: true }) },
//       "Like"
//     );
//   }
// }

// const domContainer = document.querySelector("#like_button_container");
// ReactDOM.render(e(LikeButton), domContainer);
