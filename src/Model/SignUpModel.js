

// ✅ Correct way to define and export
// export class SignUpModel { 
//   constructor(data) {
//     this.email = data.email;
//     this.password = data.password;
//     this.confirmPassword = data.confirmPassword;
//     this.fullName = data.fullName;
//     this.phoneNumber = data.phoneNumber;
//     this.userCoins = data.userCoins;
//     this.paymentMethods = data.paymentMethods;
//     this.paymentId = data.paymentId;
//     this.isLaderDone = data.isLaderDone;
//     this.isValutDone = data.isValutDone;
//     this.isMileStonDone = data.isMileStonDone;
//     this.userCoinsReords = data.userCoinsReords;
//     this.userPaymentReords = data.userPaymentReords;
//   }
// }



export default class SignUpModel {
    constructor({
      id = "",   // 🔑 Add this
      email,
      password,
      confirmPassword,
      idToken = '',
      fullName = '',
      phoneNumber = '',
      imageUrl = '',
      userCoins = 0,
      paymentMethods = '',
      paymentId = '',
      referalCode = '',
      referalCodeUsed = '',
      totalReferalAdded = [],
      // isLaderDone = false,
      UserLocation = '',
      // isValutDone = false,
      // isMileStonDone = false,
      isLadderCoin = false,
        isValultCoin = false,
        isMileStoneCoin = false,
        isSummitCoin = false,
        isPowerStepCoin = false,
       isDollarBoostCoin = false,
        isBoostCoin = false,
        isPeakeCoin = false,
        isDollarPeakeCoin = false,
        isDollarJumpCoin = false,
        isJumpCoin = false,
        isDollarAscendToken = false,
        isAscendToken = false,
        isDollarNextLevelCoin = false,
        isNextLevelCoin = false,
        lastPayout_Vault = '',
      lastPayout_Ladder = '',
      userCoinsReords = [],
      userPaymentReords = [],
    }) {
       this.id = id;
      this.fullName = fullName;
      this.idToken = idToken;
      this.referalCode = referalCode;
      this.imageUrl = imageUrl;
      this.referalCodeUsed = referalCodeUsed;
      this.password = password;
      this.confPassword = confirmPassword;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.userCoins = userCoins;
      this.paymentMethods = paymentMethods;
      this.paymentId = paymentId;
      this.UserLocation = UserLocation;
      // this.isLaderDone = isLaderDone;
      this.lastPayout_Ladder = lastPayout_Ladder;
      this.lastPayout_Vault = lastPayout_Vault;
      // this.isValutDone = isValutDone;
      // this.isMileStonDone = isMileStonDone;
      this.isLadderCoin = isLadderCoin,
        this.isValultCoin = isValultCoin,
        this.isMileStoneCoin = isMileStoneCoin,
       this.isSummitCoin = isSummitCoin,
        this.isPowerStepCoin = isPowerStepCoin,
       this.isDollarBoostCoin = isDollarBoostCoin,
        this.isBoostCoin = isBoostCoin,
        this.isPeakeCoin = isPeakeCoin,
        this.isDollarPeakeCoin = isDollarPeakeCoin,
        this.isDollarJumpCoin = isDollarJumpCoin,
        this.isJumpCoin = isJumpCoin,
        this.isDollarAscendToken = isDollarAscendToken,
        this.isAscendToken = isAscendToken,
        this.isDollarNextLevelCoin = isDollarNextLevelCoin,
        this.isNextLevelCoin = isNextLevelCoin,

        this.totalReferalAdded = totalReferalAdded.map(
          (item) => new TotalReferal(item)
        );

      this.userCoinsReords = userCoinsReords.map(
        (item) => new UserCoinHistory(item)
      );
      this.userPaymentReords = userPaymentReords.map(
        (item) => new UserPaymentModel(item)
      );
    }
  }

export class UserCoinHistory {
  constructor(data) {
    this.coinsDate = data.coinsDate;
    this.coinsAmmount = data.coinsAmmount;
    this.addType = data.addType;
    this.Status = data.Status;
    this.adsWatchLocation = data.adsWatchLocation;
    this.originalads = data.originalads;
  }
}

export class TotalReferal {
  constructor(data){
    this.date = data.date;
    this.referalCode = data.referalCode;
    this.userEmail = data.userEmail;
    this.userName = data.userName;
    this.location = data.location;
  }
}

export class UserPaymentModel {
  constructor(data) {
    this.id = data.id;
    this.status = data.status;
    this.paymentDate = data.paymentDate;
    this.paymentMethods = data.paymentMethods;
    this.paymentsId = data.paymentsId;
    this.paymentAmmount = data.paymentAmmount;
    this.coins = data.coins;
    this.isRecomended = data.isRecomended;
  }
}

// Admin Models =================================>>>>>>>>>

export class AdminPaymentUpdateModel {
  constructor(data) {
    this.userEmail = data.userEmail;
    this.userName = data.userName;
    this.userPhone = data.userPhone;
    this.userMainsId = data.userMainsId;
    this.userHaveCoins = data.userHaveCoins;
    // this.isRecomended = data.isRecomended;

    // Check and map userPaymentsDetails
    this.userPaymentsDetails = Array.isArray(data.userPaymentsDetails)
      ? data.userPaymentsDetails.map(item => new AdminToUserPaymentModel(item))
      : [];

    // Check and map userCoinHistory
    this.userCoinHistory = Array.isArray(data.userCoinHistory)
      ? data.userCoinHistory.map(item => new NewUserCoinHistory(item))
      : [];
  }

  toDictionary() {
    return {
      userEmail: this.userEmail,
      userName: this.userName,
      userPhone: this.userPhone,
      userMainsId: this.userMainsId,
      userHaveCoins: this.userHaveCoins,
      // isRecomended: this.isRecomended,
      userPaymentsDetails: this.userPaymentsDetails.map(item => item.toDictionary()),
      userCoinHistory: this.userCoinHistory.map(item => item.toDictionary()),
    };
  }
}



export class AdminToUserPaymentModel {
  constructor(data) {
    this.fcmToken = data.fcmToken;
    this.accessToken = data.accessToken;
    this.userUniqueId = data.userUniqueId;
    this.paymentDate = data.paymentDate;
    this.paymentMethods = data.paymentMethods;
    this.paymentsId = data.paymentsId;
    this.paymentAmmount = data.paymentAmmount;
    this.paymentCoins = data.paymentCoins;
    this.userLocation = data.userLocation;
    this.status = data.status;
    this.isRecomended = data.isRecomended;
  }

  toDictionary() {
    return {
      accessToken: this.accessToken,
      fcmToken: this.fcmToken,
      userUniqueId: this.userUniqueId,
      paymentDate: this.paymentDate,
      paymentMethods: this.paymentMethods,
      paymentsId: this.paymentsId,
      paymentAmmount: this.paymentAmmount,
      paymentCoins: this.paymentCoins,
      userLocation: this.userLocation,
      status: this.status,
      isRecomended: this.isRecomended
    };
  }
}


export class NewUserCoinHistory {
  constructor(data) {
    this.coinsDate = data.coinsDate;
    this.addType = data.addType;
    this.coinsAmmount = data.coinsAmmount;
    this.Status = data.Status;
  }

  toDictionary() {
    return {
      coinsDate: this.coinsDate,
      addType: this.addType,
      coinsAmmount: this.coinsAmmount,
      Status: this.Status,
    };
  }
}




// export class CoinPackage {
//   constructor({ name, coins, rupees, Rs, RS, USD, isRecomended, id, isTapCoin  }) {
//     this.name = name;
//     this.coins = coins;
//     this.rupees = rupees;
//     this.Rs = Rs || RS || ''; // handles both "Rs" and "RS"
//     this.USD = USD;
//     this.id = id
//     this.isTapCoin = isTapCoin
//     this.isRecomended = isRecomended;
//   }
// }

export class CoinPackage {
  constructor({
    RS,
    Rs,
    USD,
    coins,
    id,
    isRecomended,
    name,
    rupees,
    isLadderCoin = false,
    isValultCoin = false,
    isMileStoneCoin = false,
    isSummitCoin = false,
    isPowerStepCoin = false,
    isDollarBoostCoin = false,
    isBoostCoin = false,
    isPeakeCoin = false,
    isDollarPeakeCoin = false,
    isDollarJumpCoin = false,
    isJumpCoin = false,
    isDollarAscendToken = false,
    isAscendToken = false,
    isDollarNextLevelCoin = false,
    isNextLevelCoin = false,
  }) {
     this.Rs = Rs || RS || ''; // handles both "Rs" and "RS"
    // this.Rs = Rs;
    this.USD = USD;
    this.coins = coins;
    this.id = id;
    this.isRecomended = isRecomended;
    this.name = name;
    this.rupees = rupees;

    // Coin type flags
    this.isLadderCoin = isLadderCoin;
    this.isValultCoin = isValultCoin;
    this.isMileStoneCoin = isMileStoneCoin;
    this.isSummitCoin = isSummitCoin;
    this.isPowerStepCoin = isPowerStepCoin;
    this.isDollarBoostCoin = isDollarBoostCoin;
    this.isBoostCoin = isBoostCoin;
    this.isPeakeCoin = isPeakeCoin;
    this.isDollarPeakeCoin = isDollarPeakeCoin;
    this.isDollarJumpCoin = isDollarJumpCoin;
    this.isJumpCoin = isJumpCoin;
    this.isDollarAscendToken = isDollarAscendToken;
    this.isAscendToken = isAscendToken;
    this.isDollarNextLevelCoin = isDollarNextLevelCoin;
    this.isNextLevelCoin = isNextLevelCoin;
  }
}

// export default CoinPackage;


// const DATA = [
//   { id: '1', name: 'VaultCoin', coins: 500, rupees: 3 },
//   { id: '2', name: 'MilestoneCoin', coins: 1000, rupees: 10 },
//   { id: '3', name: 'SummitCoin', coins: 5000, rupees: 20 },
//   { id: '4', name: 'PowerStepCoin', coins: 7000, rupees: 30 },
//   { id: '5', name: 'BoostCoin', coins: 10000, rupees: 50 },
//   { id: '6', name: 'PeakCoin', coins: 15000, rupees: 70 },
//   { id: '7', name: 'JumpCoin', coins: 16000, rupees: 80 },
// ];