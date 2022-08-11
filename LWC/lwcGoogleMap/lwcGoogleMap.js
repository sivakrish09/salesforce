import { LightningElement } from 'lwc';

export default class LwcGoogleMap extends LightningElement {
    value;
    mapMarkers;
    zoomLevel;
    get options() {
        return [
            { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
            { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
            { label: 'Assam', value: 'Assam' },
            { label: 'Bihar', value: 'Bihar' },
            { label: 'Assam', value: 'Assam' },
            { label: 'Chhattisgar', value: 'Chhattisgar' },
            { label: 'Goa', value: 'Goa' },
            { label: 'Gujarat', value: 'Gujarat' },
            { label: 'Haryana', value: 'Haryana' },
            { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
            { label: 'Jharkhand', value: 'Jharkhand' },
            { label: 'Karnataka', value: 'Karnataka' },
            { label: 'Kerala', value: 'Kerala' },
            { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
            { label: 'Maharashtra', value: 'Maharashtra' },
            { label: 'Manipur', value: 'Manipur' },
            { label: 'Meghalaya', value: 'Meghalaya' },
            { label: 'Mizoram', value: 'Mizoram' },
            { label: 'Nagaland', value: 'Nagaland' },
            { label: 'Odisha', value: 'Odisha' },
            { label: 'Punjab', value: 'Punjab' },
            { label: 'Rajasthan', value: 'Rajasthan' },
            { label: 'Sikkim', value: 'Sikkim' },
            { label: 'Tamil Nadu', value: 'Tamil Nadu' },
            { label: 'Telangana', value: 'Telangana' },
            { label: 'Tripura', value: 'Tripura' },
            { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
            { label: 'Uttarakhand', value: 'Uttarakhand' },
            { label: 'West Bengal', value: 'West Bengal' },
            { label: 'Andaman and Nicobar Islands', value: 'Andaman and Nicobar Islands' },
            { label: 'Chandigarh', value: 'Chandigarh' },
            { label: 'Dadra & Nagar Haveli and Daman & Diu', value: 'Dadra & Nagar Haveli and Daman & Diu' },
            { label: 'Delhi', value: 'Delhi' },
            { label: 'Jammu and Kashmir	', value: 'Jammu and Kashmir' },
            { label: 'Lakshadweep', value: 'Lakshadweep' },
            { label: 'Pondicherry', value: 'Pondicherry' },
            { label: 'Ladakh', value: 'Ladakh' }


        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
        this.mapMarkers = [
            {
                location: {
                    
                    Country: 'India',
                    State: event.detail.value,
                    
                },
                icon: 'standard:account',
            },
        ];
        this.zoomLevel=7;
    }
   
    

    
}