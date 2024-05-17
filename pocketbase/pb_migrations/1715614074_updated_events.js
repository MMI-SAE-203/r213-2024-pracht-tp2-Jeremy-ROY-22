/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("25h4erqnit5srv4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i9whzjdf",
    "name": "field2",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "q7xuddvecbrt0w3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("25h4erqnit5srv4")

  // remove
  collection.schema.removeField("i9whzjdf")

  return dao.saveCollection(collection)
})
