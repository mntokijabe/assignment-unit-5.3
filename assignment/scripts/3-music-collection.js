console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished){
  collection.push({
    title: title,
    artist: artist,
    yearPublished: yearPublished
  })
  console.log(collection);
  return collection[collection.length - 1];   //returns just the last album so it can be displayed
}

function showCollection(collection) {   //accepts the desired collection...mine or someone else's
  console.log('This collection contains:');
   for (let i=0; i < collection.length; i++){
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);

 }
}

function findByArtist(collection, artist) {
  let artistGroup = [];
  for (let i = 0; i < collection.length; i++){
    if (collection[i].artist === artist) {
      artistGroup.push(collection[i]);
    }  //end if
  }  //end for loop
  return artistGroup;
}

console.log(`Just added:`,addToCollection(myCollection,"Left Turns in Cross Traffic","Tonic Solfa", 1996));
console.log(`Just added:`,addToCollection(myCollection,"Great Lengths","PFR", 1992));
console.log(`Just added:`,addToCollection(myCollection,"Goldie's Last Day","PFR", 1993));
console.log(`Just added:`,addToCollection(myCollection,"Rescue","Acappella", 1990));
console.log('Just added:',addToCollection(myCollection,"Great Adventure","Steven Curtis Chapman", 1992));
console.log(`Just added:`,addToCollection(myCollection,"Greatest Hits: 1982-1989","Chicago", 1989));


showCollection(myCollection);
//entire collection should be consoled by the function

console.log(findByArtist(myCollection, "PFR"));  //testing if included albums are found
console.log(findByArtist(myCollection, "Hank Williams"));  //testing if non-existent album returns empty


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
