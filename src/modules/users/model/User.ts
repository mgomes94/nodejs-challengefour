import { v4 as uuidV4 } from "uuid";

class User {
  public id: string = uuidV4();
  public name: string;
  public admin: boolean = false;
  public email: string;
  public created_at: Date = new Date();
  public updated_at: Date = new Date();
}

export { User };
