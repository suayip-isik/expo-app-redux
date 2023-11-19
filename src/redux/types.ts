export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export interface IUser {
  name: string | undefined;
  surName: string | undefined;
  age: string | undefined;
  eMail: string | undefined;
  userName: string | undefined;
  password: string | undefined;
}

export enum Types {
  ADD_USER = "ADD_USER",
}

type Payload = {
  [Types.ADD_USER]: {
    name: string | undefined;
    surName: string | undefined;
    age: string | undefined;
    eMail: string | undefined;
    userName: string | undefined;
    password: string | undefined;
  };
};

export type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];
