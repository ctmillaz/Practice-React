class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            //name: 'Julie'
            //if you want to see Julie add as {this.state.name} in the div
        };
    }
    handleAddOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1,
                //name: prevState.name = 'Andrew'
            };
        });
    };
    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            };
        });
    };
    handleReset(){
        this.setState(() => {
            return{
                count: 0
            };
        });
        // This is the older way to do it, although it breaks the reset button and begins adding 1.
        // The reason it breaks it is because it doesn't take it back to 0, but continues the +1.
        // this.setState({
        //     count:0
        // });
        // this.setState({
        //     count:this.state.count + 1
        // })
        // The alternative is not using previous state and then using it for adding the one,
        // so that the cached information doesn't keep adding and starts it, at 1.
        //this.setState(() => {
        //   return{
        //     count:0
        //   };
        // });
        // this.setState((prevState) => {
        //  return {
        //     count:this.state.count + 1
        // };
        // });
    };
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick= {this.handleAddOne}>+1</button>
                <button onClick= {this.handleMinusOne}>-1</button>
                <button onClick= {this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
