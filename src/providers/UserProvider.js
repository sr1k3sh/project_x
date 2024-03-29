import React, { Component,createContext  } from 'react';
import {auth, generateUserDocument} from './../firebase/Firebase'
export const UserContext = createContext({ user: null });
class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:null
         };
    }
    componentDidMount = () => {
        auth.onAuthStateChanged(async userAuth => {
            const user = await generateUserDocument(userAuth);
            this.setState({ user });
        });
      };
    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;