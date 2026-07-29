REST API Overview

REST stands for **Representational State Transfer** and serves as an **Application Program Interface** for communication between systems. It acts as a set of rules for building Web APIs used to send and receive requests. Well known examples include **Twilio and Google Maps**.

Resource Identification

A REST API divides resources into unique **Uniform Resource Identifiers** or URIs. These URIs differentiate various types of resources on a server. Resources must be grouped by **nouns** such as products instead of verbs like getAllProducts.

HTTP Request Methods

The client uses **HTTP requests** in a specific format to interact with the server. Verbs are used to indicate the operation to be performed. **Post** is used for **Creation** of a new resource. **Get** is used for **Read** or viewing an existing resource. **Put** is used for **Updating** an existing resource. **Delete** is used for removing resources.

Data and Response Codes

The request body may contain additional information encoded in **JSON**. Every server response starts with an **HTTP status code**. A **200 level** code indicates **success**. A **400 level** code means there is an **error with the request**. A **500 level** code indicates an **error at the server**.

Statelessness and Scalability

A REST implementation must be **stateless** meaning the client and server do not need to store information about each other. Each **request and response cycle is independent**. This architecture supports better **scaling** and well behaved systems.

Data Management and Versioning

If an endpoint returns a huge amount of data the system uses **pagination**. This involves **limits and offsets** to return specific segments of data. **Versioning** is critical for **backward compatibility** and is most commonly done by **prefixing the URI** with the version number.
