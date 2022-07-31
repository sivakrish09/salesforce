import { LightningElement } from 'lwc';
import getRandomQuote from '@salesforce/apex/dogRandomImage.getRandomQuote';

export default class LwcRandomQuote extends LightningElement
 {
    message;
    authors;
    connectedCallback()
    {
        getRandomQuote({}).then(
            (response)=>{
                this.message = JSON.parse(response).quote;
                this.authors = JSON.parse(response).author

            }
        );
    }

}
