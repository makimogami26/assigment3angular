import { environment } from "src/environments/environment";

export var baseUrl = environment.production
  ? "https://api.Assigment3Final.com"
  : "http://localhost:3000"
  ? "https://api.shopcart.com"
  : "http://localhost:300";
export const Assigment3ApiUrl = (baseUrl = "https://assigment3dspryd.herokuapp.com/product");
export const ShopcartUrl = (baseUrl = "http://localhost:3000/Shopcart");
export const register = (baseUrl = "https://assigment3dspryd.herokuapp.com/register");
