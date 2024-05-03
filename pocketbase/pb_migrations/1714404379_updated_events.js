/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("25h4erqnit5srv4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g2oh7dlm",
    "name": "field",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Danse",
        "Musique",
        "Théâtre"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("25h4erqnit5srv4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g2oh7dlm",
    "name": "field",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Danse",
        "Musique",
        "Théâtre"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
