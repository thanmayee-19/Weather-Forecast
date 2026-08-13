**Cloud Native: Notes and Fundamentals**

**1. Introduction to Cloud Native**
* **Origin:** The term was first introduced by Netflix in 2013 during their transition to scale their devices.
* **Definition:** There is no single "proper" definition as it varies for different people.
* **Core Purpose:** It serves as a blueprint for building web-scale applications, focusing on both web application functionality and scalability.
* **Key Benefit:** Allows for the addition of new features without compromising availability, making it easier to adapt to changing customer demands.

**2. Cloud Computing Foundations**
* **Basic Concept:** Running resources on computing services without the need to purchase or manage physical hardware.
* **Migration:** The process begins by migrating existing monolithic applications from on-premise servers to the cloud.
* **Operational Impact:** Lessens the burden of managing backend hardware and provides a fast way to scale up with new computer resources.

**3. Four Main Application Pillars**

   **I. Cloud Architecture (Microservices)**
   * **Definition:** Dividing a single, large monolithic project into smaller, individual functionalities.
   * **Microservices:** These allow developers to create different services for a single project where each service has a specific responsibility.
   * **Communication:** These services are loosely coupled and communicate with each other via APIs.

   **II. Containers and Container Orchestration**
   * **Containers:** Lightweight units that package everything required to run a microservice consistently across different environments.
   * **Orchestration:** Used to manage large groups of containers to ensure smooth application performance (e.g., Kubernetes).
   * **Three Main Functions of Orchestration:**
      1. Controlling where services run and providing the necessary environment.
      2. Detecting and repairing errors automatically.
      3. Balancing the load between different microservices.

   **III. Development Cycle (DevOps and CI/CD)**
   * **Collaboration:** Requires a high level of partnership between development and operations teams.
   * **DevOps:** A role focusing on the continuous communication and collaboration between hardware (operations) and software (development).
   * **CI/CD Pipeline:** Focuses on the automation of the software development process.
      * **Continuous Integration (CI):** Merging code into a shared repository to ensure test cases run properly and the application remains stable.
      * **Continuous Development/Deployment (CD):** Using automated pipelines to move software from the development stage to the production environment.

   **IV. Cloud Native Open Standards**
   * **Purpose:** Platforms that provide efficient environments for maintaining and managing microservices.
   * **Industry Standard:** Kubernetes is the most popular platform used for these operations.
