/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "q7xuddvecbrt0w3",
    "created": "2024-05-13 15:25:23.533Z",
    "updated": "2024-05-13 15:25:23.533Z",
    "name": "artistes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vefolcw0",
        "name": "nom_artiste",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q7xuddvecbrt0w3");

  return dao.deleteCollection(collection);
})
