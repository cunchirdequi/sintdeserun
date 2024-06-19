import * as ts from 'typescript';

// Create a type guard for `ts` to ensure it is of type `ts.TypeChecker`
function isTypeChecker(obj: any): obj is ts.TypeChecker {
  return 'getTypeFromNotification' in obj;
}

// Use the type guard
if (!isTypeChecker(ts)) {
  throw new Error('Expected `ts` to be of type `ts.TypeChecker`');
}

// Now you can safely use `ts` as a `ts.TypeChecker`
ts.getTypeFromNotification();
