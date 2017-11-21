const FloorPlan = () => {


  $('.tabs').tabslet({
    active: 5,
    animation: true
  });

  

  var aptData = {
    fl0: {
      0: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 101
      },
      1: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 102
      },
      2: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 103
      },
      3: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 104
      },
      4: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 105
      },
      5: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 106
      },
      6: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 107
      },
      7: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 108
      },
      8: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 109
      },
      9: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 110
      },
      10: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 111
      },
      11: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 112
      },
      12: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 113
      }
    },
    fl1: {
      0: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 201
      },
      1: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 202
      },
      2: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 203
      },
      3: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 204
      },
      4: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 205
      },
      5: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 206
      },
      6: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 207
      },
      7: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 208
      },
      8: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 209
      },
      9: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 210
      },
      10: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 211
      },
      11: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 212
      },
      12: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 213
      }
    },
    fl2: {
      0: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 301
      },
      1: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 302
      },
      2: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 303
      },
      3: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 304
      },
      4: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 305
      },
      5: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 306
      },
      6: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 307
      },
      7: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 308
      },
      8: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 309
      },
      9: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 310
      },
      10: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 311
      },
      11: {
        anchor: 'unit.html',
        available: false,
        rooms: 4.5,
        number: 312
      },
      12: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 313
      }
    },
    fl3: {
      0: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 401
      },
      1: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 402
      },
      2: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 403
      },
      3: {
        anchor: 'unit.html',
        available: false,
        rooms: 4.5,
        number: 404
      },
      4: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 405
      },
      5: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 406
      },
      6: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 407
      },
      7: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 408
      },
      8: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 409
      },
      9: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 410
      },
      10: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 411
      },
      11: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 412
      },
      12: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 413
      }
    },
    fl4: {
      0: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 501
      },
      1: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 502
      },
      2: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 503
      },
      3: {
        anchor: 'unit.html',
        available: false,
        rooms: 4.5,
        number: 504
      },
      4: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 505
      },
      5: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 506
      },
      6: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 507
      },
      7: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 508
      },
      8: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 509
      },
      9: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 510
      },
      10: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 511
      },
      11: {
        anchor: 'unit.html',
        available: false,
        rooms: 4.5,
        number: 512
      },
      12: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 513
      }
    }
  };

  if (typeof aptData != 'undefined') {

    var floors = document.querySelectorAll('.floors');

    function searchProp(obj, prop, callback) {
      for (var key in obj) {
        if (key == prop) {
          callback(key, obj[key], obj);
        } else if (typeof obj[key] == 'object') {
          searchProp(obj[key], prop, callback);
        }
      }
    }

    for (var j = 0; j < floors.length; j++) {
      var array = [],
        numbers = [],
        aviables = [],
        ancors = document.querySelectorAll('.floor' + j + ' .hover-areas a'),
        rooms = [];

      searchProp(aptData['fl' + j], 'anchor', function (key, val, obj) {
        array.push(val);
      });

      searchProp(aptData['fl' + j], 'number', function (key, val, obj) {
        numbers.push(val);
      });

      searchProp(aptData['fl' + j], 'available', function (key, val, obj) {
        aviables.push(val);
      });

      searchProp(aptData['fl' + j], 'rooms', function (key, val, obj) {
        rooms.push(val);
      });

      for (var i = 0; i < ancors.length; i++) {
        ancors[i].setAttribute('xlink:href', array[i]);
        $(ancors[i]).find('text').html(numbers[i]);
        if (aviables[i] === false) {
          $(ancors[i]).find('path').addClass('booked');
        } else if (aviables[i] === true) {
          $(ancors[i]).addClass('free-flat');
        }

        switch (rooms[i]) {
          case 3:
            $(ancors[i]).addClass('three');
            break;
          case 4:
            $(ancors[i]).addClass('four');
            break;
          case 4.5:
            $(ancors[i]).addClass('four-half');
            break;
          case 5:
            $(ancors[i]).addClass('five');
            break;
        }
      }
    }
  } else {
    return;
  }

  var filterItem = $('.filter .item'),
    filterClear = $('.filter .filter__all'),
    floorsWrap = $('.floors');

  filterItem.on('click', function () {
    var countRooms = $(this).data('rooms');

    filterItem.removeClass('filter__active');
    $(this).addClass('filter__active');

    floorsWrap.find('.free-flat').removeClass('show-free');
    floorsWrap.find('.free-flat.' + countRooms).addClass('show-free');
  });

  filterClear.on('click', function () {
    floorsWrap.find('.free-flat').removeClass('show-free');
    filterItem.removeClass('filter__active');
    $(this).addClass('filter__active');

  });

  $('.plan__list-item').on('click', function(){
    filterItem.removeClass('filter__active');
    floorsWrap.find('.free-flat').removeClass('show-free');
  });

};

export default FloorPlan;