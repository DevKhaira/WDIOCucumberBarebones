# WDIOCucumberBarebones

In order to set up

have yarn installed (please see https://yarnpkg.com/getting-started)
have node and npm install (please see https://nodejs.org/en/)

To run the test from root simply run yarn runTest

File structure

I am using inversify in order to separate the files out. 
If you wish to add another pageobject please do the following 
on types.ts in root add
x: Symbol.for('x'), x being the page object name
in features/interfaces please add x.ts and add the following skeleton

export interface Ix {
    y(): Ix;
  }
y being functions you want to add

in the features/pageObjects please add x.ts
and make sure you put the relevant funcitons matching the interfaces file. I try to add a return this, so we can enable chaining

in features/inversify.config.ts please add the following in the relevant parts
import { Ix } from './Interfaces/x';
import { c } from './pageobjects/x';
ioc.bind<Ix>(TYPES.x).to(x);

and you should be good to go

For the Cucumber part
Please try to make sure you use the ticket presented in order to create the test. If you can't try to stick to a maximum of seven steps. IF IT IS MORE IT PROBABLY IS A LOT OF TESTS PUT IN ONE!

add the steps into the relevant step-definition files under features/step-definitions


