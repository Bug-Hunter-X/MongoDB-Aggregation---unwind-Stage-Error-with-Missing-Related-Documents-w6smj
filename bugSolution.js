```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocs",
    },
  },
  {
    $unwind: {
      path: "$relatedDocs",
      preserveNullAndEmptyArrays: true,
    }
  },
    {
      $group: {
        _id: "$_id",
        relatedData: {
          $push: {
            $ifNull: [ "$relatedDocs.someField", null ]
          }
        },
      }
    },
];
await collectionA.aggregate(pipeline).toArray();
```