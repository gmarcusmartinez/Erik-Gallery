import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/async";
import { BadRequestError } from "../errors/bad-request-error";
import { NotFoundError } from "../errors/not-found-error";
import { Order } from "../models/Order";

const EXPIRATION_WINDOW_SECONDS = 15 * 60;

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  //   // Find ticket the user is trying to order in the database
  //   const { ticketId } = req.body;
  //   const ticket = await Ticket.findById(ticketId);
  //   if (!ticket) throw new NotFoundError();
  //   const isReserved = await ticket.isReserved();
  //   if (isReserved) {
  //     throw new BadRequestError("Ticket is already reserved");
  //   }
  //   // Calculate an expiration date for this order
  //   const expiration = new Date();
  //   expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_SECONDS);
  //   // Build order and save to db
  //   const order = Order.build({
  //     userId: req.currentUser!._id,
  //     status: OrderStatus.Created,
  //     expiresAt: expiration,
  //     ticket,
  //   });
  //   await order.save();
  //   // Publish event for order:created
  //   res.status(201).send(order);
});
