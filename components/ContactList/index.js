import firebase from '../../firebase/clientApp'
import ContactListStyles from '../../stylesheets/ContactList.module.css'

const ContactList = () => {
  const CONTACTS = [];

  const firebaseContacts = firebase.database().ref('contacts');
  // console.log("firebase.database().ref('contacts') is", firebaseContacts);

  const data = firebaseContacts.once('value').then(function (snapshot) {
    var result = snapshot.val();
    return result;
  });

  console.log("ContactList -> data", data)

  return (
    <div className={ContactListStyles.page}>



    </div>
  )
}

export default ContactList
