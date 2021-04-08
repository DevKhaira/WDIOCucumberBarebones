import 'reflect-metadata';
import { injectable } from 'inversify';
import { IHomepage } from '../Interfaces/homepage';
@injectable()
export class Homepage implements IHomepage {
   public visit = () => {
       browser.url('');
       return this;
   } 
}
