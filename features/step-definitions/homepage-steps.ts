import { Given, When, Then } from '@cucumber/cucumber';

import { IHomepage } from '../Interfaces/homepage';
import { TYPES } from '../../types';
import { ioc } from '../inversify.config';
import { INavigation } from '../Interfaces/navigation';
import { ILogin } from '../Interfaces/login';
const navigation = ioc.get<INavigation>(TYPES.Navigation);
const login = ioc.get<ILogin>(TYPES.Login);
const homepage = ioc.get<IHomepage>(TYPES.Homepage);



Given(/^I am on the homepage$/, () => {
    homepage.visit();
});

When(/^I click on "(.*)"$/, (menuItem) => {
    navigation.goTo(menuItem);
});

Then(/^I should see the login page$/, () => {
    login.assertLogin();
});

Then(/^an image in the background should exist$/, () => {
    login.assertImageInBackground();
});

