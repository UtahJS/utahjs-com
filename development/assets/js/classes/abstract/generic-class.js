export default class GenericClass {
    constructor(...args){

        if (this.constructor === GenericClass) {
            throw new TypeError(`Abstract class "GenericClass" cannot be instantiated directly.`); 
        }

        const fields = this.constructor.fields;
        args.forEach((arg, i) => {
            const field = fields[i];
            if (!field){ 
                console.warn(`Too many arguments.`);
                return; 
            }
            this[field] = arg;
        });
    }
}