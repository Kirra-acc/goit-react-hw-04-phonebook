import React from 'react';
import { nanoid } from 'nanoid';
import s from './Input.module.css';

export class Input extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleValueChange = (label, event) => {
    this.setState({ [label]: event.target.value });
  };

  createContact = event => {
    event.preventDefault();

    const { name, number } = this.state;

    const newContact = { name, number, id: nanoid() };
    console.log(newContact);

    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    this.props.newContactState(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        className={s.formBox}
        autoComplete="off"
        onSubmit={this.createContact}
      >
        <div className={s.inputBox}>
          <label className={s.formLabel}>
            <input
              className={s.formInput}
              value={this.state.name}
              onChange={event => this.handleValueChange('name', event)}
              type="text"
              name="name"
              placeholder="Contact name"
            />
          </label>
        </div>

        <div className={s.inputBox}>
          <label className={s.formLabel}>
            <input
              className={s.formInput}
              onChange={event => this.handleValueChange('number', event)}
              value={this.state.number}
              type="tel"
              name="number"
              placeholder="Phone number"
              required
            />
          </label>
        </div>

        <button className={s.addBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
