import { useContext } from 'react';
import { ContactContext } from '../contexts/ContactContext';

const useContact = () => useContext(ContactContext);

export default useContact;
