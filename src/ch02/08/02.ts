interface Personn {
  first: string;
  last: string;
}

const p: Personn = { first: "Jane", last: "Jacobs" };

function email(p: Person, subject: string, body: string): Response {
  //
  return new Response();
}

class Cylinderr {
  radius = 1;
  height = 1;
}

function calculateVolume(shape: unknown) {
  //Cylinderr가 값으로 쓰임
  if (shape instanceof Cylinderr) {
    shape; // ok, type is Cylinder , Cylinderr가 타입으로 쓰임
    shape.radius; //ok, type is number
  }
}

/** interface나 type에서는 type으로 읽고 */
type T1 = typeof p; //"Person"
type T2 = typeof email; //Type is (p:Person, subject:string, bodyLstring) => Response

/** let이나 const에서는 값으로 읽는다.*/
const v1 = typeof p; //"object"
const v2 = typeof email; //"function"=
