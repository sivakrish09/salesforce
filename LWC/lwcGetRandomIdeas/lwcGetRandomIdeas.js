import { LightningElement } from 'lwc';
import getBiRandomImage from '@salesforce/apex/dogRandomImage.getBiRandomImage';


export default class LwcGetRandomIdeas extends LightningElement {
    message;
    connectedCallback()
    {
        getBiRandomImage({}).then(
        (response) =>{
            this.message = JSON.parse(response).image;
        }
        )
    }

}