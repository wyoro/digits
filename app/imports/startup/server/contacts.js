import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactsSeeds = [
  {
    first: 'William',
    last: 'Yoro',
    address: 'Waiphau, HI 96797',
    telephone: '808-999-9999',
    email: 'wyoro@hawaii.edu'
  },
  {
    first: 'Derrick',
    last: 'Comiso',
    address: 'Ewa Beach, HI 96797',
    telephone: '808-999-9999',
    email: 'dcomiso@hawaii.edu'
  },
  {
    first: 'Tevin',
    last: 'Sales',
    address: 'Ewa Beach, HI 96797',
    telephone: '808-999-9999',
    email: 'tsales@hawaii.edu'
  },
  {
    first: 'Jay',
    last: 'Ladines',
    address: 'Ewa Beach, HI 96797',
    telephone: '808-999-9999',
    email: 'jladines@hawaii.edu'
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactsSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
