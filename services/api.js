const API_BASE_URL = "https://apiprodutosnike.webapptech.site/api"

class ProductService {
  async getAllProducts() {
    try {
      console.log("[v0] Fetching from:", `${API_BASE_URL}/produtos`)

      const response = await fetch(`${API_BASE_URL}/produtos`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })

      console.log("[v0] Response status:", response.status)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log("[v0] Data received:", result)

      const products = result.data || []
      console.log("[v0] Products extracted:", products.length, "items")

      return products
    } catch (error) {
      console.error("[v0] Error fetching products:", error)
      throw error
    }
  }

  async getProductById(id) {
    try {
      const products = await this.getAllProducts()
      const product = products.find((p) => p.id === Number.parseInt(id))
      if (!product) {
        throw new Error("Product not found")
      }
      return product
    } catch (error) {
      console.error("[v0] Error fetching product by id:", error)
      throw error
    }
  }

  getImageUrl(imagePath) {
    if (!imagePath) return null
    // The API already returns full URLs, so return as is
    console.log("[v0] Image URL:", imagePath)
    return imagePath
  }
}

export default new ProductService()
