import React from 'react';
import s from './Filter.module.css';

export class Filter extends React.Component {
  render() {
    const { filter, handleFilter } = this.props;
    return (
      <input
        className={s.input}
        value={filter}
        onChange={event => handleFilter(event)}
        type="text"
        placeholder="Search by contact name"
      />
    );
  }
}
