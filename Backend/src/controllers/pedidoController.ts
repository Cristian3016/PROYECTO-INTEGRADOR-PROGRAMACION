import { Request, Response } from 'express';
import { Pedido } from '../models/Pedido';
import { getRepository } from 'typeorm';

export const crearPedido = async (req: Request, res: Response): Promise<void> => {
  const {
    calle,
    numero,
    ciudad,
    referencia,
    formaPago,
    montoEfectivo,
    tarjetaNumero,
    tarjetaTitular,
    tarjetaVencimiento,
    tarjetaCVC,
    fechaEntrega,
    horaEntrega,
  } = req.body;

  if (!calle || !numero || !ciudad || !formaPago || !fechaEntrega || !horaEntrega) {
    res.status(400).json({ error: 'Todos los campos obligatorios deben estar completos.' });
    return;
  }

  if (formaPago === 'efectivo' && !montoEfectivo) {
    res.status(400).json({ error: 'Debe especificar el monto de efectivo.' });
    return;
  }

  if (formaPago === 'tarjeta') {
    if (!tarjetaNumero || !tarjetaTitular || !tarjetaVencimiento || !tarjetaCVC) {
      res.status(400).json({ error: 'Todos los campos de la tarjeta deben estar completos.' });
      return;
    }
    if (tarjetaNumero.length !== 16 || tarjetaCVC.length !== 3) {
      res.status(400).json({ error: 'Datos de tarjeta inválidos.' });
      return;
    }
  }

  const pedido = new Pedido();
  Object.assign(pedido, req.body);

  try {
    const pedidoRepository = getRepository(Pedido);
    await pedidoRepository.save(pedido);
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar el pedido.' });
  }
};
