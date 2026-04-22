import React from "react";
class AboutClass extends React.Component {
  // Constructor is used to initialize state and bind methods in class components
  constructor(props) {
    super(props);
    console.log("Constructor called");

    // State in Class component
    this.state = {
      cnt: 0,
    };
  }

  // Lifecycle method - called after the component is mounted to the DOM
  componentDidMount() {
    console.log("Component did mount called");
    this.timer = setInterval(() => {
      console.log("Interval running");
    }, 1000);
  }

  // Lifecycle method - called after the component is updated (re-rendered)
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update called");

    // Check if count has changed , if changed perform some action
    if (prevState.cnt !== this.state.cnt) {
      console.log("Count updated from", prevState.cnt, "to", this.state.cnt);
    }
  }

  // Lifecycle method - called just before the component is unmounted and destroyed
  componentWillUnmount() {
    console.log("Component will unmount called");
    clearInterval(this.timer);
  }

  // Render method is used to return the JSX that defines the UI of the component
  render() {
    console.log("Render called");

    // Destructuring props
    const { name } = this.props;
    return (
      <div>
        <h1>About Class component</h1>
        <p>This is a class component</p>
        <div>Name from props: {name}</div>

        {/* Update state on button click */}
        <button onClick={() => this.setState({ cnt: this.state.cnt + 1 })}>
          Click me{" "}
        </button>
        <div>Count: {this.state.cnt}</div>
      </div>
    );
  }
}

export default AboutClass;
