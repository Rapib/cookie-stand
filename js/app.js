'use strict';

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// lab 7

// render top row HOURS
function renderTopRow() {
  let topTable = document.querySelector('table');
  let topHead = document.createElement('thead');
  let topTr = document.createElement('tr');
  let topThE = document.createElement('th');
  topThE.textContent = '';
  topTable.appendChild(topHead);
  topHead.appendChild(topTr);
  topTr.appendChild(topThE);
  for (let i = 0; i < hours.length; i++) {
    let topTh = document.createElement('th');
    topTh.textContent = hours[i];
    topTable.appendChild(topHead);
    topHead.appendChild(topTr);
    topTr.appendChild(topTh);
  }
  let topTh = document.createElement('th');
  topTh.textContent = 'Daily Location Total';
  topTable.appendChild(topHead);
  topHead.appendChild(topTr);
  topTr.appendChild(topTh);
}

renderTopRow();

// create constructor
function Store(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.rngCust = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.rngSale = function () {
    return Math.round((this.avgSale * this.rngCust()));
  };
  this.salesNoByHrAr = [];
  this.calSalesNo = function () {
    for (let i = 0; i < hours.length; i++) {
      this.salesNoByHrAr.push(
        this.rngSale());
    }
  };
  this.totalSale = function () {
    let total = 0;
    for (let k = 0; k < this.salesNoByHrAr.length; k++) {
      // console.log(this.salesNoByHrAr[k]);
      total += this.salesNoByHrAr[k];
    }
    console.log(total);
    return total;
  };
}

// below are for render:
Store.prototype.render = function () {
  this.calSalesNo(); //cal sales number and store result in this.salesNoByHrAr
  let selectTable = document.querySelector('table');
  let newHead = document.createElement('tbody');
  let newTr = document.createElement('tr');
  let newTdName = document.createElement('td');
  newTdName.textContent = this.location;
  newTr.appendChild(newTdName);
  selectTable.appendChild(newHead);
  newHead.appendChild(newTr);
  for (let i = 0; i < this.salesNoByHrAr.length; i++) {
    let newTd = document.createElement('td');
    newTd.textContent = this.salesNoByHrAr[i];
    newTr.appendChild(newTd);
    selectTable.appendChild(newHead);
    newHead.appendChild(newTr);
  }
  let newTd = document.createElement('td');
  newTd.textContent = this.totalSale();
  newTr.appendChild(newTd);
  selectTable.appendChild(newHead);
  newHead.appendChild(newTr);
};

//create new store and test it
let seattle = new Store('Seattle', 23, 65, 6.3);
console.log(seattle);
// seattle.calSalesNo();
console.log(seattle.salesNoByHrAr);
//render seattle
seattle.render();

// other stores:
let tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.render();

let dubai = new Store('Dubai', 11, 38, 3.7);
dubai.render();

let paris = new Store('Paris', 20, 38, 2.3);
paris.render();

let lima = new Store('Lima', 2, 16, 4.6);
lima.render();

// create store list
let storeList = [seattle, tokyo, dubai,paris,lima];

// 1st col ans
let totalSalesByHr = [];


// render bottom row 
function renderBottomRow() {
  //count total sales
  let totalFinalSales = 0;
  for (let m =0; m <storeList.length; m++){
    totalFinalSales += storeList[m].totalSale();
  }
  console.log(totalFinalSales);
  // just countinig numbers
  for(let j = 0; j < hours.length ; j++){
    let totalHr = 0;
    // count straight
    for (let k = 0;k < storeList.length;k++){
      totalHr += storeList[k].salesNoByHrAr[j];
    }
    totalSalesByHr.push(totalHr); //update the total for each no with an array `totalSalesByHr`
    console.log(totalHr);
  }
  // creating table
  let topTable = document.querySelector('table');
  let bottomFoot = document.createElement('tfoot');
  let bottomTr = document.createElement('tr');
  let bottomTd = document.createElement('td');
  bottomTd.textContent = 'Totals';
  topTable.appendChild(bottomFoot);
  bottomFoot.appendChild(bottomTr);
  bottomTr.appendChild(bottomTd);
  for (let i = 0; i < hours.length; i++) {
    let topTh = document.createElement('td');
    topTh.textContent = totalSalesByHr[i];
    topTable.appendChild(bottomFoot);
    bottomFoot.appendChild(bottomTr);
    bottomTr.appendChild(topTh);
  }
  let topTh = document.createElement('td');
  topTh.textContent = totalFinalSales;
  topTable.appendChild(bottomFoot);
  bottomFoot.appendChild(bottomTr);
  bottomTr.appendChild(topTh);
}

renderBottomRow();


/*

// let newTable = document.querySelector('table'); //located the table from CSS, so Store name can be listed under
// let thisP = document.createElement('p'); //created h2 for store name
// thisP.textContent = this.location; //pull the store name from obj
// newDiv.appendChild(seattleP); //add store nme under div

// print list
// for (let j = 0; j < hours.length; j++) {
//   let seattleLi = document.createElement('li');
//   seattleLi.textContent = `${hours[j]}: ${this.salesNoByHrAr[j]} cookies`;
//   seattleP.appendChild(seattleLi);
// }

// let seattleLiTotal = document.createElement('li');
// seattleLiTotal.textContent = `Total: ${this.totalSale()} cookies`;
// seattleP.appendChild(seattleLiTotal);

// console.log(seattle.salesNoByHrAr);





// below are lab6 objs
let seattleStore = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  rngCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  rngSale: function () {
    return Math.round((this.avgSale * this.rngCust()));
  },
  salesNoByHrAr: [],
  calSalesNo: function () {
    for (let i = 0; i < hours.length; i++) {
      this.salesNoByHrAr.push(
        this.rngSale());
    }
  },
  totalSale: function () {
    let total = 0;
    for (let k = 0; k < this.salesNoByHrAr.length; k++) {
      // console.log(this.salesNoByHrAr[k]);
      total += this.salesNoByHrAr[k];
    }
    console.log(total);
    return total;
  }

};
console.log(seattleStore.calSalesNo());
// console.log(seattleStore.salesNoByHrAr);
// console.log(seattleStore.rngCust());
// console.log(` ${seattleStore.rngSale()} is rngSale`);
// console.log(`total sales ${seattleStore.totalSale()}`);

let newDiv = document.getElementById('div'); //located the div on html, so Store name can be listed under
// let newBody = document.body;
// console.log(newBody);
let seattleP = document.createElement('p'); //created h2 for store name
seattleP.textContent = seattleStore.location; //pull the store name from obj
newDiv.appendChild(seattleP); //add store nme under div


// let newLi = document.getElementById('li');

// print list
for (let j = 0; j < hours.length; j++) {
  let seattleLi = document.createElement('li');
  seattleLi.textContent = `${hours[j]}: ${seattleStore.salesNoByHrAr[j]} cookies`;
  seattleP.appendChild(seattleLi);
}

let seattleLiTotal = document.createElement('li');
seattleLiTotal.textContent = `Total: ${seattleStore.totalSale()} cookies`;
seattleP.appendChild(seattleLiTotal);


// toyko

let tokyoStore = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  rngCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  rngSale: function () {
    return Math.round((this.avgSale * this.rngCust()));
  },
  salesNoByHrAr: [],
  calSalesNo: function () {
    for (let i = 0; i < hours.length; i++) {
      this.salesNoByHrAr.push(
        this.rngSale());
    }
  },
  totalSale: function () {
    let total = 0;
    for (let k = 0; k < this.salesNoByHrAr.length; k++) {
      // console.log(this.salesNoByHrAr[k]);
      total += this.salesNoByHrAr[k];
    }
    console.log(total);
    return total;
  }

};
console.log(tokyoStore.calSalesNo());
console.log(tokyoStore.salesNoByHrAr);
console.log(tokyoStore.rngCust());
console.log(` ${tokyoStore.rngSale()} is rngSale`);
console.log(`total sales ${tokyoStore.totalSale()}`);

let tokyoP = document.createElement('p'); //created h2 for store name
tokyoP.textContent = tokyoStore.location; //pull the store name from obj
newDiv.appendChild(tokyoP); //add store nme under div

for (let j = 0; j < hours.length; j++) {
  let tokyoLi = document.createElement('li');
  tokyoLi.textContent = `${hours[j]}: ${tokyoStore.salesNoByHrAr[j]} cookies`;
  tokyoP.appendChild(tokyoLi);
}

let tokyoLiTotal = document.createElement('li');
tokyoLiTotal.textContent = `Total: ${tokyoStore.totalSale()} cookies`;
tokyoP.appendChild(tokyoLiTotal);

// dubai

let dubaiStore = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  rngCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  rngSale: function () {
    return Math.round((this.avgSale * this.rngCust()));
  },
  salesNoByHrAr: [],
  calSalesNo: function () {
    for (let i = 0; i < hours.length; i++) {
      this.salesNoByHrAr.push(
        this.rngSale());
    }
  },
  totalSale: function () {
    let total = 0;
    for (let k = 0; k < this.salesNoByHrAr.length; k++) {
      // console.log(this.salesNoByHrAr[k]);
      total += this.salesNoByHrAr[k];
    }
    console.log(total);
    return total;
  }

};
console.log(dubaiStore.calSalesNo());
console.log(dubaiStore.salesNoByHrAr);
console.log(dubaiStore.rngCust());
console.log(` ${dubaiStore.rngSale()} is rngSale`);
console.log(`total sales ${dubaiStore.totalSale()}`);

let dubaiP = document.createElement('p'); //created h2 for store name
dubaiP.textContent = dubaiStore.location; //pull the store name from obj
newDiv.appendChild(dubaiP); //add store nme under div

for (let j = 0; j < hours.length; j++) {
  let dubaiLi = document.createElement('li');
  dubaiLi.textContent = `${hours[j]}: ${dubaiStore.salesNoByHrAr[j]} cookies`;
  dubaiP.appendChild(dubaiLi);
}

let dubaiLiTotal = document.createElement('li');
dubaiLiTotal.textContent = `Total: ${dubaiStore.totalSale()} cookies`;
dubaiP.appendChild(dubaiLiTotal);

// Paris

let parisStore = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  rngCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  rngSale: function () {
    return Math.round((this.avgSale * this.rngCust()));
  },
  salesNoByHrAr: [],
  calSalesNo: function () {
    for (let i = 0; i < hours.length; i++) {
      this.salesNoByHrAr.push(
        this.rngSale());
    }
  },
  totalSale: function () {
    let total = 0;
    for (let k = 0; k < this.salesNoByHrAr.length; k++) {
      // console.log(this.salesNoByHrAr[k]);
      total += this.salesNoByHrAr[k];
    }
    console.log(total);
    return total;
  }

};
console.log(parisStore.calSalesNo());
console.log(parisStore.salesNoByHrAr);
console.log(parisStore.rngCust());
console.log(` ${parisStore.rngSale()} is rngSale`);
console.log(`total sales ${parisStore.totalSale()}`);

let parisP = document.createElement('p'); //created h2 for store name
parisP.textContent = parisStore.location; //pull the store name from obj
newDiv.appendChild(parisP); //add store nme under div

for (let j = 0; j < hours.length; j++) {
  let parisLi = document.createElement('li');
  parisLi.textContent = `${hours[j]}: ${parisStore.salesNoByHrAr[j]} cookies`;
  parisP.appendChild(parisLi);
}

let parisLiTotal = document.createElement('li');
parisLiTotal.textContent = `Total: ${parisStore.totalSale()} cookies`;
parisP.appendChild(parisLiTotal);

//Lima

let limaStore = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  rngCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  rngSale: function () {
    return Math.round((this.avgSale * this.rngCust()));
  },
  salesNoByHrAr: [],
  calSalesNo: function () {
    for (let i = 0; i < hours.length; i++) {
      this.salesNoByHrAr.push(
        this.rngSale());
    }
  },
  totalSale: function () {
    let total = 0;
    for (let k = 0; k < this.salesNoByHrAr.length; k++) {
      // console.log(this.salesNoByHrAr[k]);
      total += this.salesNoByHrAr[k];
    }
    console.log(total);
    return total;
  }

};
console.log(limaStore.calSalesNo());
console.log(limaStore.salesNoByHrAr);
console.log(limaStore.rngCust());
console.log(` ${limaStore.rngSale()} is rngSale`);
console.log(`total sales ${limaStore.totalSale()}`);

let limaP = document.createElement('p'); //created h2 for store name
limaP.textContent = limaStore.location; //pull the store name from obj
newDiv.appendChild(limaP); //add store nme under div

for (let j = 0; j < hours.length; j++) {
  let limaLi = document.createElement('li');
  limaLi.textContent = `${hours[j]}: ${limaStore.salesNoByHrAr[j]} cookies`;
  limaP.appendChild(limaLi);
}

let limaLiTotal = document.createElement('li');
limaLiTotal.textContent = `Total: ${limaStore.totalSale()} cookies`;
limaP.appendChild(limaLiTotal);
*/