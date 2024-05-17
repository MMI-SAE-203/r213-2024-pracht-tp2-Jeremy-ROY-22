/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q7xuddvecbrt0w3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "clxcan08",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "25h4erqnit5srv4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q7xuddvecbrt0w3")

  // remove
  collection.schema.removeField("clxcan08")

  return dao.saveCollection(collection)
})
