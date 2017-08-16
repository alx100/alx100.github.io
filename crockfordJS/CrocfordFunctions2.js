// 1 =======================================

function m(value, source) {
  return {
    value: value,
    source: (typeof source === 'string')
      ? source
      : String(value)
  };
}

JSON.stringify(m(1))
// {"value": 1, "source": "1"}
JSON.stringify(m(Math.PI, "pi"))
// {"value": 3.14159..., "source": "pi"}

//2============================================

function addm(a, b) {
  return m(
    a.value + b.value,
    "(" + a.source + "+" +
          b.source + ")"
  );
}

JSON.stringify(addm(m(3), m(4)))
// {"value": 7, "source": "(3+4)"}
JSON.stringify(addm(m(1), m(Math.PI, "pi")))
// {"value": 4.14159..., "source": "(1+pi)"}

//3============================================

function liftm(binary, op) {
  return function(a, b) {
    if (typeof a === 'number') {
        a = m(a);
    }
    if (typeof b === 'number') {
        b = m(b);
    }
    return m(
      binary(a.value, b.value),
      "(" + a.source + op 
          + b.source + ")"
    );
  };
}

var addm = liftm(add, "+");
JSON.stringify(addm(m(3), m(4)))
// {"value": 7, "source": "(3+4)"}
JSON.stringify(liftm(mul, "*")(m(3), m(4)))
// {"value": 12, "source": "(3*4)"}

// 4==========================================

function exp(value) {
  return (Array.isArray(value))
    ? value[0](
        exp(value[1]),
        exp(value[2])
    )
    : value;
}

//recursion: a function calls itself

var sae = [mul, 5, 11];
exp(sae) //55
exp(42) //42

// 5===============================================
function addg(first) {
  function more(next) {
    if (next === undefined) {
      return first;
    }
    first += next;
    return more;
  }
  if (first !== undefined) {
      return more;
  }
}

//retursion: a function returns itself

addg()          //undefined
addg(2)()       //2
addg(2)(7)()    //9

// 6 ================================================
function liftg(binary) {
  return function (first) {
    if (first === undefined) {
      return first;
    }
    return function more(next) {
      if (next === undefined) {
        return first;
      }
      first = binary(first, next);
      return more;
    };
  };
}

liftg(mul)() //undefined
liftg(mul)(3)() //3
liftg(mul)(1)(2)(4)(8)() //64

// 7=====================================================
function arrayg(first) {
  var array = [];
  function more(next) {
    if (next === undefined) {
       return array;
    }
    array.push(next);
    return more;
  }
  return more(first);
}

arrayg()           //[]
arrayg(3)()        //[3]
arrayg(3)(4)(5)()  //[3, 4, 5]

// 8==========================================================
function continuize(unary) {
  return function (callback, arg) {
    return callback(unary(arg));
  };
}

sqrtc = continuize(Math.sqrt);
sqrtc(alert, 81) //9

// 9==========================================================
function vector(){
  var array = [];

  return {
    get: function get(i) {
      return array[i];
    },
    store: function store(i, v) {
      return array[i] = v;
    },
    append: function append(v) {
      array.push(v);
    }
  };
} 

// Hack on vector
var stash;
myvector.store('push', function() {
  stash = this;
});
myvector.append(); // stash is array

function vectorSecured(){
  var array = [];

  return {
    get: function get(i) {
      return array[+i];
    },
    store: function store(i, v) {
      return array[+i] = v;
    },
    append: function(v) {
      array[array.length] = v;
    }
  };
}

myvector = vector();
myvector.append(7);
myvector.store(1, 8);
myvector.get(0) //7
myvector.get(1) //8


//10=============================================
function pubsub() {
  var subscribers = [];
  return {
    subscribe: function(subscriber) {
      subscribers.push(subscriber);
    },
    publish: function(publication) {
      var i, length = subscribers.length;
      for (i = 0; i < length; i += 1) {
        subscribers[i](publication);
      }
    }
  };
}

// Hack on pubsub
my_pubsub.subscribe();
my_pubsub.publish = undefined;
my_pubsub.subscribe(function () {
  this.length = 0;
});
my_pubsub.subscribe(limit(function () {
    my_pubsub.publish("Out of order");
}, 1));

function pubsubSecured() {
  var subscribers = [];
  return Object.freeze({
    subscribe: function(subscriber) {
      subscribers.push(subscriber);
    },
    publish: function(publication) {
      subscribers.forEach(function(s) {
        setTimeout(function () {
          s(publication);
        }, 0);
      });
    }
  });
}


my_pubsub = pubsub();
my_pubsub.subscribe(log);
my_pubsub.publish("It works!");
// log("It works!")
