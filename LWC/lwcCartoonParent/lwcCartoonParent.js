import { LightningElement,wire } from 'lwc';
import cartoonContact from '@salesforce/apex/LWCContactHandler.cartoonContact';

export default class LwcCartoonParent extends LightningElement {
    @wire(cartoonContact)apexContact;

    contactselected;
    imgselect(event)
    {
        const conId = event.detail;
        this.contactselected = this.apexContact.data.find( (contact) => contact.Id === conId);
    }
}