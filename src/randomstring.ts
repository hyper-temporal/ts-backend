type AssertInteger<N extends number> =
  number extends N ? N : `${N}` extends `${bigint}` ? N : never;

function repeat<N extends number>
(times: AssertInteger<N>
  ,cb: (index: number) => any) 
  {
    for (let i = 0; i < times; i++) {
        cb(i);
    }
}

// dummy function
const dummy = (_: number) => {};
// No Errors 🎉
repeat(1, dummy);
repeat(543.0, dummy);
repeat(-43, dummy);
repeat(0, dummy);
repeat(5e5, dummy);
repeat(0.01e3, dummy);
// // Correctly errors 🎉
// repeat(1.2, dummy);
// repeat(-0.9, dummy);
// repeat(543.5, dummy);
// repeat(-43.8, dummy);
// repeat(-43e-1, dummy);

export default  (length : number ) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( let counter  = 0 ; counter < length; counter++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

