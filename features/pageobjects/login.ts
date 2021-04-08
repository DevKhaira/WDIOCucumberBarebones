import 'reflect-metadata';
import { injectable } from 'inversify';
import { ILogin } from '../Interfaces/login';
@injectable()
export class Login implements ILogin {
   public assertLogin = () => {      
      $('.login').waitForDisplayed();
      $('.login').isDisplayed();
      return this;
   } 

   public assertImageInBackground = () => {
      const backgroundImage = $('.login').getAttribute('background-image');
      return this;
   }
}
