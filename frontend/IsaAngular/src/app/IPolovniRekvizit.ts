import { IPonuda } from "./IPonuda";

export interface IPolovniRekvizit {
  naziv: string;
  opis: string;
  slika: string;
  cena: number;
  username: string;
  datumIsteka: string;
  ponude: IPonuda[];
}