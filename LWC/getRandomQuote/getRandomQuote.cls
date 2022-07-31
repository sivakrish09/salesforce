public without sharing class  dogRandomImage {
     @AuraEnabled (cacheable=true)
    public static string getRandomQuote()
    {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://free-quotes-api.herokuapp.com');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        return response.getBody();
    }
 }
