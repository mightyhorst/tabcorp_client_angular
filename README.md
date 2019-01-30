[![Build Status](https://travis-ci.org/mitni455/tabcorp_client_angular.svg?branch=master)](https://travis-ci.org/mitni455/tabcorp_client_angular)

# Quick Links 
* [Online Demo](http://tabcorp.ap-southeast-2.elasticbeanstalk.com)
* [Client Documentation](https://mitni455.github.io/tabcorp-client-angular/overview.html)
* [Backend Microservice API](https://github.com/mitni455/tabcorp_microservice_books)


# Screenshots
##### Books list page
List all Books page 
![Books list Screenshot](https://i.ibb.co/SRbXs7j/Screen-Shot-2019-01-30-at-10-47-07-PM.png)


##### Add a Book Page 
Add a book 
![Create Screenshot](https://i.ibb.co/d4MQRnk/Screen-Shot-2019-01-30-at-10-47-48-PM.png)


# Quick Start 
Install and run 
1. Clone: `git clone https://github.com/mitni455/tabcorp-client-angular.git`
2. Install dependencies: `npm i`
3. Run tests 
* Install the CLI (if not installed) `npm i -g @angular/cli` 
* `ng test`
* `ng e2e`
4. Serve locally: `ng serve`

or with docker:
* `docker build -t tabcorp_client_angular .`
* `docker run -d -p 8080:8080 --name tabcorp_client_angular tabcorp_client_angular`

Please raise a `pull request` for any developments, and use the `issues` for bugs and feature requests. 

Be sure to run `compodoc -p src/tsconfig.app.json -d docs/` to generate docs.


# Architecture 

![CI/CD Architecture](https://i.ibb.co/CJxvzGP/cicd.png)

Also pictured is the backend architecture, available at this [repo](https://github.com/mitni455/tabcorp_microservice_flickr) 

| Application | Description |
| -------- | ----------- |
| `Angular6` | *Angular6* is used as the simple SPA framework.  |
| `ExpressJs` | The app is served by *ExpressJs*. We could also use this as a simple resourceful API too, however we have chosen to use microservices on *Lambda*   |
| `Docker` | *Docker* is probably overkill here, but is used as a simple container to quickly setup the Angular/Express app on all environments (dev/test/staging)  |


#### AKS Kubernetes Architecture 
| Platform | Description |
| -------- | ----------- |
| `Traefik` | Reverse proxy engine for Kubernetes |
| `ExpressJs` | Microservices Book API  |
| `Docker` | Container  |
| `Kubernetes` | Cloud as a Service |
| `Sequelize` | ORM for  NodeJs  |
| `MySQL` | Simple Database   |


#### @todo - Alternative - AWS Architecture 
Alternatively I would use this stack on AWS 

| Platform | Description |
| -------- | ----------- |
| `Beanstalk` | Angular App is served using *ExpressJs* inside a *Docker* container |
| `AWS Gateway` | The Angular App calls the AWS Gateway  |
| `Lambda` | A serveless microservice for handling data and user management  |
| `Cognito` | *not used* Used for User IAM and AAA  |
| `DynamoDb` | Used for NoSQL DB   |


| CI/CD | Description |
| -------- | ----------- |
| `Travis CI` | Continuous Integration and Deployment |
| `DockerHub` | Docker hub is used to host Docker images  |
| `Spinnaker` | CD for Kubernetes   |
| `AKS` | Container services for Kubernetes on Azure   |

| Tools | Description |
| -------- | ----------- |
| `SwaggerHub` | SwaggerHub is used to host the API documentation [here](https://app.swaggerhub.com/apis/kitset-io/tabcorp-microservice-book-api/1.0.0)|
| `CompoDoc` | Angular Documentation tool |
| `Agile` | Github Projects |
| [`BackstopJS 3`](https://garris.github.io/BackstopJS/) | Visual regression testing for responsive CSS |
| `Mocha` | Integration and API Testing (used for backend repo. I prefer it to Jasmine/Karma)   |
| `Jasmine + Karma` | Built in ng unit testing  |
| `Protractor` | Built in ng e2e testing with PhantomJs and Chrome Web Driver |

# CI/CD

*TravisCi* is used as our Continuous Integration service. 
*Spinakker by Netflix* is used as our Continuous Deployment pipelines. 

### Spinnaker
Pipelines available [online here](http://spinnaker-deck.tabcorp.kitset.io/#/applications/tabcorpangular)
![Spinnaker pipeline](https://i.ibb.co/m8cJNZX/Screen-Shot-2019-01-30-at-1-11-43-AM.png)
![Spinnaker pipeline](https://i.ibb.co/z4Xp8gq/Screen-Shot-2019-01-30-at-1-12-17-AM.png)

### Traefik 
Reverse Proxy available [online here](http://traefik.tabcorp.kitset.io/dashboard/status)
![Traefik](https://i.ibb.co/hD4qqDL/Screen-Shot-2019-01-30-at-1-12-23-AM.png)





### Environments
| Environment | Status |Description |
| -------- | ---------- | ----------- |
| `Test` | @todo | we need to deploy to a test environment online before we can run the integration tests. If these pass then the *master* branch will be deployed to the staging environment.  |
| `Staging` | @todo | The *master* branch will be deployed to the *staging* environment after all tests pass on the *test* environment.  |
| `Production` | live | The *production* branch will be deployed to the *production* environment after all tests pass on the *test* environment. This is not setup for our simple example |






# Tests - Backend
The api documentation is available on [SwaggerHub here](https://app.swaggerhub.com/apis/kitset-io/tabcorp-microservice-book-api/1.0.0)

![swagger](https://s3-ap-southeast-2.amazonaws.com/tabcorp.flickr.angular.assets/images/ss_swagger.png)
available here: [https://app.swaggerhub.com/apis/kitset-io/tabcorp-microservice-book-api/1.0.0](https://app.swaggerhub.com/apis/kitset-io/tabcorp-microservice-book-api/1.0.0)

##### BDD - Backend 
The integration tests are written in `mocha` available from the backend repo. 

![mocha tests](https://s3-ap-southeast-2.amazonaws.com/tabcorp.flickr.angular.assets/images/mocha.png)


# Tests - Frontend
The front end tests are split into `e2e tests`, `unit tests` and `integration tests` using angular cli tool, jasmine and karma. 

![jasmine tests](https://s3-ap-southeast-2.amazonaws.com/tabcorp.flickr.angular.assets/images/karma.png) 


# Development Lifecycle
Depending on the client tradeoffs between time, cost and quality I would follow the following development lifecycle including agile approach, extreme programming and BDD. 

![Architecture](https://s3-ap-southeast-2.amazonaws.com/tabcorp.flickr.angular.assets/images/dev-lifecycle.png)

Depending on the project, I typically have stagered design + development sprints 

| Sprint      | Description |
| ----------- | ----------- | 
| Design      | `Plan > UX > UI > Backlog` | 
| Development | `Plan > User Stories > Test > Code > Deploy ` | 


| SCRUM | Time | Phase Description |
| ------| ---- | ----------------- | 
| `Plan` | 4 hours | Refine and reorder `product backlog`  and `planning poker` |  
| `Standup` | 20 mins | Refine and reorder `product backlog`  and `planning poker` |  
| `Review` | 1 hour | Refine and reorder `product backlog`  and `planning poker` |  
| `Retrospective` | 30 mins | Refine and reorder `product backlog`  and `planning poker` |  


| User Story | Lifecycle |
| --------- | ------- | 
| `User Story` | Create `issue` for each `user story` | 
| `UX + UI` | If no `design phase`, create wireframes and PSD/Sketch designs if applicable  | 
| `Failing Test` | Design e2e test and unit test that fail | 
| `Code` | Create new `branch` for each user story.  | 
| `Passing Test` | Write code to pass tests | 
| `Commit` | Refactor to pass all tests and `pull request` for merge to `master` branch | 
| `Test Env` | Push to test environment | 
| `Staging` | If tests pass, push to staging  | 
| `Review` | Business owner to review then push to `production` branch | 
| `Production` | If passes tests, push to production | 
| `Retrospective` | Collect feedback for sprint retrospective or add to product backlog | 


### Plan 
We will use *SCRUM* as our agile methodology. Before the *sprint* starts we need to source the Product Backlog from the Business Owner and the roles we will be serving as our customer. 

We will use Trello, Jira or Github Projects as our agile tool. 

The *roles* are simple, we have one user. Optionally, it is typically helpful and improves enaggement with the client or business owner to source a *persona* for our roles rather than just saying "user" in our stories. This helps us focus on delivering value for the customer. 

e.g. *Kayla as "User"*
<!-- ![Example Persona](https://mitni455.github.io/tabcorp-client-angular/images/persona.jpg) -->
![Example Persona](https://s3-ap-southeast-2.amazonaws.com/tabcorp.flickr.angular.assets/images/persona.jpg)

The *epics* for this sprint include: 

| ID 		| Epic 		|
| --------- | --------- | 
| `Epic 1:` | As a user, I want to view the public feed from Book, so that I can save my favourites |
| `Epic 2:` |  As a user, I want to search for topics from the flickr feed, so that I can save time looking for topics I like |
| `Epic 3:` |  As a user, I want to save my favourites, so that I can view them quickly when I return to the app |
| `Epic 4:` | As a user, I want a simple sidebar, so that I can navigate between Book, searches and favourites |


### UX and UI 
These epics can be further broken down into the following *user stories* by creating *wireframes* for the *UX (User Experience)*

<!-- ![UX](https://mitni455.github.io/tabcorp-client-angular/images/ux.png)  -->
![UX](https://s3-ap-southeast-2.amazonaws.com/tabcorp.flickr.angular.assets/images/ux.png)


| Parent ID | UI Epic |
| --------- | ------- | 
| `Epic 1:`  | As a user, I want a Book list page |
| `Epic 1:`  | As a user, I want a Book details page |
| `Epic 2:`  | As a user, I want a search page |
| `Epic 3:` | As a user, I want a favourites page |



###### BDD - e2e Tests
Following *BDD* we already have enough for some *e2e tests* using protractor: 


`As a user, I want a Book list page`  
```
* Go to the home page at '/'
* Expect to see 'Book Angular App'
* Expect the 'All Photos' sidebar to be active 
```


`As a user, I want a Book details page` 
```
* Go to the details page at /flickr/{mockImageId}
* Expect to see the title 'Mock Title'
* Expect to see the image 
* Expect to see the the authour 'Mock Authour'
* Expect to see the image description 'Mock Description' 
```

`As a user, I want a search page` 
```
* Go to the search page at '/flickr/search'
* Enter the search term 'mock term' to a list of mock images
* Expect the 'Search' sidebar to be active 
```

`As a user, I want a simple sidebar` 
```
* Expect to see a sidebar with the 'All Images'
* Expect to see a sidebar with the 'Search'
* Expect to see a sidebar with the anchor 'Favourites' 
```


### User Stories 
A `User Story` as issues 

| Boilerplate User Story | Boiler Plate Tests |
| ---------------------- | ------------------ |
| `Components` | *DI <br> *Elements on Dom <br> * HTML for Mock Model <br> *Inputs() <br> *Outputs() <br> *Events triggered <br> *Events received <br> *Test for state: loading, success, warning, error <br> *Test lifecycle hooks <br> * BackstopJs CSS tests for responsive |
| `Models` | * DI <br>  *Key /values set <br> * JSON Schema validation |
| `Services` | * DI <br> * Observable subscribe <br> * Get set <br> * Integration test for API |
<!-- 
#| `` |  |
#| `` |  |
#| `` |  |
 -->

# Components 
`As a user, I want a Book list page`  
* Book List component
* Book Tile component

###### BDD/TDD - Book List component
```
* should create the page
* should show tiles for mock BookImages models 

* Visual tests - should look good on mobile portrait 
* Visual tests - should look good on mobile landscape
* Visual tests - should look good on tablet portrait 
* Visual tests - should look good on tablet landscape
* Visual tests - should look good on laptop
* Visual tests - should look good on desktop
```

###### BDD/TDD - Book Tile component
``` 
* should be created 
* should show loading gif 
* should show mock image 
* should show mock title 
* should hide the authour by deafult  
* should show authour on hover 
* should open the flickr details page on click 
* should have favourite button 
* favourite button should be off by default 
* favourite button should be on when Book Image model is saved 

* Visual tests - should look good on mobile portrait 
* Visual tests - should look good on mobile landscape
* Visual tests - should look good on tablet portrait 
* Visual tests - should look good on tablet landscape
* Visual tests - should look good on laptop
* Visual tests - should look good on desktop
```

`As a user, I want a Book details page` 
* Book details component


###### BDD/TDD - Book details component
```
* should be created 
* should show Image 
* should show title 
* should show authour 
* should show description 
* should show back button 

* Visual tests - should look good on mobile portrait 
* Visual tests - should look good on mobile landscape
* Visual tests - should look good on tablet portrait 
* Visual tests - should look good on tablet landscape
* Visual tests - should look good on laptop
* Visual tests - should look good on desktop
```

`As a user, I want a search page` 

###### BDD/TDD - Search Page 
```
* should be created 
* should have search bar 
* should have no search tiles by default 
* should show loading 
* should show mock tiles for search term "mock" 

* Visual tests - should look good on mobile portrait 
* Visual tests - should look good on mobile landscape
* Visual tests - should look good on tablet portrait 
* Visual tests - should look good on tablet landscape
* Visual tests - should look good on laptop
* Visual tests - should look good on desktop
```

`As a user, I want a simple sidebar` 

###### BDD/TDD - Unit Tests
```
* should be created 
* should have menu item for All Images
* should have menu item for Favourites
* should have menu item for Search 

* Visual tests - should look good on mobile portrait 
* Visual tests - should look good on mobile landscape
* Visual tests - should look good on tablet portrait 
* Visual tests - should look good on tablet landscape
* Visual tests - should look good on laptop
* Visual tests - should look good on desktop
```





# Code Docs

See the published [code docs here](https://mitni455.github.io/tabcorp-client-angular/overview.html)


_________________________________________

# Angular Development 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
