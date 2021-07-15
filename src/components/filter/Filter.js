import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as contactActions from "../../redux/phonebook/phonebook-actions";
import contactSelectors from '../../redux/phonebook/contact-selectors';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: contactSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => {
    dispatch(contactActions.filterByName(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
