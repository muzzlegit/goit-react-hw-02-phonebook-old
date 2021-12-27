import React from "react";

const Filter = ({value, onChange}) => {

        return (
            <>        
                    <label>
                        Find contacts by name
                        <input
                            name="filter"
                            type="text"
                            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            // required
                            value={value}
                            onChange={onChange}
                        />
                    </label>
            </>
        )

}

export default Filter;