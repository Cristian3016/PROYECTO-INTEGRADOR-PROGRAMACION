import { Router } from 'express';
import { crearPedido } from '../controllers/pedidoController';

const router = Router();

router.post('/pedido', crearPedido);

export default router;
