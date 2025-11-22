

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import SignUpModel from './SignUpModel';

export const ClickCashService = {
  signUpWithClickCash: async (rawData, isFromSignIn, RefferalCodeCoins, callback) => {
    try {
      const model = new SignUpModel(rawData);
      console.log("EmailId=============>>: ", model.email);



      const userCredential = await auth().createUserWithEmailAndPassword(
        model.email,
        model.password
      );

      const paymentRecords = model.userPaymentReords.map(payment => ({
        id: payment.id,
        paymentDate: payment.paymentDate,
        paymentMethods: payment.paymentMethods,
        paymentsId: payment.paymentsId,
        paymentAmmount: payment.paymentAmmount,
        status: payment.status,
      }));

      const coinHistoryRecords = model.userCoinsReords.map(coin => ({
        coinsDate: coin.coinsDate,
        coinsAmmount: coin.coinsAmmount,
        addType: coin.addType,
        Status: coin.Status,
      }));

      const totalReferalAdded = model.totalReferalAdded.map(referal => ({
        Referaldate: referal.date,
        ReferalreferalCode: referal.referalCode,
        ReferaluserEmail: referal.userEmail,
        ReferaluserName: referal.userName,
        Referallocation: referal.location,
      }));

      const userData = {
        UserName: model.fullName,
        idToken: model.idToken,
        UserEmail: model.email.toLowerCase(),
        UserPhone: model.phoneNumber,
        UserimageUrl: model.imageUrl,
        UserCred: model.password,
        UserRefferalCode: model.referalCode,
        UserPaymentMethods: model.paymentMethods,
        UserPaymentId: model.paymentId,
        UserCoins: model.userCoins,
        isLaderDone: model.isLaderDone,
        isValutDone: model.isValutDone,
        isMileStonDone: model.isMileStoneCoin,
        PaymentRecords: paymentRecords,
        CoinHistory: coinHistoryRecords,
        TotalUserRefferal: totalReferalAdded,
      };

      if (isFromSignIn === true){
         const googleCredential = auth.GoogleAuthProvider.credential(model.idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    const firebaseUser = userCredential.user;
     await database().ref(`Users/${firebaseUser.uid}`).set(userData);
      }else{
          const newUserId = userCredential.user.uid;
      await database().ref(`Users/${newUserId}`).set(userData);
      }

      // ✅ Save current user data first
     

      // ✅ ✅ Handle Referral Code (if provided)
      if (model.referalCodeUsed && model.referalCodeUsed.trim() !== '') {
        const allUsersSnapshot = await database().ref('Users').once('value');
        const allUsers = allUsersSnapshot.val();

        let referredUserKey = null;

        // Find the user who owns this referral code
        for (const key in allUsers) {
          if (
            allUsers[key]?.UserRefferalCode &&
            allUsers[key]?.UserRefferalCode.toLowerCase() === model.referalCodeUsed.toLowerCase()
          ) {
            referredUserKey = key;
            break;
          }
        }

        if (referredUserKey) {
          const newReferalData = {
            Referaldate: new Date().toISOString(),
            ReferalreferalCode: model.referalCode,
            ReferaluserEmail: model.email.toLowerCase(),
            ReferaluserName: model.fullName,
            Referallocation: 'unknown',
          };

          const existingReferralSnap = await database()
            .ref(`Users/${referredUserKey}/TotalUserRefferal`)
            .once('value');
          const existingReferralList = existingReferralSnap.val() || [];

          const updatedReferralList = [...existingReferralList, newReferalData];

          await database()
            .ref(`Users/${referredUserKey}/TotalUserRefferal`)
            .set(updatedReferralList);

            //----------

const coinsSnap = await database()
            .ref(`Users/${referredUserKey}/UserCoins`)
            .once('value');
          const currentCoins = coinsSnap.val() || 0;

          await database()
            .ref(`Users/${referredUserKey}/UserCoins`)
            .set(currentCoins + RefferalCodeCoins);

          // ⏺️ Add referral bonus to UserCoinsReords
          const coinHistorySnap = await database()
            .ref(`Users/${referredUserKey}/UserCoinsReords`)
            .once('value');
          const existingCoinHistory = coinHistorySnap.val() || [];

          const referralBonusEntry = {
            coinsDate: new Date().toISOString(),
            coinsAmmount: RefferalCodeCoins,
            addType: 'Referral Bonus',
            Status: 'credited',
          };

          const updatedCoinHistory = [...existingCoinHistory, referralBonusEntry];

          await database()
            .ref(`Users/${referredUserKey}/UserCoinsReords`)
            .set(updatedCoinHistory);

            //======

          console.log('✅ Referral data updated for:', referredUserKey);
        } else {
          console.warn('⚠️ No matching user found with referral code:', model.referalCodeUsed);
        }
      }

      callback(true, 'Signup Successful');
    } catch (error) {
      console.log("Signup Error: ", error.message);
      callback(false, error.message);
    }
  }
};


export const ClickCashServiceWithSignIn = {
  signUpWithClickCash: async (rawData, isFromSignIn, RefferalCodeCoins, callback) => {
    try {
      const model = new SignUpModel(rawData);
      console.log("EmailId=============>>: ", model.email);


      // const userCredential = await auth().createUserWithEmailAndPassword(
      //   model.email,
      //   model.password
      // );

      const paymentRecords = model.userPaymentReords.map(payment => ({
        id: payment.id,
        paymentDate: payment.paymentDate,
        paymentMethods: payment.paymentMethods,
        paymentsId: payment.paymentsId,
        paymentAmmount: payment.paymentAmmount,
        status: payment.status,
      }));

      const coinHistoryRecords = model.userCoinsReords.map(coin => ({
        coinsDate: coin.coinsDate,
        coinsAmmount: coin.coinsAmmount,
        addType: coin.addType,
        Status: coin.Status,
      }));

      const totalReferalAdded = model.totalReferalAdded.map(referal => ({
        Referaldate: referal.date,
        ReferalreferalCode: referal.referalCode,
        ReferaluserEmail: referal.userEmail,
        ReferaluserName: referal.userName,
        Referallocation: referal.location,
      }));

      const userData = {
        UserName: model.fullName,
        idToken: model.idToken,
        UserEmail: model.email.toLowerCase(),
        UserPhone: model.phoneNumber,
        UserimageUrl: model.imageUrl,
        UserCred: model.password,
        UserRefferalCode: model.referalCode,
        UserPaymentMethods: model.paymentMethods,
        UserPaymentId: model.paymentId,
        UserCoins: model.userCoins,
        isLaderDone: model.isLaderDone,
        isValutDone: model.isValutDone,
        isMileStonDone: model.isMileStoneCoin,
        PaymentRecords: paymentRecords,
        CoinHistory: coinHistoryRecords,
        TotalUserRefferal: totalReferalAdded,
      };

      console.log("newly id token",model.idToken)
      console.log("newly referalCode",model.referalCode)


       const googleCredential = auth.GoogleAuthProvider.credential(model.idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    const firebaseUser = userCredential.user;
     await database().ref(`Users/${firebaseUser.uid}`).set(userData);

      // if (isFromSignIn === true){
        
      // }


      // else{
      //     const newUserId = userCredential.user.uid;
      // await database().ref(`Users/${newUserId}`).set(userData);
      // }

      // ✅ Save current user data first
     

      // ✅ ✅ Handle Referral Code (if provided)
      if (model.referalCodeUsed && model.referalCodeUsed.trim() !== '') {
        const allUsersSnapshot = await database().ref('Users').once('value');
        const allUsers = allUsersSnapshot.val();

        let referredUserKey = null;

        // Find the user who owns this referral code
        for (const key in allUsers) {
          if (
            allUsers[key]?.UserRefferalCode &&
            allUsers[key]?.UserRefferalCode.toLowerCase() === model.referalCodeUsed.toLowerCase()
          ) {
            referredUserKey = key;
            break;
          }
        }

        if (referredUserKey) {
          const newReferalData = {
            Referaldate: new Date().toISOString(),
            ReferalreferalCode: model.referalCode,
            ReferaluserEmail: model.email.toLowerCase(),
            ReferaluserName: model.fullName,
            Referallocation: 'unknown',
          };

          const existingReferralSnap = await database()
            .ref(`Users/${referredUserKey}/TotalUserRefferal`)
            .once('value');
          const existingReferralList = existingReferralSnap.val() || [];

          const updatedReferralList = [...existingReferralList, newReferalData];

          await database()
            .ref(`Users/${referredUserKey}/TotalUserRefferal`)
            .set(updatedReferralList);

            //----------

const coinsSnap = await database()
            .ref(`Users/${referredUserKey}/UserCoins`)
            .once('value');
          const currentCoins = coinsSnap.val() || 0;

          await database()
            .ref(`Users/${referredUserKey}/UserCoins`)
            .set(currentCoins + RefferalCodeCoins);

          // ⏺️ Add referral bonus to UserCoinsReords
          const coinHistorySnap = await database()
            .ref(`Users/${referredUserKey}/UserCoinsReords`)
            .once('value');
          const existingCoinHistory = coinHistorySnap.val() || [];

          const referralBonusEntry = {
            coinsDate: new Date().toISOString(),
            coinsAmmount: RefferalCodeCoins,
            addType: 'Referral Bonus',
            Status: 'credited',
          };

          const updatedCoinHistory = [...existingCoinHistory, referralBonusEntry];

          await database()
            .ref(`Users/${referredUserKey}/UserCoinsReords`)
            .set(updatedCoinHistory);

            //======

          console.log('✅ Referral data updated for:', referredUserKey);
        } else {
          console.warn('⚠️ No matching user found with referral code:', model.referalCodeUsed);
        }
      }

      callback(true, 'Signup Successful');
    } catch (error) {
      console.log("Signup Error: ", error.message);
      callback(false, error.message);
    }
  }
};
