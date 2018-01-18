
export function describe(subject: string, block: Function) {
  console.log('the', subject);
  block();
}

export function it(description: string, block: Function) {
  let result = `${description}`;
  try {
    block();
    result = result + ' passed';
  } catch(e) {
    result = result + ' failed';
  } 
  console.log(result);
}

export function expect(actualValue) {
  return {
    toEqual: (expectedValue) => {
      if(actualValue !== expectedValue) {
        throw new Error(`${actualValue} does not match ${expectedValue}`);
      }
    }
  };
}
