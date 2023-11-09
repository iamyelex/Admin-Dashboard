import Image from "next/image";

import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

export default function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Samsung
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="email" placeholder="johndoe@gmail.com" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="234" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="L" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchens</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder="description" />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
