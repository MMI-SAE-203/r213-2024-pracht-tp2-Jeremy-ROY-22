/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("25h4erqnit5srv4")

  // remove
  collection.schema.removeField("iqk0cve4")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("25h4erqnit5srv4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqk0cve4",
    "name": "Horaire",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
