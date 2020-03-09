exports.seed = (knex, Promise) => {
  return knex("pets")
    .del()
    .then(() => {
      return knex("pets").insert([
        {
          name: "Beethoven",
          type: "dog",
          breed: "St. Bernard",
          location: "Pasadena, CA",
          latitude: "34.1478",
          longitude: "118.1445"
        },
        {
          name: "Chance",
          type: "dog",
          breed: "American Bulldog",
          location: "San Francisco, CA",
          latitude: "37.7749",
          longitude: "122.4194"
        },
        {
          name: "Shadow",
          type: "dog",
          breed: "Golden Retriever",
          location: "San Francisco, CA",
          latitude: "37.7749",
          longitude: "122.4194"
        },
        {
          name: "Sassy",
          type: "cat",
          breed: "Himalayan",
          location: "San Francisco, CA",
          latitude: "37.7749",
          longitude: "122.4194"
        }
      ]);
    })
    .then(() => console.log("Seeding complete"))
    .catch(() => console.log(`Error seeding data: ${error}`));
};
