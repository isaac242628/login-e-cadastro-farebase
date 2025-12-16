"use client"

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native"
import { StatusBar } from "expo-status-bar"
import { useRouter } from "expo-router"
import useProducts from "../../hooks/useProducts"
import ProductService from "../../services/api"

export default function HomeScreen() {
  const { products, loading, error, refetch } = useProducts()
  const router = useRouter()

  console.log("[v0] HomeScreen render - products count:", products?.length || 0)
  console.log("[v0] Loading:", loading, "Error:", error)

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard} onPress={() => router.push(`/product/${item.id}`)}>
      <Image
        source={{
          uri: ProductService.getImageUrl(item.imagem),
        }}
        style={styles.productimagem}
        resizeMode="cover"
      />
      <View style={styles.productInfo}>
        <Text style={styles.productdescricao} numberOfLines={1}>
          {item.descricao}
        </Text>
        <Text style={styles.productnome} numberOfLines={2}>
          {item.nome}
        </Text>
        <Text style={styles.productpreco}>R$ {Number(item.preco).toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  )

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
            }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={{ color: "#999", marginTop: 16 }}>Carregando produtos...</Text>
        </View>
      </SafeAreaView>
    )
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
            }}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
          <Text style={{ color: "#fff", fontSize: 18, marginBottom: 16, textAlign: "center" }}>
            Erro ao carregar produtos
          </Text>
          <Text style={{ color: "#999", marginBottom: 24, textAlign: "center" }}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={refetch}>
            <Text style={styles.retryText}>Tentar novamente</Text>
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
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity>
          <Text style={styles.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Just Do It</Text>
        <Text style={styles.heroSubtitle}>Novos lançamentos Nike</Text>
      </View>

      {/* Products */}
      {products.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#999", fontSize: 16 }}>Nenhum produto encontrado</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.productList}
          showsVerticalScrollIndicator={false}
        />
      )}
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
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  logo: {
    width: 60,
    height: 40,
  },
  cartIcon: {
    fontSize: 24,
  },
  hero: {
    padding: 24,
    backgroundColor: "#1a1a1a",
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#999",
  },
  productList: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    overflow: "hidden",
  },
  productimagem: {
    width: "100%",
    height: 150,
    backgroundColor: "#2a2a2a",
  },
  productInfo: {
    padding: 12,
  },
  productdescricao: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
  productnome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  productpreco: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  retryButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
})
