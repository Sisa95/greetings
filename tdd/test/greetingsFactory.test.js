describe('Greetings', function(){
    it("Should greet the person with their name", function(){
        let greeting = greet();
        
        greeting.greetName("sisa");
        assert.equal("Sisa",greeting.greetName("sisa"));
    });

    it("Should return an error message \"Please Enter Name\"", function(){
        let greeting = greet();
        
        assert.equal("Please Enter Name",greeting.errorMsg());
    });

    it("Should return an error message \"Please Select Language\"", function(){
        let greeting = greet();
        
        assert.equal("Please Select Language",greeting.errorMsg2());
    });
});