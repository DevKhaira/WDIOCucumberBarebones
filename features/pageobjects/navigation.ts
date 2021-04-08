import 'reflect-metadata';
import { injectable } from 'inversify';
import { INavigation } from '../Interfaces/navigation';
@injectable()
export class Navigation implements INavigation {
   public goTo = (menu) => {
       const menuItems = $$('.mainnav li');
       const menuItemList: string[] = [];
       menuItems.forEach(element => {
           menuItemList.push(element.getText());
       });;
       menuItems[menuItemList.indexOf(menu)].click();
       return this;
   } 
}
