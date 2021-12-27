import React, { Component } from "react";
import PropTypes from 'prop-types';

import { LabelWrap,FormWrap, ButtonWrap } from './ContactForm.styled';


class ContactForm extends Component {
    state = {
        name: '',
        number: ''
      }
    
    handleNameChange = (event) => {
        const name = event.currentTarget.name;
        this.setState({[name]: event.currentTarget.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    }
    reset = () => {
        this.setState({name: '', number: ''});
    }
    render () {
        return (
            <>        
                <FormWrap onSubmit={this.handleSubmit}>
                    <LabelWrap>
                        Name
                        <input
                            name="name"
                            type="text"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                    </LabelWrap>
                    <LabelWrap>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={this.state.number}
                            onChange={this.handleNameChange}
                        />
                    </LabelWrap>
                    <ButtonWrap type="submit">Add contact</ButtonWrap>
                </FormWrap>

            </>
        )
    }

}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;