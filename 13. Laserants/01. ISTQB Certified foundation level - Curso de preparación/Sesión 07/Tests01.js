//This is added in the "Tests" tab in Postman when using "Users collection"

pm.test("Success response", () => {
    pm.response.to.have.status(400);
});

pm.test("User is UserName", () => {
    const response = pm.response.json();
    var name;
    console.log(response);
    for(var i=0; i < response.length; i++){
        name = `${response[i].username}`;
    }
    console.log(name);
    pm.expect(name).to.eql("UserName");
});

pm.test("Id 1 exists", () => {
    const response = pm.response.json();
    var exists = new Boolean(false);
    for(var i=0; i < response.length; i++){
        let id = `${response[i].id}`;
        if(id.localeCompare("1") == 0){
            exists = true;
        }
    }
    pm.expect(exists).to.eql(true);
});