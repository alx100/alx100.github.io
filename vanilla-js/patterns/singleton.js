const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'Brad'});
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// You can't have more than 1 instance 

// console.log(instanceA);
console.log(instanceA === instanceB); // true 