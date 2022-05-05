import { getDatabase, ref, set} from "firebase/database"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser, signOut } from "firebase/auth"
export default{
    actions:{
        async login(){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                //const user = userCredential.user;
                //const uid = user.uid
                //console.log(user)
            })
            .catch((error)=>{
                console.log("error login msg: "+error.message)
            })
        },

       async register({dispatch}, {email, password, name}){
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential)=>{
                const user = userCredential.user
                const uid = user.uid
                const email = user.email
                user.displayName = name
                console.log(uid, email, user.displayName)
                const db = getDatabase();
                set(ref(db, 'users/'+uid),{
                    username: user.displayName,
                    email
                    })
                })
            .catch((error)=>{
                console.log("create error: "+error.message)
            })
        },
       async logout(){
           const auth = getAuth();
           await auth.signOut()
       }
    }
}