import react from "react";
import propTypes from "prop-types";
import style from "./Filter.module.css";

const Filter = ({ filter, onSearch }) => {
  return (
    <div className={style.filter_form}>
      <label className={style.label_text} htmlFor="">
        Find contacts by name
        <input
          type="search"
          className={style.input_form}
          name="filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onSearch}
        />
      </label>
    </div>
  );
};
export default Filter;
Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onSearch: propTypes.func.isRequired,
};
