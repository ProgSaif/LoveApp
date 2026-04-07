import {
  auth, db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  collection, addDoc, onSnapshot, query, orderBy
} from "./firebase.js";

const signup = document.getElementById("signup");
const loginBtn = document.getElementById("loginBtn");

signup.onclick = async () => {
  await createUserWithEmailAndPassword(auth, email.value, password.value);
  alert("Account created");
};

loginBtn.onclick = async () => {
  await signInWithEmailAndPassword(auth, email.value, password.value);
};

onAuthStateChanged(auth, user => {
  if(user){
    document.getElementById("login").style.display="none";
    document.getElementById("chat").style.display="block";
    loadMessages();
  }
});

// Send message
send.onclick = async () => {
  await addDoc(collection(db,"messages"),{
    text: msgBox.value,
    time: Date.now()
  });
  msgBox.value="";
};

// Load messages realtime
function loadMessages(){
  const q = query(collection(db,"messages"), orderBy("time"));
  onSnapshot(q, snapshot=>{
    messages.innerHTML="";
    snapshot.forEach(doc=>{
      messages.innerHTML += "<p>"+doc.data().text+"</p>";
    });
  });
}
