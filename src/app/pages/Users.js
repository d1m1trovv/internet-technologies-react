import React, {Component} from 'react';
import API from '../api/API';
import InformationView from "../views/InformationView";

export default class Users extends Component {

    state = {
        users: [],
        editableElementIndex: -1
    }

    handleDelete = i => {
        let{users} = this.state;
        users.splice(i, 1);
        this.setState({users});
    };

    handleStartEditing = i => {
        this.setState({ editableElementIndex: i });
    };

    handleStopEditing = () => {
        this.setState({ editableElementIndex: -1 });
    };

    handleChange = (e, name, i) => {
        const { value } = e.target;
        this.setState(state => ({
            users: state.users.map(
                (row, j) => (j === i ? { ...row, [name]: value } : row)
            )
        }));
    };

    componentDidMount() {
        API.get('users')
            .then(users => {
                this.setState({users: users})
            })
    }

    render() {
        return (<div>
            <InformationView
                handleDelete={this.handleDelete.bind(this)}
                handleStartEditing={this.handleStartEditing}
                editableElementIndex={this.state.editableElementIndex}
                handleStopEditing={this.handleStopEditing}
                handleChange={this.handleChange}
                data={this.state.users}
                header={[
                    {
                        name: "Name",
                        prop: "name"
                    },
                    {
                        name: "Username",
                        prop: "username"
                    },
                    {
                        name: "Email",
                        prop: "email"
                    },
                ]}
                />
        </div>)
    }

}