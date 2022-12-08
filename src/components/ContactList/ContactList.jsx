import { ContactListItem } from './ContactListItem';
import { ListContacts } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContactsArray, getContactsFilter } from 'redux/selectors';

export const ContactList = () => {
  const array = useSelector(getContactsArray);
  console.log(array);
  const filterName = useSelector(getContactsFilter);

  const visibleContacts = array.filter((contact) =>
    contact.name.toLowerCase().includes(filterName)
  );

  return (
    <ListContacts>
      {visibleContacts.map(({ id, name, phone }) => {
        return <ContactListItem key={id} id={id} name={name} number={phone} />;
      })}
    </ListContacts>
  );
};
