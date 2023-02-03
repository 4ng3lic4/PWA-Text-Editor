import { openDB } from 'idb';

const initdb = async () =>
//We are creating a new database named 'jate' which will be using version 1 of the database.
  openDB('jate', 1, {
    //Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }

      //Create a new object store for the data and give it a key name of 'id' which needs to increment automatically.
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });




  //Review Mini project database.js  to see if I need to add to this code


// TODO: Add logic to a method that accepts some content and adds it to the database
//
export const putDb = async (content) => {
  console.log('Post to the database');
console.log(content);
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .add() method on the store and pass in the content.
  const request = store.add({id:1, value:content });

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result.value);
} 



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
} 

initdb();
 