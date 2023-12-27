import React from "react";

class ProfileClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }
    render() {
        return (
            <>
                <h1>This is Profile Class Section</h1>
                <h2>{this.props.name}</h2>
                <h2>{this.state.count}</h2>
                <button
                    onClick={() => {
                        this.setState({
                            count: 1,
                        });
                    }}
                >Count</button>

            </>
            
        )
    }
}

export default ProfileClass;