import type { NextApiRequest, NextApiResponse } from "next";

/*
 * In case you are not familiar with Next.js's API Routes:
 * https://nextjs.org/docs/api-routes/introduction
 * This code is executed on the server side. The client may call this endpoint.
 * GET  /api/count
 * POST /api/count
 */

let count: number = 0;

export default (
  req: NextApiRequest,
  res: NextApiResponse<{
    count: number;
  }>
) => {
  if (!["GET", "POST"].includes(req.method as string)) {
    res.status(405).end();
    return;
  }

  if (req.method === "POST") {
    if (typeof req.body.count !== "number") {
      res.status(400).end();
      return;
    }

    count = req.body.count;
  }

  res.status(200).json({ count });
};
