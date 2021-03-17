import {main} from './index';
describe("npx e2e", () => 
    it("should complete", () => {
        const spy = spyOn(console, 'log');
        main();
        expect(spy).toHaveBeenCalled();  
    })
);
