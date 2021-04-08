import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '../types';

// interfaces
import { IHomepage } from './Interfaces/homepage';
import { ILogin } from './Interfaces/login';
import { INavigation } from './Interfaces/navigation';

// implementations
import { Homepage } from './pageobjects/homepage';
import { Login } from './pageobjects/login';
import { Navigation } from './pageobjects/navigation';


const ioc = new Container();

ioc.bind<IHomepage>(TYPES.Homepage).to(Homepage);
ioc.bind<ILogin>(TYPES.Login).to(Login);
ioc.bind<INavigation>(TYPES.Navigation).to(Navigation);


export { ioc };