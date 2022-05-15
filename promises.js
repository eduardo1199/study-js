const timeRandom = (max, min) => {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max- min) + min)
}

const connectBD = (time, message) => {
  return new Promise((resolve, reject) => {
    if(typeof message !== 'string') {
      reject(new TypeError('message must be a string'))
      return;
    }

    setTimeout(() => {
      resolve(message);
    }, time)
  })
}

connectBD(timeRandom(1, 3), 'phrase 1').then((response) => {
  //console.log(response);

  return connectBD(timeRandom(1, 3), 'phrase 2')
}).then((response) => {
  //console.log(response);

  return connectBD(timeRandom(1, 3), 2)
}).then((response) => {
  //console.log(response);
}).catch(error => console.log(error));


connectBD(timeRandom(1, 3), 'phrase 2')
connectBD(timeRandom(1, 3), 'phrase 3')
connectBD(timeRandom(1, 3), 'phrase 4') 


Promise.all([connectBD(timeRandom(1, 3), 'phrase 1'), connectBD(timeRandom(1, 3), 'phrase 2')]).then((response => {
  //console.log(response);
}));

const connectAllDB = async () => {
  try {
    const resultConnectOne = await connectBD(timeRandom(1, 3), 'phrase 1') 

    console.log(resultConnectOne);

    const resultConnectTwo = await connectBD(timeRandom(1, 3), 'phrase 2') 

    console.log(resultConnectTwo);

    const resultConnectThree = await connectBD(timeRandom(1, 3), 'phrase 3') 

    console.log(resultConnectThree);

    const resultConnectFour = await connectBD(timeRandom(1, 3), 'phrase 4')

    console.log(resultConnectFour);
  
  } catch (err) {
    console.log(err);
  }
}

connectAllDB();
