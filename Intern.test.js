const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
  });


  test("Can set name via constructor arguments", () => {
    const name = "Jezebel";
    const e = new Intern(name);
    expect(e.name).toBe(name);
  });
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Intern("Foo", testValue);
    expect(e.id).toBe(testValue);
  });
  
  test("Can set email via constructor argument", () => {
    const testValue = "2hot4This@hotmail.com";
    const e = new Intern("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });
  
  test("Can get name via getName()", () => {
    const testValue = "Jezebel";
    const e = new Intern(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Intern("Foo", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("Can get email via getEmail()", () => {
    const testValue = "2hot4This@hotmail.com";
    const e = new Intern("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Jezebel", 1, "2hot4This@hotmail.com");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "University-of-Alabama";
    const e = new Intern("Jezebel", 1, "2hot4This@hotmail.com", "University-of-Alabama");
    expect(e.getSchool()).toBe(testValue);
  });
