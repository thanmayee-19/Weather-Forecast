Introduction to Domain Name System
The Domain Name System primarily handles the conversion of human readable domain names into machine readable IP addresses. This system operates through a hierarchy of different types of DNS servers.

DNS Resolver and Query Initiation
When a query is raised, it is first sent to a DNS Resolver. DNS Resolvers include popular Internet Service Providers as well as specific service providers such as Google or Cloudflare. If the DNS Resolver does not have the answer stored in its cache, it proceeds to ask the authoritative servers.

Authoritative Name Servers
The authoritative name server contains the definitive answer for a search. When a DNS domain is updated, the changes are made at the authoritative name server level.

The Three Main Levels of Authoritative Servers

<img width="1787" height="652" alt="image" src="https://github.com/user-attachments/assets/6f55a97f-11e7-467f-8e49-8e35f7a22ec3" />


One. Root Name Servers
These servers store the IP addresses of Top Level Domain name servers. There are thirteen logical root name servers in existence.

Two. Top Level Domain Servers
TLD servers hold the IP addresses for all authoritative name servers under specific extensions such as dot com, dot org, or dot in.

Three. Authoritative Name Servers
When domain systems are hosted, they are placed on these name servers by default. The entire hierarchy is designed to be highly robust and decentralized.

The DNS Record Fetching Process
The process of retrieving a DNS record follows a specific sequence.

Step One. Browser Cache Search
When a website address like google.com is entered into a browser, the system first searches the browser cache.

Step Two. Operating System Cache
If the record is not found in the browser, the search moves to the operating system which maintains its own cache.

Step Three. DNS Resolver Request
If the record is still not found, a request is sent to the DNS Resolver. The resolver then searches the list of thirteen root name servers.

Step Four. TLD Server Search
Once the root server identifies the extension such as dot com, the search moves to the TLD server for google.com. The TLD server provides the address for the specific authoritative server.

Step Five. Final IP Retrieval
The authoritative name server returns the specific IP address for the domain to the DNS Resolver. The resolver then passes this destination IP address back to the system.

<img width="1815" height="766" alt="image" src="https://github.com/user-attachments/assets/fe9efd66-3d5d-4433-a217-2fbbf0a7c122" />

Time to Live and Migration Strategies
Every DNS record has a Time to Live, also known as TTL. This acts as a time stamp for the response of the source search.

To mitigate issues during updates, two methods are commonly used.

One. Reduce the TTL duration so that every DNS receives the shorter version of the search, making it easier to update and find new information.

Two. Allow the server to run on the old IP addresses for a period of time during the transition to ensure no loss of connectivity.
