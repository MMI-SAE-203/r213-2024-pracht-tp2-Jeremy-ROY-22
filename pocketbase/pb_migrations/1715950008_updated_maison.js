/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xbh0ohpeyzkcjt1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d57zsuxc",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "afwhf60fat5wdwn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xbh0ohpeyzkcjt1")

  // remove
  collection.schema.removeField("d57zsuxc")

  return dao.saveCollection(collection)
})
