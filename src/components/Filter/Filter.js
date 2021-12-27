import React from "react";
import PropTypes from 'prop-types';

import { Container, LabelWrap } from './Filter.styled';

const Filter = ({value, onChange}) => {

        return (
            <Container>        
              <LabelWrap>
                Find contacts by name
                <input
                  name="filter"
                  type="text"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={value}
                  onChange={onChange}
                />
              </LabelWrap>
            </Container>
        )

}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;