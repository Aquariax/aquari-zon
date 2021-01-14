import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDSWFb4Zs0lCuLMdk4tT69NaGu9Iu32z20',
	authDomain: 'aquari-zon.firebaseapp.com',
	projectId: 'aquari-zon',
	storageBucket: 'aquari-zon.appspot.com',
	messagingSenderId: '259522879671',
	appId: '1:259522879671:web:6bb59628716f0cc2426d32',
	measurementId: 'G-PXJDC6C8MR',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
