import type { NextApiRequest, NextApiResponse } from "next";
import type { IPayResponse } from "../../types/PayResponse";

export default function payRequest(
  req: NextApiRequest,
  res: NextApiResponse<IPayResponse>
) {
  if (Math.random() < 0.5) {
    setTimeout(() => res.status(200).json({ message: 'Оплата прошла успешно', payed: true }), 3500);
  } else {
    setTimeout(() => res.status(400).send({ message: 'Оплата не прошла', payed: false }), 3500);
  }
}