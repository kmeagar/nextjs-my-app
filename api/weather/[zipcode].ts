import type { NextApiRequest, NextApiResponse } from "next";

type WeatherDetailType = {
  zipcode: string;
  weather: string;
  temp?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherDetailType>
): Promise<void> {
  const zipcode = req.query.zipcode as string;

  return res.status(200).json({
    zipcode,
    weather: "sunny",
    temp: 35
  });
}
