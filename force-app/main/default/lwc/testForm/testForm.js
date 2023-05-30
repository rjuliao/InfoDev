import { LightningElement, api, wire } from 'lwc';
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';
import NAME_ACCOUNT from '@salesforce/schema/Account.Name'
import OWNER_NAME from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_ACCOUNT from '@salesforce/schema/Account.AnnualRevenue';
export default class TestForm extends LightningElement {
    name 
    owner 
    annual_revenue
    @api recordId
    @wire(getRecord, { recordId: '$recordId', fields: [ NAME_ACCOUNT, OWNER_NAME, ANNUAL_REVENUE_ACCOUNT ] } )
    accountHandler ({error, data}) {
        if (error) {
            console.log(error)
        } else if (data) {
            console.log(data)
            this.name = getFieldValue(data, NAME_ACCOUNT);
            this.owner = getFieldValue(data, OWNER_NAME);
            this.annual_revenue = getFieldDisplayValue(data.ANNUAL_REVENUE_ACCOUNT);
        }
    }


}