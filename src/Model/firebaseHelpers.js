


// firebaseHelpers.js (React.js version)
import { database } from '../FireBaseComponent/FirebaseConfig'; // Import from your config file
import { ref, update, query, orderByChild, equalTo, get, child, push, set, remove } from 'firebase/database';
import SignUpModel, {
  UserCoinHistory,
  UserPaymentModel,
  AdminToUserPaymentModel,
  AdminPaymentUpdateModel,
  NewUserCoinHistory,
  CoinPackage
} from '../Model/SignUpModel';

export const getClickCashUserNameByEmail = async (email) => {
  try {
    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const usersData = snapshot.val();
      const firstUserKey = Object.keys(usersData)[0];
      const user = usersData[firstUserKey];

      if (user && user.UserName) {
        return { userName: user.UserName, error: null };
      } else {
        return {
          userName: null,
          error: new Error('UserName not found.'),
        };
      }
    } else {
      return {
        userName: null,
        error: new Error('User not found.'),
      };
    }
  } catch (error) {
    return {
      userName: null,
      error,
    };
  }
};

export const getUserCoinByEmailAdmin = async (email) => {
  try {
    const usersRef = ref(database, 'Admin');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const usersData = snapshot.val();
      const firstUserKey = Object.keys(usersData)[0];
      const user = usersData[firstUserKey];

      if (user && user.PaymentWantByUser) {
        console.log("updated Coins Status---------->>", user.PaymentWantByUser);
        return { coin: user.PaymentWantByUser, error: null };
      } else {
        return {
          coin: null,
          error: new Error('UserName not found.'),
        };
      }
    } else {
      return {
        coin: null,
        error: new Error('User not found.'),
      };
    }
  } catch (error) {
    return {
      coin: null,
      error,
    };
  }
};

export const fetchClickCashUserCoinsByEmail = async (email) => {
  try {
    const emailLower = email;
    console.log('🔍 Searching for email:', emailLower);

    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(emailLower));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      console.log('✅ Coin Query Data:', userData);
      const userKey = Object.keys(userData)[0];
      const user = userData[userKey];
      const userCoins = user?.UserCoins || 0;
      console.log("UserPaymentMethods, UserPaymentId--------", user.UserPaymentMethods, user.UserPaymentId);
      return { userCoins, error: null };
    } else {
      console.log('❌ No user found matching email:', emailLower);
      return { userCoins: null, error: new Error('User not found.') };
    }
  } catch (error) {
    console.log('❌ Error fetching userCoins:', error.message);
    return { userCoins: null, error };
  }
};

export const fetchClickCashUserPaymentMethods_Id = async (email) => {
  try {
    const emailLower = email;
    console.log('🔍 Searching for email:', emailLower);

    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(emailLower));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      console.log('✅ Coin Query Data:', userData);
      const userKey = Object.keys(userData)[0];
      const user = userData[userKey];

      return { user, error: null };
    } else {
      console.log('❌ No user found matching email:', emailLower);
      return { user: null, error: new Error('User not found.') };
    }
  } catch (error) {
    console.log('❌ Error fetching userCoins:', error.message);
    return { user: null, error };
  }
};

export const addClickCashCoinsToUser = async (email, adCoins, addType, originalads, userLocation) => {
  console.log("call addClickCashCoinsToUser");
  try {
    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      const userKey = Object.keys(userData)[0];
      const user = userData[userKey];

      const currentCoins = user?.UserCoins || 0;
      const updatedCoins = currentCoins + adCoins;

      const currentDate = new Date().toLocaleDateString();

      const newCoinRecord = {
        coinsDate: currentDate,
        coinsAmmount: adCoins,
        addType: addType,
        originalads: originalads,
        adsWatchLocation: userLocation
      };

      const updatedCoinRecords = user?.UserCoinsReords || [];
      updatedCoinRecords.push(newCoinRecord);

      await update(child(usersRef, userKey), {
        UserCoins: updatedCoins,
        UserCoinsReords: updatedCoinRecords,
      });

      console.log("updated success");
      return { updatedCoins, error: null };
    } else {
      return {
        updatedCoins: null,
        error: new Error('User not found.'),
      };
    }
  } catch (error) {
    console.log("error is getting", error);
    return { updatedCoins: null, error };
  }
};

export const addClickCashLocationToUser = async (email, location) => {
  try {
    const usersRef = ref(database, 'Users');
    console.log('🔍 Searching for email:', email);

    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      const userKey = Object.keys(userData)[0];

      console.log('✅ User found with key:', userKey);
      console.log('📍 Location to update:', location);

      const currentDateTime = new Date().toISOString();

      await update(child(usersRef, userKey), {
        UserLocation: location,
        LocationUpdatedAt: currentDateTime,
      });

      console.log('✅ Location updated successfully at:', currentDateTime);

      return {
        success: true,
        email,
        location,
        userKey,
        updatedAt: currentDateTime,
        error: null,
      };
    } else {
      console.log('❌ User not found for email:', email);

      return {
        success: false,
        email,
        location,
        userKey: null,
        updatedAt: null,
        error: new Error('User not found.'),
      };
    }
  } catch (error) {
    console.log('❌ Error updating location:', error.message);

    return {
      success: false,
      email,
      location,
      userKey: null,
      updatedAt: null,
      error,
    };
  }
};

export const getClickCashUserCoinHistoryByEmail = async (email) => {
  try {
    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      const user = Object.values(userData)[0];

      const coinHistoryData = user?.UserCoinsReords || [];

      const coinHistory = coinHistoryData.map((coin) => new UserCoinHistory({
        coinsDate: coin.coinsDate || '',
        coinsAmmount: coin.coinsAmmount || 0,
        addType: coin.addType || '',
        Status: coin.Status || '',
      }));

      return { coinHistory, error: null };
    } else {
      return {
        coinHistory: null,
        error: new Error('User not found.'),
      };
    }
  } catch (error) {
    return {
      coinHistory: null,
      error,
    };
  }
};

export const getClickCashUserPaymentsByEmail = async (email) => {
  try {
    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const users = snapshot.val();
      const user = Object.values(users)[0];

      const paymentRecords = user?.userPaymentRecords || [];

      const formattedRecords = paymentRecords.map(item => {
        return new UserPaymentModel({
          id: item.id || '',
          status: item.Status || '',
          paymentDate: item.paymentDate || '',
          paymentMethods: item.paymentMethod || '',
          paymentsId: item.paymentId || '',
          paymentAmmount: item.paymentAmount || 0,
          coins: item.coins || 0,
          isRecomended: item.isRecomended || false,
        });
      });

      return { userPayments: formattedRecords, error: null };
    } else {
      return { userPayments: [], error: new Error('User not found with this email.') };
    }
  } catch (error) {
    return { userPayments: [], error };
  }
};

export const updateClickCashPaymentMethodsByEmail = async (email, newPaymentMethod, paymentId) => {
  try {
    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      const userKey = Object.keys(userData)[0];

      const updates = {
        UserPaymentMethods: newPaymentMethod,
        UserPaymentId: paymentId,
      };

      await update(child(usersRef, userKey), updates);

      const updatedSnapshot = await get(child(usersRef, userKey));
      const updatedUser = updatedSnapshot.val();

      return { updatedUser, error: null };
    } else {
      return {
        updatedUser: null,
        error: new Error('User not found.'),
      };
    }
  } catch (error) {
    return {
      updatedUser: null,
      error,
    };
  }
};

export const updateCoinToUsers = async (email, coin) => {
  try {
    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      const userKey = Object.keys(userData)[0];

      const updates = {
        UserCoins: coin,
      };

      await update(child(usersRef, userKey), updates);

      const updatedSnapshot = await get(child(usersRef, userKey));
      const updatedUser = updatedSnapshot.val();

      return { updatedUser, error: null };
    } else {
      return {
        updatedUser: null,
        error: new Error('User not found.'),
      };
    }
  } catch (error) {
    return {
      updatedUser: null,
      error,
    };
  }
};

export const fetchClickCashUserByEmail = async (email) => {
  try {
    const sanitizedEmail = email.trim();
    console.log("fetching user by email:", sanitizedEmail);

    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(sanitizedEmail));
    const snapshot = await get(userQuery);

    if (!snapshot.exists()) {
      return { user: null, error: new Error('User not found.') };
    }

    const usersData = snapshot.val();
    const firstUserKey = Object.keys(usersData)[0];
    const user = usersData[firstUserKey];

    if (!user) {
      return { user: null, error: new Error('User not found.') };
    }

    const userModel = new SignUpModel({
      email: user.UserEmail || '',
      password: user.UserCred || '',
      confirmPassword: '',
      fullName: user.UserName || '',
      phoneNumber: user.UserPhone || '',
      userCoins: user.UserCoins || 0,
      paymentMethods: user.UserPaymentMethods || '',
      paymentId: user.UserPaymentId || '',
      isLadderCoin: user.isLadderCoin || false,
      isValultCoin: user.isValultCoin || false,
      isMileStoneCoin: user.isMileStoneCoin || false,
      isSummitCoin: user.isSummitCoin || false,
      isPowerStepCoin: user.isPowerStepCoin || false,
      isDollarBoostCoin: user.isDollarBoostCoin || false,
      isBoostCoin: user.isBoostCoin || false,
      isPeakeCoin: user.isPeakeCoin || false,
      isDollarPeakeCoin: user.isDollarPeakeCoin || false,
      isDollarJumpCoin: user.isDollarJumpCoin || false,
      isJumpCoin: user.isJumpCoin || false,
      isDollarAscendToken: user.isDollarAscendToken || false,
      isAscendToken: user.isAscendToken || false,
      isDollarNextLevelCoin: user.isDollarNextLevelCoin || false,
      isNextLevelCoin: user.isNextLevelCoin || false,
      lastPayout_Ladder: user.lastPayout_Ladder || null,
      lastPayout_Vault: user.lastPayout_Vault || null,
      userCoinsReords: user.UserCoinsReords
        ? user.UserCoinsReords.slice(-20).map((coin) => new UserCoinHistory(coin))
        : [],
      userPaymentReords: user.PaymentRecords
        ? user.PaymentRecords.slice(-20).map((payment) => new UserPaymentModel(payment))
        : [],
    });

    return { user: userModel, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

export const updateClickCashSmallPaymentByEmail = async (
  email,
  isLadderCoin,
  isValultCoin,
  isMileStoneCoin,
  isSummitCoin,
  isPowerStepCoin,
  isDollarBoostCoin,
  isBoostCoin,
  isPeakeCoin,
  isDollarPeakeCoin,
  isDollarJumpCoin,
  isJumpCoin,
  isDollarAscendToken,
  isAscendToken,
  isDollarNextLevelCoin,
  isNextLevelCoin,
  coinsToDeduct,
  paymentDetails,
  paymentDate,
  paymentMethods,
  paymentsId,
  paymentAmount,
  paymentCoins,
  userLocation,
  userUniqueId,
  isRecomended,
) => {
  try {
    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (!snapshot.exists()) {
      return { updatedUser: null, error: new Error('User not found.') };
    }

    const usersData = snapshot.val();
    const userKey = Object.keys(usersData)[0];
    const user = usersData[userKey];

    const currentCoins = user.UserCoins || 0;

    if (coinsToDeduct > currentCoins) {
      return { updatedUser: null, error: new Error('Insufficient coins to deduct.') };
    }

    const newBalance = currentCoins - coinsToDeduct;

    const updatedUserPaymentRecords = user.userPaymentRecords || [];
    updatedUserPaymentRecords.push(paymentDetails);
    console.log("new ladder coin is ======", isLadderCoin);

    const updatedValues = {
      isLadderCoin,
      isValultCoin,
      isMileStoneCoin,
      isSummitCoin,
      isPowerStepCoin,
      isDollarBoostCoin,
      isBoostCoin,
      isPeakeCoin,
      isDollarPeakeCoin,
      isDollarJumpCoin,
      isJumpCoin,
      isDollarAscendToken,
      isAscendToken,
      isDollarNextLevelCoin,
      isNextLevelCoin,
      lastPayout_Vault: isValultCoin ? new Date().toISOString() : user.lastPayout_Vault,
      lastPayout_Ladder: isLadderCoin ? new Date().toISOString() : user.lastPayout_Ladder,
      UserCoins: newBalance,
      userPaymentRecords: updatedUserPaymentRecords,
    };

    await update(child(usersRef, userKey), updatedValues);

    const updatedSnapshot = await get(child(usersRef, userKey));
    const updatedUserData = updatedSnapshot.val();
    const updatedUser = new SignUpModel({
      email: updatedUserData.UserEmail || '',
      password: updatedUserData.UserCred || '',
      confirmPassword: '',
      fullName: updatedUserData.UserName || '',
      phoneNumber: updatedUserData.UserPhone || '',
      userLocation: updatedUserData.UserLocation || '',
      userUniqueId: updatedUserData.UserUniqueId || '',
      userCoins: updatedUserData.UserCoins || 0,
    });

    return { updatedUser, error: null };

  } catch (error) {
    return { updatedUser: null, error };
  }
};

export const updateUserPaymentToAdmin = async (
  userUniqueId,
  UserName,
  UserEmail,
  userLocation,
  UserPaymentMethods,
  UserPhone,
  UserPaymentId,
  pwd,
  userHaveCoins,
  PaymentWantByUser,
  userCoinHistory,
) => {
  try {
    console.log("admin test email======", UserEmail);
    const adminRef = ref(database, 'Admin');
    const adminQuery = query(adminRef, orderByChild('UserEmail'), equalTo(UserEmail));
    const snapshot = await get(adminQuery);
    console.log("userCoinHistory -------gtssss", userCoinHistory);

    const paymentWantDict = PaymentWantByUser.map((coin) => ({
      userUniqueId: coin.userUniqueId,
      paymentDate: coin.paymentDate,
      paymentMethods: UserPaymentMethods,
      paymentsId: UserPaymentId,
      paymentAmmount: coin.paymentAmmount,
      fcmToken: coin.fcmToken,
      accessToken: coin.accessToken,
      paymentCoins: coin.paymentCoins,
      userLocation: coin.userLocation,
      status: coin.status,
      isRecomended: coin.isRecomended
    }));

    const { coinHistory, error } = await getClickCashUserCoinHistoryByEmail(UserEmail);

    const coinHistoryDict = coinHistory.map((coin) => ({
      coinsDate: coin.coinsDate,
      coinsAmmount: coin.coinsAmmount,
      addType: coin.addType,
    }));

    if (snapshot.exists()) {
      const adminData = snapshot.val();
      const existingKey = Object.keys(adminData)[0];
      const existingData = adminData[existingKey];

      const existingPayments = existingData?.PaymentWantByUser || [];
      const updatedPayments = [...existingPayments, ...paymentWantDict];

      const updatedDict = {
        UserName,
        UserEmail,
        UserPhone,
        userMainsId: pwd,
        UserPaymentMethods,
        UserPaymentId,
        userHaveCoins,
        PaymentWantByUser: updatedPayments,
        userCoinHistory: coinHistoryDict,
      };

      await update(child(adminRef, existingKey), updatedDict);
      console.log('✅ User data successfully updated with new payments!');
    } else {
      const newDict = {
        UserName,
        UserEmail,
        UserPhone,
        userMainsId: pwd,
        UserPaymentMethods,
        UserPaymentId,
        userHaveCoins,
        PaymentWantByUser: paymentWantDict,
        userCoinHistory: coinHistoryDict,
      };

      await push(adminRef, newDict);
      console.log('🆕 New user data successfully saved!');
    }
  } catch (error) {
    console.error('❌ Error updating user payment to admin:', error);
  }
};

export const fetchTotalUsersLists = async () => {
  try {
    const snapshot = await get(ref(database, 'Users'));
    console.log("Firebase snapshot:", snapshot.val());

    if (!snapshot.exists()) {
      throw new Error('Data format mismatch or empty.');
    }

    const userDataDict = snapshot.val();
    const userListDatas = [];

    for (const key in userDataDict) {
      const user = userDataDict[key];
      console.log("👉 UserLocation raw data:", user.UserLocation);

      const userModel = new SignUpModel({
        id: key,
        email: user.UserEmail || '',
        password: user.UserCred || '',
        UserLocation: user.UserLocation
          ? typeof user.UserLocation === "object"
            ? `${user.UserLocation.city || 'Unknown'}, ${user.UserLocation.country || 'Unknown'}`
            : String(user.UserLocation || 'Unknown')
          : 'Unknown',
        referalCode: user.UserRefferalCode,
        confirmPassword: '',
        fullName: user.UserName || '',
        phoneNumber: user.UserPhone || '',
        userCoins: user.UserCoins || 0,
        paymentMethods: user.UserPaymentMethods || '',
        paymentId: user.UserPaymentId || '',
        isLadderCoin: user.isLadderCoin || false,
        isValultCoin: user.isValultCoin || false,
        isMileStoneCoin: user.isMileStoneCoin || false,
        isSummitCoin: user.isSummitCoin || false,
        isPowerStepCoin: user.isPowerStepCoin || false,
        isDollarBoostCoin: user.isDollarBoostCoin || false,
        isBoostCoin: user.isBoostCoin || false,
        isPeakeCoin: user.isPeakeCoin || false,
        isDollarPeakeCoin: user.isDollarPeakeCoin || false,
        isDollarJumpCoin: user.isDollarJumpCoin || false,
        isJumpCoin: user.isJumpCoin || false,
        isDollarAscendToken: user.isDollarAscendToken || false,
        isAscendToken: user.isAscendToken || false,
        isDollarNextLevelCoin: user.isDollarNextLevelCoin || false,
        isNextLevelCoin: user.isNextLevelCoin || false,
        lastPayout_Ladder: user.lastPayout_Ladder || null,
        lastPayout_Vault: user.lastPayout_Vault || null,
        userCoinsReords: user.UserCoinsReords
          ? user.UserCoinsReords.map((coin) => new UserCoinHistory(coin))
          : [],
        userPaymentReords: user.PaymentRecords
          ? user.PaymentRecords.map((payment) => new UserPaymentModel(payment))
          : [],
      });

      userListDatas.push(userModel);
    }

    return { users: userListDatas, error: null };

  } catch (error) {
    return { users: null, error };
  }
};

export const fetchAdmins = async () => {
  try {
    const snapshot = await get(ref(database, 'Admin'));
    if (!snapshot.exists()) throw new Error('Data format mismatch or empty.');

    const adminDataDict = snapshot.val();
    const admins = [];

    for (const key in adminDataDict) {
      const adminData = adminDataDict[key];
      const userEmail = adminData.UserEmail || '';
      const paymentWantByUser = adminData.PaymentWantByUser || [];

      const allPaymentsDoneOrFailed = Array.isArray(paymentWantByUser) &&
        paymentWantByUser.every(p => {
          const status = p.status?.toLowerCase() || '';
          return status.startsWith('done') || status.startsWith('failed');
        });

      if (allPaymentsDoneOrFailed) {
        await remove(ref(database, `Admin/${key}`));
        console.log(`🗑️ Removed user ${userEmail} (all payments done or failed)`);
        continue;
      }

      const userName = adminData.UserName || '';
      const userPhone = adminData.UserPhone || '';
      const userMainsId = adminData.userMainsId || '';
      const userLocation = adminData.userLocation || '';
      const userPaymentMethods = adminData.UserPaymentMethods || '';
      const userPaymentId = adminData.UserPaymentId || '';
      const userHaveCoins = adminData.userHaveCoins || 0;

      const paymentDetails = (paymentWantByUser || []).map(paymentData => new AdminToUserPaymentModel({
        userUniqueId: paymentData.userUniqueId || '',
        paymentDate: paymentData.paymentDate || '',
        paymentMethods: paymentData.paymentMethods || '',
        paymentsId: paymentData.paymentsId || '',
        paymentAmmount: paymentData.paymentAmmount || 0,
        paymentCoins: paymentData.paymentCoins || 0,
        userLocation: paymentData.userLocation || '',
        status: paymentData.status || '',
        isRecomended: paymentData.isRecomended || false
      }));

      const userCoinHistory = (adminData.userCoinHistory || []).map(historyData => new NewUserCoinHistory({
        coinsDate: historyData.coinsDate || '',
        addType: historyData.addType || '',
        coinsAmmount: historyData.coinsAmmount || 0,
        Status: historyData.Status || '',
      }));

      const admin = new AdminPaymentUpdateModel({
        userEmail,
        userName,
        userPhone,
        userMainsId,
        userHaveCoins,
        userPaymentsDetails: paymentDetails,
        userCoinHistory: userCoinHistory,
      });

      admins.push(admin);
    }

    return { admins, error: null };

  } catch (error) {
    console.error('❌ Error fetching admins:', error);
    return { admins: null, error };
  }
};

export const updateClickCashPaymentStatusForUserAndAdmin = async (email, paymentId, newStatus, userName,
  paymentsAmount,
  country,
  PaymentMethod) => {
  try {
    const dbRef = ref(database);

    // Step 1: Update in Users
    const usersQuery = query(ref(database, 'Users'), orderByChild('UserEmail'), equalTo(email));
    const usersSnapshot = await get(usersQuery);

    if (!usersSnapshot.exists()) {
      throw new Error('User not found.');
    }

    const usersData = usersSnapshot.val();
    const userKey = Object.keys(usersData)[0];
    const user = usersData[userKey];
    let userPaymentRecords = user.userPaymentRecords || [];

    const userIndex = userPaymentRecords.findIndex(record => record.id === paymentId);

    if (userIndex === -1) {
      throw new Error('Payment record not found in user.');
    }

    userPaymentRecords[userIndex].Status = newStatus;

    await set(child(dbRef, `Users/${userKey}/userPaymentRecords`), userPaymentRecords);

    // Step 2: Update in Admin
    const adminSnapshot = await get(ref(database, 'Admin'));
    const adminData = adminSnapshot.val();
    let foundAdmin = false;

    for (const [adminKey, adminValue] of Object.entries(adminData)) {
      if (adminValue.UserEmail?.toLowerCase() === email.toLowerCase()) {
        let adminPayments = adminValue.PaymentWantByUser || [];
        const adminIndex = adminPayments.findIndex(p => p.userUniqueId === paymentId);

        if (adminIndex !== -1) {
          adminPayments[adminIndex].status = newStatus;
          await set(child(dbRef, `Admin/${adminKey}/PaymentWantByUser`), adminPayments);
          foundAdmin = true;
          break;
        }
      }
    }

    if (!foundAdmin) {
      throw new Error('Admin payment record not found.');
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('❌ Error updating payment status:', error.message);
    return { success: false, error };
  }
};

export const saveTransaction = async (userData) => {
  try {
    const transactionRef = push(ref(database, "TransactionDetails"));

    await set(transactionRef, {
      UserName: userData.UserName,
      UserPaymentMode: userData.UserPaymentMode,
      UserPaymentCoins: userData.UserPaymentCoins,
      PaidByAdmin: userData.PaidByAdmin,
      isRecommended: userData.isRecommended,
      UserLocation: userData.UserLocation,
      PaymentStatus: userData.PaymentStatus
    });

    console.log("Transaction saved");
  } catch (err) {
    console.log("Error:", err);
  }
};

// Continue with the rest of your functions following the same pattern...

export const fetchCoinPackages = async () => {
  try {
    const snapshot = await get(ref(database, '/MoneyWithdraw/Coins'));
    const rawData = snapshot.val();
    const packagesArray = Array.isArray(rawData)
      ? rawData
      : Object.values(rawData || {});

    const coinPackages = packagesArray.map(item => new CoinPackage(item));
    return coinPackages;
  } catch (error) {
    console.error('Error fetching coin packages:', error);
    return [];
  }
};

export const fetchRewardsData = async () => {
  try {
    const snapshot = await get(ref(database, '/EarningProcess'));
    console.log("Fetched Snapshot Data:", snapshot.val());

    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("Rewards Data Found: ", data);

      const journeyList = data?.Journey || [];
      const alertData = data?.Alert || {};

      return { journeyList, alertData };
    } else {
      console.log('No RewardsData found');
      return { journeyList: [], alertData: {} };
    }
  } catch (error) {
    console.error('Error fetching rewards data:', error);
    return { journeyList: [], alertData: {} };
  }
};

export const fetchUrls = async () => {
  try {
    const snapshot = await get(ref(database, '/Weburl/PrivacyAndTerms'));
    const data = snapshot.val();
    return data;
  } catch (error) {
    console.error('Failed to fetch URLs:', error);
  }
};

export const fetchAdminEmails = async () => {
  try {
    const snapshot = await get(ref(database, '/Weburl/AdminEmail'));
    const data = snapshot.val();
    console.log('pass to fetch URLs:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch URLs:', error);
  }
};

export const fetchUrlsSocial = async () => {
  try {
    const snapshot = await get(ref(database, '/Weburl/PrivacyAndTerms/Socialurl'));
    const data = snapshot.val();
    return data;
  } catch (error) {
    console.error('Failed to fetch URLs:', error);
  }
};

export const fetchCoinUpdate = async (country) => {
  try {
    let path = '';

    if (country?.toLowerCase() === 'india' || country?.toLowerCase() === 'unknown') {
      path = '/CoinsUpdate/Coins';
    } else {
      path = '/Weburl/CoinsUpdate/Coins';
    }

    console.log("📡 Fetching from path:", path);
    console.log("📡 Fetching from country:", country);

    const snapshot = await get(ref(database, path));
    const data = snapshot.val();

    console.log("✅ Updated coin is ---------->>", data);

    if (data) {
      return data;
    }
  } catch (error) {
    console.error('❌ Failed to fetch coin data:', error);
  }
};

export const fetchCoinUpdateIronsSOURCE = async (country) => {
  try {
    let path = '';

    if (country?.toLowerCase() === 'india' || country?.toLowerCase() === 'unknown') {
      path = '/CoinsUpdate/Coins/IronSource';
    } else {
      path = '/Weburl/CoinsUpdate/Coins/IronSource';
    }

    console.log("📡 Fetching from path:", path);

    const snapshot = await get(ref(database, path));
    const data = snapshot.val();

    console.log("✅ Updated IronSource coin is ---------->>", data);

    if (data) {
      return data;
    }
  } catch (error) {
    console.error('❌ Failed to fetch IronSource coin data:', error);
  }
};

export const fetchCustomAdsUrls = async () => {
  try {
    const snapshot = await get(ref(database, '/CustomAds'));
    const data = snapshot.val();
    return data;
  } catch (error) {
    console.error('Failed to fetch URLs:', error);
  }
};

export const addTransaction = async ({ name, amount, coins, country, method }) => {
  try {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const transactionRef = push(ref(database, "TransactionDone"));
    const transactionId = transactionRef.key;

    const transactionData = {
      id: transactionId,
      name: name,
      amount: amount,
      coins: coins,
      country: country,
      date: formattedDate,
      status: "Completed",
      method: method,
    };

    await set(transactionRef, transactionData);
    console.log("✅ Transaction added!");
  } catch (error) {
    console.log("❌ Error adding transaction:", error);
  }
};

export const getUserAdsHistoryByEmail = async (email) => {
  try {
    if (!email || typeof email !== 'string') throw new Error('Invalid email');

    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (!snapshot.exists()) {
      return { user: null, error: new Error('User not found') };
    }

    const userKey = Object.keys(snapshot.val())[0];
    const user = snapshot.val()[userKey];
    return { user, error: null };
  } catch (err) {
    console.error('Error fetching user ads history:', err);
    return { user: null, error: err };
  }
};

export const removeUserAdsHistory = async (email) => {
  try {
    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (!snapshot.exists()) {
      console.log('User not found for email:', email);
      return false;
    }

    const userKey = Object.keys(snapshot.val())[0];
    await update(child(usersRef, userKey), { UserCoinsReords: [] });
    console.log('Ads history removed for user:', email);
    return true;
  } catch (err) {
    console.error("Error removing Ads history:", err);
    throw err;
  }
};

export const removeUserPaymentRecords = async (email) => {
  try {
    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (!snapshot.exists()) return false;

    const userKey = Object.keys(snapshot.val())[0];
    await update(child(usersRef, userKey), { PaymentRecords: [] });
    return true;
  } catch (err) {
    console.error("Error removing Payment records:", err);
    throw err;
  }
};

export const getUserPaymentRecordsByEmail = async (email) => {
  try {
    if (!email || typeof email !== 'string') {
      throw new Error('Invalid email');
    }

    const usersRef = ref(database, 'Users');
    const userQuery = query(usersRef, orderByChild('UserEmail'), equalTo(email));
    const snapshot = await get(userQuery);

    if (!snapshot.exists()) {
      return { user: null, error: new Error('User not found') };
    }

    const userKey = Object.keys(snapshot.val())[0];
    const user = snapshot.val()[userKey];

    return { user, error: null };
  } catch (err) {
    console.error('Error fetching user payment records:', err);
    return { user: null, error: err };
  }
};

const sanitizeKey = (key) => {
  if (!key) return "unknown_user";
  return key.replace(/[.#$/\[\]]/g, "_");
};

export const updateUserLocationRTDB = async (userId, locationData) => {
  try {
    const safeUserId = sanitizeKey(userId);
    if (!safeUserId) throw new Error("Invalid userId after sanitization");

    let finalData = { city: "Unknown", country: "Unknown" };

    if (locationData) {
      if (typeof locationData === "string") {
        finalData.city = locationData || "Unknown";
        finalData.country = locationData.split(",").pop()?.trim() || "Unknown";
      } else if (typeof locationData === "object") {
        finalData.city = locationData.city || "Unknown";
        finalData.country = locationData.country || "Unknown";
      }
    }

    await update(ref(database, `/Users/${safeUserId}`), {
      UserLocation: finalData,
      LocationUpdatedAt: new Date().toISOString(),
    });

    console.log("✅ Location updated in RTDB:", { city: finalData.city, country: finalData.country });
  } catch (err) {
    console.error("❌ Error updating location:", err);
  }
};

export const updateLocationByEmail = async (email, locationData) => {
  try {
    const usersRef = ref(database, "/Users");
    const userQuery = query(usersRef, orderByChild("UserEmail"), equalTo(email));
    const snapshot = await get(userQuery);

    if (!snapshot.exists()) {
      console.log("❌ User not found with email:", email);
      return;
    }

    const updates = {};
    snapshot.forEach((child) => {
      const userId = child.key;

      let finalData = { city: "Unknown", country: "Unknown" };

      if (locationData) {
        if (typeof locationData === "string") {
          const parts = locationData.split(",");
          finalData.city = parts[0]?.trim() || "Unknown";
          finalData.country = parts[1]?.trim() || "Unknown";
        } else if (typeof locationData === "object") {
          finalData.city = locationData.city || "Unknown";
          finalData.country = locationData.country || "Unknown";
        }
      }

      updates[`/Users/${userId}/UserLocation`] = finalData;
      updates[`/Users/${userId}/LocationUpdatedAt`] = new Date().toISOString();
    });

    await update(ref(database), updates);
    console.log("✅ Location updated for user:", email);
  } catch (err) {
    console.error("❌ Error updating location:", err);
  }
};

export const deleteUserByEmail = async (targetEmail, dbid) => {
  try {
    const snapshot = await get(ref(database, dbid));
    const users = snapshot.val();

    if (users) {
      const userIdToDelete = Object.keys(users).find((userId) => {
        const userData = users[userId];
        return userData?.UserEmail === targetEmail;
      });

      if (userIdToDelete) {
        if (dbid === '/Users') {
          await remove(ref(database, `/Users/${userIdToDelete}`));
          console.log(`User with email ${targetEmail} deleted successfully`);
        } else {
          await remove(ref(database, `/Admin/${userIdToDelete}`));
          console.log(`User with email ${targetEmail} deleted successfully`);
        }
      } else {
        console.log(`No user found with email ${targetEmail}.`);
      }
    } else {
      console.log('No users found in database.');
    }
  } catch (error) {
    console.error('Error while deleting user:', error);
  }
};

export const updateUserCredByEmail = async (email, newPassword) => {
  try {
    const snapshot = await get(ref(database, 'Users'));

    if (!snapshot.exists()) {
      return { success: false, message: 'Failed to fetch users.' };
    }

    const users = snapshot.val();

    for (const userId in users) {
      const userData = users[userId];
      const userEmail = userData?.UserEmail;

      if (userEmail && userEmail.toLowerCase() === email.toLowerCase()) {
        await set(ref(database, `Users/${userId}/UserCred`), newPassword);
        return { success: true, message: 'UserCred updated successfully.' };
      }
    }

    return { success: false, message: 'User with the given email not found.' };

  } catch (error) {
    console.error('Error updating user cred:', error);
    return { success: false, message: `Failed to fetch users: ${error.message}` };
  }
};





export const getDirectVideoUrl = (url) => {
  const regex = /\/d\/(.+?)\//;
  const match = url.match(regex);
  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }
  return null;
};

export const fetchVideoUrlFromFirebase = async (videoId) => {
  try {
    console.log('Fetching video for ID:', videoId); 
    const snapshot = await get(ref(database, 'videos'));
    console.log('Snapshot:', snapshot.exists(), snapshot.val()); 

    if (snapshot.exists()) {
      const data = snapshot.val();
      if (data.driveUrl) {
        const directLink = getDirectVideoUrl(data.driveUrl);
        console.log('Generated Direct Link:', directLink); 
        return directLink;
      } else {
        console.log('driveUrl not found in data');
      }
    } else {
      console.log('No data available in Firebase for this ID');
    }
  } catch (error) {
    console.error('Error fetching video url:', error);
  }
  return null;
};

export const fetchVideoUrlForLocation = async (targetLocation) => {
  try {
    const snapshot = await get(ref(database, 'videos/AllVideos'));

    if (snapshot.exists()) {
      const allVideos = snapshot.val();

      for (const key in allVideos) {
        const videoData = allVideos[key];
        if (
          videoData?.TargetLocation &&
          videoData.TargetLocation.toLowerCase() === targetLocation.toLowerCase()
        ) {
          console.log('Video URL for location:', videoData.VideoUrl);
          return videoData.VideoUrl;
        }
      }

      console.log('No video found for this location');
    } else {
      console.log('No data available under AllVideos');
    }
  } catch (error) {
    console.error('Error fetching video for location:', error);
  }

  return null;
};
