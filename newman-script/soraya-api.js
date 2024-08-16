const newman = require("newman")

newman.run({
    collection: "json-collection/soraya.postman_collection.json",
    environment: "json-env/soraya-env.json",
    reporters: ["cli", "htmlextra"]
})