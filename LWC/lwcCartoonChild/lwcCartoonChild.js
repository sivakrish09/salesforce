import { LightningElement,api } from 'lwc';

export default class LwcCartoonChild extends LightningElement {

    @api contact;
    selectHandler(event)
    {
        event.preventDefault();
        const neweventName = new CustomEvent('selected',{ detail: this.contact.Id });
        this.dispatchEvent(neweventName);
    }
    
}