const React = require('react');
const axios = require('axios');

export class UserList extends React.Component {

    constructor(props) {
        super(props);

        this.state = { users: [] };

        this.loadData = this.loadData.bind(this);

    }

    loadData(event) {
        axios.get('http://api.github.com/users')
            .then(function (data) {
                // this.setState({
                //     users: data
                // });

                console.log(this.that.state.users);
            });
    };

    render() {
        return (
            <div>
                <h1>User List</h1>
                <button className="btn btn-primary" onClick={this.loadData}>Load Data</button>
            </div>
        )
    }
};
