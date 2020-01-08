import React from 'react';
import {View} from 'react-native';
import Profile from './Profile';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Profile />
        {/* <Text> bj;wv; h;iuefah ;i</Text> */}
        {/* <Success /> */}
      </View>
    );
  }
}

export default App;

// import axios from 'axios';
// import {setToken} from '../../helpers/auth';

// import {setToken} from '../../helpers/auth';
// import {withRouter} from 'react-router-native';
// import {Link} from 'react-router-native';

// class Login extends React.Component {
//   state = {
//     username: '',
//     password: '',
//   };

//   onSubmit = async () => {
//     try {
//       const {username, password} = this.state;
//       const {history} = this.props;
//       if (username && password) {
//         const res = await axios.post(
//           'http://10.0.2.2:3053/api/v1/auth/login/',
//           this.state,
//         );
//         await setToken(res.data.token);
//         history.push('/');
//       }
//     } catch (err) {
//       console.log(err.response.data);
//     }
//   };

//   render() {
//     const {username, password} = this.state;
//     return (
//       <View style={styles.container}>
//         <View>
//           <Text style={styles.title}> Welcome to Dare.Inc</Text>

//           <TextInput
//             onChangeText={text => {
//               this.setState({username: text});
//             }}
//             value={username}
//             style={styles.textinput}
//             placeholder="Your Username"
//           />
//           <TextInput
//             onChangeText={text => {
//               this.setState({password: text});
//             }}
//             value={password}
//             style={styles.textinput}
//             placeholder="Your Password"
//             secureTextEntry
//           />

//           <Button onPress={this.onSubmit}>Log In</Button>
//         </View>
//         <View>
//           <Link to="/register">
//             <Text style={styles.bottomTitle}>Don't have an Account?</Text>
//           </Link>
//         </View>
//       </View>
//     );
//   }
// }
 