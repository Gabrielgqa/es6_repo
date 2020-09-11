const myPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Hello World')}, 2000);
});

const executePromise = async () => {
  console.log(await myPromise());
};

executePromise();