import type { NextApiRequest, NextApiResponse } from "next";

type responseItemType = {
  id: string;
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseItemType[] | { error: string }>
): Promise<void> {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data;
  try {
    const response = await fetch(url);
    data = (await response.json()) as responseItemType[];
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch user data" });
  }

  const names = data.map((item) => ({
    id: item.id,
    name: item.name,
  }));

  return res.status(200).json(names);
}
