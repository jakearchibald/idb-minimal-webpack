import { openDB } from "idb";

async function main() {
  await openDB("foo", 1, {
    upgrade(db) {
      db.createObjectStore("keyval");
    },
  });

  console.log("It worked!");
}

main();
