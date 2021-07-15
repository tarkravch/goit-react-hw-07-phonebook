import React from "react";
import { connect } from "react-redux";
import contactOperations from "../../redux/phonebook/phonebook-operations";
import styles from "../contact-list/ContactList.module.css";
import PropTypes from "prop-types";
import contactSelectors from '../../redux/phonebook/contact-selectors';

const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    <ul className={styles.list}>
      {contacts.map((itemName) => (
        <li key={itemName.id} className={styles.list__item}>
          {itemName.name}: {itemName.number}
          <button
            onClick={() => onDeleteContact(itemName.id)}
            className={styles.list__btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};



const mapStateToProps = (state) => {
  return {
    contacts: contactSelectors.getVisibleContacts(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
