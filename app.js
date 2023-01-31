'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
console.log(seattleStore.salesNoByHrAr);
console.log(seattleStore.rngCust());
console.log(` ${seattleStore.rngSale()} is rngSale`);
console.log(`total sales ${seattleStore.totalSale()}`);

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