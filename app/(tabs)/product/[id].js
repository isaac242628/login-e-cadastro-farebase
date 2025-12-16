"use client"

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from "react-native"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { useLocalSearchParams, useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import ProductService from "../../../services/api"

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await ProductService.getProductById(id)
        setProduct(data)
      } catch (err) {
        setError(err.message)
        console.error("[v0] Error loading product:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#fff" style={{ marginTop: 50 }} />
      </SafeAreaView>
    )
  }

  if (error || !product) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Produto não encontrado</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteIcon}>
          <Ionicons name="heart-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <Image
          source={{ uri: ProductService.getImageUrl(product.imagem) }}
          style={styles.productImage}
          resizeMode="cover"
        />

        {/* Product Info */}
        <View style={styles.contentContainer}>
          <Text style={styles.productCategory}>{product.descricao}</Text>
          <Text style={styles.productName}>{product.nome}</Text>
          <Text style={styles.productPrice}>R$ {Number(product.preco).toFixed(2)}</Text>

          {/* Product Details */}
          <View style={styles.detailsSection}>
            <Text style={styles.sectionTitle}>Detalhes do Produto</Text>
            <Text style={styles.detailText}>
              Produto Nike original com design moderno e confortável. Ideal para uso diário e prática de esportes.
            </Text>
          </View>

          {/* Size Selector */}
          <View style={styles.sizeSection}>
            <Text style={styles.sectionTitle}>Selecione o Tamanho</Text>
            <View style={styles.sizeContainer}>
              {["38", "39", "40", "41", "42", "43"].map((size) => (
                <TouchableOpacity key={size} style={styles.sizeButton}>
                  <Text style={styles.sizeText}>{size}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Features */}
          <View style={styles.featuresSection}>
            <Text style={styles.sectionTitle}>Características</Text>
            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
              <Text style={styles.featureText}>Material de alta qualidade</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
              <Text style={styles.featureText}>Design ergonômico</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
              <Text style={styles.featureText}>Tecnologia Nike original</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
              <Text style={styles.featureText}>Conforto garantido</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Add to Cart Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Ionicons name="cart" size={24} color="#000" />
          <Text style={styles.addToCartText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  backIcon: {
    padding: 8,
  },
  favoriteIcon: {
    padding: 8,
  },
  productImage: {
    width: "100%",
    height: 400,
    backgroundColor: "#1a1a1a",
  },
  contentContainer: {
    padding: 20,
  },
  productCategory: {
    fontSize: 14,
    color: "#999",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  productName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  productPrice: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  detailsSection: {
    marginBottom: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  detailText: {
    fontSize: 14,
    color: "#999",
    lineHeight: 22,
  },
  sizeSection: {
    marginBottom: 24,
  },
  sizeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  sizeButton: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  featuresSection: {
    marginBottom: 100,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  featureText: {
    fontSize: 14,
    color: "#fff",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "#000",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  addToCartButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  addToCartText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
})
