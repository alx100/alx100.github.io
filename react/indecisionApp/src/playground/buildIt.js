class Visibility extends React.Component {
  constructor(props) {
    super(props);

    this.changeVisibility = this.changeVisibility.bind(this);
    
    this.state = {
      visibility: false
    };
  }
  
  changeVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };  
    });
  }
  
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick = {this.changeVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Wow, this is details!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));


// let visibility = false;

// const change = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={change}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {
//         visibility && (
//           <div>
//             <p>Wow, this is details!</p>
//           </div>
//         )  
//       }
//     </div>
//   );
//   const appRoot = document.getElementById('app');
//   ReactDOM.render(jsx, appRoot);
// };

// render();