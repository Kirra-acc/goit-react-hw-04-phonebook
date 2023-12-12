import s from './Filter.module.css';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <input
      className={s.input}
      value={filter}
      onChange={handleFilter}
      type="text"
      placeholder="Search by contact name"
    />
  );
};
