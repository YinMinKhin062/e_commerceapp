import 'firebase/firestore';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBFKGR5hh85o_DOHYSJritxqZyYMD_-nHM',
	authDomain: 'ecommerceapp-ef515.firebaseapp.com',
	projectId: 'ecommerceapp-ef515',
	storageBucket: 'ecommerceapp-ef515.appspot.com',
	messagingSenderId: '291762108283',
	appId: '1:291762108283:web:5d21643dfd57febef52fde',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
