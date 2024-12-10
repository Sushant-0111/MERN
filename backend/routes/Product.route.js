import express, { Router } from 'express';
import { deleteProduct, getProduct, postProduct, updateProduct } from '../controller/product.controller';


const router = express.Router();

app.get(('/'),getProduct)
app.use(express.json());    //allows us to use JSON data into body
app.post('/', postProduct);
app.patch(('/:id'), updateProduct);
app.delete(('/:id'), deleteProduct);


export default router;
