import React from 'react';
import '../styles/App.css';

function ContactMe() {

    const [name, inputName] = useState('');
    const [email, inputEmail] = useState('');
    const [message, addMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Your message has been received!  I will reach out to you as soon as I can.`);
        inputName('');
        inputEmail('');
        addMessage('');
    };

    return (
        <div>
            <h1 class="text-center">  Contact Me! </h1>
            <form className="form">
                <input
                    value={name}
                    name="name"
                    type="text"
                    placeholder="Your Name"
                />
                <input
                    value={email}
                    name="email"
                    type="text"
                    placeholder="Your Email"
                />
                <input
                    value={message}
                    name="message"
                    type="text"
                    placeholder="Message for Kiri"
                />
                <button class="btn btn-dark" type="button " onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}


export default ContactMe;