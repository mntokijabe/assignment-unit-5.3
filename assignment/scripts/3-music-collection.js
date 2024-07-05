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
   for (let album of collection){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
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



console.log(`TESTING addToCollection`);
console.log(`Just added:`,addToCollection(myCollection,"Left Turns in Cross Traffic","Tonic Solfa", 1996));
console.log(`Just added:`,addToCollection(myCollection,"Great Lengths","PFR", 1992));
console.log(`Just added:`,addToCollection(myCollection,"Goldie's Last Day","PFR", 1993));
console.log(`Just added:`,addToCollection(myCollection,"Rescue","Acappella", 1990));
console.log('Just added:',addToCollection(myCollection,"Great Adventure","Steven Curtis Chapman", 1992));
console.log(`Just added:`,addToCollection(myCollection,"Greatest Hits: 1982-1989","Chicago", 1989));

console.log(`TESTING showCollection`)
showCollection(myCollection);
//entire collection should be consoled by the function

console.log(`TESTING findByArtist`);
console.log(findByArtist(myCollection, "PFR"));  //testing if included albums are found
console.log(findByArtist(myCollection, "Hank Williams"));  //testing if non-existent album returns empty



function search(collection, searchCriteria){
  let foundCollection = [];
  if(typeof searchCriteria != "object" || Object.keys(searchCriteria) < 2 || searchCriteria.artist != '' || searchCriteria.yearPublished != ''){
    console.log('Incomplete information provided');
    return collection;
  }
  else{
    for (i = 0; i < collection.length; i++){
      if(searchCriteria[0] === collection[i].artist && searchCriteria[1] === collection[i].yearPublished) {
        foundCollection.push(collection[i]);
      }  //end if match
    }  // end for loop
    if(foundCollection.length === 0){
      console.log(`Sorry, no matches found`);
    }
    return foundCollection;
  }
}

console.log(`TESTING SEARCH FUNCTION`); 
console.log( `test what should work`);
console.log(search(myCollection, ['PFR',1992]));
console.log( `should be no match`);
console.log(search(myCollection, ['PFR',1990]));
console.log(`only artist`);
console.log(search(myCollection, ['PFR']));
console.log(`only year`);
console.log(search(myCollection, [1990]));
console.log(`empty`);
console.log(search(myCollection,[]));
console.log(`no object provided`);
console.log(search(myCollection));

// ORIGINAL ATTEMPT  
//    else if (searchCriteria[0].length > 0 && searchCriteria[1] > 0){
//     for (i = 0; i < collection.length; i++){
//       if(searchCriteria[0] === collection[i].artist && searchCriteria[1] === collection[i].yearPublished) {
//         foundCollection.push(collection[i]);
//       }  //end if match
//     }  // end for loop
//     if(foundCollection.length == 0){
//       console.log(`Sorry, no matches found`);
//     }
//     return foundCollection;
//   }
//     // end the search if, given that search criteria were provided
//   else {
//     console.log('Incomplete information provided')
//     return collection
//   }
//   }  // end function



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
