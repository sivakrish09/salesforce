public without sharing class LWCContactHandler
{
    @AuraEnabled(Cacheable=true)
    public Static list<Contact> contactlist()
    {
		return [SELECT Id, Name, MobilePhone, Email FROM Contact WHERE MobilePhone != null limit 10 ];
    }
    
    @AuraEnabled(Cacheable=true)
    public static list<Contact> Searchlist(String searchkey)
    {
		string EnteredName = '%'+searchkey+'%';
        return [SELECT Id, Name, MobilePhone, Email FROM Contact WHERE Name LIKE :EnteredName ];
       
    }
    @AuraEnabled(Cacheable=true)
    public static list<contact> cartoonContact()
    {
        return [SELECT Id, Name, Picture__c, charactor__c, GIF__c, Description FROM Contact WHERE charactor__c != null];
    }

}
