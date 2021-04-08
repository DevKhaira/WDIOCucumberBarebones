import 'reflect-metadata';
import { injectable } from 'inversify';
import { ILogin } from '../Interfaces/login';
@injectable()
export class Login implements ILogin {
   public assertLogin = () => {      
      $('.login').waitForDisplayed({timeoutMsg: 'login is not visible please manual test'});
      expect($('.login').isDisplayed()).toBeDisplayed;
      return this;
   } 

   public assertImageInBackground = () => {
      const backgroundImage = $('.login').getCSSProperty('background-image');
      expect(backgroundImage.value).toBeDefined();
      return this;
   }
}
