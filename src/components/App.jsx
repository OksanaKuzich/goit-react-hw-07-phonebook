// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './Utilit/GlobalStyle';
import { getContactsArray, getIsLoading, getError } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const array = useSelector(getContactsArray);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
  return (
    <div className="container">
      {loading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {array.length === 0 ? (
        <p>Please, enter your first contact</p>
      ) : (
          // JSON.stringify(array, null, 2)
          console.log(array)
        // <>
        //   <Filter />
        //   <ContactList />
        // </>
      )}

      <GlobalStyle />
    </div>
  );
};