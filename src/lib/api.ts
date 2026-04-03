export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}

const API_BASE_URL = "https://un-poco-todo-backend.vercel.app";

export async function getProducts(
  search?: string,
  tag?: string,
): Promise<Product[]> {
  try {
    const url = new URL(`${API_BASE_URL}/marketplace/products`);
    if (search) {
      url.searchParams.append("search", search);
    }
    if (tag) {
      url.searchParams.append("tag", tag);
    }
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/marketplace/product/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

export async function getTags(): Promise<Tag[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/marketplace/tags`);
    if (!response.ok) {
      throw new Error(`Failed to fetch tags: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
}
