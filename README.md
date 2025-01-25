# MongoDB Aggregation: $unwind Stage Error with Missing Related Documents

This repository demonstrates a common error encountered when using the `$unwind` stage in MongoDB aggregation pipelines.  The error occurs when the `$lookup` stage doesn't find any matching documents, leading to unexpected behavior.

## Problem Description
The provided code attempts to perform a `$lookup`, followed by `$unwind`, and then `$group`.  If there are no matching documents in `collectionB`, the `$unwind` stage will result in an empty array for `relatedDocs`, and the subsequent `$group` stage may produce unexpected results or even errors.

## Solution
To address this, it's important to add a conditional stage ($ifNull or $cond) before the `$group` stage to handle the cases when `relatedDocs` is empty. This ensures a consistent output regardless of whether related documents exist. 