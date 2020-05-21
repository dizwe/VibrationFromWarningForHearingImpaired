// https://medium.com/@hckcksrl/typescript-%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4-express-node-js-%EC%84%B8%ED%8C%85-12bbdd62513f
// https://novemberde.github.io/node/2017/10/22/Express-Typescript.html
import express from "express"
import signalRouter from "./signalRoutes";

class App {
  public application : express.Application;
  constructor(){
    this.application = express();
  }
}
const app = new App().application;
app.get("/",(req : express.Request , res : express.Response) =>{
  res.send("start");
})
app.use('/', signalRouter);
app.listen(4000,()=>console.log("start"));