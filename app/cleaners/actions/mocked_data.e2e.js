const getClient = () => {
  const user = {
      uid: "123",
      firstName: "jhon",
      lastName: "Due",
      phone: "123",
      address: "Ul. traugutta 101",
      isNewUser: false,
      rating: 7,
      type: 'CLIENT',
      languages: [
          {code: 'en', name:'ENGLISH'}
      ]
  }

  return returnAsPromise(user);
}

const getCleaner = () => {
  const user = {
      firstName: "Cleaner1",
      lastName: "Sadek",
      phone: "122233",
      address: "Ul. grabiszinka",
      isNewUser: false,
      rating: 9,
      type: '',
      uid: "c1"
  }

  return returnAsPromise(user);
}

const saveProfile = (data) => {
  return returnAsPromise();
}

const returnAsPromise = (data) => {
  return new Promise((resolve, reject)=>{
      setTimeout(() => {
          resolve(data);
      }, 2000);
  });
}

export {
  getCleaner,
  saveProfile,
  getCleaner
}