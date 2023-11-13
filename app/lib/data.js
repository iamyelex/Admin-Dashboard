import { connectToDb } from "./utils";
import { Product, User } from "./models";

export const fetchUsers = async function (q, page) {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDb();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    const count = await User.find({ username: { $regex: regex } }).count();
    // console.log(users);
    return { users, count };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};

export const fetchProducts = async function (q, page) {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDb();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    const count = await Product.find({ title: { $regex: regex } }).count();
    // console.log(products);
    return { products, count };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};
