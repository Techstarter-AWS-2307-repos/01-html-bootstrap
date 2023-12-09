import { name, age, isStudent, ageMessage, studentMessage, printNumbers, printReversedNumbers, calculateSquare, fruits, fruitsMessage} from './script';
  
  describe('JavaScript Basics Tests', () => {
    // Aufgabe 1 Tests
    describe('Task 1: Variables and Data Types', () => {
      it('should have a variable named "name"', () => {
        expect(name).toBeDefined();
      });
  
      it('should have a variable named "age"', () => {
        expect(age).toBeDefined();
      });
  
      it('should have a variable named "isStudent"', () => {
        expect(isStudent).toBeDefined();
      });
    });
  
    // Aufgabe 2 Tests
    describe('Task 2: Conditions', () => {
      it('should check if age is greater than or equal to 18', () => {
        expect(ageMessage).toBe("Sie sind volljährig");
      });
  
      it('should check if the person is a student', () => {
        expect(studentMessage).toBe("Sie sind Student");
      });
    });
  
    // Aufgabe 3 Tests
    describe('Task 3: Loops', () => {
      it('should print numbers from 1 to 5', () => {
        const expectedOutput = ["1", "2", "3", "4", "5"];
        const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
        printNumbers();
        const receivedOutput = spy.mock.calls.map(args => args[0]);
        expect(receivedOutput).toEqual(expectedOutput);
        spy.mockRestore();
      });
      
      it('should print numbers from 5 to 1 in reverse', () => {
        const expectedOutput = ["5", "4", "3", "2", "1"];
        const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
        printReversedNumbers();
        const receivedOutput = spy.mock.calls.map(args => args[0]);
        expect(receivedOutput).toEqual(expectedOutput);
        spy.mockRestore();
      });
    });
  
    // Aufgabe 4 Tests
    describe('Task 4: Functions', () => {
      it('should calculate the square of a number', () => {
        expect(calculateSquare(4)).toBe(16);
      });
    });
  
    // Aufgabe 5 Tests
    describe('Task 5: Arrays', () => {
      it('should have an array named "fruits"', () => {
        expect(fruits).toBeDefined();
        expect(Array.isArray(fruits)).toBe(true);
      });
  
      it('should check the length of the fruits array', () => {
        expect(fruits.length).toBeGreaterThan(0);
        expect(fruitsMessage).toBe("Sie haben genug Früchte");
      });
    });
  });
  