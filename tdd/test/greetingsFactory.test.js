describe('Greetings', function(){
    it("Should greet the person with their name", function(){
        let greeting = greetings();
        
        
        
        assert.equal("Molo, Sisa",greeting.greet("sisa"));
    });

    it("Should return an error message \"Please Enter Name\"", function(){
        let greeting = greetings();

        greeting.greet("");
        
        assert.equal("Please Enter Name",greeting.errorMessages());
    });

    it("Should return an error message \"Please Select Language\"", function(){
        let greeting = greetings();
        
        assert.equal("Please Select Language",greeting.errorMessages());
    });

    it("Should return an error message \"Please Select Language\"", function(){
        let greeting = greetings();
        
        greeting.greet("Hello, Moddy");

        assert.equal(1, greeting.Counter());
    });
});