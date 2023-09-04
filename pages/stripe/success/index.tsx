"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import success from "../../../public/Images/success.png";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { auth } from '@/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue, off, DataSnapshot } from 'firebase/database';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
const Success = () => {
  const router = useRouter();

  const [sessionId, setSessionId] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const database = getDatabase();
    const firestore = getFirestore();

    let userDatabaseListener: ((snapshot: DataSnapshot, previousChildName?: string | null | undefined) => unknown) | undefined;

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        const userDatabaseRef = ref(database, `users/${user.uid}`);
        userDatabaseListener = onValue(userDatabaseRef, (snapshot) => {
          const user = snapshot.val();
          if (user) {
            setSessionId(user.subscription.sessionId || '');
          }
        });

        const firestoreRoute = `users/${user.uid}`;
        const firestoreDocRef = doc(firestore, firestoreRoute);
        const unsubscribeFirestore = onSnapshot(firestoreDocRef, (docSnapshot) => {
          const userData = docSnapshot.data();
          if (userData && userData.subscription && userData.subscription.sessionId) {
            setSessionId(userData.subscription.sessionId);
          }
        });

        return () => {
          if (userDatabaseListener) {
            off(userDatabaseRef, 'value', userDatabaseListener);
          }
          unsubscribeFirestore();
        };
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, [sessionId]);


  useEffect(() => {
    console.log("sessionId changed:", sessionId);
    // Do something with the updated sessionId
    
  }, [sessionId]);


  console.log(sessionId)

  const handlePaymentSuccess = () => {
    console.log(sessionId);
    fetch("http://localhost:8000/api/stripe/payment/success", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({sessionId: sessionId, firebaseId: auth.currentUser?.uid })
    })
    .then(async res => {
      if(res.ok) return res.json();
      const json = await res.json();
      return await Promise.reject(json);
    })
    .then(data => {
      console.log(data.message);
      router.push("/")
    })
    .catch(e => {
      console.log(e.error);
    });
  }


  return (
    <div className='m-0 p-0'>
      <div className='w-full min-h-[80vh] flex flex-col justify-center items-center'>
        <div className='my-10 text-green-600 text-2xl mx-auto flex flex-col justify-center items-center'>
          <Image src={success} alt="" width={220} height={220}/>
          <h3 className='text-4xl pt-20 lg:pt-0 font-bold text-center text-slate-700'>
            Payment Successful
          </h3>
          <button onClick={() => handlePaymentSuccess()}
          className='w-40 uppercase bg-[#009C96] text-white text-xl my-16 px-2 py-2 rounded'
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  )
}

export default Success