import * as functions from "firebase-functions";
import * as admin from "firebase-admin";


admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// Post function for room search
export const searchPlace = functions.https.onRequest((request, response) =>{
  const search = request.body;
  const results: any[] = [];
  const db = admin.firestore();
  /* db.collection("Rooms").get()
      .then((res) =>{
        res.forEach((r) =>{
          results.push(r.data());
        });
        response.send({"search": search, "results": results});
      });*/
  // let resultsQuery: any;
  // functions.logger.info("data recieved!");
  // functions.logger.info(search);
  if (search == null || search == undefined) {
    functions.logger.info("search object null");
    db.collection("Rooms").get()
        .then((rooms) => {
          rooms.forEach((room) =>{
            results.push(room.data());
          });
          response.send(results);
        });
  } else {
    functions.logger.info("search object defined");
    if (search.parking_needed === true) {
      if (search.room_type === "any") {
        if (search.funding_type === "nsfas") {
          response.send({"case": 1, "search": search});
          /* resultsQuery = db.collection("Rooms")
              .where("property.address.city", "==",
                  search.institution_address.city)
              .where("property.parking", "==", true)
              .where("accredited", "==", true);*/
        } else {
          response.send({"case": 2, "search": search});
          /* resultsQuery = db.collection("Rooms")
              .where("property.address.city", "==",
                  search.institution_address.city)
              .where("rent", "<=", search.max_price)
              .where("property.parking", "==", true);*/
        }
      } else {
        if (search.funding_type === "nsfas") {
          response.send({"case": 3, "search": search});
          /* resultsQuery = db.collection("Rooms")
              .where("property.address.city", "==",
                  search.institution_address.city)
              .where("room_type", "==", search.room_type)
              .where("property.parking", "==", true)
              .where("accredited", "==", true);*/
        } else {
          response.send({"case": 4, "search": search});
          /* resultsQuery = db.collection("Rooms")
              .where("property.address.city", "==",
                  search.institution_address.city)
              .where("rent", "<=", search.max_price)
              .where("room_type", "==", search.room_type)
              .where("property.parking", "==", true);*/
        }
      }
    } else {
      if (search.room_type === "any") {
        if (search.funding_type === "nsfas") {
          response.send({"case": 5, "search": search});
          /* resultsQuery = db.collection("Rooms")
              .where("property.address.city", "==",
                  search.institution_address.city)
              .where("accredited", "==", true);*/
        } else {
          response.send({"case": 6, "search": search});
          /* resultsQuery = db.collection("Rooms")
              .where("property.address.city", "==",
                  search.institution_address.city)
              .where("rent", "<=", search.max_price);*/
        }
      } else {
        if (search.funding_type === "nsfas") {
          response.send({"case": 7, "search": search});
          /* resultsQuery = db.collection("Rooms")
              .where("property.address.city", "==",
                  search.institution_address.city)
              .where("room_type", "==", search.room_type)
              .where("accredited", "==", true);*/
        } else {
          db.collection("Rooms")
              // .where("property.address.city", "==",
          // search.institution_address.city)
          //  .where("rent", "<=", search.max_price)
              .get()
              .then((rslt) =>{
                rslt.forEach((rt) =>{
                  results.push(rt.data());
                });
                response.send({"search": search, "results": results});
              });
        }
      }
    }
    /* resultsQuery.get()
        .then((res:any[]) => {
          res.forEach((result) =>{
            results.push(result.data());
          });
          response.send(results);
        });*/
  }
});
