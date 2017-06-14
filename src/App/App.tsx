import * as React from "react";

export class App extends React.Component<{}, any> {

    constructor() {
        super();
        this.state = {
            tasks : [],
            inputVal : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        
    }
    handleChange(event){
        this.setState({inputVal: event.target.value});
    }
    handleClick(){
        if(this.state.inputVal){
            this.setState({
                tasks : this.state.tasks.concat([this.state.inputVal])
            })
            this.setState({
                inputVal : ''
            })
        }
    }
    handleDelete(index){
        this.setState({
            tasks : this.state.tasks.filter((d, i) => i !== index)
        })
    }

    render() {
        let li = this.state.tasks.map((task, index)=>{
            return <li key={index}>{task} <button onClick={()=>this.handleDelete(index)}>Delete</button></li>
        })
        return (
            <div>
                <input type="text" value={this.state.inputVal} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add</button>
                <ul>
                    {li}
                </ul>
            </div>
        )
    }
}