import axios from "axios";

export const getPicturesBySearch = async ({
  search,
  page,
  sort,
}: RequestProps) => {
  try {
    const response = await axios({
      method: "get",
      url: `https://api.unsplash.com/search/photos`,
      params: {
        query: search,
        page: page,
        per_page: 12,
        order_by: sort,
        client_id: "sP8YdBsJSg8cHVqUXc7g4K4Ts3fEzyCZeQv4KDu2fR8",
      },
    });
    return response.data;
  } catch {
    throw new Error("Unsplash error.");
  }
};

export const sortByPopularInk = (pictures: Card[]) => {
  const sorted = JSON.parse(JSON.stringify(pictures)).sort(
    (a: Card, b: Card) => {
      return a.likes - b.likes;
    }
  );
  return sorted;
};

export const sortByPopularDec = (pictures: Card[]) => {
  const sorted = JSON.parse(
    JSON.stringify(sortByPopularInk(pictures).reverse())
  );
  return sorted;
};

export const sortByDateInk = (pictures: Card[]) => {
  const sorted = JSON.parse(JSON.stringify(pictures)).sort(function (
    a: Card,
    b: Card
  ) {
    return Date.parse(a.created_at) - Date.parse(b.created_at);
  });
  return sorted;
};

export const sortByDateDec = (pictures: Card[]) => {
  return JSON.parse(JSON.stringify(sortByDateInk(pictures).reverse()));
};
