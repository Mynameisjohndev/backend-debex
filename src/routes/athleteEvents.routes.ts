import { Response, Router, Request } from "express";
import multer from "multer";

const upload = multer({ 
  dest: "./tmp" 
});

const athleteEvents = Router();

athleteEvents.post("/upload", upload.single("archive"), (request: Request, response: Response)=>{
  const { file } = request;
  console.log(file)
})

athleteEvents.get("/upload", (request: Request, response: Response)=>{
  return response.status(201).send({message: "teste"})
})

export { athleteEvents };