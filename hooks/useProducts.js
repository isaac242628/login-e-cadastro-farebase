"use client"

import { useState, useEffect } from "react"
import ProductService from "../services/api"

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {
    try {
      console.log("[v0] Starting to fetch products...")
      setLoading(true)
      setError(null)

      const data = await ProductService.getAllProducts()
      console.log("[v0] Products fetched successfully:", data?.length || 0, "items")

      setProducts(data || [])
    } catch (err) {
      console.log("[v0] Error fetching products:", err.message)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const refetch = () => {
    fetchProducts()
  }

  return { products, loading, error, refetch }
}
