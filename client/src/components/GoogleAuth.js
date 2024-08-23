import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = { isSignedIn: false };

    componentDidMount() {
        // Load the Google Identity Services library
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.onload = () => {
            this.initializeGoogleAuth();
        };
        document.body.appendChild(script);
    }

    initializeGoogleAuth = () => {
        window.google.accounts.id.initialize({
            client_id: "350524982405-u9gkmd8lrl5ehlkvqcb7rdeuurvn7ij7.apps.googleusercontent.com", // Replace with your actual client ID
            callback: this.handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: 'outline', size: 'large' }  // customization options
        );
    }

    handleCredentialResponse = (response) => {
        // Handle the response (e.g., save the token, update UI)
        console.log("Encoded JWT ID token: " + response.credential);
        this.setState({ isSignedIn: true });
    }

    render() {
        return (
            <div>
                <div id="buttonDiv"></div>
                {this.state.isSignedIn && <button onClick={this.onSignOutClick}>Log Out</button>}
            </div>
        );
    }
}

export default GoogleAuth;
