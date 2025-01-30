import axios from "axios";


export const uploadImage = async(imagePath) => {
    const file = new FormData();
    file.append('file', imagePath);
    file.append('upload_preset', "products");
    file.append("cloud_name", "dheweokqn");

    let res = await axios.post("https://api.cloudinary.com/v1_1/dheweokqn/image/upload", file)
    let productImage = await res;
    return productImage.data.secure_url;
}