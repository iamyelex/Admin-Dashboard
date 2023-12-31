"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

import { connectToDb } from "./utils";
import { Product, User } from "./models";
import { signIn } from "@/app/auth";

// CREATE
export const addUser = async function (formData) {
  const { username, email, password, phone, address, isAdmin, isActive, img } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
      img,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create new user");
  } finally {
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  }
};

export const addProduct = async function (formData) {
  const { title, desc, price, stock, color, size, img } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
      img,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create new product");
  } finally {
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  }
};

// DELETE
export const deleteUser = async function (formData) {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete user");
  } finally {
    revalidatePath("/dashboard/users");
  }
};

export const deleteProduct = async function (formData) {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("failed to delete product");
  } finally {
    revalidatePath("/dashboard/products");
  }
};

// UPDATE
export const updateUser = async function (formData) {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const updatedFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || undefined) && delete updatedFields[key]
    );

    await User.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    console.log(error);
    throw new Error("failed to update user");
  } finally {
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  }
};

export const updateProduct = async function (formData) {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDb();

    const updatedFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || undefined) && delete updatedFields[key]
    );

    await Product.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    console.log(error);
    throw new Error("failed to update product");
  } finally {
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  }
};

// AUTHENTICATE
export const authenticate = async function (formData) {
  const { username, password } = Object.fromEntries(formData);
  // console.log(username, password);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
