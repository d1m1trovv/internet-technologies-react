import React, {Component} from 'react';
import API from '../api/API';
import InformationView from "../views/InformationView";

export default class Posts extends Component {

    state = {
        posts: [],
        editableElementIndex: -1
    }

    handleDelete = i => {
        let{posts} = this.state;
        posts.splice(i, 1);
        this.setState({posts});
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
            posts: state.posts.map(
                (row, j) => (j === i ? { ...row, [name]: value } : row)
            )
        }));
    };

    componentDidMount() {
        API.get('posts')
            .then(posts => {
                this.setState({posts: posts})
            })
    }

    render() {
        return (<div>
            <InformationView
                handleDelete={this.handleDelete}
                handleStartEditing={this.handleStartEditing}
                editableElementIndex={this.state.editableElementIndex}
                handleStopEditing={this.handleStopEditing}
                handleChange={this.handleChange}
                data={this.state.posts}
                header={[
                    {
                        name: "Title",
                        prop: "title"
                    },
                    {
                        name: "Body",
                        prop: "body"
                    },
                ]}
            />
        </div>)
    }

}