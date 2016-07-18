//this is a javascript file.


// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) 
{
  var local_id = collection[id];
  var local_prop;
  var local_value;
  
  
  if ( local_id !== undefined)
  {
    
    
    local_prop = collection[local_id][prop];  //artist
    
    
    if (local_prop!== undefined)
    {
      console.log("The ")
      if  ( local_prop!== "tracks") //then it's a simple element. No array involved.
      {
        collection[id][prop] = value; //this either updates existing property or creates it, assigning it a value
        
      }
      else  //you are dealing with an array called tracks and the array exists
      {
        collection[id][prop].push(value);
      }
        
    }
    
    
    else  //the property does not yet exist  
    {
      
      if  ( local_prop!== "tracks") //then it's a simple element. No array involved.
      {
        collection[id][prop] = new Ojbect(); //this either updates existing property or creates it, assigning it a value
        collection[id][prop] = value;
      }
      
      else  //you are dealing with an array called tracks and the array exists
      {
      
        collection[id][prop]= new Object();
        colloection[id][prop].push(value);
      }
        
       
    }
      
  }
  
  else //you have to create a completely new record with the new ID supplied.
  {
    console.log("The indicated ID has not been located.");
  }

  return collection;
}


// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

